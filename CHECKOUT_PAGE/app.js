const container = document.querySelector(".container");
let subt = document.querySelector(".subt");
let info = document.getElementsByClassName("info");
let newinfo = [...info];
let resultProduct = JSON.parse(localStorage.getItem("resultProduct")) || [];
let totalProducts = JSON.parse(localStorage.getItem("totalProducts")) || [];

// window.addEventListener("load", () => {
//   // totalAll();
//   getResultProductFormLS();

// });
// const getResultProductFormLS=()=>{
//   resultProduct.forEach((to)=>{
//     createNewRes(to)
//   })
// }
container.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("plus")) {
      e.target.previousElementSibling.innerText++;
      total(e.target.closest(".info"));
    } else if (e.target.classList.contains("minus")) {
      if (e.target.nextElementSibling.innerText > 0) {
        e.target.nextElementSibling.innerText--;
        total(e.target.closest(".info"));
      }
    } else if (e.target.classList.contains("remove")) {
      if (confirm("Are you sure?")) {
        e.target.closest(".product").remove();
      }
    }