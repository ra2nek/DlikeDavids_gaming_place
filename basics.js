log = console.log;

const gameOptions = document.querySelector("#gameOptions");
const cogwheel = document.querySelector("#cogwheel");

// Animations

function clearAnimation(/*query selector, numbers...*/){
    let args = arguments;
    if(args[0][0] == "#"){
        let selector = document.querySelector(args[0]);
        selector.style.setProperty('animation', '')
    } else {
        let selector = document.querySelectorAll(args[0]);
        for(let i = 1; i < args.length; i++){
        selector[args[i]].style.setProperty('animation', '');
        }   
    }

    
}

function setAnimation(/*query selector, animation expression, numbers...*/){
    let args = arguments;
    if(args[0][0] == "#"){
        let selector = document.querySelector(args[0]);
        selector.style.setProperty('animation', args[1]);
    } if (args[0][0] == ".") {
        let selector = document.querySelectorAll(args[0]);
        for(let i = 2; i < args.length; i++){
            selector[args[i]].style.setProperty('animation', args[1]);
        }
    } else {
        for(let i = 2; i < args.length; i++){
            selector[args[i]].style.setProperty('animation', args[1]);
        }
    }
    
}

// options

var optionsStatus = false;

function toggleOptions(){
    if(optionsStatus){
        gameOptions.classList.add("closed")
        cogwheel.classList.remove("leave")
        optionsStatus = false;
    } else {
        gameOptions.classList.remove("closed")
        cogwheel.classList.add("leave")
        optionsStatus = true;
    }
}



addEventListener("load", () => {
    clearInterval(loading);
    document.querySelector("#dots").innerHTML = ""
    document.querySelector("#white-screen").innerHTML = "Loaded"
    setTimeout(() => {
        document.querySelector("#white-screen").classList.add("gone");
    }, "1000")

    setTimeout(() => {
        document.querySelector("#white-screen").style.display = "none";
    }, "1500")
})

function unload(){
    document.querySelector("#white-screen").style.display = "flex"
    setTimeout(() => {
        document.querySelector("#white-screen").classList.remove("gone")
    }, "500")
    loading = setInterval(() => {
        let dot = document.querySelector("#dots")
        if(dots == 3){
            dot.innerHTML = ""
            dots = 0;
        } 
        else if(dots == 0){
           dot.innerHTML = "."; 
           dots++
        } else if(dots == 1){
            dot.innerHTML = ".."; 
            dots++
        } else if(dots == 2){
            dot.innerHTML = "..."; 
            dots++
         } 
    }, "500")
    document.querySelector("#white-screen").innerHTML = `Loading <span id="dots"></span>`

}


var dots = 0;
var loading = setInterval(() => {
    let dot = document.querySelector("#dots")
    if(dots == 3){
        dot.innerHTML = ""
        dots = 0;
    } 
    else if(dots == 0){
       dot.innerHTML = "."; 
       dots++
    } else if(dots == 1){
        dot.innerHTML = ".."; 
        dots++
    } else if(dots == 2){
        dot.innerHTML = "..."; 
        dots++
     } 
}, "500")


