const board = document.querySelector("#board");
const scoreBoard = document.querySelector("#score");
const GOScreen = document.querySelector("#game-over");
scoreBoard.innerHTML = 0;

var dimension = 11;
var cells = [];
var snake = [];
var direction = "none";
var apple = null;
var pickedApple = false;
score = 0;

const maxIndex = dimension*dimension - 1;

// Generating board

function generateBoard(RowTile = 11){
    for(let i = 0; i < RowTile * RowTile; i++){
        let cell = document.createElement("div");
        cell.classList.add("cell");
        board.append(cell);
    }

    cells = document.querySelectorAll(".cell");
    // let snakeHead = document.createElement("div");
    // let snakeBody = document.createElement("div");
    // let snakeTail = document.createElement("div");
    // snakeHead.classList.add("snakeHead");
    // snakeBody.classList.add("snakeBody");
    // snakeTail.classList.add("snakeTail");
    cells[60].classList.add("snakeHead");
    snake.push(60);
    snake.push(59);
    snake.push(58);
    // cells[1].append(snakeBody);
    // cells[2].append(snakeTail);
    generateApple();
}

generateBoard();

// Setting gameEvent

var timeInterval = 300;
var gameLogic = () => {
    let head = snake[0];
    let newHead = 0;
    switch (direction) {
        case "none":
            newHead = "stop";
            break;
        case "up":
            newHead = head - dimension;
            break;
        case "down":
            newHead = head + dimension;
            break;
        case "left":
            newHead = head - 1;
            break;
        case "right":
            newHead = head + 1;
            break;
        default:
            console.log("Something broke :/", direction);
    }

    if(newHead == "stop") return;

    snake.unshift(newHead)
    if(snake[0] == apple){
        snake.push(newHead);
        cells[apple].classList.remove("apple");
        // cells[snake[0]].classList.add("snakeHead");
        generateApple();
        pickedApple = true;
        score++;
        scoreBoard.innerHTML = score;
    };
    // console.log(snake)
    if(checkHitboxes()){
        clearInterval(game);
        console.log("gameOver", score);
        GOScreen.classList.remove("hidden");
        return;
    };
    drawSnake()

    

}

var game = setInterval(gameLogic, "300");

// Drawing snake

function drawSnake(){
    let head = cells[snake[0]];
    let prevHead = cells[snake[1]];
    let prevTail = cells[snake.pop()];
    let tail = cells[snake[snake.length - 1]];

    head.classList.add("snakeHead");
    prevHead.classList.remove("snakeHead");
    prevHead.classList.add("snakeBody");
    tail.classList.remove("snakeBody");
    tail.classList.add("snakeTail");
    prevTail.classList.remove("snakeTail");
}

// Generate apple

function generateApple(){
    let random = Math.floor(Math.random() * 1000) % maxIndex;
    while(snake.indexOf(random) != -1){
        random = Math.floor(Math.random() * 1000) % maxIndex;
    } 

    apple = random;
    cells[apple].classList.add("apple");
};

// Hitboxes

function checkHitboxes(){
    let head = snake[0];
    let prevHead = snake[1];
    let temp = snake.slice();
    temp.shift()
    // Snake colliding with itself
    // console.log(head, temp, temp.indexOf(head))
    if(temp.indexOf(head) != -1 && !pickedApple) return true;
    // Snake colliding with celling or floor
    if(head < 0 || head > dimension*dimension - 1) return true;
    // Snake colliding with right wall
    if(head % dimension == 0 && prevHead % 11 == dimension - 1) return true;
    // Snake colliding with left wall
    if(head % dimension == dimension - 1 && prevHead % 11 == 0) return true;

    if(pickedApple) pickedApple = false;
}

// Setting events for movement
document.addEventListener("keydown", (event) => {
    if(event.key == "w" || event.key == "ArrowUp"){
        direction = "up";
    } else if(event.key == "d" || event.key == "ArrowRight") {
        direction = "right"
    } else if (event.key == "s" || event.key == "ArrowDown"){
        direction = "down";
    } else if (event.key == "a" || event.key == "ArrowLeft"){
        direction = "left";
    }

    // console.log(direction)
})

//  Reset

function reset(){

    let temp = snake.slice();
    temp.shift();
    // console.log(temp);
    temp.forEach(element => {
        cells[element].classList.remove("snakeHead");
        cells[element].classList.remove("snakeBody");
        cells[element].classList.remove("snakeTail");
    });
    snake = [];
    cells[60].classList.add("snakeHead");
    snake.push(60);
    snake.push(59);
    snake.push(58);

    direction = "none";
    score = 0;
    scoreBoard.innerHTML = score;
    GOScreen.classList.add("hidden")

    game = setInterval(gameLogic, "300");
}