const btn= document.querySelector("#btn")
const display= document.querySelector("#display")

btn.addEventListener("click", ()=>{
   const nameResult = prompt("What is your name?")
   alert(`Welcome onboard ${nameResult}`)
   display.classList.add("heading")
   display.innerText = nameResult
} )
