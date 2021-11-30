// Linking from html world to javascript world
const inputs = document.querySelectorAll('.length')
const calculateButton = document.querySelector('#calculate-button')
const output = document.querySelector('#output')

// adding event listener to button
calculateButton.addEventListener('click',calculateArea) 

function calculateArea(){
    const res = processing(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value)) // calling a processing function
   
    if(res === -1){
    output.innerText = "Make sure that sides should be like this: (a+b)>c && (b+c)>a && (a+c)>b) and also values cannot be negative "
  
    } else{
    output.innerText = "Area according to heron's formula is: " + Math.sqrt(res)
    }
    
}

// core processing 
function processing(a,b,c){
     if((a+b)>c && (b+c)>a && (a+c)>b){
        const semiperimeter = (a+b+c) /2
        const calculations = semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c);
        return calculations
    } else{
        return -1
    }
}


