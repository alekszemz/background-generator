// //add variables that I gonna by using
// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");
// var input1 = document.getElementsByTagName("input")[0];
// var input2 = document.getElementsByTagName("input")[1];

// // //check those variables
// // console.log(css);
// // console.log(color1);
// // console.log(color2);
// // console.log(gradient);
// // console.log(input1);
// // console.log(input2);

  


//   // input1.style.background = "red";
//   // input2.style.background = "yellow";



// function setGradient() {
//   body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
//   css.textContent = body.style.background + ";";//textContent add text content
// }

// //use variables with input event. Well there is a really really good event for inputs and it's called input. So any time the input value changes (which it does every time we change the color) we can detect it.
// color1.addEventListener("input", setGradient); //This event of input gets triggered automatically and runs a function. We don't need to call the function like that setGradient() because this input event is triggered automatically and the second parameter automatically gets ran with the event.

// color2.addEventListener("input", setGradient);

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }

function randomColors(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();

	setGradient();
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", randomColors);









