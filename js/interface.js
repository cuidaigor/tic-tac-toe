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

    setTimeout(()=> {
      if(response == 'win'){
        showResult('win', (playerTime + 1));
      }else if(response == 'draw'){
        showResult('draw');
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

function showResult(result, winningPlayer) {
  const modalBody = document.querySelector('#result-modal .modal-body');
  if(result == 'draw'){
    modalBody.innerHTML = `
      <h2 class="text-default-orange text-bold">EMPATE!</h2 class="text-bold">
      <button class="btn btn-warning" onclick="restartGame()" data-bs-dismiss="modal">Reiniciar</button>
    `;
  }else if('win'){
    modalBody.innerHTML = `
      <h2 class="text-default-purple text-bold">O jogador ${winningPlayer} venceu!</h2>
      <button class="btn btn-warning" onclick="restartGame()" data-bs-dismiss="modal">Reiniciar</button>
    `;
  }

  const modal = new bootstrap.Modal(document.getElementById('result-modal'), {
    keyboard: true,
  });
  
  modal.show();
}

function restartGame() {
  const squares = document.querySelectorAll('.square');
  squares.forEach((square)=> {
    square.innerHTML = '';
  });

  resetGame();
}