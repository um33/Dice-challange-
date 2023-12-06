function random(){
    return Math.floor(Math.random() * 6) + 1;
}
console.log(random());
var randomNumber1 = random();
var randomNumber2 = random();
var rand = document.querySelector(".img1").setAttribute("src", "/images/dice"+randomNumber1+".png");
console.log(rand);
document.querySelector(".img2").setAttribute("src", "/images/dice"+randomNumber2+".png");

var winningPlayer = document.querySelector("h1");
if(randomNumber1 > randomNumber2){
    winningPlayer.innerHTML= "Player 1 wins🏆";
}else if(randomNumber2 > randomNumber1){
    winningPlayer.innerHTML="Player 2 wins🏆";
}else{
    winningPlayer.innerHTML="Draw";
}
