//This JavaScript file file contains behaviors

//menu bar hover on mouse over
//document.getElementById('menu').


//PONG GAME
//https://medium.com/@hershybateea/how-to-make-pong-with-javascript-1a6bd6226ea1
const paddleHeight = 150;
const ballRadius = 25;
const halfPaddleHeight = paddleHeight / 2;
const speedOfPaddle1 = 0;
const positionOfPAddle1 = 460;
const speedOfPaddle2 = 0;
const positionOfPaddle2 = 0;
const topPositionOfBall = 510;
const leftPositionOfBall = 820;
const topSpeedOfBall = 0;
const leftSpeedOfBall = 0;
const score1;
const score2;

//Desktop controls

document.addEventListener('keydown', function (e) {
    if (e.keyCode == 87 || e.which == 87) {// W key 
        positionOfPAddle1 -= 10;
        document.getElementById("paddle1").style.top = (positionOfPAddle1) + "px"
    }

    if (e.keyCode == 83 || e.which == 83) { // S Key
        positionOfPaddle2 += 10;
        document.getElementById("paddle1").style.top = (positionOfPaddle1) + "px";
    }

    if (e.keyCode == 38 || e.which == 38) {//up arrow
        positionOfPaddle2 -= 10;
        document.getElementById("paddle2").style.top = (positionOfPaddle2) + "px";
    }

    if (e.keyCode == 40 || e.which == 40) {// down arrow
        positionOfPaddle2 += 10;
        document.getElementById("paddle2").style.top = (positionOfPaddle2) + "px";

    }

}, false);

