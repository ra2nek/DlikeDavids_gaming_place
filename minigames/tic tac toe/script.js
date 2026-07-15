const cells = document.querySelectorAll(".cell");
const line = document.querySelector('#line');
const winscreen = document.querySelector("#winscreen");

for(let i = 0; i < cells.length; i++){
    cells[i].addEventListener("click", () =>{
        press(i);
    })
}

//Turn: true == circle; false == cross
var turn = true;

function press(cell){
    if(won) return;
    if(cells[cell].innerHTML != '') return;
    if(turn){
        cells[cell].innerHTML = "O";
        turn = false;
    } else {
        cells[cell].innerHTML = "X";
        turn = true;
    }
    check()
}

//! NAPRAWIC L AKA WYGRANA Z DWOCH STRON (BEFORE I AFTER)

function check(){
    //ROWCHECKS
    if((cells[0].innerHTML == cells[1].innerHTML) && (cells[1].innerHTML == cells[2].innerHTML) && (cells[0].innerHTML != '')){
        win("row1")
    }
    if((cells[3].innerHTML == cells[4].innerHTML) && (cells[4].innerHTML == cells[5].innerHTML) && (cells[3].innerHTML != '')){
        win("row2")
    }
    if((cells[6].innerHTML == cells[7].innerHTML) && (cells[7].innerHTML == cells[8].innerHTML) && (cells[6].innerHTML != '')){
        win("row3")
    }
    //COLUMNS
    if((cells[0].innerHTML == cells[3].innerHTML) && (cells[3].innerHTML == cells[6].innerHTML) && (cells[0].innerHTML != '')){
        win("col1")
    }
    if((cells[1].innerHTML == cells[4].innerHTML) && (cells[4].innerHTML == cells[7].innerHTML) && (cells[1].innerHTML != '')){
        win("col2")
    }
    if((cells[2].innerHTML == cells[5].innerHTML) && (cells[5].innerHTML == cells[8].innerHTML) && (cells[2].innerHTML != '')){
        win("col3")
    }
    //DIAGONALS
    if((cells[0].innerHTML == cells[4].innerHTML) && (cells[4].innerHTML == cells[8].innerHTML) && (cells[0].innerHTML != '')){
        win("diag1")
    }
    if((cells[2].innerHTML == cells[4].innerHTML) && (cells[4].innerHTML == cells[6].innerHTML) && (cells[2].innerHTML != '')){
        win("diag2")
    }
}

var won = false;

var hold;

function win(what){
    hold = what
    won = true;
    document.querySelector(`#${what}`).style.display = 'block';
    /* 
    document.getElementById('player').innerHTML = what;
    setAnimation("#winscreen", "goDown .6s ease forwards")
    setTimeout(() => {
        clearAnimation("#winscreen");
    }, "700")*/
}

function reset(){
    for(let i = 0; i < 9; i++){
        cells[i].innerHTML = "";
    }
    document.querySelector(`#${hold}`).style.display = 'none';
    won = false;
}