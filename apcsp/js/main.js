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


let arrarr =[] //differences
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
        arrarr.push(diff);
    }} 
    };
    console.log(findDiff(userAnswers, questionAnswers));
    console.log(arrarr);
    results(arrarr)
  });
};
/* 
function results(){
  let i = 0
  console.log(userAnswers, questionAnswers)
  for (i=0;i < 6 ;i++) {
    if (userAnswers[i] == questionAnswers[i]) {
      console.log("all correct")
    } else if (userAnswers[i] != questionAnswers[i]) {
      console.log("wrong")
    }
  }
}; */

function results(arr) {
  let a = arrarr.length
  if (a == 0) {
    DOM.userResult.insertAdjacentHTML("beforebegin", `<p>all correct. good job!</p>`)
  } else if (a > 0) {
    DOM.userResult.insertAdjacentHTML("beforebegin", `<p>you're incorrect</p>`)
  }
};
