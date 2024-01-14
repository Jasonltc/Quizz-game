const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const continueBtn = document.querySelector(".continue-btn");
const exitBtn = document.querySelector(".exit-btn");
const main = document.querySelector(".main");

startBtn.onclick = () => {
  popupInfo.classList.add("show");
  main.classList.add("active");
};

exitBtn.onclick = () => {
  popupInfo.classList.remove("show");
  main.classList.remove("active");
};
