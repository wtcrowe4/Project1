//Creating Deck
const SUITS = ['s','c','d','h']
const RANKS = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']
const DECK = []

//Loop to create deck
for(var suitI = 0; suitI < 4; suitI++) {
    for(var rankI = 0; rankI < 13; rankI++) {
        DECK.push(RANKS[rankI] + SUITS[suitI])
    }
}
//Shuffle cards 
let shuffle = (deck) => {
    for(var i = 0; i < deck.length; i++) {
        var shuffledCard = deck[i]
        var randomIndex = Math.floor(Math.random() * 52)
        deck[i] = deck[randomIndex]
        deck[randomIndex] = shuffledCard
    }
}

//Function to flip cards to back and shuffle deck to start new hand
let newGame = () => {
    let playerCard1 = document.getElementById('playerCard1')
        .src = 'assets/cards/face_down.jpg'
    let playerCard2 = document.getElementById('playerCard2')
        .src = 'assets/cards/face_down.jpg'
    let dealerCard1 = document.getElementById('dealerCard1')
        .src = 'assets/cards/face_down.jpg'
    let dealerCard2 = document.getElementById('dealerCard2')
        .src = 'assets/cards/face_down.jpg'
    let communityCard1 = document.getElementById('communityCard1')
        .src = 'assets/cards/face_down.jpg'
    let communityCard2 = document.getElementById('communityCard2')
        .src = 'assets/cards/face_down.jpg'
    let communityCard3 = document.getElementById('communityCard3')
        .src = 'assets/cards/face_down.jpg'
    let communityCard4 = document.getElementById('communityCard4')
        .src = 'assets/cards/face_down.jpg'
    let communityCard5 = document.getElementById('communityCard5')
        .src = 'assets/cards/face_down.jpg'

    //Disable buttons to make sure next hands goes in order
    FlopBtn.onclick=""
    TurnBtn.onclick=""
    RiverBtn.onclick=""
    FinalBtn.onclick=""
    
    shuffle(DECK)
}

//Function to show card to clean up code
let flipCard = (card, deck) => {
    card = document.getElementById('card').src = `assets/cards/${deck}.png`
}