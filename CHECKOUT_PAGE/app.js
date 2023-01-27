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
    totalAll();
});

let total = (x) => {
  let idAttr = new Date().getMilliseconds();
  x.id = idAttr;
  let span1 = x.querySelector(".span1").innerText;
  let quantity = x.querySelector("#quantity").innerText;
  let result = Number((span1 * quantity).toFixed(2));
  x.querySelector(".stotal").innerText = result;

  const newresultProduct = { id: idAttr, counter: quantity, sum: result };
  resultProduct.push(newresultProduct);
  localStorage.setItem("resultProduct", JSON.stringify(resultProduct));
};
