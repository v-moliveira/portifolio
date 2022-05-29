const FRONT = "front"
const BACK = "back"
let level = 0;

Alltechs = ["bootstrap",
    "css",
    "electron",
    "firebase",
    "html",
    "javascript",
    "jquery",
    "mongo",
    "node",
    "react"]

window.onload = function () {
    levelSelect()
}


function easy() {
    level = 0;
    levelSelect()
    let gameOverLayer = document.getElementById("start")
    gameOverLayer.style.display = "none"
}
function medium() {
    level = 1;
    levelSelect()
    let gameOverLayer = document.getElementById("start")
    gameOverLayer.style.display = "none"
}
function hard() {
    level = 2;
    levelSelect()
    let gameOverLayer = document.getElementById("start")
    gameOverLayer.style.display = "none"
}


let board = document.getElementById("gameBoard")

function levelSelect() {
    if (level == 0) {
        board.style.gridTemplate = "1fr 1fr 1fr / 1fr 1fr"
        let initialValue = Math.floor(Math.random() * 6)
        let finalValue = initialValue + 5
        techs = Alltechs.slice(initialValue, finalValue)

    }
    else if (level == 1) {
        board.style.gridTemplate = "1fr 1fr 1fr 1fr / 1fr 1fr 1fr 1fr"
        let initialValue = Math.floor(Math.random() * 3)
        let finalValue = initialValue + 8
        techs = Alltechs.slice(initialValue, finalValue)

    } else {
        board.style.gridTemplate = "1fr 1fr 1fr 1fr 1fr / 1fr 1fr 1fr 1fr"
        techs = Alltechs

    }
    restart()
}

startGame()

function startGame() {
    initializeCards(game.createCardFromTechs())
}

function initializeCards(cards) {
    let gameBoard = document.getElementById("gameBoard")
    gameBoard.innerHTML = ""

    for (let card of game.cards) {
        let cardElement = document.createElement("div");
        cardElement.id = card.id;
        cardElement.classList.add("card");
        cardElement.dataset.icon = card.icon
        cardElement.addEventListener("click", flipCard)

        createCardContent(card, cardElement)

        gameBoard.appendChild(cardElement)
    }

}

function createCardContent(card, cardElement) {
    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement)
}

function createCardFace(face, card, element) {
    let cardElementFace = document.createElement("div")
    cardElementFace.classList.add(face)
    if (face == FRONT) {
        let iconElement = document.createElement("img")
        iconElement.classList.add("icon")
        iconElement.src = "images/" + card.icon + ".png"
        cardElementFace.appendChild(iconElement)
    } else {
        cardElementFace.innerHTML = "&lt/&gt"
    }
    element.appendChild(cardElementFace)
}


function flipCard() {
    let contador = document.getElementById("contador")
    if (game.setCard(this.id)) {
        this.classList.add("flip")
        if (game.secondCard) {
            if (game.checkMatch()) {
                game.clearCards();
                game.counter++
                contador.innerHTML = "Número de Jogadas: " + game.counter
                if (game.checkGameOver()) {
                    let gameOverLayer = document.getElementById("gameOver")
                    gameOverLayer.style.display = "flex"
                }
            } else {
                setTimeout(() => {
                    let firstCardView = document.getElementById(game.firstCard.id)
                    let secondCardView = document.getElementById(game.secondCard.id)
                    game.counter++
                    contador.innerHTML = "Número de Jogadas: " + game.counter
                    firstCardView.classList.remove("flip")
                    secondCardView.classList.remove("flip")
                    game.unflipCards()
                }, 1000)
            }
        }
    }

}

function restart() {
    game.clearCards()
    counter = 0
    startGame();
    let gameOverLayer = document.getElementById("gameOver")
    gameOverLayer.style.display = "none"
}