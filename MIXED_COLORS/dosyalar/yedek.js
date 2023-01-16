const button = document.getElementsByClassName("btn")[0];
const backgroundText = document.querySelector(".background");
const body = document.getElementsByTagName("body")[0];
const rgb = document.getElementById("rgb");
const rgbbtn = document.getElementsByClassName("rgbbtn")[0];
const hex = document.getElementsByClassName("hex")[0];
const numberGeneretor = () => Math.floor(Math.random() * 256);
const numberGeneretor1 = () => Math.floor(Math.random() * 16);

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

hex.addEventListener("click", () => {
  rgb.textContent = "Hex(#FFFFFF)";
});
button.addEventListener("click", () => {
  let hexNumber = "#";
  for (let i = 0; i < 6; i++) {
    hexNumber += String(arr[numberGeneretor1()]);
  }
  console.log(hexNumber);
  const bodycolor = hexNumber;
  body.style.backgroundColor = bodycolor;
  rgb.textContent = `Hex(${bodycolor})`;
  rgb.style.color = bodycolor;
});

rgbbtn.addEventListener("click", () => {
  rgb.textContent = "Rgb(0,0,255)";
});

button.addEventListener("click", () => {
  const bodyColor = `rgb(${numberGeneretor()},${numberGeneretor()},${numberGeneretor()})`;
  // const rgbColor = `rgb(${numberGeneretor()},${numberGeneretor()},${numberGeneretor()})`
  const btnColor = `rgb(${numberGeneretor()},${numberGeneretor()},${numberGeneretor()})`;
  body.style.backgroundColor = bodyColor;
  rgb.textContent = bodyColor;
  rgb.style.color = bodyColor;
  backgroundColor = btnColor;
});
