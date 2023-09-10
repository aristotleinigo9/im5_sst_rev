var myQuestions = [
  
  {
    question: "<h4>1. What is the perimeter and area of the triagnle below? Apply rules on measurement.</h4> <img src='images/1_triangle.png' width='200' height='150'>",
    answers: {
      a: '\\({P=32 cm, A = 48 cm^2}\\)<br>',
      b: '\\({P=40.0 cm, A=96.0 cm^2}\\)<br>',
      c: '\\({P=32.0cm, A=48.0}{cm^2}\\)<br>',
      d: '\\({P=30.0cm,}{A=12}\\bar\{0}\\)\\({cm^2}\\)',

    },
    correctAnswer: 'c'
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
