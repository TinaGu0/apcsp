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

//gets both arrays
function finish(){
  let submitAnswers = document.querySelector("#submitAnswers")
  submitAnswers.addEventListener("click", function compareArrays() {
    DOM.questionsPage.remove() //removes question page
    //takes the arrays and compares them 
    let findDiff = function (s , t) {
      let sortS = [...s]
      let sortT = [...t]
      for (let i = 0; i < sortT.length; i++) {
        if (sortT[i] != sortS[i]) {
          userResult.insertAdjacentHTML("afterend", `<p>Not Good :(</p>`)
          return sortT[i];
          
        } else if (sortT[i] == sortS[i]) {
          let userResult = document.querySelector("#userResult");
          userResult.insertAdjacentHTML("afterend", `<p>Good Job!</p>`)
          return "good job!"
        }
      }
    };
    console.log(findDiff(userAnswers, questionAnswers));
    console.log(userAnswers, questionAnswers)
  });
};
