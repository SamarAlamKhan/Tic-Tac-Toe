let tiles = document.querySelectorAll(".tile");
let turnContainer = document.querySelector(".turnContainer");
let winnerContainer = document.querySelector(".winner");
let scoreContainer = document.querySelector(".score");
let newGameBtn = document.querySelector("#newGame");
let resetGameBtn = document.querySelector("#resetGame")

let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let turnO = true;

tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        if(turnO) {
            tile.innerText = "O";
            turnO = false;
            turnContainer.innerText = "Turn of Player 'X'";
        } else {
            tile.innerText = "X";
            turnO= true;
            turnContainer.innerText = "Turn of Player 'O'";
        }
        tile.disabled = true;
        checkWinner();
    })
});

let winsX = 0;
let winsO = 0;

let checkWinner = () => {
    for(let pattern of winningPatterns) {
        let position1 = tiles[pattern[0]].innerText;
        let position2 = tiles[pattern[1]].innerText;
        let position3 = tiles[pattern[2]].innerText;

        if(position1 !== "" && position1 === position2 && position2 === position3) {
            if(turnO) {
                winsX++;
                winnerContainer.innerText = "Winner is X";
            } else {
                winsO++;
                winnerContainer.innerText = "Winner is O";
            }
            
            tiles.forEach((tile) => {
                tile.disabled = true;
            })
        };
        scoreContainer.innerHTML = `X : ${winsX}<br>O : ${winsO}`;
    };
};

function newGame() {
    turnO = true;
    tiles.forEach((tile) => {
        tile.disabled = false;
        tile.innerText = "";
        winnerContainer.innerText = "";
    });
};


function resetGame() {
    turnO = true;
    tiles.forEach((tile) => {
        tile.disabled = false;
        tile.innerText = "";
        winnerContainer.innerText = "";
    });
    winsX = 0;
    winsO = 0;
    scoreContainer.innerHTML = `X : ${winsX}<br>O : ${winsO}`;
};