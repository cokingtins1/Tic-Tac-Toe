const box = document.querySelectorAll('.box')
const clear = document.getElementById('clear')
const displayWiner = document.getElementById('display')

const p1Text = "Player 1 (X) wins"
const p2Text = "Player 2 (O) wins"

var winner = false

let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let gameArray = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

const posArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];

const playerFactory = (name, mark, turn) => {
    return { name, mark, turn }
}

const player1 = playerFactory('player1', 'X', true)
const player2 = playerFactory('player2', 'O', false)

var clickCount = 0

let clicked = Array.from({ length: box.length }, () => false);

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', function () {

        // prevent play if there is already a winner
        if (winner == true) {
            return
        }

        else if (!clicked[i] && player1.turn == true) {
            var index = box[i].id
            box[i].textContent = player1.mark
            playGame(index, player1.mark)
            clicked[i] = true
            player1.turn = !player1.turn

        } else if (!clicked[i] && player1.turn == false) {
            var index = box[i].id
            box[i].textContent = player2.mark
            playGame(index, player2.mark)
            clicked[i] = true
            player1.turn = !player1.turn

        }
        else {
            return
        }
        clickCount += 1
        checkDraw(clickCount)
    })
}

function playGame(index, mark) {

    // position 0 through 8
    var t = parseInt(index)

    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++) {
            if (posArray[j][i] === t) {
                gameArray[j][i] = t
            }
        }
    }

    // return position index of targeted square
    var row = gameArray.findIndex(row => row.includes(t))
    var col = gameArray[row].indexOf(t)

    board[row][col] = mark
    checkWin()

}

function checkTurn() {
    if (player1.turn == true) {
        displayWiner.textContent = p1Text
        winner = true
    } else {
        displayWiner.textContent = p2Text
        winner = true
    }
    return
}


function checkWin() {

    // // check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== "" &&
            board[i][0] === board[i][1] &&
            board[i][1] === board[i][2]) {
            checkTurn()
        }

        // check columns
        if (board[0][i] !== "" &&
            board[0][i] === board[1][i] &&
            board[1][i] === board[2][i]) {
            checkTurn()
        }

        // check diagonals
        if (board[0][0] !== "" &&
            board[0][0] === board[1][1] &&
            board[1][1] === board[2][2]) {
            checkTurn()
        }

        if (board[0][2] !== "" &&
            board[0][2] === board[1][1] &&
            board[1][1] === board[2][0]) {
            checkTurn()
        }
    }
}

function checkDraw(clickCount) {
    if (clickCount === 9 && winner == false) {
        displayWiner.textContent = "Tie Game"
    }
}

// Clear button
clear.addEventListener('click', () => {
    for (let i = 0; i < box.length; i++) {
        box[i].textContent = ""
        clearBoard()
        clicked[i] = false
        player1.turn = true
        player2.turn = false
        displayWiner.textContent = ""
        clickCount = 0
        winner = false
    }
})

function clearBoard() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            board[j][i] = ""
        }
    }
}
