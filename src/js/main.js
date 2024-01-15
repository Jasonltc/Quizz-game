const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const continueBtn = document.querySelector(".continue-btn");
const exitBtn = document.querySelector(".exit-btn");
const main = document.querySelector(".main");
const quizSection = document.querySelector(".quiz-section");
// const home = document.querySelector(".home");

startBtn.onclick = () => {
  popupInfo.classList.add("show");
  main.classList.add("active");
};

exitBtn.onclick = () => {
  popupInfo.classList.remove("show");
  main.classList.remove("active");
};

continueBtn.onclick = () => {
  quizSection.classList.add("active");
  popupInfo.classList.remove("show");
  main.classList.remove("active");
};

// window.addEventListener("click", (bae) => {
//   let x = bae.target;
//   console.log(x);
// });
