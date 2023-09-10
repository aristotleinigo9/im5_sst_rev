var myQuestions = [
  {
    question: "1. Solve: \\({2x-5=33}\\).",
    answers: {
      a: '\\({18}\\)<br>',
      b: '\\({15}\\)<br>',
      c: '\\({19}\\)<br>',
      d: '\\({14}\\)'
    },
    correctAnswer: 'a'
  },
  
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
    var output = [];
    var answers;
    for(var i=0; i<questions.length; i++){
      answers = [];
      for(choices in questions[i].answers){

        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+choices+'">'+ choices + '. '+ questions[i].answers[choices] + 
            '</label>'
            +'<br>'
        );

      }
      output.push(
        '<div class="question">'  + questions[i].question + '</div>' + '<div class="answers">'  + answers.join('') + '<br>' + '</div>'
      );
    }
    quizContainer.innerHTML = output.join('');

  }


  function showResults(questions, quizContainer, resultsContainer){
    var answerContainers = quizContainer.querySelectorAll('.answers');
    var userAnswer = '';
    var numCorrect = 0;
  
    for(var i=0; i<questions.length; i++){

      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      if(userAnswer===questions[i].correctAnswer){

        numCorrect++;
        answerContainers[i].style.color = 'green';
      }
      else{
        answerContainers[i].style.color = 'red';
      }
    }
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length + " or " + (numCorrect/questions.length * 100).toFixed(2) + "%";
  }


  showQuestions(questions, quizContainer);
  
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

}
