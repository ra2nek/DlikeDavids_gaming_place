var prev = [];

function prevClear(){
    if(prev.length == 0) return;
    for(let i = 0; i < prev.length; i++){
        prev[i].style.backgroundColor = 'var(--tile1-)';
    }
    prev = [];
};


function moveFieldCheck(field){
    prevClear();
    fields[field].style.backgroundColor = "var(--selected-)";
    prev.push(fields[field])
    field = parseInt(field);

    spaces.currField = fields[field];

    let swn = fields[field].firstChild;
    let pwn = swn.getAttribute('which');

    pwn == 'p1' ? field += 8: field -= 8;

    let space1 = fields[field-1];
    let space2 = fields[field+1];
    
    spaces.leftField = space1;
    spaces.rightField = space2;
    // Checking if not on side of board
    /* ALGORYTMS */

        //log(field % 8 != 0, field);
        log((field - (Math.floor(field/7) - 1)) % 7 != 0)

    let Left = checkLeft(field, pwn, space1);
    let Right = checkRight(field, pwn, space2);


        if(Left == 'kill'){
            LF.innerHTML = "KILL";
            let nextSpace = pwn == 'p1' ? field + 6 : field - 10;
            fields[nextSpace].style.backgroundColor = "var(--forced-)";
            prev.push(fields[nextSpace]);
            gameStats.forceCapture = true;
        } 

        if(Right == 'kill'){
            RF.innerHTML = "KILL";
            gameStats.forceCapture = true;
            let nextSpace = pwn == 'p1' ? field + 10 : field - 6;
            fields[nextSpace].style.backgroundColor = "var(--forced-)";
            prev.push(fields[nextSpace]);
        }
        
    if(Left == 'avaiable'){
        LF.innerHTML = 'avaiable';
        space1.style.backgroundColor = "var(--avaiable-)"
        prev.push(space1);
        checks.leftField = 'avaiable';
    } else {
        LF.innerHTML = 'unavaiable';
        checks.leftField = 'unavaiable';
    }
    if(Right == 'avaiable'){
        RF.innerHTML = 'avaiable';
        space2.style.backgroundColor = "var(--avaiable-)";
        prev.push(space2);
        checks.rightField = 'avaiable';
    } else {
        RF.innerHTML = 'unavaiable';
        checks.rightField = null;
    }
    //? FOR DEBUGING PURPOSES
    if(Left == 'no space'){
        LF.innerHTML = "NO SPACE";
    }
    if(Right == 'no space'){
        RF.innerHTML = "NO SPACE";
    }
}

function checkLeft(field, pwn, space1){
    if(field % 8 == 0){
        return 'no space'
    }
    if(space1.firstChild == null){
        return 'avaiable';
    } else {
        let pawn = space1.firstChild;
        let whose = pawn.getAttribute("which");
        if(whose == pwn){
            return "unavaible";
        } else {
            let nextSpace = pwn == 'p1' ? field+9 : field-9;
            if(fields[nextSpace].firstChild == null && space1.getAttribute("index") % 8 != 0){
            return 'kill';
            } else {
                return 'unavaible';
            }
        }
        
    }
}

function checkRight(field, pwn, space2){
    if((field - (Math.floor(field/7) - 1)) % 7 == 0){
        return 'no space';
    }
    if(space2.firstChild == null){
        return 'avaiable';
    } else {
        let pawn = space2.firstChild;
        let whose = pawn.getAttribute("which");
        if(whose == pwn){
            return "unavaible";
        } else {
            let sp2 = space2.getAttribute("index");
            sp2 = parseInt(sp2);
            let nextSpace = pwn == 'p1' ? field+9 : field-9;
            if(fields[nextSpace].firstChild == null && (sp2 - (Math.floor(sp2/7) - 1)) % 7 != 0){
            return 'kill';
            } else {
                return 'unavaible';
            }
        }
        
    }
}