document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
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
        winner(playerName);
      }
    };
  };

  const saveResults = (winnerInfo) => {
    var resultList = document.querySelector(".scoring__list");
    var newResult = document.createElement("li");
    var time = new Date();
    newResult.textContent =
      winnerInfo + " a gagné " + +time.getHours() + "h" + time.getMinutes();
    resultList.appendChild(newResult);
  };

  const winner = (playerWon) => {
    alert(playerWon + " à gagné!");
    var reset = confirm("Commencer une nouvelle partie ?");
    if (reset) {
      players = [];
      var elements = document.getElementsByClassName("player");
      for (var i = 0; i < elements.length; i++) {
        container.removeChild(elements[i]);
      }
      if (elements === []) {
        launch();
      } else {
        for (var i = 0; i < elements.length; i++) {
          container.removeChild(elements[i]);
          launch();
        }
      }
      saveResults(playerWon);
    } else {
      window.close();
    }
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
        container.appendChild(newPlayer);
      }
    }
  };

  function launch() {
    var gameInilization = function () {
      for (var i = 0; i < 2; i++) {
        var player = new Player(prompt("Nom du joueur: " + i + " ?"), 0);
        if (player.playerName != "") {
          players.push(player);
        }
      }
      players.length === 2 ? createPlayer() : launch();
    };
    window.setTimeout(gameInilization, 300);
  }

  launch();
});
