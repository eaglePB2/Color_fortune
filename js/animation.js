let numSquares = 6;
let colors = randomColor(6);
let pickedColor = pickColor();
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("messageTry");
colorDisplay.textContent = pickedColor;
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easybtn");
let hardBtn = document.querySelector("#hardbtn");
//Button customize start//
easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = randomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "Too hard?";
    for(let i=0; i< squares.length; i++){
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i];
            messageDisplay.textContent = "";
            colorDisplay.style.color = "#000000";
            }else{
                squares[i].style.display = "none";
            }
    }
})

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = randomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "Too hard?";
    for(let i=0; i< squares.length; i++){
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
            messageDisplay.textContent = "";
            colorDisplay.style.color = "#000000";
            }
    }
})

//Button customize ends//
// Let ends, reset starts //
resetButton.addEventListener("click",function(){
    colors = randomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    colorDisplay.style.color = "#000000";
    resetButton.textContent = "Too hard?";
    messageDisplay.textContent = "";
    for(let i=0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }})
//reset ends, loop start//
for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i]; //initial colour
    squares[i].addEventListener("click", function () {
        //grab colour
        let clickedColor = this.style.background;
        if (clickedColor === pickedColor) { //compare
            messageDisplay.textContent = "Correct!";
            messageDisplay.style.color = pickedColor;
            colorDisplay.style.color = pickedColor;
            changeColor(pickedColor);
            resetButton.textContent = "Play again?";
        } else {
            this.style.background = "#BCCDE5";
            messageDisplay.textContent = "Try Again, shall we?";
            messageDisplay.style.color = clickedColor;
            resetButton.textContent = "Give up?";
            //span time in HTML!
        }
    })
}
//loop ends, function starts//
function changeColor(colors) {
    //loop squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors; //change to given color.
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function randomColor(num) {
    //array
    let array = [];
    //random num into array :3
    for (let i = 0; i < num; i++) {
        array.push(randomColorResult());
    }
    return array;
}

function randomColorResult() {
    var R = Math.floor(Math.random() * 256);
    var G = Math.floor(Math.random() * 256);
    var B = Math.floor(Math.random() * 256);
    return "rgb(" + R + ", " + G + ", " + B + ")";
}

$( document ).ready(function() {
	var audio = $("#clickSound")[0];
	var audio2 = $("#clickSound2")[0];
	$("#button").mousedown(function() {
	  audio2.play();
	});
	$("#button").mouseup(function() {
	  audio.play();
	});
});