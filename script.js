const box = document.querySelectorAll('.box')

// const player1 = 'X'
// const plater2 = 'O'

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
    return {name, mark, turn}
}

const player1 = playerFactory('player1', 'X', true)
const player2 = playerFactory('player2', 'O', false)



let clicked = Array.from({length:box.length},() => false);

for (let i=0;i<box.length; i++){
    box[i].addEventListener('click', function(){
        if(!clicked[i] && player1.turn == true){
            var index = box[i].id
            playGame(index,player1.mark)
            clicked[i] = true
            player1.turn = !player1.turn
            // console.log(player1.turn)
        } else if(!clicked[i] && player1.turn == false) {
            var index = box[i].id
            playGame(index,player2.mark)
            clicked[i] = true
            player1.turn = !player1.turn
            // console.log(player1.turn)
            
        }
        else{
            return
        }
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

    console.log(board)

    checkWin()



    
}



function checkWin() {

    // // check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {

            console.log(' shit you won')
        }

    }

    // check columns
    for (let i = 0; i < 3; i++) {
        if (board[0][i] === 'x' &&
            board[1][i] === 'x' &&
            board[2][i] === 'x') {

            console.log('holy shit you won')
        }

    }

    // check diagonals
    if (board[0][0] === 'x' &&
        board[1][1] === 'x' &&
        board[2][2] === 'x') {

        console.log('holy shit you won')
    }

    if (board[0][2] === 'x' &&
        board[1][1] === 'x' &&
        board[2][0] === 'x') {

        console.log('holy shit you won')
    }


}
