function showFormNotification(message, type = "success") {
  const notification = document.createElement("div");
  notification.className = `formhub-notification ${type}`;
  notification.innerHTML = `
    <div class="flex items-center gap-3">
      <div class="flex-shrink-0">
        ${type === "success" ? '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>' : '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'}
      </div>
      <div class="flex-1">
        <p class="font-medium">${message}</p>
      </div>
      <button onclick="this.parentElement.parentElement.remove()" class="flex-shrink-0 opacity-70 hover:opacity-100">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>
  `;
  notification.style.cssText = `
    position: fixed; top: 20px; right: 20px; z-index: 9999;
    padding: 16px 20px; border-radius: 12px; color: white;
    background: ${type === "success" ? "linear-gradient(135deg, #10B981, #059669)" : "linear-gradient(135deg, #EF4444, #DC2626)"};
    box-shadow: 0 10px 25px rgba(0,0,0,0.2), 0 4px 10px rgba(0,0,0,0.1);
    transform: translateX(100%);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    max-width: 420px;
    font-size: 14px;
    line-height: 1.5;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.1);
  `;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);
  setTimeout(() => {
    if (notification.parentElement) {
      notification.style.transform = "translateX(100%)";
      setTimeout(() => {
        if (notification.parentElement) notification.remove();
      }, 400);
    }
  }, 6e3);
}
function validateFormData(formData, requiredFields = ["name", "email", "message"]) {
  const errors = [];
  requiredFields.forEach((field) => {
    const value = formData.get(field);
    if (!value || value.trim().length === 0) {
      errors.push(`El campo ${field} es requerido`);
    }
  });
  if (requiredFields.includes("email")) {
    const email = formData.get("email");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push("Por favor, ingresa un email v\xE1lido");
    }
  }
  if (requiredFields.includes("name")) {
    const name = formData.get("name");
    if (name && name.trim().length < 2) {
      errors.push("El nombre debe tener al menos 2 caracteres");
    }
  }
  if (requiredFields.includes("message")) {
    const message = formData.get("message");
    if (message && message.trim().length < 10) {
      errors.push("El mensaje debe tener al menos 10 caracteres");
    }
  }
  return {
    isValid: errors.length === 0,
    errors
  };
}
async function submitToFormHub(form, formId, options = {}) {
  const {
    onStart = () => {
    },
    onSuccess = () => {
    },
    onError = () => {
    },
    onComplete = () => {
    },
    requiredFields = ["name", "email", "message"],
    successMessage = "\xA1Mensaje enviado exitosamente! Nos pondremos en contacto pronto.",
    validateBeforeSubmit = true,
    successRedirect
  } = options;
  try {
    onStart();
    const formData = new FormData(form);
    formData.append("form_id", formId);
    if (validateBeforeSubmit) {
      const validation = validateFormData(formData, requiredFields);
      if (!validation.isValid) {
        validation.errors.forEach((error) => {
          showFormNotification(error, "error");
        });
        onError(new Error("Validation failed"));
        return false;
      }
    }
    const response = await fetch("https://forms.izignamx.com/relay", {
      method: "POST",
      body: formData
    });
    const result = await response.json();
    if (result.status === "ok") {
      showFormNotification(successMessage, "success");
      form.reset();
      onSuccess(result);
      const redirectInput = form.querySelector('input[name="fh_redirect"]');
      const redirectFromField = redirectInput && redirectInput.value ? redirectInput.value.trim() : "";
      const redirectTarget = successRedirect || redirectFromField || "/gracias";
      if (redirectTarget) {
        window.location.href = redirectTarget;
      }
      if (typeof gtag !== "undefined") {
        gtag("event", "form_submit", {
          event_category: "FormHub",
          event_label: formId,
          form_id: formId
        });
      }
      return true;
    } else {
      const errorMessage = result.message || "No se pudo enviar el mensaje. Por favor, int\xE9ntalo de nuevo.";
      showFormNotification("Error: " + errorMessage, "error");
      onError(new Error(errorMessage));
      return false;
    }
  } catch (error) {
    showFormNotification(
      "Error de conexi\xF3n. Por favor, verifica tu conexi\xF3n a internet e int\xE9ntalo de nuevo.",
      "error"
    );
    onError(error);
    return false;
  } finally {
    onComplete();
  }
}
function setupFormHubForm(formId, formHubId, options = {}) {
  const form = document.getElementById(formId);
  if (!form) {
    return;
  }
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton ? submitButton.textContent : "Enviar";
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    await submitToFormHub(form, formHubId, {
      ...options,
      onStart: () => {
        if (submitButton) {
          submitButton.disabled = true;
          submitButton.textContent = "Enviando...";
        }
        if (options.onStart) options.onStart();
      },
      onComplete: () => {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalButtonText;
        }
        if (options.onComplete) options.onComplete();
      }
    });
  });
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    showFormNotification,
    validateFormData,
    submitToFormHub,
    setupFormHubForm
  };
}
window.FormHub = {
  showNotification: showFormNotification,
  validateFormData,
  submitToFormHub,
  setupForm: setupFormHubForm
};
