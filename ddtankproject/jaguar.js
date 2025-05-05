const location1 = 3; // should be 2-6
const location2 = location1-1;
const location3 = location+1;

let guess;
let hit = 0;
let alguess = 0;
let isSunk = false;
let number;

let boxes = document.querySelectorAll('.box'); // get all elements with class "box"

boxes.forEach(function(box) {
  box.onclick = choosingbox;
  }); 
// apply choosingbox function to every div box (for code efficiency)



function checkcon(){
    if(number<5){
        document.getElementById("test").textContent = "this is "+number+" please enter integer which more than 5";
    }
    else{
        document.getElementById("test").textContent = "This "+number + " is over 5 please calmdowm bro";
    }
}
function choosingbox(event){
    let clickednum = event.target.textContent;
    number = parseInt(clickednum);
    checkcon();
}