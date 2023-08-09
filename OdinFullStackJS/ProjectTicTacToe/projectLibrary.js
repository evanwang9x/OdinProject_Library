let gameBoard = [[null,null,null], [null,null,null], [null, null, null]]

function ticTacToe() {
    let playerOrder = 0;

    const headButton = document.getElementById("headerButton")
    const ticTacToeMainContainer = document.getElementById("ticTacToeMainContainer")
    const overlay = document.getElementById("overlay");
    headButton.onclick = function() {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
    }
    
    for(let i =0; i<9; i++) {
        const newDiv = document.createElement("button")
        newDiv.classList.add("ticTacToeSubContainer")
        newDiv.id = "ticTacToeSubContainer"
        ticTacToeMainContainer.appendChild(newDiv)
    }
    document.getElementById("ticTacToeMainContainer").addEventListener("click", function(event) {
        const target = event.target
        const children = Array.from(ticTacToeMainContainer.children);
        const position = children.indexOf(target);
        let row = 0
        const col = position % 3
        if(position < 3 && position >= 0) {
           row = 0
        }
        else if(position < 6 && position >= 3) {
           row = 1
        }
        else if(position < 9 && position >= 6) {
            row = 2
        }  
        if (target.classList == "ticTacToeSubContainer") {
        if (playerOrder % 2 == 0) {
            if(target.classList.contains("ticTacToeSubContainer")) {
                target.textContent = "X"
                gameBoard[row][col] = "X"
                playerOrder += 1
                target.classList.remove("ticTacToeSubContainer")
                target.classList.add("ticTacToeSubContainerV2")
            }
        }
        else if (playerOrder % 2 == 1) {
            if(target.classList.contains("ticTacToeSubContainer")) {
                target.textContent = "O"
                gameBoard[row][col] = "O"
                playerOrder += 1
                target.classList.remove("ticTacToeSubContainer")
                target.classList.add("ticTacToeSubContainerV2")
            }
        }
        if(playerOrder == 9) {
            endgame("No Winner")
        }
        }
        if (gameBoard[0][0] && gameBoard[0][0] === gameBoard[0][1] && gameBoard[0][0] === gameBoard[0][2]) {
            if (gameBoard[0][0] === "X") {
                const winningPlayer = "X";
                endgame(winningPlayer);
            } else {
                const winningPlayer = "O";
                endgame(winningPlayer);
            }
        } 
        else if (gameBoard[1][0] && gameBoard[1][0] === gameBoard[1][1] && gameBoard[1][0] === gameBoard[1][2]) {
            if (gameBoard[1][0] === "X") {
                const winningPlayer = "X";
                endgame(winningPlayer);
            } else {
                const winningPlayer = "O";
                endgame(winningPlayer);
            }
        } 
        else if (gameBoard[2][0] && gameBoard[2][0] === gameBoard[2][1] && gameBoard[2][0] === gameBoard[2][2]) {
            if (gameBoard[2][0] === "X") {
                const winningPlayer = "X";
                endgame(winningPlayer);
            } else {
                const winningPlayer = "O";
                endgame(winningPlayer);
            }
        } 
        else if (gameBoard[0][0] && gameBoard[0][0] === gameBoard[1][0] && gameBoard[0][0] === gameBoard[2][0]) {
            if (gameBoard[0][0] === "X") {
                const winningPlayer = "X";
                endgame(winningPlayer);
            } else {
                const winningPlayer = "O";
                endgame(winningPlayer);
            }
        } 
        else if (gameBoard[0][1] && gameBoard[0][1] === gameBoard[1][1] && gameBoard[0][1] === gameBoard[2][1]) {
            if (gameBoard[0][1] === "X") {
                const winningPlayer = "X";
                endgame(winningPlayer);
            } else {
                const winningPlayer = "O";
                endgame(winningPlayer);
            }
        } 
        else if (gameBoard[0][2] && gameBoard[0][2] === gameBoard[1][2] && gameBoard[0][2] === gameBoard[2][2]) {
            if (gameBoard[0][2] === "X") {
                const winningPlayer = "X";
                endgame(winningPlayer);
            } else {
                const winningPlayer = "O";
                endgame(winningPlayer);
            }
        } 
        else if (gameBoard[0][0] && gameBoard[0][0] === gameBoard[1][1] && gameBoard[0][0] === gameBoard[2][2]) {
            if (gameBoard[0][0] === "X") {
                const winningPlayer = "X";
                endgame(winningPlayer);
            } else {
                const winningPlayer = "O";
                endgame(winningPlayer);
            }
        } 
        else if (gameBoard[0][2] && gameBoard[0][2] === gameBoard[1][1] && gameBoard[0][2] === gameBoard[2][0]) {
            if (gameBoard[0][2] === "X") {
                const winningPlayer = "X";
                endgame(winningPlayer);
            } else {
                const winningPlayer = "O";
                endgame(winningPlayer);
            }
        }
        
    })

}
function endgame(winningPlayer) {
    overlay.style.display = "block"
    document.getElementById("myForm").style.display = "block"
    const button = document.createElement("button")
    button.textContent = `Play Again!`
    const image = document.createElement("img")
    button.classList.add("replayButton")
    button.id = "replayButton"
    image.classList.add("imageStyle")
    if (winningPlayer == "X") {
        document.getElementById("myForm").innerHTML = `Congratulations Player 1 your winner! <br>`
        image.src = "https://w0.peakpx.com/wallpaper/514/696/HD-wallpaper-letter-x-in-fire-alphabet.jpg"
        document.getElementById("myForm").appendChild(image)
        document.getElementById("myForm").appendChild(button)
    }
    else if (winningPlayer == "O") {
        document.getElementById("myForm").innerHTML = `Congratulations Player 2 your winner! <br>`
        image.src = "https://e0.pxfuel.com/wallpapers/567/176/desktop-wallpaper-the-fiery-english-alphabet-o-resolution-alphabet-alphabet-alphabet-english-cool.jpg"
        document.getElementById("myForm").appendChild(image)
        document.getElementById("myForm").appendChild(button)

    }
    else if (winningPlayer == "No Winner") {
        document.getElementById("myForm").innerHTML = `Draw!<br>`
        image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Emoticon_Face_Frown_GE.png/440px-Emoticon_Face_Frown_GE.png"
        document.getElementById("myForm").appendChild(image)
        document.getElementById("myForm").appendChild(button)
    }
    replayButton.onclick = function() {
        window.location.href = "file:///Users/evanwang/Documents/Coding/OdinProject_Library/OdinFullStackJS/ProjectTicTacToe/index.html?"
    }
}
ticTacToe()
