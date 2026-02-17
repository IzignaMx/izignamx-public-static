const VERTEX_SHADER = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;
const FRAGMENT_SHADER = `
precision mediump float;

uniform vec2 uResolution;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec2 uPointer;
uniform vec3 uRipples[4];
uniform float uCellSize;

float bayerMatrix(vec2 coord) {
  vec2 pos = floor(mod(coord, 4.0));
  float value = 0.0;
  if (pos.y < 0.5) {
    if (pos.x < 0.5) value = 0.0;
    else if (pos.x < 1.5) value = 8.0;
    else if (pos.x < 2.5) value = 2.0;
    else value = 10.0;
  } else if (pos.y < 1.5) {
    if (pos.x < 0.5) value = 12.0;
    else if (pos.x < 1.5) value = 4.0;
    else if (pos.x < 2.5) value = 14.0;
    else value = 6.0;
  } else if (pos.y < 2.5) {
    if (pos.x < 0.5) value = 3.0;
    else if (pos.x < 1.5) value = 11.0;
    else if (pos.x < 2.5) value = 1.0;
    else value = 9.0;
  } else {
    if (pos.x < 0.5) value = 15.0;
    else if (pos.x < 1.5) value = 7.0;
    else if (pos.x < 2.5) value = 13.0;
    else value = 5.0;
  }
  return value / 16.0;
}

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float rippleField(vec2 uv, float time) {
  float ripple = 0.0;
  for (int i = 0; i < 4; i++) {
    vec3 data = uRipples[i];
    if (data.z < 0.0) continue;
    float t = clamp((time - data.z) * 0.9, 0.0, 1.0);
    float ring = abs(distance(uv, data.xy) - t * 0.75);
    ripple += smoothstep(0.08, 0.0, ring) * (1.0 - t);
  }
  return ripple;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  uv.y = 1.0 - uv.y;

  vec2 pointer = vec2(uPointer.x, uPointer.y);
  float pointerGlow = exp(-5.0 * distance(uv, pointer));

  float cellSize = uCellSize;
  vec2 cellCoord = floor(gl_FragCoord.xy / cellSize);
  vec2 cellPos = fract(gl_FragCoord.xy / cellSize) - 0.25;
  float dotShape = step(abs(cellPos.x), 0.5) * step(abs(cellPos.y), 0.5);

  float baseNoise = noise(cellCoord * 0.05 + uTime * 0.05);
  float driftNoise = noise(cellCoord * 0.15 + uTime * 0.12);
  float energy = mix(baseNoise, driftNoise, 0.05);
  energy += pointerGlow * 0.6;
  energy += rippleField(uv, uTime) * 1.6;
  energy = clamp(energy, 0.0, 1.0);

  float threshold = bayerMatrix(cellCoord);
  float mask = step(threshold, energy) * dotShape;

  vec3 color = mix(uColorA * 1.3, uColorB * 1.3, smoothstep(0.0, 1.0, energy));
  color = mix(vec3(0.1), color, mask);
  color += pointerGlow * 0.35;
  color = clamp(color, 0.5, 1.5);

  float alpha = mask * 0.74;
  gl_FragColor = vec4(color, alpha);
}
`;
function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  if (!shader) throw new Error("Unable to create shader");
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader) || "Unknown shader error";
    gl.deleteShader(shader);
    throw new Error(info);
  }
  return shader;
}
function createProgram(gl, vertex, fragment) {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertex);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragment);
  const program = gl.createProgram();
  if (!program) throw new Error("Unable to create program");
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program) || "Unknown program error";
    gl.deleteProgram(program);
    throw new Error(info);
  }
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);
  return program;
}
function parseColor(value, fallback) {
  const swatch = document.createElement("span");
  swatch.style.position = "absolute";
  swatch.style.left = "-9999px";
  swatch.style.color = value || fallback;
  document.body.appendChild(swatch);
  const computed = getComputedStyle(swatch).color;
  swatch.remove();
  const match = computed.match(/rgba?\((\d+),(\d+),(\d+)/i);
  if (!match) return [1, 1, 1];
  return [
    parseInt(match[1], 10) / 255,
    parseInt(match[2], 10) / 255,
    parseInt(match[3], 10) / 255
  ];
}
const RIPPLE_COUNT = 4;
function getResponsiveCellSize(canvas, styles) {
  const source = styles || getComputedStyle(canvas);
  const customValue = parseFloat(
    source.getPropertyValue("--hero-dither-cell-size")
  );
  if (Number.isFinite(customValue) && customValue > 0) {
    return customValue;
  }
  const width = canvas.clientWidth || window.innerWidth || 1200;
  if (width <= 480) return 6;
  if (width <= 768) return 5.5;
  if (width <= 1024) return 5.5;
  return 5.5;
}
function setupHeroDitherCanvas(canvas) {
  if (!(canvas instanceof HTMLCanvasElement)) {
    return;
  }
  if (canvas.dataset.heroDitherReady === "true") {
    return;
  }
  const respectMotion = canvas.dataset.allowMotion !== "true";
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReduced && respectMotion) {
    canvas.style.display = "none";
    return;
  }
  const gl = canvas.getContext("webgl", {
    alpha: true,
    antialias: true,
    premultipliedAlpha: false
  });
  if (!gl) {
    canvas.style.display = "none";
    return;
  }
  canvas.dataset.heroDitherReady = "true";
  const program = createProgram(gl, VERTEX_SHADER, FRAGMENT_SHADER);
  gl.useProgram(program);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  const positionLocation = gl.getAttribLocation(program, "position");
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  const vertices = new Float32Array([-1, -1, 3, -1, -1, 3]);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
  const resolutionLocation = gl.getUniformLocation(program, "uResolution");
  const timeLocation = gl.getUniformLocation(program, "uTime");
  const colorALocation = gl.getUniformLocation(program, "uColorA");
  const colorBLocation = gl.getUniformLocation(program, "uColorB");
  const pointerLocation = gl.getUniformLocation(program, "uPointer");
  const rippleLocation = gl.getUniformLocation(program, "uRipples[0]");
  const cellSizeLocation = gl.getUniformLocation(program, "uCellSize");
  const styles = getComputedStyle(canvas);
  const colorA = parseColor(
    styles.getPropertyValue("--hero-dither-color-a").trim(),
    "#2563eb"
  );
  const colorB = parseColor(
    styles.getPropertyValue("--hero-dither-color-b").trim(),
    "#8b5cf6"
  );
  gl.uniform3fv(colorALocation, colorA);
  gl.uniform3fv(colorBLocation, colorB);
  let currentCellSize = getResponsiveCellSize(canvas, styles);
  gl.uniform1f(cellSizeLocation, currentCellSize);
  const pointer = { x: 0.5, y: 0.35 };
  const ripples = new Float32Array(RIPPLE_COUNT * 3).fill(-1);
  const heroSection = canvas.closest("[data-hero-scene]") || canvas.closest("#hero");
  const pointerTarget = heroSection || window;
  const updatePointer = (event) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = (event.clientX - rect.left) / rect.width;
    pointer.y = (event.clientY - rect.top) / rect.height;
  };
  const triggerRipple = (x, y) => {
    let slot = 0;
    let oldest = Infinity;
    for (let i = 0; i < RIPPLE_COUNT; i += 1) {
      const start = ripples[i * 3 + 2];
      if (start < 0) {
        slot = i;
        break;
      }
      if (start < oldest) {
        oldest = start;
        slot = i;
      }
    }
    ripples[slot * 3] = x;
    ripples[slot * 3 + 1] = y;
    ripples[slot * 3 + 2] = performance.now() / 1e3;
  };
  const handlePointerMove = (event) => {
    updatePointer(event);
  };
  const handlePointerLeave = () => {
    pointer.x = 0.5;
    pointer.y = 0.35;
  };
  const handlePointerDown = (event) => {
    updatePointer(event);
    triggerRipple(pointer.x, pointer.y);
  };
  pointerTarget.addEventListener("pointermove", handlePointerMove);
  pointerTarget.addEventListener("pointerleave", handlePointerLeave);
  pointerTarget.addEventListener("pointerdown", handlePointerDown);
  const updateCellSize = () => {
    const nextSize = getResponsiveCellSize(canvas);
    if (Math.abs(nextSize - currentCellSize) > 0.05) {
      currentCellSize = nextSize;
      gl.uniform1f(cellSizeLocation, currentCellSize);
    }
  };
  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.floor(rect.width * dpr);
    const height = Math.floor(rect.height * dpr);
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
      gl.uniform2f(resolutionLocation, width, height);
    }
    updateCellSize();
  };
  resize();
  const resizeObserver = "ResizeObserver" in window ? new ResizeObserver(resize) : null;
  resizeObserver && resizeObserver.observe(canvas);
  window.addEventListener("resize", resize);
  let frame = 0;
  const render = (time) => {
    frame = requestAnimationFrame(render);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    const seconds = time * 1e-3;
    gl.uniform1f(timeLocation, seconds);
    gl.uniform2f(pointerLocation, pointer.x, pointer.y);
    gl.uniform3fv(rippleLocation, ripples);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };
  frame = requestAnimationFrame(render);
  const cleanup = () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("resize", resize);
    pointerTarget.removeEventListener("pointermove", handlePointerMove);
    pointerTarget.removeEventListener("pointerleave", handlePointerLeave);
    pointerTarget.removeEventListener("pointerdown", handlePointerDown);
    resizeObserver && resizeObserver.disconnect();
    delete canvas.dataset.heroDitherReady;
  };
  window.addEventListener("beforeunload", cleanup, { once: true });
}
function getCanvasTargets(target) {
  if (typeof target === "string") {
    return Array.from(document.querySelectorAll(target));
  }
  if (target instanceof HTMLCanvasElement) {
    return [target];
  }
  if (target && typeof target.length === "number") {
    return Array.from(target).filter(
      (node) => node instanceof HTMLCanvasElement
    );
  }
  return [];
}
function initHeroWebglBackground(target = "[data-hero-dither]") {
  if (typeof window === "undefined") return;
  try {
    if (navigator && navigator.webdriver) return;
  } catch (e) {
  }
  const canvases = getCanvasTargets(target);
  canvases.forEach((canvas) => {
    setupHeroDitherCanvas(canvas);
  });
}
if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    initHeroWebglBackground("[data-hero-dither]");
  });
}
