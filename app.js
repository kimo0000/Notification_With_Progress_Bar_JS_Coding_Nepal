const btn = document.querySelector(".btn");
const toast = document.querySelector(".toast");
const closeEl = document.querySelector(".close");

let timer = null;

btn.addEventListener("click", () => {
  toast.classList.add("active");
  timer = setTimeout(() => toast.classList.remove("active"), 3800);
});

closeEl.addEventListener("click", () => {
  clearTimeout(timer);
  toast.classList.remove("active");
});
