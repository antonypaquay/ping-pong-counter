import { players, Player } from "./player.js";
import createPlayer from "./player.js";

const launch = () => {
  const gameInilization = () => {
    for (let i = 0; i < 2; i++) {
      let player = new Player(prompt("Nom du joueur: " + i + " ?"), 0);
      if (player.playerName != "") {
        players.push(player);
      }
    }
    createPlayer();
  };
  window.setTimeout(gameInilization, 300);
};

export default launch;
