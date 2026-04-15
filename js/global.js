document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  if(toggle) toggle.addEventListener("click", () => menu.classList.toggle("active"));
  // toast container
  if(!document.querySelector(".toast-container")){ const div = document.createElement("div"); div.className = "toast-container"; document.body.appendChild(div); }
});
function showToast(message, type="success"){ /* يظهر رسالة منبثقة جميلة */ }
function getQueryParam(param){ /* قراءة parameters */ }