const questionData = JSON.parse(localStorage.getItem("questionData"));

const totalQuestion = document.getElementById("totalQuestion");
totalQuestion.innerHTML = `
    <span class="badge" style="background-color: gray; color: black; padding: 20px;">
        Total Questions <br> ${questionData.sliderValue}
    </span>`;

const rightAnswer = document.getElementById("rightAnswer");
rightAnswer.innerHTML = `
    <span class="badge" style="background-color: rgb(43, 145, 43); color: black; padding: 20px;">
        Right answers <br> ${questionData.rightAnswer}
    </span>`;

const wrongAnswer = document.getElementById("wrongAnswer");
wrongAnswer.innerHTML = `
    <span class="badge" style="background-color: rgb(247, 89, 89); color: black;padding: 20px;">
        Wrong answers <br /> ${questionData.wrongAnswer}
    </span>`;

const averageTime = document.getElementById("averageTime");
console.log(questionData.averageTime);
averageTime.innerHTML = `
    <span class="badge" style="background-color: pink; color: black; padding: 20px">
        Avg time for answer <br />${questionData.averageTime}
    </span>`;
