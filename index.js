
let grids = document.querySelectorAll(".grid")
const player = "x"
const comp = "o"
let isPlayerTurn = true
let pvp = document.querySelector("#pvp")
let playUi = document.querySelector(".playUi")
let winText = document.querySelector(".title")
let icnBox1 = document.querySelector(".iconBox1")
let icnBox2 = document.querySelector(".iconBox2")
const selecticon = document.querySelectorAll(".iconS")
const selecticon2 = document.querySelectorAll(".iconS2")
let allicons = document.querySelector(".icons")
let allicons2 = document.querySelector(".icon2")
let p1N = document.querySelector(".p1N")
let p2N = document.querySelector(".p2N")

console.log(icnBox1.textContent)

pvp.addEventListener("click",()=>{
    
  if(p1N.value === "" || p2N.value === ""){
    alert( "Enter Player Name")
    playUi.style.visibility = "visible";
  }else if(icnBox1.innerHTML === '' || icnBox2.innerHTML === ""){
    alert("Select Player Mark")
    playUi.style.visibility = "visible";
  }else{
    playUi.style.visibility = "hidden";
    grids.forEach(grid=>{
   
    placeMark()
    grid.textContent = ""
   
    isPlayerTurn  = true;
})
  }

})




icnBox1.addEventListener("click",()=>{
 
allicons.classList.remove("hide")
selecticon.forEach(icon=>{
  icon.addEventListener("click",()=>{
   selecticon2.forEach(icon2=>{
    if(icon.innerHTML === icon2.innerHTML){
      icon2.style.backgroundColor = "white"
      icon2.style.pointerEvents = "none"
    }else{
      icon2.style.backgroundColor = "rgb(16, 109, 160)"
    }
   })
   
    icnBox1.innerHTML = icon.innerHTML
    allicons.classList.add("hide")
  })
})

})

icnBox2.addEventListener("click",()=>{
  
  allicons2.classList.remove("hide")
  selecticon2.forEach(icon=>{
    icon.addEventListener("click",()=>{
      
      icnBox2.innerHTML = icon.innerHTML
      allicons2.classList.add("hide")
      
      
    })
  })
  
  })




function placeMark(){
    grids.forEach(grid=>{
        grid.addEventListener("click",()=>{
        
            if(grid.innerHTML === "" && isPlayerTurn === true){
                grid.innerHTML = icnBox1.innerHTML
               isPlayerTurn = false;

            }else if(isPlayerTurn === false && grid.innerHTML === ""){
                grid.innerHTML = icnBox2.innerHTML
                isPlayerTurn = true
                
            }

            
      if(Array.from(grids).every(checkDraw)){
                
                playUi.style.visibility = "visible"
                winText.textContent = "Tie"
                
              }
              
                checkWinner()
            
        })
        
    })
}

function checkWinner(){
   
 winningCombination.forEach(combination=>{
   if(grids[combination[0]].innerHTML === icnBox1.innerHTML && grids[combination[1]].innerHTML === icnBox1.innerHTML && grids[combination[2]].innerHTML === icnBox1.innerHTML ){
    winText.textContent = "X Win!" //change to name box
    playUi.style.visibility = "visible"
   }else if(grids[combination[0]].innerHTML === icnBox2.innerHTML && grids[combination[1]].innerHTML === icnBox2.innerHTML && grids[combination[2]].innerHTML === icnBox2.innerHTML ){
   
    winText.textContent = "O Win!"//change to p2 name
    playUi.style.visibility = "visible"
   }

  }) 
}
function checkDraw(notEmp){
  
  if(notEmp.innerHTML != ""){
    return notEmp
  }
   
  
 }

let winningCombination = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
]
