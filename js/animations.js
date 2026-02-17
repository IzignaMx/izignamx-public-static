(function(window2, document2) {
  "use strict";
  const CONFIG = {
    selector: ".animate-on-scroll",
    animatedClass: "aos-animate",
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
    debug: false
  };
  const logger = {
    log: function(message, data) {
      if (CONFIG.debug) {
      }
    },
    warn: function(message, data) {
      if (CONFIG.debug) {
      }
    },
    success: function(message, data) {
      if (CONFIG.debug) {
      }
    }
  };
  class UnifiedAnimationSystem {
    constructor(options = {}) {
      this.config = Object.assign({}, CONFIG, options);
      this.elements = [];
      this.observer = null;
      this.initialized = false;
      this.handleIntersection = this.handleIntersection.bind(this);
      this.setup = this.setup.bind(this);
      this.refresh = this.refresh.bind(this);
      logger.log("Sistema de animaciones inicializado");
    }
    // Inicialización del sistema
    init() {
      if (this.initialized) {
        logger.warn("Sistema ya inicializado");
        return;
      }
      if (document2.readyState === "loading") {
        document2.addEventListener("DOMContentLoaded", this.setup);
      } else {
        this.setup();
      }
    }
    // Configuración principal
    setup() {
      try {
        this.elements = document2.querySelectorAll(this.config.selector);
        logger.log(`Encontrados ${this.elements.length} elementos para animar`);
        if (this.elements.length === 0) {
          logger.warn("No se encontraron elementos para animar");
          this.initialized = true;
          return;
        }
        if (!window2.IntersectionObserver) {
          logger.warn("IntersectionObserver no soportado, usando fallback");
          this.fallbackAnimation();
          return;
        }
        this.observer = new IntersectionObserver(this.handleIntersection, {
          threshold: this.config.threshold,
          rootMargin: this.config.rootMargin
        });
        this.elements.forEach((element) => {
          this.observer.observe(element);
        });
        setTimeout(() => this.checkInitialElements(), 100);
        this.initialized = true;
        logger.success("Sistema configurado correctamente");
      } catch (error) {
        logger.warn("Error en setup:", error);
        this.fallbackAnimation();
      }
    }
    // Manejo de intersecciones
    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateElement(entry.target);
        }
      });
    }
    // Animar elemento individual
    animateElement(element) {
      if (!element || element.classList.contains(this.config.animatedClass)) {
        return;
      }
      try {
        element.classList.add(this.config.animatedClass);
        if (this.observer) {
          this.observer.unobserve(element);
        }
        const event = new CustomEvent("aos:animate", {
          detail: { element }
        });
        element.dispatchEvent(event);
        logger.success("Elemento animado:", element);
      } catch (error) {
        logger.warn("Error animando elemento:", error);
      }
    }
    // Verificar elementos inicialmente visibles
    checkInitialElements() {
      this.elements.forEach((element) => {
        if (this.isElementInViewport(element)) {
          this.animateElement(element);
        }
      });
    }
    // Verificar si elemento está en viewport
    isElementInViewport(element) {
      const rect = element.getBoundingClientRect();
      return rect.top < window2.innerHeight && rect.bottom > 0 && rect.left < window2.innerWidth && rect.right > 0;
    }
    // Animación de fallback para navegadores antiguos
    fallbackAnimation() {
      logger.log("Usando animaci\xF3n de fallback");
      this.elements.forEach((element, index) => {
        setTimeout(() => {
          this.animateElement(element);
        }, index * 100);
      });
      this.initialized = true;
    }
    // Refrescar sistema (para contenido dinámico)
    refresh() {
      logger.log("Refrescando sistema de animaciones");
      if (this.observer) {
        this.observer.disconnect();
      }
      this.initialized = false;
      this.setup();
    }
    // Destruir sistema
    destroy() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      }
      this.elements = [];
      this.initialized = false;
      logger.log("Sistema destruido");
    }
    // Habilitar/deshabilitar debug
    setDebug(enabled) {
      this.config.debug = enabled;
      CONFIG.debug = enabled;
      logger.log("Debug " + (enabled ? "habilitado" : "deshabilitado"));
    }
  }
  const AnimationUtils = {
    // Animar elemento manualmente
    animate: function(element, animationType = "fade-up") {
      if (!element) return;
      element.setAttribute("data-animation", animationType);
      element.classList.add("animate-on-scroll");
      if (window2.izignaAnimations) {
        window2.izignaAnimations.animateElement(element);
      }
    },
    // Verificar si las animaciones están habilitadas
    isEnabled: function() {
      return !window2.matchMedia("(prefers-reduced-motion: reduce)").matches;
    },
    // Obtener configuración de animación de un elemento
    getAnimationType: function(element) {
      return element.getAttribute("data-animation") || "fade-up";
    },
    // Configurar delay de animación
    setDelay: function(element, delay) {
      element.style.animationDelay = delay + "ms";
    },
    // Configurar duración de animación
    setDuration: function(element, duration) {
      element.style.animationDuration = duration + "ms";
    }
  };
  function autoInit() {
    if (window2.izignaAnimations) {
      logger.warn("Sistema ya inicializado globalmente");
      return;
    }
    window2.izignaAnimations = new UnifiedAnimationSystem({
      debug: window2.location.hostname === "localhost" || window2.location.hostname === "127.0.0.1"
    });
    window2.izignaAnimations.init();
    window2.AnimationUtils = AnimationUtils;
    logger.log("Auto-inicializaci\xF3n completada");
  }
  if (document2.readyState === "loading") {
    document2.addEventListener("DOMContentLoaded", autoInit);
  } else {
    autoInit();
  }
  document2.addEventListener("astro:page-load", function() {
    if (window2.izignaAnimations) {
      window2.izignaAnimations.refresh();
    }
  });
  if (window2.matchMedia) {
    const mediaQuery = window2.matchMedia("(prefers-reduced-motion: reduce)");
    mediaQuery.addListener(function(mq) {
      if (mq.matches && window2.izignaAnimations) {
        logger.log("Movimiento reducido detectado, deshabilitando animaciones");
        window2.izignaAnimations.fallbackAnimation();
      }
    });
  }
  window2.UnifiedAnimationSystem = UnifiedAnimationSystem;
  window2.AnimationUtils = AnimationUtils;
})(window, document);
