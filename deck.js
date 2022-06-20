//Creating Deck
const SUITS = ['S','C','D','H']
const RANKS = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
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
shuffle(DECK)
console.log(DECK)

let computerCard1 = document.getElementById('computerCard1').src = `assets/cards/${DECK[0]}.png`

//Linking pictures to each card
// const CARDS = [{card:'2S', img:'assets/cards/2_of_spades.png'},
//                 {card:'3S', img:'assets/cards/3_of_spades.png'},
//                 {card:'4S', img:'assets/cards/4_of_spades.png'},
//                 {card:'5S', img:'assets/cards/5_of_spades.png'},
//                 {card:'6S', img:'assets/cards/6_of_spades.png'},
//                 {card:'7S', img:'assets/cards/7_of_spades.png'},   
//                 {card:'8S', img:'assets/cards/8_of_spades.png'},
//                 {card:'9S', img:'assets/cards/9_of_spades.png'},
//                 {card:'10S', img:'assets/cards/10_of_spades.png'},
//                 {card:'JS', img:'assets/cards/jack_of_spades2.png'},
//                 {card:'QS', img:'assets/cards/queen_of_spades2.png'},
//                 {card:'KS', img:'assets/cards/king_of_spades2.png'},
//                 {card:'AS', img:'assets/cards/ace_of_spades.png'},

//             ]


// let computerCard1 = document.getElementById('computerCard1').src = CARDS[12].img
// let computerCard2 = document.getElementById('computerCard2').src = CARDS[11].img