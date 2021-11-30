// Linking from html world to javascript world
const inputs = document.querySelectorAll('.length')
const calculateButton = document.querySelector('#calculate-button')
const output = document.querySelector('#output')

// adding event listener to button
calculateButton.addEventListener('click',calculateArea) 

function calculateArea(){
   
var answer =  processing(Number(inputs[0].value),Number(inputs[1].value)) // calling processing function
 
  if(inputs[0].value < 0){
          output.innerText = "Enter positive value"
}      else if(inputs[1].value < 0){
          output.innerText = "Enter positive value"
}     else if(inputs[0].value === ""){
          output.innerText = "Fill the input box so we can check"
}      else if(inputs[1].value === ""){
          output.innerText = "Fill the input box so we can check"
} else {
          output.innerText = ("Area is: " + answer)
}

}

// core processing 
function processing(a,b){
    var calculations = a*b/2
    return calculations
}

