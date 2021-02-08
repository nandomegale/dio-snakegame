let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 0 * box,
    y: 02 * box
}
let direction = "right";
let fruit = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box,
}
const img = new Image();
img.src = 'images/fruit.png';

function createBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);

};

function createSnake() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function createFruit() {
    const pattern = context.createPattern(img, 'repeat');
    context.fillStyle = pattern;
    context.fillRect(fruit.x, fruit.y, box, box);
}

document.addEventListener('keydown', update);

function update(event) {
    if (event.keyCode == 37 && direction != "right") direction = "left";
    if (event.keyCode == 38 && direction != "down") direction = "up";
    if (event.keyCode == 39 && direction != "left") direction = "right";
    if (event.keyCode == 40 && direction != "up") direction = "down";


}

function initGame() {

    if (snake[0].x >= 16 * box) snake[0].x = 0;
    if (snake[0].x < 0) snake[0].x = 15 * box;
    if (snake[0].y >= 16 * box) snake[0].y = 0;
    if (snake[0].y < 0) snake[0].y = 15 * box;

    for (i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(game);
            alert('Game Over :(');
        }
    }


    createBG();
    createSnake();
    createFruit();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    if (snakeX != fruit.x || snakeY != fruit.y) {
        snake.pop();
    }
    else {
        fruit.x = Math.floor(Math.random() * 15 + 1) * box;
        fruit.y = Math.floor(Math.random() * 15 + 1) * box;
    }


    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

}

let game = setInterval(initGame, 150);



