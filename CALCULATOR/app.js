const firstScreen=document.querySelector(".first")
const secondScreen=document.querySelector(".second")
const container=document.querySelector(".container")

container.addEventListener("click", (e)=>{
    if (e.target.classList.contains('number')&&firstScreen.innerText.length<8) {
        firstScreen.innerText=e.target.innerText;
        
    }
})