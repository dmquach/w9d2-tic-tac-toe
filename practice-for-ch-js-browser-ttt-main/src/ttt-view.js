class View {
  constructor(game, el) {
    this.game = game
    this.el = el
    this.setupBoard()
  }

  setupBoard() {
    let grid = document.createElement("ul")
    for(let i = 0; i < 3 ; i++){
      for(let j = 0; j < 3; j++){
        let point = document.createElement("li");
        point.dataset.pos = [i,j]
        grid.appendChild(point)
      }
    }
    this.el.appendChild(grid);
    this.el.addEventListener("click", this.handleClick)
  }

  handleClick(e) {
    const el = e.target
  }

  makeMove(square) {
  }

  handleGameOver() {
  }
}

export default View;
