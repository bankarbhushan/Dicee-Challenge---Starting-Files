let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomIamgeSource1 = "images/dice" + randomNumber1 + ".png" ;// images/dice1.png

document.querySelectorAll("img")[0].setAttribute("src" ,randomIamgeSource1);




let randomNumber2 = Math.floor(Math.random()*6)+1;

let randomIamgeSource2 = "images/dice" + randomNumber2 +".png";// images/dice1.png

document.querySelectorAll("img")[1].setAttribute("src" ,randomIamgeSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if(randomNumber2 >randomNumber1){
    document.querySelector("h1").textContent= "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").textContent= "Draw!";

}

document.querySelector("img")[0].style