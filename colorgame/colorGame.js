// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)"
// ];

var colors = generateRandomColors(6);// generate 6 random colors
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(6);
	//pick new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares on page
	for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	}
	//change color of stripe in background back to original
	h1.style.backgroundColor = "#232323";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color){ 
//loop through all squares
	for(i = 0; i < squares.length; i++){
// change each color to match given color
	squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	// pick a random color
	//math.random will pick a number between 0 & 1(not including 1) and multiply it by length of array.
	//math.floor takes off the decimal to give you a whole no.
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//add num random colors to arr => use loop
	//repeat num times
	for (var i = 0; i < num; i++){
		arr.push(randomColor())
		// get random color and push into arr
	}
	//return that array
	return arr;
}

function randomColor(){
//pick a "red" from 0-255
var r = Math.floor(Math.random() * 256);//because math.random doesnt include 1 and we want 255)
//pick a "blue" from 0-255
var g = Math.floor(Math.random() * 256);
//pick a "green" from 0-255
var b = Math.floor(Math.random() * 256);
return "rgb(" + r + ", " + g + ", " + b +")"; //string. spaces after the commas
}