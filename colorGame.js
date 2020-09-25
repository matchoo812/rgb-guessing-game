
var colors = [];
var numSquares = 6;
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  // mode button event listeners
  modeButtonSetup();
  // square event listeners
  squareSetup();
  reset();
}

function modeButtonSetup() {
  for(i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      // toggle between hard and easy modes
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      // display correct number of squares
      if(this.textContent === "Easy") {
        numSquares = 3;
      } else if(this.textContent === "Hard") {
        numSquares = 6;
      }
      reset();
    });
  }
}

function squareSetup() {
  for(var i = 0; i < squares.length; i++) {
    // add click listeners to squares
    squares[i].addEventListener("click", function() {
      // grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      // compare clicked square to target color
      if(clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?" ;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again!"
      }
    });
  }
  }

function reset() {
   // generate all new colors
  colors = generateRandomColors(numSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  // change h1 display to match new random color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "" ;
  // change colors of squares
  for(i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
  reset();
})


function changeColors(color) {
  for(i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make an array
  var arr = [];
  // add num random colors to array
  for(i = 0; i < num; i++) {
    // get random color and push into array
    arr.push(randomColor());
  }
  // return array
  return arr;
}

function randomColor() {
  // pick a red
  var r = Math.floor(Math.random() * 256);
  // pick a green
  var g = Math.floor(Math.random() * 256);
  // pick a blue
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
