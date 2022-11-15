const openPop = document.getElementById("open")
const closePop = document.getElementById("close")
const container = document.querySelector(".container")

openPop.addEventListener("click", () =>{
    container.classList.add("active")
})
closePop.addEventListener("click", () =>{
    container.classList.remove("active")
})