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