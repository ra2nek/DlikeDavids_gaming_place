// getting elements

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const ball = document.getElementById("ball");
const playarea = document.getElementById('playarea')
const pp1 = document.getElementById("pointsp1");
const pp2 = document.getElementById("pointsp2");
const countD = document.getElementById("countdown")

// Elements position

var p1y = 150;
var p2y = 150;

var ballx = 1050;
var bally = 700;

// Hitboxex;

borderHitbox = playarea.getBoundingClientRect();
ballHitbox = ball.getBoundingClientRect();
paddlep1 = p1.getBoundingClientRect();
paddlep2 = p2.getBoundingClientRect();

function resize(){
    borderHitbox = playarea.getBoundingClientRect();
    paddlep1 = p1.getBoundingClientRect();
    paddlep2 = p2.getBoundingClientRect();
}

//  Other variables

var log = console.log;
speedx = 5;
speedy = 5;

p1m1 = false;
p1m2 = false;
p2m1 = false;
p2m2 = false;

pointsp1 = 0;
pointsp2 = 0;

//! Keys checker

document.addEventListener("keydown", function(event){
    switch(event.key){
        case 'w':
            p1m1 = true;
            break;
        case 's':
            p1m2 = true
            break
        case 'ArrowUp':
            p2m1 = true
            break;
        case 'ArrowDown':
            p2m2 = true;
            break
        default:
            log('Other key')
    }
})

document.addEventListener("keypress", function(event){
    switch(event.key){
        case "Escape":
            pause()
            break;
        default:
            log('fed')
    }
})

document.addEventListener("keyup", function(event){
    log(event.key)
    switch(event.key){
        case 'w':
            p1m1 = false;
            break;
        case 's':
            p1m2 = false
            break
        case 'ArrowUp':
            p2m1 = false
            break;
        case 'ArrowDown':
            p2m2 = false
            break
        default:
            log('Other key')
    }
})


//! Pallets movement

// p1

function p1_down(){
    if(p1y >= 300) return;
    p1.style.setProperty("transform", `translateY(${p1y + 10}%)`)
    p1y += 10;
    paddlep1 = p1.getBoundingClientRect();
}

function p1_up(){
    if(p1y <= 0) return;
    p1.style.setProperty("transform", `translateY(${p1y - 10}%)`)
    p1y -= 10;
    paddlep1 = p1.getBoundingClientRect();

}

// p2

function p2_down(){
    if(p2y >= 300) return;
    p2.style.setProperty("transform", `translateY(${p2y + 10}%)`)
    p2y += 10;
    paddlep2 = p2.getBoundingClientRect();

}

function p2_up(){
    if(p2y <= 0) return;
    p2.style.setProperty("transform", `translateY(${p2y - 10}%)`)
    p2y -= 10;
    paddlep2 = p2.getBoundingClientRect();

}

//! Scoring

function score(player){
    ballx = 1200;
    bally = 700;
    if(player == "p1"){
        pointsp2 += 1;
        pp2.innerHTML = pointsp2;
    } else {
        pointsp1 += 1;
        pp1.innerHTML = pointsp1;
    }
    speedx *= -1;
    speedy *= -1;
    p1.style.setProperty("transform", "translateY(150%)");
    p2.style.setProperty("transform", "translateY(150%)");
    ball.style.setProperty("transform", `translate(1200%, 700%)`)
    p1y = 150
    p2y = 150
    speedx = 5;
    speedy = 5
    clearInterval(game)
    countdown()
}

//! Ball

function ballUpdate(){
    ball.style.setProperty("transform", `translate(${ballx - speedx}%, ${bally - speedy}%)`);
    ballx -= speedx;
    bally -= speedy;
    ballHitbox = ball.getBoundingClientRect();
}

//! Hitboxes


function hitboxes(){
    // Up and down
    if(ballHitbox.y <= borderHitbox.y || ballHitbox.y + ballHitbox.height >= borderHitbox.y + borderHitbox.height){
        speedy *= -1;
    }
    // sides / points
    if(ballHitbox.x <= borderHitbox.x){
        score("p1")
    }
    if(ballHitbox.x + ballHitbox.width >= borderHitbox.x + borderHitbox.width){
        score("p2")
    }
    // pallets
    if(paddlep1.x <= ballHitbox.x + ballHitbox.width && ballHitbox.x <= paddlep1.x + paddlep1.width
        && paddlep1.y <= ballHitbox.y + ballHitbox.height && paddlep1.y + paddlep1.height >= ballHitbox.y){
        ball.style.setProperty("transform", "translateX(300%)")
        ballx = 300
        speedx *= -1
        if(speedx < -20) return;
        speedx -= 1
    }
    //! Naprawic hitboxy (boczne nie dzialaja tutaj)
    if(paddlep2.x  + paddlep2.width >= ballHitbox.x && ballHitbox.x + ballHitbox.width >= paddlep2.x 
        && paddlep2.y <= ballHitbox.y + ballHitbox.height && paddlep2.y + paddlep2.height >= ballHitbox.y){
        ball.style.setProperty("transform", "translateX(2100%)")
        ballx = 2100
        speedx *= -1
        if(speedy > 20) return;
        speedy += 1
    }

}

// Update

function paddlesCheck(){
    if(p1m1){
        p1_up();
    }
    if(p1m2){
        p1_down()
    }
    if(p2m1){
        p2_up()
    }
    if(p2m2){
        p2_down();
    }
}

var game;

function pause(){
    clearInterval(game)
    log('owo')
}

function countdown(){
    setTimeout(() =>{
        countD.innerHTML = 3
    }, "1000")
    setTimeout(() =>{
        countD.innerHTML = 2
    }, "2000")
    setTimeout(() =>{
        countD.innerHTML = 1
    }, "3000")
    setTimeout(() =>{
        countD.innerHTML = ''
        game = setInterval(() => {
        ballUpdate();
        hitboxes();
        paddlesCheck();
        }, 10)
    }, "4000")
    
}

var isPaused = false

