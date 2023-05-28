document.onload(dice());


function dice() {
  
  var images = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
  var generateIndex1 =Math.round(Math.random() * 5);
  var generateIndex2 =Math.round(Math.random() * 5);

  console.log(generateIndex1);
  console.log(generateIndex2);
 
  var newSrc1 = `./images/${images[generateIndex1]}`;
  var newSrc2 = `./images/${images[generateIndex2]}`;


  document.querySelector(".img1").setAttribute("src", newSrc1);
  document.querySelector(".img2").setAttribute("src", newSrc2);

  if (generateIndex1 > generateIndex2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  }
  else if (generateIndex2 > generateIndex1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";

  }
  else{
    document.querySelector("h1").innerHTML = "Draw!";

  }
  

 }