const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    console.log(label)
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx*50}ms">${letter}</span>`)
        .join('')
})


const quizData = [
    {

   question : "What does HTML stands for?",
   a : "Hypertext Machine language.",
   b : "Hypertext and links markup language.",
   c : "Hypertext Markup Language.",
   d : "Hightext machine language.",
   correct : "c",

},

{

    question : "Which of the following HTML Elements is used for making any text bold ?",
    a : "<p>",
    b : "<i>",
    c : "<li>",
    d : "<b>",
    correct : "d",
 
 },

 {

    question : "Which of the following HTML element is used for creating an unordered list?",
    a : "<ui>",
    b : "<i>",
    c : "<em>",
    d : "<ul>",
    correct : "d",
 
 },

 {

    question : "Which of the following characters indicate closing of a tag?",
    a : ".",
    b : "/",
    c : "#",
    d : "!",
    correct : "b",
 
 },

 {

    question : "What is the font-size of the h1 heading tag?",
    a : "3.5 em",
    b : "2.17 em",
    c : "2 em",
    d : "1.5 em",
    correct : "c",
 
 },

 {

    question : "How many heading tags are there in HTML5?",
    a : "2",
    b : "4",
    c : "3",
    d : "6",
    correct : "d",
 
 },

 {

    question : "Which of the following attributes is used to add link to any element?",
    a : "link",
    b : "ref",
    c : "href",
    d : "newref",
    correct : "c",
 
 },

];

const quiz = document.getElementById("quiz");
const answerels = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;


function loadQuiz() {

   const currentQuizData = quizData[currentQuiz];
   questionEl.innerText = currentQuizData.question;
   a_text.innerText = currentQuizData.a;
   b_text.innerText = currentQuizData.b;
   c_text.innerText = currentQuizData.c;
   d_text.innerText = currentQuizData.d;
   
}

loadQuiz();

function qetSelected() {
   let answer = undefined;

   answerels.forEach((answerel) => {

      if(answerel.checked) {
         answer = answerel.id;
         console.log(answer);
      }
   });
   return answer;
}


function deselectAnswers() {
   answerels.forEach((answerel) =>{
      answerel.checked = false;
   });
}



submitBtn.addEventListener("click", () => {

   const answer = qetSelected();

   if (answer) {

      if (answer === quizData[currentQuiz].correct) {
         score++;
      }
      currentQuiz++;

      if (currentQuiz < quizData.length) {
         loadQuiz();

      } else {
         quiz.innerHTML = `
         <h2>You answered correctly at ${score}/${quizData.length} quiz </h2>
         <button onclick ="location.reload()">Reload</button>

         `;
         


      }

   }

    
});

