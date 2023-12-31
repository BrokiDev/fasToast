const DEFAULTS = {
  message: 'Default Toast',
  duration: 3000,
  type: 'info' // 'success', 'error', 'info'
};

function getTypeStyles(type) {
  switch (type) {
      case 'success':
          return 'px-15 py-3  bg-opacity-90 colorsuccess rounded shadow-md opacity-1';
      case 'error':
          return 'px-10 py-3  bg-opacity-90 colorerror rounded shadow-md opacity-1';
      case 'info':
      default:
          return 'px-10 py-3  bg-opacity-90 colorinfo rounded shadow-md opacity-1';
  }
}

function imagesConfig(type) {
  switch (type) {
      case 'success':
          return 'assets/icon-success.svg';
      case 'error':
          return 'assets/icon-error.svg';
      case 'info':
      default:
          return 'assets/icon-info.svg';
  }
}

function fasToast(options = {}) {
  const config = { ...DEFAULTS, ...options };

  const toast = document.createElement("div");
  toast.innerHTML = `
      <div class="flex items-center gap-2.5">
          <img src="${imagesConfig(config.type)}" class="w-6 h-6">
          ${config.message}
      </div>
  `;

  toast.className = `
      px-10 py-3 rounded-lg shadow-md opacity-1
      ${getTypeStyles(config.type)}
  `;

  toastsContainer.appendChild(toast);

  let timeout;

  function hideToast() {
      toast.style.opacity = "0";
      setTimeout(() => {
          toast.remove();
      }, 2000);
  }

  timeout = setTimeout(hideToast, config.duration);

  toast.addEventListener("mouseover", () => {
      clearTimeout(timeout); 
  });

  toast.addEventListener("mouseleave", () => {
      timeout = setTimeout(hideToast, config.duration);
  });
}


const renderToastBtn = document.getElementById("renderToastBtn");
const inputText = document.getElementById("inputText");
const errorToastBtn = document.getElementById("renderToastBtn2");
const infoToastBtn = document.getElementById("renderToastBtn3");

renderToastBtn.addEventListener("click", () => {
  fasToast({
      message: inputText.value || DEFAULTS.message,
      type: 'success' // Aquí puedes cambiar el tipo según lo que desees
  });
});

errorToastBtn.addEventListener("click", () => {
  fasToast({
      message: inputText.value || DEFAULTS.message,
      type: 'error' // Aquí puedes cambiar el tipo según lo que desees
  });
});

infoToastBtn.addEventListener("click", () => {
  fasToast({
      message: inputText.value || DEFAULTS.message,
      type: 'info' // Aquí puedes cambiar el tipo según lo que desees
  });
});



