document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })


})

function handleClick(event) {
    console.log(event.target)
    let square = event.target;
    let position = square.id;
    let winnerPlayer = playerTime;
    let blockH3 = document.getElementsByTagName("h3")[0]
    if (winnerPlayer == 0) {
        winner = "O vencedor foi o jogador O"
    }
    else {
        winner = "O vencedor foi o jogador X"
    }
    if (handleMove(position)) {

        setTimeout(() => { alert("O Jogo Acabou. " + winner) }, 10);
        blockH3.innerHTML = '<h3> O jogador ' + jogador + ' venceu! </h3>'
    };
    if (gameOver_Velha) {

        setTimeout(() => { alert("O Jogo Acabou. Deu Velha") }, 10);
        blockH3.innerHTML = '<h3> Deu velha. </h3>'
    };
    updateSquares()
}

function updateSquares() {
    let squares = document.querySelectorAll(".square");
    let vez = document.getElementsByTagName("p")[0]
    if (playerTime == 0) {
        jogador = "<img src = './images/circle.png' width='15px'>"
    }
    else {
        jogador = "<img src = './images/x.png' width='15px'>"
    }
    vez.innerHTML = '<p> É a vez do Jogador ' + jogador + '</p>'
    squares.forEach((square) => {
        let position = square.id
        let symbol = board[position];

        if (symbol != '') {
            square.innerHTML = '<div class =' + symbol + '></div>'
        }
    })
}

function resetGame() {
    reset()
    let squares = document.querySelectorAll(".square");
    let vez = document.getElementsByTagName("p")[0]
    let blockH3 = document.getElementsByTagName("h3")[0]

    vez.innerHTML = "<p>É a vez do Jogador <img src='./images/circle.png' width='15px'></p>"
    blockH3.innerHTML = "<h3></h3>"



    squares.forEach((square) => {
        let position = square.id
        let symbol = board[position];


        square.innerHTML = '<div></div>'

    })

}



