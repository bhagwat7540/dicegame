
// dice1
var randomVariable;
randomVariable = Math.random();
randomVariable = randomVariable*6;
randomVariable = Math.floor(randomVariable)+1;

var randomImage = "images/" + "dice" + randomVariable +".png";

  document.querySelector(".img1").setAttribute("src" , randomImage);



// dice2

var randomVariable1;
randomVariable1 = Math.random();
randomVariable1 = randomVariable1*6;
randomVariable1 = Math.floor(randomVariable1)+1;

var randomImage1 = "images/" + "dice" + randomVariable1 +".png";
  document.querySelector(".img2").setAttribute("src" , randomImage1);



//Refresh me

if(randomVariable>randomVariable1){
  document.querySelector("h1").innerHTML="🏁 Player 1 Wins!";
  document.querySelector("h1").style.fontSize="7rem";
}

else if(randomVariable<randomVariable1){
  document.querySelector("h1").innerHTML="Player 2 Wins! 🏁";
  document.querySelector("h1").style.fontSize="7rem";
}

else{
  document.querySelector("h1").innerHTML="🏁 Draw! 🏁";
  document.querySelector("h1").style.fontSize="7rem";
}
