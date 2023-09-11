const renderToastBtn = document.getElementById("renderToastBtn");
const btn = document.getElementById("showMeBtn");
const toastsContainer = document.getElementById("toastsContainer");
let response = "Success Login :)";


//Funcion temporal para crear los diferentes tipos de toast
const temporaryFunction = () => {
    alert("Under Construction");
}

renderToastBtn.addEventListener("click", () => {
  const toast = document.createElement("div");
  toast.innerHTML = `
  <div class="flex items-center gap-2.5">
      <img src="assets/icon.png" class="w-6 h-6">
      ${response}
  </div>`;
  toast.className =
    "px-10 py-3 bg-green-50 bg-opacity-90 text-black rounded shadow-md opacity-1";

  toastsContainer.appendChild(toast);

  let timeout;

  // Función para ocultar el toast
  function hideToast() {
    toast.style.opacity = "0";
    setTimeout(() => {
      toast.remove();
    }, 2000);
  }

  // Iniciar el timeout por defecto cuando el toast se crea
  timeout = setTimeout(hideToast, 3000);

  toast.addEventListener("mouseover", () => {
    clearTimeout(timeout); // Cancelar el timeout cuando el cursor está encima del Toast
  });

  toast.addEventListener("mouseleave", () => {
    // Reiniciar el timeout cuando el cursor se mueve fuera del Toast
    timeout = setTimeout(hideToast, 3000);
  });
});

