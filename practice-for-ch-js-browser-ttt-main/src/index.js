import Game from "../ttt_node/game";
import View from "./ttt-view";
document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const view = document.querySelector(".ttt")
  const game = new Game()
  new View(game, view)
});
