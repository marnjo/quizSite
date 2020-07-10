let quiz = [
  {
    question:'What is the capital of Kenya?',
    choices: [
      'Nairobi',
      'Kisumu',
      'Mombasa',
      'Nakuru'
  ], 
  answer:'Nairobi'},
  {
    question: 'How many counties are there in Kenya',
    choices: [
      47,
      50,
      42,
      62      
    ],
    answer: 47
  }
]

let quizArea = document.querySelector('.question-space');
let questionArea = document.querySelector('.question');
let choicesArea = document.querySelector('.choices');
let previous = document.querySelectorAll('button')[0];
let next = document.querySelectorAll('button')[1];
let clear = document.querySelector('a');

function printQuestion(quizes){
  questionArea.innerHTML = "";
  choicesArea.innerHTML = "";
  
  function questionSection(question){
    let h1 = document.createElement('h1');
    h1.innerText = question;

    questionArea.appendChild(h1);
  }
  function choicesSection(choices){
    for( let i = 0; i < choices.length; i++){
      let obj = {0:'A', 1:'B', 2:'C', 3:'D'}
      let label = document.createElement('label');
      let input = document.createElement('input');
      input.setAttribute('type', 'radio');
      input.setAttribute('name', 'choices');
      input.setAttribute('id', `${obj[i]}`);

      let h3 = document.createElement('h3');
      h3.classList.add('choice');
      h3.textContent = choices[i];

      label.appendChild(input);
      label.appendChild(h3)
      choicesArea.appendChild(label);
    }
  }

  //console.log(quizes)
  questionSection(quizes['question']);
  choicesSection(quizes['choices']);
}

window.addEventListener('load', () => {
  console.log('start, load');
  printQuestion(quiz[0]);
})

previous.addEventListener('click', ()=>{
  console.log('prev');
  printQuestion(quiz[0]);
});
next.addEventListener('click', () => {
  console.log('next');
  printQuestion(quiz[1]);
});
clear.addEventListener('click', ()=>{
  console.log('clear');
  let arr = Array.from(choicesArea.children)
  arr.forEach((elem) => {
    console.log(elem.children[0])
    if (elem.children[0].checked) {
      elem.children[0].checked = false;
    }
  })
})