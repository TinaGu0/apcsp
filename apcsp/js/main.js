import "../css/style.css"
import {colors} from "./arr"
import {DOM} from "./dom"
import {answers} from "./arr"

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
      <button class="button" id="#button">${options.color1}</button><button class="button">${options.color2}</button><button class="button">${options.color3}</button><button class="button">${options.color4}</button>
   </div>
  </section>
  `
  ));
  getUserAnswers();
};

function submit(){
  DOM.submit.insertAdjacentHTML("afterend", `
  <button class="submitButton">Submit</button>
  `);
};

function getUserAnswers(){
  let buttons = document.querySelectorAll("#button");
  buttons.forEach((btn)=> console.log(btn.textContent))
}