const wybieranie = document.querySelector(".selection");
const title = document.querySelector(".title")
const outcome = document.querySelector("#outcome")
const PC = document.querySelector("#player")
const CC = document.querySelector("#computer")
var pp1 = 0;
var pp2 = 0;



function Attack(what){
    let opponent = Math.round(Math.random() * 10) % 3;
    clearAnimation('.selection', 0)
    setAnimation('.selection', 'goUpwards 1s ease-in-out forwards', 0)
    clearAnimation('#player')
    clearAnimation('#computer')
    setTimeout(() => {
        setAnimation('#player', "shake 1s 3 ease")
        setAnimation('#computer', "shake 1s 3 ease")
        setTimeout(() => {
                    //* Your choice
            switch(what){
                case 0:
                    PC.src = "img/rock.png"
                    break;
                case 1:
                    PC.src = "img/paper.png"
                    break;
                case 2:
                    PC.src = "img/scissors.png"
                    break;
            }
            //* AI choice
            switch(opponent){
                case 0:
                    CC.src = "img/rock.png"
                    break;
                case 1:
                    CC.src = "img/paper.png"
                    break;
                case 2:
                    CC.src = "img/scissors.png"
                    break;
            }

            if(what == opponent){
                draw();
                return;
            }

            if((what == 0 && opponent == 2) || (what == 1 && opponent == 0) || (what == 2 && opponent == 1)){
                pp1++
                winner('player')
                
            } else {
                pp2++
                winner('AI')
                
            }
        }, "3000")
    }, "1000")

   
}

function draw(){
    outcome.innerHTML = "REMIS!"
    autoBack()
}

function winner(who){
    if(who == "player"){
        outcome.innerHTML = "Wygrałeś!!!"
        //document.getElementById("pp1").innerHTML = pp1;
    } else {
        outcome.innerHTML = "Przegrałeś D:"
        //document.getElementById("pp2").innerHTML = pp2;
    }
    autoBack()
}

var timer 

function autoBack(){
    timer = setTimeout(() => {
        outcome.innerHTML = ''
        PC.src = 'img/rock.png'
        CC.src = 'img/rock.png'
        title.innerHTML = "Choose"
        clearAnimation('.selection', 0)
        setAnimation('.selection', 'goDownwards 1s ease-in-out forwards', 0)
    }, "4000")
}

function back(){
    clearTimeout(timer)
    title.innerHTML = "Choose"
}