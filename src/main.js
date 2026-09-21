import './style.css';
import { Game } from './game/Game.js';

const canvas = document.getElementById('view');
const game = new Game(canvas);

document.getElementById('btnStart').onclick = () => game.start();
document.getElementById('btnAgain').onclick = () => game.start();
document.getElementById('btnResume').onclick = () => game.togglePause();

window.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') game.togglePause();
});

game.boot();
