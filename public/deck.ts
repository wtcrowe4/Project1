//Creating Deck
const SUITS: Array<string> = ['s','c','d','h']
const RANKS: Array<string> = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']
const DECK: Array<string> = []


//Loop to create deck
for(var suitI = 0; suitI < 4; suitI++) {
    for(var rankI = 0; rankI < 13; rankI++) {
        DECK.push(RANKS[rankI] + SUITS[suitI])
    }
}
//Shuffle cards 
let shuffle = (deck: Array<string>) => {
    for(var i = 0; i < deck.length; i++) {
        var shuffledCard = deck[i]
        var randomIndex = Math.floor(Math.random() * 52)
        deck[i] = deck[randomIndex]
        deck[randomIndex] = shuffledCard
    }
}

//Function to flip cards to back and shuffle deck to start new hand
let newGame = () => {
    let playerCard1 = document.getElementById('playerCard1') as HTMLImageElement
    playerCard1.src = 'assets/cards/face_down.jpg'
    let playerCard2 = document.getElementById('playerCard2') as HTMLImageElement
    playerCard2.src = 'assets/cards/face_down.jpg'
    let dealerCard1 = document.getElementById('dealerCard1') as HTMLImageElement
    dealerCard1.src = 'assets/cards/face_down.jpg'
    let dealerCard2 = document.getElementById('dealerCard2') as HTMLImageElement
    dealerCard2.src = 'assets/cards/face_down.jpg'
    let communityCard1 = document.getElementById('communityCard1') as HTMLImageElement
    communityCard1.src = 'assets/cards/face_down.jpg'
    let communityCard2 = document.getElementById('communityCard2') as HTMLImageElement
    communityCard2.src = 'assets/cards/face_down.jpg'
    let communityCard3 = document.getElementById('communityCard3') as HTMLImageElement
    communityCard3.src = 'assets/cards/face_down.jpg'
    let communityCard4 = document.getElementById('communityCard4') as HTMLImageElement
    communityCard4.src = 'assets/cards/face_down.jpg'
    let communityCard5 = document.getElementById('communityCard5') as HTMLImageElement
    communityCard5.src = 'assets/cards/face_down.jpg'

    //Disable buttons to make sure next hands goes in order
    function resetButtons() {
    let FlopBtn = document.getElementById('FlopBtn') as HTMLButtonElement
    FlopBtn.disabled = true
    let TurnBtn = document.getElementById('TurnBtn') as HTMLButtonElement
    TurnBtn.disabled = true
    let RiverBtn = document.getElementById('RiverBtn') as HTMLButtonElement
    RiverBtn.disabled = true
    let FinalBtn = document.getElementById('FinalBtn') as HTMLButtonElement
    FinalBtn.disabled = true
    
    // TurnBtn.onclick=""
    // RiverBtn.onclick=""
    // FinalBtn.onclick=""
    }
    resetButtons()
    shuffle(DECK)
}

//Function to show card to clean up code
let flipCard = (card: HTMLImageElement, deck: Array<string>) => {
    card = document.getElementById('card') as HTMLImageElement
    card.src = `assets/cards/${deck}.png`
}