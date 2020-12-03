import changeImg from './changeImg';
import counter from './counter';

export default function startGame() {
  setInterval(() => {
    changeImg();
    counter();
  }, 1000);
}
