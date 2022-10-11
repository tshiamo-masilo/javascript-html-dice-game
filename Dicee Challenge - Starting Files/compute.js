var dice1 = "";
var dice2 = "";
var random1 = 0;
var random2 = 0;
var headingResult;

random1 = Math.floor((Math.random()*6)+1);
random2 = Math.floor((Math.random()*6)+1);

if(random1 > random2){
  headingResult = "Player 1 won";
} else if (random1 === random2) {
  headingResult = "players draw";
}else{
  headingResult ="Player 2 won";
}
dice1 = "images/dice"+random1+".png";
dice2 = "images/dice"+random2+".png";
//console.log(dice1);
//console.log(dice2);
//alert("PLAY");
document.getElementById("heading1").innerHTML = headingResult;
document.querySelectorAll("img")[0].src =dice1;
document.querySelectorAll("img")[1].src =dice2;
