import changeImg, { img } from './changeImg';

let count = 0;
let click = false;

export default function counter() {
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
