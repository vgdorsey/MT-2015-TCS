
function getCanvas() {
        return $("#middleCanvas")[0].getContext("2d");
}        

function drawX(rowNum, colNum) {
        var canvas = getCanvas();
        canvas.beginPath();
    
        // The top-left to bottom-right line.
        canvas.moveTo(100*colNum + 20, 100*rowNum + 20);
        canvas.lineTo(100*colNum + 80, 100*rowNum + 80);
    
        //The bottom-left to top-right line.
        canvas.moveTo(100*colNum + 20, 100*rowNum + 80);
        canvas.lineTo(100*colNum + 80, 100*rowNum + 20);
        //set line color
        canvas.strokeStyle = '#9932CC';
        canvas.stroke();
}        
    
function drawO(rowNum, colNum) {
        var canvas = getCanvas();
        
        //Draw the circle
        canvas.beginPath();
        canvas.arc(100*colNum + 50, 100*rowNum + 50, 40, 0, 2*Math.PI, false);//arc(centerX, centerY, radius, startAngle, endAngle, ccw?)
        //set line color
        canvas.strokeStyle = '#00FF00';
        canvas.stroke();
}

function cleanSquare(rowNum, colNum) {
        var canvas = getCanvas();
        
        canvas.beginPath();
        canvas.rect(100*colNum + 5, 100*rowNum + 5, 90, 90);
        canvas.fillStyle = 'white';
        canvas.fill();
}

function drawBoard() {
    var ctx = getCanvas();
    
	// draw a tic-tac-toe board
	ctx.moveTo(100, 0);
	ctx.lineTo(100, 500);

	ctx.moveTo(200, 0);
	ctx.lineTo(200, 500);
    
    	ctx.moveTo(300, 0);
    	ctx.lineTo(300, 500);
    
    	ctx.moveTo(400, 0);
	ctx.lineTo(400, 500);

	ctx.moveTo(0, 100);
	ctx.lineTo(500, 100);

	ctx.moveTo(0, 200);
	ctx.lineTo(500, 200);
    
    	ctx.moveTo(0, 300);
    	ctx.lineTo(500, 300);
    
    	ctx.moveTo(0, 400);
    	ctx.lineTo(500, 400);
    	ctx.strokeStyle = '#FF8C00';
    	ctx.stroke();
}

currentPosition = ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"];

function canMoveHere(rowNum, colNum) {
        if (currentPosition[rowNum*5 + colNum] == "b") {
                return true;
        }
        else {
                return false;
        }
}

function putMarkHere(mark, rowNum, colNum) {
        if (canMoveHere(rowNum, colNum)) {
                currentPosition[rowNum*5 + colNum] = mark;
                return true;
        }
        else {
                return false;
        }
}

function isXsTurn() {
        var numOfXs = 0;
        var numOfOs = 0;
        
        for (var index = 0; index < currentPosition.length; index++) {
                if (currentPosition[index] == "x") {
                        numOfXs = numOfXs + 1;
                }
                if (currentPosition[index] == "o") {
                        numOfOs = numOfOs + 1;
                }
        }
        
        if (numOfOs == numOfXs) {
                return true;
        }
        else {
                return false;
        }
}

function mousePos(ev) {
	var bound = getCanvas().getBoundingClientRect();
	return [ev.clientX - bound.left, ev.clientY - bound.top];
}

function didXWin() {
        if (currentPosition[0] == "x" && currentPosition[1] == "x" && currentPosition[2] == "x" && currentPosition[3] == "x" && currentPosition[4] == "x") {
            return true;
        }
          if (currentPosition[5] == "x" && currentPosition[6] == "x" && currentPosition[7] == "x" && currentPosition[8] == "x" && currentPosition[9] == "x") {
            return true;
        }
          if (currentPosition[10] == "x" && currentPosition[11] == "x" && currentPosition[12] == "x" && currentPosition[13] == "x" && currentPosition[14] == "x") {
            return true;
        }
          if (currentPosition[15] == "x" && currentPosition[16] == "x" && currentPosition[17] == "x" && currentPosition[18] == "x" && currentPosition[19] == "x") {
            return true;
        }
          if (currentPosition[20] == "x" && currentPosition[21] == "x" && currentPosition[22] == "x" && currentPosition[23] == "x" && currentPosition[24] == "x") {
            return true;
        }
          if (currentPosition[0] == "x" && currentPosition[5] == "x" && currentPosition[10] == "x" && currentPosition[15] == "x" && currentPosition[20] == "x") {
            return true;
        }
          if (currentPosition[1] == "x" && currentPosition[6] == "x" && currentPosition[11] == "x" && currentPosition[16] == "x" && currentPosition[21] == "x") {
            return true;
        }
          if (currentPosition[2] == "x" && currentPosition[7] == "x" && currentPosition[12] == "x" && currentPosition[17] == "x" && currentPosition[22] == "x") {
            return true;
        }
         if (currentPosition[3] == "x" && currentPosition[8] == "x" && currentPosition[13] == "x" && currentPosition[18] == "x" && current Position[23] == "x") {
            return true;
         }
          if (currentPosition[4] == "x" && currentPosition[9] == "x" && currentPosition[14] == "x" && currentPosition[19] == "x" && currentPosition[24] == "x") {
            return true;
        }
          if (currentPosition[0] == "x" && currentPosition[6] == "x" && currentPosition[12] == "x" && currentPosition[18] == "x" && currentPosition[24] == "x") {
            return true;
        }
          if (currentPosition[4] == "x" && currentPosition[8] == "x" && currentPosition[12] == "x" && currentPosition[16] == "x" && currentPosition[20] == "x") {
            return true;
        }
        return false;
}

function didOWin() {
        if (currentPosition[0] == "o" && currentPosition[1] == "o" && currentPosition[2] == "o" && currentPosition[3] == "o" && currentPosition[4] == "o") {
            return true;
        }
          if (currentPosition[5] == "o" && currentPosition[6] == "o" && currentPosition[7] == "o" && currentPosition[8] == "o" && currentPosition[9] == "o") {
            return true;
        }
          if (currentPosition[10] == "o" && currentPosition[11] == "o" && currentPosition[12] == "o" && currentPosition[13] == "o" && currentPosition[14] == "o") {
            return true;
        }
          if (currentPosition[15] == "o" && currentPosition[16] == "o" && currentPosition[17] == "o" && currentPosition[18] == "o" && currentPosition[19] == "o") {
            return true;
        }
          if (currentPosition[20] == "o" && currentPosition[21] == "o" && currentPosition[22] == "o" && currentPosition[23] == "o" && currentPosition[24] == "o") {
            return true;
        }
          if (currentPosition[0] == "o" && currentPosition[5] == "o" && currentPosition[10] == "o" && currentPosition[15] == "o" && currentPosition[20] == "o") {
            return true;
        }
          if (currentPosition[1] == "o" && currentPosition[6] == "o" && currentPosition[11] == "o" && currentPosition[16] == "o" && currentPosition[21] == "o") {
            return true;
        }
          if (currentPosition[2] == "o" && currentPosition[7] == "o" && currentPosition[12] == "o" && currentPosition[17] == "o" && currentPosition[22] == "o") {
            return true;
        }
          if (currentPosition[3] == "o" && currentPosition[8] == "o" && currentPosition[13] == "o" && currentPosition[18] == "o" && currentPosition[23] == "o") {
            return true;
        }
          if (currentPosition[4] == "o" && currentPosition[9] == "o" && currentPosition[14] == "o" && currentPosition[19] == "o" && currentPosition[24] == "o") {
            return true;
        }
          if (currentPosition[0] == "o" && currentPosition[6] == "o" && currentPosition[12] == "o" && currentPosition[18] == "o" && currentPosition[24] == "o") {
            return true;
        }
          if (currentPosition[4] == "o" && currentPosition[8] == "o" && currentPosition[12] == "o" && currentPosition[16] == "o" && currentPosition[20] == "o") {
            return true;
        }
        return false;
}

function didDraw() {
        for (var index = 0; index < currentPosition.length; index++) {
                if (currentPosition[index] == "b") {
                        return false;
                }
        }
        return !didOWin() && !didXWin();
}

function mouseClickFunction(ev) {
        if (didXWin() || didOWin()) {
                return;
        }
        
        var coordinates = mouseCoordinates(ev);
        var colNum = Math.floor(coordinates[0] / 100);
        var rowNum = Math.floor(coordinates[1] / 100);
        
        if (isXsTurn()) {
                var success = putMarkHere("x", rowNum, colNum);
                if (success) {
                        drawX(rowNum, colNum);
                }
        }
        else {
                var success = putMarkHere("o", rowNum, colNum);
                if (success) {
                        drawO(rowNum, colNum);
                }
        }
        
        if (didXWin()) {
                $("#XWins").text("O WINS! Just kidding, O is actually the loser. X wins. Reload the page to play again.");
        }
        if (didOWin()) {
                $("#OWins").text("X WINS! Just kidding, X is actually the loser. O wins. Reload the page to play again.");
        }
        if (didDraw()) {
                $("#Draw").text("Somehow there is actually a winner! Who knew? Reload the page to play again.");
        }
        if (didDraw()) {
                $("#Tie").text("Just kidding. There is no winner. You're out of luck. Reload the page to play again.");
        }
}

function mouseCoordinates(ev) {
        var boundary = $("#middleCanvas")[0].getBoundingClientRect();
        return [ev.clientX - boundary.left, ev.clientY - boundary.top];
}

$(document).ready(function() {
        drawBoard();
        
        $("#middleCanvas").click(mouseClickFunction);
        
        $("#question").click(function () {
                var response = prompt("What's your favorite color?");
                $("#favoriteColor").text(response);
        })
});

