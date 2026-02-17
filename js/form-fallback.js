(function() {
  if (window.__FORM_FALLBACK_INITIALIZED__) {
    return;
  }
  window.__FORM_FALLBACK_INITIALIZED__ = true;
  let isProcessing = false;
  const activeForms = /* @__PURE__ */ new Set();
  const logError = (error, context) => {
  };
  function showMessage(type, message, formId) {
    try {
      const form = document.getElementById(formId);
      if (!form) {
        logError(`Form with ID ${formId} not found`, "showMessage");
        return;
      }
      let messageContainer = document.getElementById(`${formId}-message`);
      if (!messageContainer) {
        messageContainer = document.createElement("div");
        messageContainer.id = `${formId}-message`;
        messageContainer.className = `form-message ${type}-message`;
        const nextSibling = form.nextSibling;
        const parent = form.parentNode;
        if (parent) {
          if (nextSibling) {
            parent.insertBefore(messageContainer, nextSibling);
          } else {
            parent.appendChild(messageContainer);
          }
        } else {
          logError("Form parent not found", "showMessage");
          return;
        }
      }
      messageContainer.innerHTML = message;
      messageContainer.style.display = "block";
      setTimeout(() => {
        if (messageContainer && messageContainer.style) {
          messageContainer.style.display = "none";
        }
      }, 5e3);
    } catch (error) {
      logError(error, "showMessage");
    }
  }
  function parseResponse(responseText) {
    if (!responseText || typeof responseText !== "string") {
      return { success: false, message: "Empty response" };
    }
    try {
      const jsonData = JSON.parse(responseText.trim());
      return jsonData;
    } catch (jsonError) {
      const trimmed = responseText.trim().toLowerCase();
      if (trimmed.includes("success") || trimmed.includes("gracias") || trimmed.includes("enviado")) {
        return { success: true, message: "Mensaje enviado correctamente" };
      }
      if (trimmed.includes("error") || trimmed.includes("fail")) {
        return { success: false, message: "Error al enviar el mensaje" };
      }
      if (trimmed === "" || trimmed.includes("<html") || trimmed.includes("<!doctype")) {
        return { success: false, message: "Respuesta inv\xE1lida del servidor" };
      }
      return { success: true, message: "Mensaje procesado" };
    }
  }
  function setupFormFallback(formId) {
    try {
      const form = document.getElementById(formId);
      if (!form) {
        logError(`Form with ID ${formId} not found`, "setupFormFallback");
        return;
      }
      if (activeForms.has(formId)) {
        return;
      }
      activeForms.add(formId);
      const existingIframe = document.getElementById(`${formId}-iframe`);
      if (existingIframe) {
        existingIframe.remove();
      }
      let iframe = document.createElement("iframe");
      iframe.name = `${formId}-iframe`;
      iframe.id = iframe.name;
      iframe.style.cssText = "display: none; width: 0; height: 0; border: none;";
      iframe.setAttribute("aria-hidden", "true");
      if (document.body) {
        document.body.appendChild(iframe);
      } else {
        logError("Document body not available", "setupFormFallback");
        return;
      }
      form.target = iframe.name;
      iframe.onload = function() {
        if (isProcessing) return;
        isProcessing = true;
        try {
          setTimeout(() => {
            try {
              let response = "";
              let frameDoc = null;
              try {
                frameDoc = iframe.contentDocument || iframe.contentWindow?.document;
              } catch (accessError) {
                logError(accessError, "iframe access");
              }
              if (frameDoc && frameDoc.body) {
                response = frameDoc.body.textContent || frameDoc.body.innerText || "";
              }
              const data = parseResponse(response);
              if (data.success) {
                showMessage(
                  "success",
                  data.message || "Mensaje enviado correctamente. \xA1Gracias!",
                  formId
                );
                if (form.reset) {
                  form.reset();
                }
              } else {
                showMessage(
                  "error",
                  data.message || "Error al enviar el mensaje",
                  formId
                );
              }
            } catch (processingError) {
              logError(processingError, "response processing");
              showMessage(
                "error",
                "Error al procesar la respuesta del formulario",
                formId
              );
            } finally {
              isProcessing = false;
            }
          }, 100);
        } catch (outerError) {
          logError(outerError, "iframe onload");
          isProcessing = false;
        }
      };
      iframe.onerror = function(error) {
        logError(error, "iframe error");
        showMessage(
          "error",
          "Error de conexi\xF3n al enviar el formulario",
          formId
        );
        isProcessing = false;
      };
      let timeoutId;
      const originalSubmit = form.onsubmit;
      form.addEventListener("submit", function() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
          if (isProcessing) {
            logError("Form submission timeout", "timeout");
            showMessage(
              "error",
              "Tiempo de espera agotado. Por favor, int\xE9ntelo de nuevo.",
              formId
            );
            isProcessing = false;
          }
        }, 3e4);
      });
    } catch (setupError) {
      logError(setupError, "setupFormFallback");
    }
  }
  function initializeForms() {
    try {
      if (window.__NAVIGATION_UTILS__ && window.__NAVIGATION_UTILS__.isNavigating()) {
        setTimeout(initializeForms, 100);
        return;
      }
      const forms = ["contact-form", "contactForm"];
      forms.forEach((formId) => {
        if (document.getElementById(formId)) {
          setupFormFallback(formId);
        }
      });
    } catch (initError) {
      logError(initError, "initializeForms");
    }
  }
  const handleDOMReady = () => {
    requestAnimationFrame(() => {
      initializeForms();
    });
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", handleDOMReady);
  } else {
    handleDOMReady();
  }
  document.addEventListener("astro:page-load", () => {
    isProcessing = false;
    activeForms.clear();
    setTimeout(initializeForms, 50);
  });
  document.addEventListener("astro:before-preparation", () => {
    activeForms.forEach((formId) => {
      const iframe = document.getElementById(`${formId}-iframe`);
      if (iframe) {
        iframe.remove();
      }
    });
    isProcessing = false;
    activeForms.clear();
  });
  if (window.__NAVIGATION_UTILS__) {
    window.__NAVIGATION_UTILS__.registerCleanup(() => {
      activeForms.forEach((formId) => {
        const iframe = document.getElementById(`${formId}-iframe`);
        if (iframe) {
          iframe.remove();
        }
      });
      isProcessing = false;
      activeForms.clear();
    });
  }
})();
