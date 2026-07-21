const menu = document.getElementById("menu");
const options = document.getElementsByClassName("fr");
const extras = document.getElementsByClassName("extra");
const games = extras[0].getElementsByClassName('option');
const animObjects = document.querySelectorAll(".highAm")
const sideScreen = document.querySelector("#sideScreen")
const changelog = document.querySelector("#changelog")
var part1 = changelog.querySelectorAll("h1")
var part2 = changelog.querySelectorAll("h2")
var part3 = changelog.querySelectorAll("h3")
var part4 = changelog.querySelectorAll("p")

for(let i = 0; i < games.length - 1; i++){
    games[i].addEventListener("click", () => {
        toGame(i);
    })
    games[i].addEventListener("mouseenter", () => {
        minigameShowcase(i);
    })
}

Array.from(document.getElementsByClassName("fr")).forEach((item, index) => {
    item.onmouseover = () => {
        menu.dataset.activeButton = index;
    }
})

var lock = false

function change(selected){
    console.log('change')
    if(selected == "menu"){
        let z = document.getElementById('main')
        z.style.setProperty("animation", "menuForward 1s ease forwards 1s");
    } else if (selected == "opcje"){
        let z = document.getElementById('options')
        z.style.setProperty("animation", "menuForward 1s ease forwards 1s");
    } else if (selected == "credits"){
        let z = document.getElementById('credits')
        z.style.setProperty("animation", "menuForward 1s ease forwards 1s");
    } else if (selected == "extras"){
        let z = document.getElementById('extras')
        z.style.setProperty("animation", "menuForward 1s ease forwards 1s");
    }
    
}

function select(selected){
    if(lock) return;
    let activeButton = menu.dataset.activeButton;
    
    let root = document.querySelector(':root');
    let laroot = getComputedStyle(root);

    setTimeout(function(){
        options[0].style.setProperty("animation", "toLeft 1s ease-in forwards .2s")
    }, 0)

    setTimeout(function(){
        options[1].style.setProperty("animation", "toLeft 1s ease-in forwards .2s")
    }, 200)

    setTimeout(function(){
        options[2].style.setProperty("animation", "toLeft 1s ease-in forwards .2s")
    }, 400)

    setTimeout(function(){
        options[3].style.setProperty("animation", "toLeft 1s ease-in forwards .2s")
    }, 600)

    lock = true;
    setTimeout(() => {
        lock = false;
    }, "2000")

    change(selected)
}

function goBack(number){
    extras[number].style.setProperty("animation", "extrasGo 1s ease forwards")

    setTimeout(function(){
        options[0].style.setProperty("animation", "menuBack 1s ease forwards")
    }, 200)

    setTimeout(function(){
        options[1].style.setProperty("animation", "menuBack 1s ease forwards")
    }, 400)

    setTimeout(function(){
        options[2].style.setProperty("animation", "menuBack 1s ease forwards")
    }, 600)

    setTimeout(function(){
        options[3].style.setProperty("animation", "menuBack 1s ease forwards")
    }, 800)

}

//! Options



function toGame(option){
    //check if avaiable plz make it better
    //no >:3
    //okay fine
    //it still needs to be better
    //I think it is fine
    if(option > 4){
        games[option].style.setProperty("animation", "denied 1s ease forwards");
        setTimeout(() => {
            games[option].style.setProperty("animation", "none");
        }, "1200")
        return;
    }
    //procced
    games[option].style.setProperty("animation", "selected 1s ease forwards");
    setAnimation("#white-screen", "fade-in 1s forwards");
    setTimeout(() => {
        switch(option){
        case 0:
            window.location.href = "minigames/pwong/index.html"
            break;
        case 1:
            window.location.href = "minigames/tic tac toe/index.html"
            break;
        case 2:
            window.location.href = "minigames/rock paper scissors/index.html"
            break;
        case 3:
            window.location.href = "minigames/memory/memory.html"
            break;
        case 4:
            window.location.href = "minigames/snake/index.html"
            break;
        }
        
        document.getElementById("black").style.setProperty("animation", "transition 1s ease forwards")
    }, "1500")
    unload();
}

var changing;
var anim = false;

function minigameShowcase(what){
    switch(what){
        case 0:
            sideScreen.innerHTML = `<img src="img/Pwong.png">`
            break;
        case 1:
            sideScreen.innerHTML = `<img src="img/Tic tac toe.png">`
            break;
        case 2:
            sideScreen.innerHTML = `<img src="img/Rock paper scissors.png">`
            break;
        case 3:
            sideScreen.innerHTML = `<img src="img/memory.png">`
            break;
        case 4:
            sideScreen.innerHTML = `<img src="img/Snake logo.png">`
            break;
        default:
            sideScreen.innerHTML = `<div class="firstAm highAm">
            <div id="scndAm">
            DlikeDavid's <br> Gaming <br> Place
            </div></div>`
            break;
    }
    
}

var isAnimating = false;

function changelogShow(){
    if(isAnimating) return;
    setAnimation("#changelog", "goUp 1s ease forwards");
    isAnimating = true;
    setTimeout(() => {
        clearAnimation("#changelog");
        setTimeout(() => {
            for(let i = 0; i < part2.length; i++){
                part2[i].style.animation = "fadeUp 1s ease forwards";
            }
        }, "100")
        setTimeout(() => {
            for(let i = 0; i < part3.length; i++){
                part3[i].style.animation = "fadeUp 1s ease forwards";
            }
        }, "300")
        setTimeout(() => {
            for(let i = 0; i < part4.length; i++){
                part4[i].style.animation = "fadeUp 1s ease forwards";
            }
        }, "500")
        isAnimating = false;
    }, "1000")
    changelog.style.display = "block";
}

function changelogHide(){
    if(isAnimating){
        clearAnimation("#changelog");
        isAnimating = false
        setTimeout(() => {
            setAnimation("#changelog", "goDown 1s ease forwards");
        }, "100")
        return;
    }
    isAnimating = true;
    setAnimation("#changelog", "goDown 1s ease forwards");
    setTimeout(() => {
        clearAnimation("#changelog");
        changelog.style.display = "none";
        for(let i = 0; i < part2.length; i++){
            part2[i].style.animation = "";
            part2[i].style.opacity = 0;
        }
        for(let i = 0; i < part3.length; i++){
            part3[i].style.animation = "";
            part3[i].style.opacity = 0;
        }
        for(let i = 0; i < part4.length; i++){
            part4[i].style.animation = "";
            part4[i].style.opacity = 0;
        }
        isAnimating = false;
    }, "1000")
    
}
