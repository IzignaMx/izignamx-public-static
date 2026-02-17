(function() {
  "use strict";
  if (window.__CURSOR_DIAGNOSTICS_INITIALIZED__) {
    return;
  }
  window.__CURSOR_DIAGNOSTICS_INITIALIZED__ = true;
  const isDevelopment = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
  if (!isDevelopment) {
    return;
  }
  const originalWebSocket = window.WebSocket;
  window.WebSocket = function(url, protocols) {
    try {
      const ws = new originalWebSocket(url, protocols);
      ws.addEventListener("error", function(event) {
        if (url.includes("localhost") && url.includes("token=")) {
          return;
        }
      });
      ws.addEventListener("close", function(event) {
        if (event.code === 1006) {
        }
      });
      return ws;
    } catch (error) {
      if (error.message.includes("invalid") && url.includes("undefined")) {
        return {
          addEventListener: function() {
          },
          removeEventListener: function() {
          },
          send: function() {
          },
          close: function() {
          },
          readyState: 3,
          // CLOSED
          CONNECTING: 0,
          OPEN: 1,
          CLOSING: 2,
          CLOSED: 3
        };
      }
      throw error;
    }
  };
  Object.setPrototypeOf(window.WebSocket, originalWebSocket);
  Object.defineProperty(window.WebSocket, "CONNECTING", { value: 0 });
  Object.defineProperty(window.WebSocket, "OPEN", { value: 1 });
  Object.defineProperty(window.WebSocket, "CLOSING", { value: 2 });
  Object.defineProperty(window.WebSocket, "CLOSED", { value: 3 });
  window.addEventListener("error", function(event) {
    if (event.message) {
      if (event.message.includes("WebSocket") && event.message.includes("localhost")) {
        event.preventDefault();
        return true;
      }
      if (event.message.includes("ServiceWorker") || event.message.includes("service-worker")) {
        event.preventDefault();
        return true;
      }
      if (event.message.includes("message channel closed") || event.message.includes("triggerEvent")) {
        event.preventDefault();
        return true;
      }
    }
  });
  window.addEventListener("unhandledrejection", function(event) {
    if (event.reason && event.reason.message) {
      if (event.reason.message.includes("WebSocket") || event.reason.message.includes("Failed to construct")) {
        event.preventDefault();
        return true;
      }
      if (event.reason.message.includes("ServiceWorker") || event.reason.message.includes("service-worker")) {
        event.preventDefault();
        return true;
      }
    }
  });
  const CURSOR_NAMESPACE = "__IZIGNA_CUSTOM_CURSOR__";
  let diagnosticInterval;
  let diagnosticStartTime = Date.now();
  let lastCursorCheck = Date.now();
  function runCursorDiagnostics() {
    if (!window.CURSOR_DEBUG) return;
    const now = Date.now();
    const cursor = window[CURSOR_NAMESPACE];
    if (!cursor) {
      return;
    }
    const isHealthy = cursor.isInitialized && !cursor.isDestroyed;
    const timeSinceInit = now - diagnosticStartTime;
    const timeSinceLastCheck = now - lastCursorCheck;
    if (timeSinceLastCheck > 5e3) {
      lastCursorCheck = now;
    }
    if (!isHealthy && timeSinceInit > 3e3) {
      try {
        cursor.destroy();
        setTimeout(() => {
          cursor.init();
        }, 100);
      } catch (error) {
      }
    }
  }
  if (window.CURSOR_DEBUG) {
    diagnosticInterval = setInterval(runCursorDiagnostics, 1e3);
  }
  window.addEventListener("beforeunload", function() {
    if (diagnosticInterval) {
      clearInterval(diagnosticInterval);
    }
  });
  window.CursorDiagnostics = {
    restartCursor: function() {
      const cursor = window[CURSOR_NAMESPACE];
      if (cursor) {
        cursor.destroy();
        setTimeout(() => {
          cursor.init();
        }, 200);
      }
    },
    getCursorStatus: function() {
      const cursor = window[CURSOR_NAMESPACE];
      if (!cursor) return "No cursor instance";
      return {
        initialized: cursor.isInitialized,
        destroyed: cursor.isDestroyed,
        healthy: cursor.isInitialized && !cursor.isDestroyed,
        elements: {
          container: !!cursor.container,
          dot: !!cursor.dot,
          ring: !!cursor.ring
        }
      };
    }
  };
})();
