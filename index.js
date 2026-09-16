const button = document.querySelector("#btn")
const display = document.querySelector("#display")

 btn.addEventListener ("click", ()=>{
   const userName = prompt("What is your name?")
   alert(`Welcome onboard ${userName}`)
   display.classList.add("heading")
   display.innerText= userName

   
})