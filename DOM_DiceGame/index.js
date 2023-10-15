var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var imageSource1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", imageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", imageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "User 1 won";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "User 2 won";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
