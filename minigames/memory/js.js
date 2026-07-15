const blocks = document.querySelectorAll(".block")
const rzeczy = ['lodz','lodz','okulary','okulary','kaczka','kaczka','dom','dom','drzewo','drzewo','zegar','zegar','grzyb','grzyb','slonce','slonce']
const root = document.querySelector(":root")

//! This code is a mess im sorry

for(let i = 0; i < blocks.length; i++){
    blocks[i].setAttribute("in","null")
    blocks[i].setAttribute("visibillity","hidden");
}

function random(){
    let x = Math.round(Math.random() * 100) % 16;
    if(blocks[x].getAttribute('in') == 'null'){
        return x;
    } else {
        x = random()
        return x;
    }
}

function shuffle(){
    for(let i = 0; i<rzeczy.length; i++){
        blocks[random()].setAttribute('in', `${rzeczy[i]}`)
    }
}

shuffle();

//var hide = false;
//var prev = 0;
//var g = false;
var pairs = 0;
var pending = false;
var p1 = 'none';
var p2 = 'none';
var blocked = [];
var timeout;
var postClear = false;
var test = false

//TOOD; TIMEOUT PARY WIN

function clicked(card){
    let visible = blocks[card].getAttribute("visibillity")
    //check if not blocked;

    for(let i = 0; i < blocked.length; i++){
        if(card == blocked[i]) return;
    }

    // Only one chosen
    if(card == p1 && pending) return;
    
    // Hiding when pressing same cards
    if((card == p1 || card == p2) && !pending){
        turnCard(p1, 'visible')
        turnCard(p2, 'visible')
        postClear = true;
        turn++;
        clearTimeout(timeout)
        test = true;
        return;
    }
    
    turnCard(card, visible);
    
    // Hiding when both cards are visible and user presses other one
    if(p2 != 'none'){
        let l = blocks[p2].getAttribute("visibillity");
        if(l == 'visible'){
            turnCard(p1, 'visible')
            turnCard(p2, 'visible')
        }
        turn++
        clearTimeout(timeout)
        return;
    }
}

function states(card){
    if(card == p1 || card == p2) return;
    waiting = true;
    setTimeout(() => {
            waiting = false;
        }, "550");
    if(!pending){
        p1 = card;
        pending = true;
    } else {
        p2 = card;
        pending = false;
        
    }
}

var waiting = false;

function postStates(card){
    // get blocked idiot
    
    for(let i = 0; i < blocked.length; i++){
        if(card == blocked[i]) return;
    }

    // locking a pair
    if(p1 != 'none' && card != p1 && blocks[card].getAttribute("in") == blocks[p1].getAttribute("in")){
        turnCard(card, 'hidden')
        blocked.push(card, p1);
        blocks[p1].setAttribute("visibillity", "locked")
        p1 = 'none';
        setTimeout(() => {
            blocks[card].setAttribute("visibillity", "locked")
        }, "510")
        p2 = 'none';
        pairs++;
        if(pairs == 8){
            win()
        }
        return;
    }

    if(blocks[card] != blocks[p1]){
        timeout = setTimeout(() => {
            turnCard(p1, 'visible')
            turnCard(p2, 'visible')
            p1 = 'none';
            p2 = 'none';
        }, "3000")
        return;
    }
    
}

function win(){
    clearInterval(timer);
    setAnimation("#winscreen", "goDownwards 1s ease forwards")
    document.querySelector("#finalTime").innerHTML = document.querySelector("#time").innerHTML;
}

function restart(){
    setAnimation("#winscreen", "goUpwards 1s ease forwards")
    pairs = 0;
    pending = false;
    p1 = 'none';
    p2 = 'none';
    blocked = [];
    timeout;
    postClear = false;
    seconds = 0;
    minutes = 0;

    for(let card = 0; card < blocks.length; card++){
        blocks[card].style.backgroundColor = "var(--back-)"
        blocks[card].innerHTML = '';
        blocks[card].setAttribute("visibillity","hidden");
        blocks[card].setAttribute("in","null")
    }

    shuffle();
    document.getElementById('seconds').innerHTML = "00"
    timer = setInterval(() => {
        seconds++
        if(seconds >= 60){
            minutes++;
            seconds = 0;
            document.getElementById('minutes').innerHTML = minutes;
            document.getElementById('seconds').innerHTML = "00"
            return;
        }
        if(seconds >= 10){
            document.getElementById('seconds').innerHTML = seconds;
        } else {
            document.getElementById('seconds').innerHTML = '0' + seconds;
        }
    }, "1000");
}

function turnCard(card, visible){
    if(card == 'none') return;
    if(visible == 'locked') return;
    log(card)
    clearAnimation(".block", card)

    setTimeout(() => {
        setAnimation(".block", "card 1s", card);
        setTimeout(() => {
            if(visible == "hidden"){
                blocks[card].style.backgroundColor = "var(--front-)"
                blocks[card].innerHTML = `<img src="img/${blocks[card].getAttribute("in")}.png" alt="${blocks[card].getAttribute("in")}">`
                blocks[card].setAttribute("visibillity","visible");
            } else {
                blocks[card].style.backgroundColor = "var(--back-)"
                blocks[card].innerHTML = '';
                blocks[card].setAttribute("visibillity","hidden");
            }
            
        }, "500")
    }, "10")
}

for(let i = 0; i < blocks.length; i++){
    blocks[i].addEventListener("click", () => {
        for(let y = 0; y < blocked.length; y++){
            if(i == blocked[y]) return;
        }
        if(waiting) return;
        clicked(i)
        states(i)
        if(postClear){
            p1 = 'none';
            p2 = 'none';
            postClear = false;
        }
        postStates(i)
        if(test){
            clearTimeout(timeout);
            test = false;
        }
    })
}

//* T I M E R
var seconds = 0;
var minutes = 0;
var timer = setInterval(() => {
    seconds++
    if(seconds >= 60){
        minutes++;
        seconds = 0;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = "00"
        return;
    }
    if(seconds >= 10){
        document.getElementById('seconds').innerHTML = seconds;
    } else {
        document.getElementById('seconds').innerHTML = '0' + seconds;
    }
}, "1000");

//* T U R N
var turn = 0;
