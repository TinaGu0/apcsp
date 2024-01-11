import "../css/style.css"
import {colors} from "./arr"
import {DOM} from "./dom"
import {answers} from "./arr"

//closes starting page and shows questions 
DOM.startGame.addEventListener("click", function(){
  DOM.startPage.remove();
  showQuestions(colors);
});

//questions
function showQuestions(arr){
  arr.forEach((options) => DOM.questions.insertAdjacentHTML("beforeend", 
  `
  <div>
    <p>${options.color1}</p>
  </div>
  `
  ));
};