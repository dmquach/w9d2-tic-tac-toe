class View {
  constructor(game, el) {
  }

  setupBoard() {
    let grid = document.createElement('ul')
    for(let i = 0; i < 3 ; i++){
      for(let j = 0; j < 3; j++){
        let point = document.createElement('li')
        point.dataset.pos = [i,j]
        grid.appendChild(point)
      }
    }    
  }

  handleClick(e) {
  }

  makeMove(square) {
  }

  handleGameOver() {
  }
}

export default View;
