const currPos = document.getElementById("CRR")
const LF = document.getElementById("LEFT")
const RF = document.getElementById("RIGHT")

var changing = false

function changeSide(){
    if(changing){
        changing = false;
    } else {
        changing = true;
    }
}