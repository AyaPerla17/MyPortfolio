let turn = "X"; // Tour du joueur actuel

function XO(cell) {
    if (cell.innerHTML === "") {
        cell.innerHTML = turn;
        if (checkWin(turn)) {
            setTimeout(() => alert(turn + " a gagné !"), 100);
            return;
        }
        turn = turn === "X" ? "O" : "X"; // Changer de joueur
    } else {
        alert("Case déjà remplie !");
    }
}

function checkWin(player) {
    const winCombos = [
        [0,1,2], [3,4,5], [6,7,8], // lignes
        [0,3,6], [1,4,7], [2,5,8], // colonnes
        [0,4,8], [2,4,6]           // diagonales
    ];

    return winCombos.some(combo => 
        combo.every(index => document.getElementById(index).innerHTML === player)
    );
}

function resetGame() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).innerHTML = "";
    }
    turn = "X";
}
