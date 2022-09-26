const operators = JSON.parse(localStorage.getItem("selectOpration"));
const selectedRange = JSON.parse(localStorage.getItem("selectRangeOfNumber"));
const sliderValue = JSON.parse(localStorage.getItem("sliderValue"));
// const sliderValue = 2;

let minValue = 0,
  maxValue = 0,
  question = 0,
  myInterval = 0,
  answer = 0,
  currentQuestionTimer = 6,
  totalQuestion = sliderValue,
  currentQuestion = 1,
  totaleTime = 0,
  averageTime = 0,
  rightAnswer = 0,
  wrongAnswer = 0,
  numberArray = [];

//set range of numbers in numberArray--------------//
selectedRange.forEach((element) => {
  minValue = element.split("-")[0];
  maxValue = element.split("-")[1];

  minValue1 = parseInt(minValue);
  maxValue1 = parseInt(maxValue)

  for (let i = minValue1; i <= maxValue1; i++) {
    numberArray.push(i);
  }
});

// set operator range----------------------//
const setTitleInDom = (ope) => {
  let operator;
  if (ope === "+") operator = "Addition";
  if (ope === "-") operator = "Subtraction";
  if (ope === "*") operator = "Multiplication";
  if (ope === "/") operator = "Division";

  const title = document.getElementById("title");
  title.innerHTML = ` Que ${currentQuestion} out of ${sliderValue} <br>
                        ${operator}`;
};

// set timer for each que------------------//
const setTimerInDom = (currentQuestionTimer) => {
  const timerContainer = document.getElementById("timer");

  timerContainer.innerHTML = `
            <span class="badge" style="background-color: white; color: black; padding: 20px;">
              Time <br> ${currentQuestionTimer} sec
            </span>`;
};

// generate random and answer------------------//
const generateQuestionsAndAnswer = () => {
  const number1 = numberArray[parseInt(Math.random() * numberArray.length)];
  const number2 = numberArray[parseInt(Math.random() * numberArray.length)];
  const operator = operators[parseInt(Math.random() * operators.length)];
  setTitleInDom(operator);

  question = `${number1} ${operator} ${number2}`;

  if (operator === "+") answer = number1 + number2;
  if (operator === "-") answer = number1 - number2;
  if (operator === "*") answer = number1 * number2;
  if (operator === "/") answer = parent(number1 / number2)
  
};

//assign 6 sec to every que ----------------------//
const skipQuastion = () => {
  wrongAnswer += 1;
  currentQuestionTimer = 6;
  totaleTime +=6;
  nextQuestionHandler();
};
console.log(currentQuestionTimer);
//aa next question-----------------//
const addQuestionToDom = () => {
  if (totalQuestion) {
    generateQuestionsAndAnswer();
    // if (answer < 0) {
    //   generateQuestionsAndAnswer();
    // }
    const questionInput = document.getElementById("questionInput");
    const modalQuetion = document.getElementById("modalQuetion");
    questionInput.innerHTML = question;
    modalQuetion.innerHTML = `${question} = ?`;
  } else {
    nextQuestionHandler();
  }
};

//decrease time by 1 sec-------------------//
const timeHandler = () => {
  myInterval = setInterval(() => {
    if (currentQuestionTimer === 0) {
      clearInterval(myInterval);
      skipQuastion();
    } else {
      if (document.getElementById("userAnswer").value === "") {
        document.getElementById("submitBtn").disabled = true;
      } else {
        document.getElementById("submitBtn").disabled = false;
      }
      currentQuestionTimer = currentQuestionTimer - 1;
      setTimerInDom(currentQuestionTimer);
    }
  }, 1000);
};

// let start = 0;
// let end = 0;
// let timeTaken = 0;

//total time & user answer match---------------//
const answerHandler = () => {
  const userAnswer = parseInt(document.getElementById("userAnswer").value);
  const modalAnswer = document.getElementById("modalAnswer");

  // start = performance.now()
  // clearInterval(myInterval);
  // end = performance.now()
  // timeTaken = end - start;
  // totaleTime += timeTaken;
  // totaleTime +=  currentQuestionTimer;
  totaleTime += 6 - currentQuestionTimer;
  clearInterval(myInterval);
  currentQuestionTimer = 6;

  if (userAnswer === answer) {
    rightAnswer = rightAnswer + 1;
    modalAnswer.innerHTML = `  
    <div class="row" style="justify-content: center;">
      <div class="result">
        ${answer}
        <span class="badge badge-final"
            style="background-color: green; color: white; padding: 15px;">Right</span>
      </div>
    </div>`;
  } else {
    wrongAnswer = wrongAnswer + 1;
    modalAnswer.innerHTML = `  
    <div class="row" style="justify-content: center;">
      <div class="result">
        ${userAnswer}
        <span class="badge badge-final"
          style="background-color: red; color: white; padding: 15px;">Wrong</span>
      </div>
    </div>
    <div class="row" style="justify-content: center;">
    <div class="result">
      ${answer}
      <span class="badge badge-final"
          style="background-color: green; color: white; padding: 15px;">Right</span>
    </div>
  </div>
    `;
  }
};

//for next que display-----------//
const nextQuestionHandler = () => {
  if (totalQuestion) {
    currentQuestion = currentQuestion + 1;
    totalQuestion = totalQuestion - 1;
    timeHandler();
    addQuestionToDom();
  } else {
    averageTime = (totaleTime / sliderValue).toFixed(2);
    const questionData = {
      rightAnswer,
      wrongAnswer,
      sliderValue,
      averageTime,
    };
    localStorage.setItem("questionData", JSON.stringify(questionData));
    document.location.href = "thanks.html";
  }
};

addQuestionToDom();
timeHandler();
