// creating a number to store the value

var imgNumOne = Math.floor(Math.random() * 5) + 1;
var imgNumTwo = Math.floor(Math.random() * 5) + 1;

imgShowOne();
imgShowTwo();

if (imgNumOne == imgNumTwo){
    document.querySelector("h1").innerHTML = "<em>Match Draw!</em>";
} else if (imgNumOne > imgNumTwo){
    document.querySelector("h1").innerHTML = "<em>🚩 Player One Wins!</em>";
} else {
    document.querySelector("h1").innerHTML = "<em>Player Two Wins! 🚩</em>";
}

function imgShowOne(){
    if (imgNumOne == 1){
        document.querySelector(".boxOne img").setAttribute("src", "assets/dice1.png");
    } else if (imgNumOne == 2){
        document.querySelector(".boxOne img").setAttribute("src", "assets/dice2.png");
    } else if (imgNumOne == 3){
        document.querySelector(".boxOne img").setAttribute("src", "assets/dice3.png");
    } else if (imgNumOne == 4){
        document.querySelector(".boxOne img").setAttribute("src", "assets/dice4.png");
    } else if (imgNumOne == 5){
        document.querySelector(".boxOne img").setAttribute("src", "assets/dice5.png");
    } else {
        document.querySelector(".boxOne img").setAttribute("src", "assets/dice6.png");
    }
}

function imgShowTwo(){
    if (imgNumTwo == 1){
        document.querySelector(".boxTwo img").setAttribute("src", "assets/dice1.png");
    } else if (imgNumTwo == 2){
        document.querySelector(".boxTwo img").setAttribute("src", "assets/dice2.png");
    } else if (imgNumTwo == 3){
        document.querySelector(".boxTwo img").setAttribute("src", "assets/dice3.png");
    } else if (imgNumTwo == 4){
        document.querySelector(".boxTwo img").setAttribute("src", "assets/dice4.png");
    } else if (imgNumTwo == 5){
        document.querySelector(".boxTwo img").setAttribute("src", "assets/dice5.png");
    } else {
        document.querySelector(".boxTwo img").setAttribute("src", "assets/dice6.png");
    }
}
