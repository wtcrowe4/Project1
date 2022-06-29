//Functions
//Dealer gives you the 1st & 3rd card from the deck
let deal = () => {
    let playerCard1 = document.getElementById('playerCard1')
        .src = `assets/cards/${DECK[0]}.png`
    let playerCard2 = document.getElementById('playerCard2')
        .src = `assets/cards/${DECK[2]}.png`
}

//Dealer has second and fourth,DECK[1] and DECK[3] as his cards
//Dealer turns over first 3 community cards DECK[4,5,6]
let flop = () => {
    let communityCard1 = document.getElementById('communityCard1')
        .src = `assets/cards/${DECK[4]}.png`
    let communityCard2 = document.getElementById('communityCard2')
        .src = `assets/cards/${DECK[5]}.png`
    let communityCard3 = document.getElementById('communityCard3')
        .src = `assets/cards/${DECK[6]}.png`
}

//Dealer turns over next card DECK[7]
let turn = () => {
    let communityCard4 = document.getElementById('communityCard4')
        .src = `assets/cards/${DECK[7]}.png`
}

//Dealer turns over last card DECK[8]
let river = () => {
    let communityCard5 = document.getElementById('communityCard5')
        .src = `assets/cards/${DECK[8]}.png`
}

//Dealer shows his cards and then we evaluate the hands.
let dealerShows = () => {
    //Dealer cards
    let dealerCard1 = document.getElementById('dealerCard1')
        .src = `assets/cards/${DECK[1]}.png`
    let dealerCard2 = document.getElementById('dealerCard2')
        .src = `assets/cards/${DECK[3]}.png`
    
    //Evaluating hands
    const playerHand = `${DECK[0]} ${DECK[2]} ${DECK[4]} ${DECK[5]} ${DECK[6]} ${DECK[7]} ${DECK[8]}`
    const dealerHand = `${DECK[1]} ${DECK[3]} ${DECK[4]} ${DECK[5]} ${DECK[6]} ${DECK[7]} ${DECK[8]}`
    const playerRank = rankBoard(playerHand)
    const playerResult = rankDescription[playerRank]
    const dealerRank = rankBoard(dealerHand)
    const dealerResult = rankDescription[dealerRank]
    const playerNum = evaluateCards([DECK[0], DECK[2], DECK[4], DECK[5], DECK[6], DECK[7], DECK[8]])
    const dealerNum = evaluateCards([DECK[1], DECK[3], DECK[4], DECK[5], DECK[6], DECK[7], DECK[8]])
    var playerScore = 0
    var dealerScore = 0                 
    if (playerNum < dealerNum) {
        playerScore++
        alert(`Player wins with a ${playerResult}`) ? "" : location.reload()
        //newGame()
    } else if (playerNum > dealerNum) {
        dealerScore++
        alert(`Dealer wins with a ${dealerResult}`) ? "" : location.reload()
        //newGame()
    } else  {
        alert(`Hand is tied with a ${playerResult}.`) ? "" : location.reload() 
        //newGame
    }
   
    //Updating scoreboard 
    // let scoreBoard = document.getElementById('scoreboard')
    // scoreBoard.textContent = 'Player Hands Won: ' + playerScore + 'Dealer Hands Won: ' + dealerScore

}

//Messy working Code
//First we shuffle our deck
shuffle(DECK)
//Event listener for deal.
let DealBtn = document.getElementById('dealbtn').addEventListener('click', () => {
    deal()
    //Event listener for the flop.
    let FlopBtn = document.getElementById('flopbtn').addEventListener('click', () => {
        flop()
        //Event listener for the turn.
        let TurnBtn = document.getElementById('turnbtn').addEventListener('click', () => {
            turn()
            //Event listener for the river.
            let RiverBtn = document.getElementById('riverbtn').addEventListener('click', () => {
                river()
                //Dealer shows his hand.
                let FinalBtn = document.getElementById('finalbtn').addEventListener('click', () => {
                    dealerShows()
                })
            })
        })
    })
})





//Cleaner code
//Button assignment
// let DealBtn = document.getElementById('dealbtn')
// let FlopBtn = document.getElementById('flopbtn')
// let TurnBtn = document.getElementById('turnbtn')
// let RiverBtn = document.getElementById('riverbtn')
// let FinalBtn = document.getElementById('finalbtn')





 