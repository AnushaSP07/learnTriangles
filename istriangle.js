// linking html world to javascript world
const inputs = document.querySelectorAll('.angle-input')
const isTriangleBtn = document.querySelector('#is-triangle-btn')
const output = document.querySelector('#output')

// adding event listener to button
isTriangleBtn.addEventListener("click",isTriangle) 

function isTriangle(){
   sumOfAngles = calculateSum(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value))
   if(sumOfAngles===180){
     output.innerText = "Hurrah! It forms a triangle"
  } else if(inputs[0].value < 0){
    output.innerText = "Angle cannot be negative"
  } else if(inputs[1].value < 0){
    output.innerText = "Angle cannot be negative"
  } else if(inputs[2].value < 0){
    output.innerText = "Angle cannot be negative"
  } else if(sumOfAngles > 180){
    output.innerText = "Angle cannot be greater than 180"
  } else if(inputs[0].value === ""){
     output.innerText = "Fill the angle box so we can check"
  } else if(inputs[1].value === ""){
    output.innerText = "Fill the angle box so we can check"
 }  else if(inputs[2].value === ""){
    output.innerText = "Fill the angle box so we can check"
 } else {
    output.innerText = "Nope,try again"
  }
}

// core processing

function calculateSum(angle1,angle2,angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}


