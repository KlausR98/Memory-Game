const cardArray = [
    {
        name: 'fries',
        img:  'fries.png',
    },
    {
        name: 'pizza',
        img:  'pizza.png',
    },
    {
        name: 'blank',
        img:  'blank.png',
    },
    {
        name: 'hot-dog',
        img:  'hot-dog.jpg',
    },
    {
        name: 'milkshake',
        img:  'milkshake.jpg',
    },
    {
        name: 'white',
        img:  'white.png',
    },
    {
        name: 'ice-cream',
        img:  'ice-cream.jpg',
    },
    {
        name: 'cheeseburger',
        img:  'cheeseburger.jpg',
    },
        {
        name: 'fries',
        img:  'fries.png',
    },
    {
        name: 'pizza',
        img:  'pizza.png',
    },
    {
        name: 'blank',
        img:  'blank.png',
    },
    {
        name: 'hot-dog',
        img:  'hot-dog.jpg',
    },
    {
        name: 'milkshake',
        img:  'milkshake.jpg',
    },
    {
        name: 'white',
        img:  'white.png',
    },
    {
        name: 'ice-cream',
        img:  'ice-cream.jpg',
    },
    {
        name: 'cheeseburger',
        img:  'cheeseburger.jpg',
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match')
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'blank.png')
        cards[optionTwoId].setAttribute('src', 'blank.png')
        alert('Kliknąłeś w te samą kartę!')
    }
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('Znalazłeś/aś parę!')
        cards[cardsChosenIds[0]].setAttribute('src', 'white.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'white.png')
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'blank.png')
        cards[optionTwoId].setAttribute('src', 'blank.png')
        alert('Spróbuj jeszcze raz!')
    }
    resultDisplay.textContent = cardsWon.length

    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = 'Gratulacje! Wygrałeś!'
    }

}

function flipCard() {
    console.log(cardArray)
    const cardId = this.getAttribute('data-id') 
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    console.log('clicked', cardId)
    console.log(cardsChosen)
    this.setAttribute('src', cardArray[cardId].img)    
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
}
 