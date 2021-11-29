const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputEl = document.querySelector("#output");

const correctAnswer = ["90°", "RightAngled"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResult = new FormData(quizForm);

    /* will give both key and value
    for(let entry of formResult.entries()){

    } */
    for(let value of formResult.values()){
        if(value === correctAnswer[index]){
            score = score+1;
        }
        index = index+1;
    }
    outputEl.innerText = "Your score is "+score;
}
submitAnswerBtn.addEventListener('click', calculateScore)
