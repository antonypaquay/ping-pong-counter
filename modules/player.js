import winner from "./winner.js";

const CONTAINER = document.querySelector(".container");
var players = [];

//contructor
var Player = function (playerName, playerPoints) {
  this.playerName = playerName;
  this.playerPoints = playerPoints;
  this.addPoint = function () {
    var playerMark = document.getElementById("score-" + playerName);
    playerPoints++;
    playerMark.textContent = playerPoints + " points";
    if (playerPoints === 11) {
      players = [];
      winner(playerName);
    }
  };
};

const createPlayer = () => {
  if (players === []) {
    console.log("Pas de joueur crée");
    return (players = []);
  } else {
    for (var i = 0; i < players.length; i++) {
      var newPlayer = document.createElement("p");
      var newPlayerPoints = document.createElement("span");
      newPlayer.addEventListener("click", players[i].addPoint);
      newPlayer.textContent = players[i].playerName + ": ";
      newPlayer.setAttribute("class", "player");
      newPlayerPoints.setAttribute("id", "score-" + players[i].playerName);
      newPlayerPoints.textContent = players[i].playerPoints + " points";
      newPlayer.appendChild(newPlayerPoints);
      CONTAINER.appendChild(newPlayer);
    }
  }
};

export { players, Player };
export default createPlayer;
