const saveResults = (winnerInfo) => {
  var resultList = document.querySelector(".scoring__list");
  var newResult = document.createElement("li");
  var time = new Date();
  newResult.textContent =
    winnerInfo + " a gagné " + +time.getHours() + "h" + time.getMinutes();
  resultList.appendChild(newResult);
};

export default saveResults;
