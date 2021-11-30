// linking html world to javascript world
const inputs = document.querySelectorAll('.length')
const calculateButton = document.querySelector('#calculate-button')
const output = document.querySelector('#output')

// adding event listener to button
calculateButton.addEventListener('click',calculateArea) 

function calculateArea(){
    
  const res = processing(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value)) 
   if(inputs[0].value < 0){
      output.innerText = "Enter positive value"
    } else if(inputs[1].value < 0){
      output.innerText = "Enter positive value"
    } else if(inputs[2].value < 0){
      output.innerText = "Enter positive value"
    } else if(inputs[0].value === ""){
      output.innerText = "Fill the input box so we can check"
   } else if(inputs[1].value === ""){
     output.innerText = "Fill the input box so we can check"
  } else if(inputs[2].value === ""){
     output.innerText = "Fill the input box so we can check"
  }
     else{
      output.innerText = "Area is: " + res

    }
}

// core processing

function processing(A,b,c){
    var area = ((1 / 2.0)*b*c*Math.sin(A*Math.PI/180));
    return area
}







