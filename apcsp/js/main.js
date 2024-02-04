import "../css/style.css"
import {colors} from "./arr"
import {DOM} from "./dom"
import {questionAnswers} from "./arr"

//closes starting page and shows questions 
DOM.startGame.addEventListener("click", function(){
  DOM.startPage.remove();
  showQuestions(colors);
  submit();
});

//questions
function showQuestions(arr){
  arr.forEach((options) => DOM.questions.insertAdjacentHTML("beforeend", 
  `
  <section>
    <div> 
      <img src="${options.img}" class="image" />
    </div>
    <div>
      <button class="button" id="button">${options.color1}</button><button class="button" id="button">${options.color2}</button><button class="button" id="button">${options.color3}</button><button class="button" id="button">${options.color4}</button>
   </div>
  </section>
  `
  ));
  getUserAnswers();
};

function submit(){
  DOM.submit.insertAdjacentHTML("afterend", `
  <button class="submitButton" id="submitAnswers">Submit</button>
  `);
  finish()
};
const userAnswers = [];
function getUserAnswers(){
  let buttons = document.querySelectorAll("#button");
buttons.forEach((btns) => btns.addEventListener("click", function() {
  let answers = btns.textContent
  userAnswers.push(answers);
  console.log(userAnswers);
}))
};


let wrongAnswers =[] //differences
//gets both arrays
function finish(){
  let submitAnswers = document.querySelector("#submitAnswers")
  submitAnswers.addEventListener("click", function compareArrays() {
    DOM.questionsPage.remove() //removes question page
    //takes the arrays and compares them 
    let findDiff = function (a, b) {
      let uA = [...a]
      let qA = [...b]
    let i = 0;
    while (i < 6) {
      i++; 
      if (uA[i] != qA[i]) {
        let diff = qA[i];
        wrongAnswers.push(diff);
    }} 
    };
    console.log(findDiff(userAnswers, questionAnswers));
    results(wrongAnswers)
  });
};

function results(arr) {
  let a = wrongAnswers.length
  if (a == 0) {
    DOM.userResult.insertAdjacentHTML("beforebegin", `<h2 class="text">all correct. good job!</h2>`)
  } else if (a > 0) {
    console.log(wrongAnswers)
    DOM.userResult.insertAdjacentHTML("beforebegin", `<h2 class="text">you're incorrect</h2>
    <p>you got these colros wrong: ${wrongAnswers}</p> `)
  }
};
