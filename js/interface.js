document.addEventListener('DOMContentLoaded', () => {

  let squares = document.querySelectorAll('.square');

  squares.forEach((square) => {
    square.addEventListener('click', handleClick);
  });
});

function handleClick(event){
  let square = event.target;

  let position = square.id;

  if(handleMove(position)){
    let response = handleMove(position);
    console.log(response)

    setTimeout(()=> {
      if(response == 'win'){
        alert(`O jogo acabou! O jogador ${playerTime + 1} venceu!`);
      }else if(response == 'draw'){
        alert(`O jogo acabou! EMPATE!`);
      }
    }, 20);
  }

  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class="${symbol}"></div>`;
}