const box = document.querySelectorAll('.box')




const posArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];

const winArray = [
    [0, 1, 2],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [0, 4, 8]
]

var player = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
var player2 = []
var count = 0

box.forEach(e => e.addEventListener('click', () => {
    // position 0 through 8
    var t = parseInt(e.id)
    player2.push(t)

    var gameArray = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    // let counter = 0
    // for (let j = 0; j < 3; j++) {
    //     for (let i = 0; i < 3; i++) {

    //         if (posArray[j][i] === t) {
    //             gameArray[j][i] = 1
    //         }

    //         if (gameArray[j][i] === 0) {
    //             counter +=1
    //             }

    //             else{player2.push(counter)
    
    //             }
    //     }

    // }

    // for(let [index, combo] of winArray.entries()){
    //     console.log(combo)
    // }

console.log(player2)

}))

    // const array = [,,1]
    // if(!array[0]){
    //     console.log("array is empty")
    // }

    // console.log(array[0])
    // for (let j = 0; j<3; j++) {
    //     for (let i = 0; i < 3; i++) {

    //         if (gameArray[j][i] != 0) {
    //             var row = gameArray.findIndex(row => row.includes(t))
    //             var col = gameArray[row].indexOf(t)
    //             player.push()

    //         }


    //     }

    // }


    // find position of target (t) within gameArray

    // console.log(row,col)

    // for (const [key, value] of Object.entries(posArray)) {
    //     console.log(`${key}: ${value}`);
    //   }

// function checkScore(){
//
// }


// console.log(box)