let canvas = document.getElementById('wrapper-container');

let context = canvas.getContext('2d');

let box = 32;
let snake = [];

snake[0] = {
  x: 8 * box,
  y: 8 * box,
};

let direction = 'right';

function createBackground() {
  context.fillStyle = 'lightgreen';
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function createSnake() {
  for (i = 0; i < snake.length; i++) {
    context.fillStyle = 'green';
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

document.addEventListener('keydown', createSnakeMovement);

function createSnakeMovement(event) {
  if (event.keyCode == 37 && direction != 'right') direction = 'left';
  if (event.keyCode == 38 && direction != 'down') direction = 'up';
  if (event.keyCode == 39 && direction != 'left') direction = 'right';
  if (event.keyCode == 40 && direction != 'up') direction = 'down';
}

function startGame() {
  createBackground();

  createSnake();

  let positionX = snake[0].x;
  let positionY = snake[0].y;

  switch (direction) {
    case 'right':
      positionX += box;
      break;
    case 'left':
      positionX -= box;
      break;
    case 'up':
      positionY -= box;
      break;
    case 'down':
      positionY += box;
      break;
    default:
  }

  snake.pop();

  let newSnakeDimensions = {
    x: positionX,
    y: positionY,
  };

  snake.unshift(newSnakeDimensions);
}

let game = setInterval(startGame, 100);
