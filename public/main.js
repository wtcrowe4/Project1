
// 'use strict'
//import { rankBoard, rankDescription } from "../node_modules/phe"; 
//const { rankBoard, rankDescription } = require('../node_modules/phe')



//Dealer gives you the 1st & 3rd card from the deck
let deal = () => {
    shuffle(DECK)
    let playerCard1 = document.getElementById('playerCard1').src = `assets/cards/${DECK[0]}.png`
    let playerCard2 = document.getElementById('playerCard2').src = `assets/cards/${DECK[2]}.png`
}
//Dealer has DECK[1] and DECK[3] as his cards

//Dealer turns over first 3 community cards
let flop = () => {
    let communityCard1 = document.getElementById('communityCard1').src = `assets/cards/${DECK[4]}.png`
    let communityCard2 = document.getElementById('communityCard2').src = `assets/cards/${DECK[5]}.png`
    let communityCard3 = document.getElementById('communityCard3').src = `assets/cards/${DECK[6]}.png`
}

//Dealer turns over next card
let turn = () => {
    let communityCard4 = document.getElementById('communityCard4').src = `assets/cards/${DECK[7]}.png`
}

//Dealer turns over last card
let river = () => {
    let communityCard5 = document.getElementById('communityCard5').src = `assets/cards/${DECK[8]}.png`
}

//Dealer shows his cards
let dealerShows = () => {
    let dealerCard1 = document.getElementById('dealerCard1').src = `assets/cards/${DECK[1]}.png`
    let dealerCard2 = document.getElementById('dealerCard2').src = `assets/cards/${DECK[3]}.png`
}
//Event listener for first deal.
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
                    
                    //Add logic to compare hands
                    const playerHand = `${DECK[0]} ${DECK[2]} ${DECK[4]} ${DECK[5]} ${DECK[6]} ${DECK[7]} ${DECK[8]}`
                    const dealerHand = `${DECK[1]} ${DECK[3]} ${DECK[4]} ${DECK[5]} ${DECK[6]} ${DECK[7]} ${DECK[8]}`
                    const playerRank = rankBoard(playerHand)
                    const playerResult = rankDescription[playerRank]
                    const dealerRank = rankBoard(dealerHand)
                    const dealerResult = rankDescription[dealerRank]
                    const playerNum = evaluateCards([DECK[0], DECK[2], DECK[4], DECK[5], DECK[6], DECK[7], DECK[8]])
                    const dealerNum = evaluateCards([DECK[1], DECK[3], DECK[4], DECK[5], DECK[6], DECK[7], DECK[8]])
                    
                    if (playerNum < dealerNum) {
                        alert(`Player wins with a ${playerResult}`) ? "" : location.reload()
                    } else if (playerNum > dealerNum) {
                        alert(`Dealer wins with a ${dealerResult}`) ? "" : location.reload()
                    } else  {
                        alert('Hand is a tie.') ? "" : location.reload()
                    }
                    
                
                })
            })
        })
    })
})



// shuffle(DECK)
// console.log(DECK)
// const playerHand = `${DECK[0]} ${DECK[2]} ${DECK[4]} ${DECK[5]} ${DECK[6]} ${DECK[7]} ${DECK[8]}`
// const dealerHand = `${DECK[1]} ${DECK[3]} ${DECK[4]} ${DECK[5]} ${DECK[6]} ${DECK[7]} ${DECK[8]}`
// console.log(playerHand)
// console.log(dealerHand)

// const playerNum = evaluateCards([DECK[0], DECK[2], DECK[4], DECK[5], DECK[6], DECK[7], DECK[8]])
// console.log(playerNum)
// const dealerNum = evaluateCards([DECK[1], DECK[3], DECK[4], DECK[5], DECK[6], DECK[7], DECK[8]])
// console.log(dealerNum)

// const playerRank = rankBoard(playerHand)
// const playerResult = rankDescription[playerRank]
// const dealerRank = rankBoard(dealerHand)
// const dealerResult = rankDescription[dealerRank]

// console.log('Player hand is a %s', playerResult)
// console.log('Dealer hand is a %s', dealerResult)

// console.log(playerRank)
// console.log(dealerRank)



// if (playerNum < dealerNum) {
//     console.log('Player wins with a', playerResult)
// } else if (playerNum > dealerNum) {
//     console.log('Dealer wins with a', dealerResult)
// } else  {
//     console.log('Hand is a tie.')
// }