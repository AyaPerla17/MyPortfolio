let turn = "X";

function XO(cell) {
    if (cell.innerHTML === "") {
        cell.innerHTML = turn;
        cell.classList.add(turn.toLowerCase());

        if (checkWin(turn)) {
            setTimeout(() => alert(turn + " a gagné !"), 100);
            return;
        }

        // Changer de tour
        turn = turn === "X" ? "O" : "X";
        document.getElementById("turnInfo").innerText = "Tour de : " + turn;
    } else {
        alert("Case déjà remplie !");
    }
}

function checkWin(player) {
    const winCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    return winCombos.some(combo =>
        combo.every(index => document.getElementById(index).innerHTML === player)
    );
}

function resetGame() {
    for (let i = 0; i < 9; i++) {
        const cell = document.getElementById(i);
        cell.innerHTML = "";
        cell.classList.remove("x", "o");
    }
    turn = "X";
    document.getElementById("turnInfo").innerText = "Tour de : " + turn;
}
function openTicTacToe() {
    document.getElementById("ticTacToeModal").style.display = "flex";
}

function closeTicTacToe() {
    document.getElementById("ticTacToeModal").style.display = "none";
}
