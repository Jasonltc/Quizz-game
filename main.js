const responses = ["c", "a", "b", "a", "c"];

const form = document.querySelector('.quiz-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(e){
    e.preventDefault()
    const results = [];
    const radioButton = document.querySelectorAll("input[type='radio']:checked");

    radioButton.forEach((radioButton, index) => {
        if(radioButton.value === responses[index]){
            results.push(true);
        }else {
            results.push(false);
        };
    })
    // console.log(radioButton);
    showResults(results);
    addColors(results);
}

const titleResult = document.querySelector(".results h2");
const markResult = document.querySelector(".mark");
const helpResult = document.querySelector(".help");

function showResults(results) {
  const errorsNumber = results.filter(el => el === false).length;
  console.log(errorsNumber);

  switch (errorsNumber) {
    case 0:
      titleResult.textcontent = "Bravo, c'est un sans faute !";
      helpResult.style.display = 'block';
      helpResult.textContent = "Quelle culture ...";
      markResult.style.display = "block";
      markResult.innerHTML = "Score : <span> 5 / 5 </span>"
      break;
  }
}

const questions = document.querySelectorAll(".question-block");

function addColors(results) {
    results.forEach((response, index) => {
        if(results[index]){
            questions[index].style.background = "linear-gradient(to right, #a8ff78, #78ffd6)"
        }else {
            questions[index].style.background = "linear-gradient(to right, #f5567b, #fd674c)"
        }
    })
}

const radioInput = document.querySelectorAll("input[type='radio']");

radioInput.forEach(radioInput => radioInput.addEventListener('input', resetColor))

function resetColor(e) {
    const index = e.target.getAttribute("name").slice(1) -1;
    console.log(index);
    const parentQuestionBlock = questions[index];
    parentQuestionBlock.style.background = "#f1f1f1";
};