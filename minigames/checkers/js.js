//! GENERATING ROWS

const lines = document.querySelectorAll(".line")
var cache = 0;

for(let i = 0; i < lines.length; i++){
    for(let l = 0; l < 8; l++){
        let field = document.createElement("div")
        field.classList.add("field");
        field.setAttribute("index",  cache++)
        lines[i].append(field);
    }
}

//! SETTING UP

const fields = document.querySelectorAll(".field")

var pawnsP1;
var pawnsP2;

var gameStats = {
    currPawn: null,
    forceCapture: false,
    captureFields: [],
}

var spaces = {
    currField: null,
    leftField: 'unavaiable',
    rightField: 'unavaiable'
}

function setup(){
    // SETTING PAWNS
    for(let i = 0; i < 12; i++){
        let pawn = document.createElement("div");
        pawn.classList.add("pawn", "p1");
        pawn.setAttribute('which', 'p1');
        if(i < 4 || i > 7){
            fields[i*2+1].append(pawn);
        } else {
            fields[i*2].append(pawn);
        }
        
    }
    for(let i = 0; i < 12; i++){
        let pawn = document.createElement("div");
        pawn.classList.add("pawn", "p2");
        pawn.setAttribute('which', 'p2');
        if(i < 4 || i > 7){
            fields[8*5 + (i*2)].append(pawn);
        } else {
            fields[8*5 + (i*2+1)].append(pawn);
        }
        
    }
    // SETTING TABLES
    pawnsP1 = document.querySelectorAll(".p1");
    pawnsP2 = document.querySelectorAll(".p2");
    // ADDING CLICKING
    for(let i = 0; i < pawnsP1.length; i++){
        pawnsP1[i].addEventListener("click", () => {
            //! DEBUGING
            if(changing){
                if(pawnsP1[i].getAttribute("which") == "p1"){
                    pawnsP1[i].setAttribute("which", "p2");
                } else {
                    pawnsP1[i].setAttribute("which", "p1");
                }
                pawnsP1[i].classList.toggle("p1");
                pawnsP1[i].classList.toggle("p2");
                return
            }
            gameStats.currPawn = pawnsP1[i];
            //! END OF DEBBUGING 
            let field = pawnsP1[i].parentElement;
            let index = field.getAttribute("index");
            currPos.innerHTML = `${Math.floor(index/8)} ${index%8}  (${index})`
            moveFieldCheck(index);
        })
        
        pawnsP2[i].addEventListener("click", () => {
            //! DEBUGING
            if(changing){
                if(pawnsP2[i].getAttribute("which") == "p1"){
                    pawnsP2[i].setAttribute("which", "p2");
                } else {
                    pawnsP2[i].setAttribute("which", "p1");
                }
                pawnsP2[i].classList.toggle("p1");
                pawnsP2[i].classList.toggle("p2");
                return
            }
            gameStats.currPawn = pawnsP2[i];
            //! END OF DEBBUGING 
            let field = pawnsP2[i].parentElement;
            let index = field.getAttribute("index");
            currPos.innerHTML = `${Math.floor(index/8)} ${index%8} (${index})`
            moveFieldCheck(index);
        })
    }
    for(let i = 0; i < fields.length; i++){
        fields[i].addEventListener("click", () => {
            let field = fields[i];
            let index = field.getAttribute("index");
            currPos.innerHTML = `${Math.floor(index/8)} ${index%8} (${index})`
        })
    }
}

setup()

