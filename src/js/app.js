import goblin from '../img/goblin.png';

let currentIndex = 0;
let previousIndex = 0;
let count = 0;
const img = document.createElement('img');
img.src = goblin;

function drawBoard() {
  const board = document.getElementById('board');
  for (let i = 0; i < 16; i += 1) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.id = `cell_${i}`;
    board.appendChild(cell);
  }
}

function changeImg() {
  do {
    currentIndex = Math.floor(Math.random() * 16);
  } while (currentIndex === previousIndex);
  const currentCell = document.getElementById(`cell_${currentIndex}`);
  currentCell.appendChild(img);
  const previousCell = document.getElementById(`cell_${previousIndex}`);
  previousIndex = currentIndex;
  previousCell.innerHTML = '';
}

function counter() {
  let click = false;
  const score = document.getElementById('1');
  score.textContent = `Вы пропустили ${count} гоблинов`;
  img.onclick = function clicker() {
    click = true;
    if (count > 0) {
      count -= 1;
    } else {
      count = 0;
    }
    click = false;
    changeImg();
  };

  if (click === false) {
    count += 1;
  }

  if (count > 5) {
    alert('Вы проиграли!');
    count = 0;
  }
}

function start() {
  setInterval(() => {
    changeImg();
    counter();
  }, 1000);
}

drawBoard();
start();
