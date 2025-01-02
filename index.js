let oSquares = [];
let xSquares = [];

let playerTurn = 0;
let winner = false;
let maxPlays = 9;
    
function gameOver() {
    document.getElementById("tl").classList.remove("available");
    document.getElementById("tm").classList.remove("available");
    document.getElementById("tr").classList.remove("available");
    document.getElementById("ml").classList.remove("available");
    document.getElementById("mm").classList.remove("available");
    document.getElementById("mr").classList.remove("available");
    document.getElementById("bl").classList.remove("available");
    document.getElementById("bm").classList.remove("available");
    document.getElementById("br").classList.remove("available");

    document.querySelector("h2").innerHTML = "Game Over";
}

function checkWinner() {
    if (winner === true) {
        gameOver();
    } else {
        ;
    }
}

function checkDraw() {
    if (maxPlays === 0 && winner === false) {
        document.querySelector("h1").innerHTML = "It's a draw!";
        document.querySelector("h2").innerHTML = "Game Over";
    } else {
        ;
    }
}

function checkAnswerX() {
    if (xSquares.includes("tl") && xSquares.includes("tm") && xSquares.includes("tr")) {
        document.querySelector("h1").innerHTML = "X wins!"; 
        winner = true;
        checkWinner();
    }
    else if (xSquares.includes("ml") && xSquares.includes("mm") && xSquares.includes("mr")) {
        document.querySelector("h1").innerHTML = "X wins!";
        winner = true;
        checkWinner();
    }
    else if (xSquares.includes("bl") && xSquares.includes("bm") && xSquares.includes("br")) {
        document.querySelector("h1").innerHTML = "X wins!";
        winner = true;
        checkWinner();
    }
    else if (xSquares.includes("tl") && xSquares.includes("ml") && xSquares.includes("bl")) {
        document.querySelector("h1").innerHTML = "X wins!";
        winner = true;
        checkWinner();
    }
    else if (xSquares.includes("tm") && xSquares.includes("mm") && xSquares.includes("bm")) {
        document.querySelector("h1").innerHTML = "X wins!";
        winner = true;
        checkWinner();
    }
    else if (xSquares.includes("tr") && xSquares.includes("mr") && xSquares.includes("br")) {
        document.querySelector("h1").innerHTML = "X wins!";
        winner = true;
        checkWinner();
    }
    else if (xSquares.includes("tl") && xSquares.includes("mm") && xSquares.includes("br")) {
        document.querySelector("h1").innerHTML = "X wins!";
        winner = true;
        checkWinner();
    }
    else if (xSquares.includes("tr") && xSquares.includes("mm") && xSquares.includes("bl")) {
        document.querySelector("h1").innerHTML = "X wins!";
        winner = true;
        checkWinner();
    }
    else {
    ;
    }
}

function checkAnswer0() {
    if (oSquares.includes("tl") && oSquares.includes("tm") && oSquares.includes("tr")) {
        document.querySelector("h1").innerHTML = "O wins!"; 
        winner = true;
        checkWinner();
    }
    else if (oSquares.includes("ml") && oSquares.includes("mm") && oSquares.includes("mr")) {
        document.querySelector("h1").innerHTML = "O wins!";
        winner = true;
        checkWinner();
    }
    else if (oSquares.includes("bl") && oSquares.includes("bm") && oSquares.includes("br")) {
        document.querySelector("h1").innerHTML = "O wins!";
        winner = true;
        checkWinner();
    }
    else if (oSquares.includes("tl") && oSquares.includes("ml") && oSquares.includes("bl")) {
        document.querySelector("h1").innerHTML = "O wins!";
        winner = true;
        checkWinner();
    }
    else if (oSquares.includes("tm") && oSquares.includes("mm") && oSquares.includes("bm")) {
        document.querySelector("h1").innerHTML = "O wins!";
        winner = true;
        checkWinner();
    }
    else if (oSquares.includes("tr") && oSquares.includes("mr") && oSquares.includes("br")) {
        document.querySelector("h1").innerHTML = "O wins!";
        winner = true;
        checkWinner();
    }
    else if (oSquares.includes("tl") && oSquares.includes("mm") && oSquares.includes("br")) {
        document.querySelector("h1").innerHTML = "O wins!";
        winner = true;
        checkWinner();
    }
    else if (oSquares.includes("tr") && oSquares.includes("mm") && oSquares.includes("bl")) {
        document.querySelector("h1").innerHTML = "O wins!";
        winner = true;
        checkWinner();
    }
    else {
    ;
    }
}


document.getElementById("tl").addEventListener("click", function() {

    if (playerTurn % 2 === 0 && document.getElementById("tl").classList.contains("available")) { 
        
        document.getElementById("tl").classList.add("clicked");
        setTimeout(function() {document.getElementById("tl").classList.remove("clicked")}, 50);

        document.querySelector("h2").innerHTML = "Player O's Turn";

        document.getElementById("tl").classList.add("x-item");
        document.getElementById("tl").classList.remove("available");
        xSquares.push("tl");
        playerTurn++;
        maxPlays--;
        checkAnswerX();
        checkDraw();
    } 
    else if (playerTurn % 2 === 1 && document.getElementById("tl").classList.contains("available")){
        
        document.getElementById("tl").classList.add("clicked");
        setTimeout(function() {document.getElementById("tl").classList.remove("clicked")}, 50);

        document.querySelector("h2").innerHTML = "Player X's Turn";
        
        document.getElementById("tl").classList.add("o-item");
        document.getElementById("tl").classList.remove("available");
        oSquares.push("tl");
        playerTurn++;
        maxPlays--;
        checkAnswer0();
        checkDraw();
    };

});

document.getElementById("tm").addEventListener("click", function() {

    if (playerTurn % 2 === 0 && document.getElementById("tm").classList.contains("available"))  {

        document.getElementById("tm").classList.add("clicked");
        setTimeout(function() {document.getElementById("tm").classList.remove("clicked")}, 50);

        document.querySelector("h2").innerHTML = "Player O's Turn";
        
        document.getElementById("tm").classList.add("x-item");
        document.getElementById("tm").classList.remove("available");
        xSquares.push("tm");
        playerTurn++;
        maxPlays--;
        checkAnswerX();
        checkDraw();
    } 
    else if (playerTurn % 2 === 1 && document.getElementById("tm").classList.contains("available")) {

        document.getElementById("tm").classList.add("clicked");
        setTimeout(function() {document.getElementById("tm").classList.remove("clicked")}, 50);

        document.querySelector("h2").innerHTML = "Player X's Turn";
        
        document.getElementById("tm").classList.add("o-item");
        document.getElementById("tm").classList.remove("available");
        oSquares.push("tm");
        playerTurn++;
        maxPlays--;
        checkAnswer0();
        checkDraw();
    };
});

document.getElementById("tr").addEventListener("click", function() {

    if (playerTurn % 2 === 0 && document.getElementById("tr").classList.contains("available")) {

        document.getElementById("tr").classList.add("clicked");
        setTimeout(function() {document.getElementById("tr").classList.remove("clicked")}, 50);

        document.querySelector("h2").innerHTML = "Player O's Turn";
        
        document.getElementById("tr").classList.add("x-item");
        document.getElementById("tr").classList.remove("available");
        xSquares.push("tr");
        playerTurn++;
        maxPlays--;
        checkAnswerX();
        checkDraw();
    } 
    else if (playerTurn % 2 === 1 && document.getElementById("tr").classList.contains("available")) {

        document.getElementById("tr").classList.add("clicked");
        setTimeout(function() {document.getElementById("tr").classList.remove("clicked")}, 50);

        document.querySelector("h2").innerHTML = "Player X's Turn";
        
        document.getElementById("tr").classList.add("o-item");
        document.getElementById("tr").classList.remove("available");
        oSquares.push("tr");
        playerTurn++;
        maxPlays--;
        checkAnswer0();
        checkDraw();
    };

});

document.getElementById("ml").addEventListener("click", function() {

    if (playerTurn % 2 === 0 && document.getElementById("ml").classList.contains("available")) {

        document.getElementById("ml").classList.add("clicked");
        setTimeout(function() {document.getElementById("ml").classList.remove("clicked")}, 50);

        document.querySelector("h2").innerHTML = "Player O's Turn";
        
        document.getElementById("ml").classList.add("x-item");
        document.getElementById("ml").classList.remove("available");
        xSquares.push("ml");
        playerTurn++;
        maxPlays--;
        checkAnswerX();
        checkDraw();
    } 
    else if (playerTurn % 2 === 1 && document.getElementById("ml").classList.contains("available")) {

        document.getElementById("ml").classList.add("clicked");
        setTimeout(function() {document.getElementById("ml").classList.remove("clicked")}, 50);

        document.querySelector("h2").innerHTML = "Player X's Turn";
        
        document.getElementById("ml").classList.add("o-item");
        document.getElementById("ml").classList.remove("available");
        oSquares.push("ml");
        playerTurn++;
        maxPlays--;
        checkAnswer0();
        checkDraw();
    };

});

document.getElementById("mm").addEventListener("click", function() {

    if (playerTurn % 2 === 0 && document.getElementById("mm").classList.contains("available")) {

        document.getElementById("mm").classList.add("clicked");
        setTimeout(function() {document.getElementById("mm").classList.remove("clicked")}, 50);

        document.querySelector("h2").innerHTML = "Player O's Turn";
        
        document.getElementById("mm").classList.add("x-item");
        document.getElementById("mm").classList.remove("available");
        xSquares.push("mm");
        playerTurn++;
        maxPlays--;
        checkAnswerX();
        checkDraw();
    } 
    else if (playerTurn % 2 === 1 && document.getElementById("mm").classList.contains("available")) {

        document.getElementById("mm").classList.add("clicked");
        setTimeout(function() {document.getElementById("mm").classList.remove("clicked")}, 50);

        document.querySelector("h2").innerHTML = "Player X's Turn";
        
        document.getElementById("mm").classList.add("o-item");
        document.getElementById("mm").classList.remove("available");
        oSquares.push("mm");
        playerTurn++;
        maxPlays--;
        checkAnswer0();
        checkDraw();
    };

});

document.getElementById("mr").addEventListener("click", function() {

    if (playerTurn % 2 === 0 && document.getElementById("mr").classList.contains("available")) {

        document.getElementById("mr").classList.add("clicked");
        setTimeout(function() {document.getElementById("mr").classList.remove("clicked")}, 50);

        document.querySelector("h2").innerHTML = "Player O's Turn";
        
        document.getElementById("mr").classList.add("x-item");
        document.getElementById("mr").classList.remove("available");
        xSquares.push("mr");
        playerTurn++;
        maxPlays--;
        checkAnswerX();
        checkDraw();
    } 
    else if (playerTurn % 2 === 1 && document.getElementById("mr").classList.contains("available")) {

        document.getElementById("mr").classList.add("clicked");
        setTimeout(function() {document.getElementById("mr").classList.remove("clicked")}, 50);

        document.querySelector("h2").innerHTML = "Player X's Turn";
        
        document.getElementById("mr").classList.add("o-item");
        document.getElementById("mr").classList.remove("available");
        oSquares.push("mr");
        playerTurn++;
        maxPlays--;
        checkAnswer0();
        checkDraw();
    };

});

document.getElementById("bl").addEventListener("click", function() {

    if (playerTurn % 2 === 0 && document.getElementById("bl").classList.contains("available")) {

        document.getElementById("bl").classList.add("clicked");
        setTimeout(function() {document.getElementById("bl").classList.remove("clicked")}, 50);

        document.querySelector("h2").innerHTML = "Player O's Turn";
        
        document.getElementById("bl").classList.add("x-item");
        document.getElementById("bl").classList.remove("available");
        xSquares.push("bl");
        playerTurn++;
        maxPlays--;
        checkAnswerX();
        checkDraw();
    } 
    else if (playerTurn % 2 === 1 && document.getElementById("bl").classList.contains("available")) {

        document.getElementById("bl").classList.add("clicked");
        setTimeout(function() {document.getElementById("bl").classList.remove("clicked")}, 50);

        document.querySelector("h2").innerHTML = "Player X's Turn";
        
        document.getElementById("bl").classList.add("o-item");
        document.getElementById("bl").classList.remove("available");
        oSquares.push("bl");
        playerTurn++;
        maxPlays--;
        checkAnswer0();
        checkDraw();
    };

});

document.getElementById("bm").addEventListener("click", function() {

    if (playerTurn % 2 === 0 && document.getElementById("bm").classList.contains("available")) {

        document.getElementById("bm").classList.add("clicked");
        setTimeout(function() {document.getElementById("bm").classList.remove("clicked")}, 50);

        document.querySelector("h2").innerHTML = "Player O's Turn";
        
        document.getElementById("bm").classList.add("x-item");
        document.getElementById("bm").classList.remove("available");
        xSquares.push("bm");
        playerTurn++;
        maxPlays--;
        checkAnswerX();
        checkDraw();
    } 
    else if (playerTurn % 2 === 1 && document.getElementById("bm").classList.contains("available")) {

        document.getElementById("bm").classList.add("clicked");
        setTimeout(function() {document.getElementById("bm").classList.remove("clicked")}, 50);

        document.querySelector("h2").innerHTML = "Player X's Turn";
        
        document.getElementById("bm").classList.add("o-item");
        document.getElementById("bm").classList.remove("available");
        oSquares.push("bm");
        playerTurn++;
        maxPlays--;
        checkAnswer0();
        checkDraw();
    };

});

document.getElementById("br").addEventListener("click", function() {

    if (playerTurn % 2 === 0 && document.getElementById("br").classList.contains("available")) { 

        document.getElementById("br").classList.add("clicked");
        setTimeout(function() {document.getElementById("br").classList.remove("clicked")}, 50);

        document.querySelector("h2").innerHTML = "Player O's Turn";
        
        document.getElementById("br").classList.add("x-item");
        document.getElementById("br").classList.remove("available");
        xSquares.push("br");
        playerTurn++;
        maxPlays--;
        checkAnswerX();
        checkDraw();
    } 
    else if (playerTurn % 2 === 1 && document.getElementById("br").classList.contains("available")) {

        document.getElementById("br").classList.add("clicked");
        setTimeout(function() {document.getElementById("br").classList.remove("clicked")}, 50);

        document.querySelector("h2").innerHTML = "Player X's Turn";
        
        document.getElementById("br").classList.add("o-item");
        document.getElementById("br").classList.remove("available");
        oSquares.push("br");
        playerTurn++;
        maxPlays--;
        checkAnswer0();
        checkDraw();
    };
});

document.querySelector("input").addEventListener("click", function() {

    document.querySelector("input").classList.add("clicked");
    setTimeout(function() {document.querySelector("input").classList.remove("clicked")}, 50);
        

    document.getElementById("tl").classList.add("available");
    document.getElementById("tm").classList.add("available");
    document.getElementById("tr").classList.add("available");
    document.getElementById("ml").classList.add("available");
    document.getElementById("mm").classList.add("available");
    document.getElementById("mr").classList.add("available");
    document.getElementById("bl").classList.add("available");
    document.getElementById("bm").classList.add("available");
    document.getElementById("br").classList.add("available");

    document.getElementById("tl").classList.remove("x-item");
    document.getElementById("tm").classList.remove("x-item");
    document.getElementById("tr").classList.remove("x-item");
    document.getElementById("ml").classList.remove("x-item");
    document.getElementById("mm").classList.remove("x-item");
    document.getElementById("mr").classList.remove("x-item");
    document.getElementById("bl").classList.remove("x-item");
    document.getElementById("bm").classList.remove("x-item");
    document.getElementById("br").classList.remove("x-item");

    document.getElementById("tl").classList.remove("o-item");
    document.getElementById("tm").classList.remove("o-item");
    document.getElementById("tr").classList.remove("o-item");
    document.getElementById("ml").classList.remove("o-item");
    document.getElementById("mm").classList.remove("o-item");
    document.getElementById("mr").classList.remove("o-item");
    document.getElementById("bl").classList.remove("o-item");
    document.getElementById("bm").classList.remove("o-item");
    document.getElementById("br").classList.remove("o-item");

    document.querySelector("h1").innerHTML = "Tic Tac Toe";
    document.querySelector("h2").innerHTML = "Player X's Turn";

    oSquares = [];
    xSquares = [];

    playerTurn = 0;
    winner = false;
    maxPlays = 9;
});
