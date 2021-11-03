import launch from "./launch.js";
import saveResults from "./save-result.js";

const CONTAINER = document.querySelector(".container");

const winner = (playerWon) => {
  alert(playerWon + " à gagné!");
  var reset = confirm("Commencer une nouvelle partie ?");
  if (reset) {
    var elements = document.getElementsByClassName("player");
    for (var i = 0; i < elements.length; i++) {
      CONTAINER.removeChild(elements[i]);
    }
    if (elements === []) {
      launch();
    } else {
      for (var i = 0; i < elements.length; i++) {
        CONTAINER.removeChild(elements[i]);
        launch();
      }
    }
    saveResults(playerWon);
  } else {
    window.close();
  }
};

export default winner;
