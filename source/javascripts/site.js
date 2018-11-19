// declaring DOM variables
let rock, paper, scissors
// declaring global variables
let userChoice, computerChoice
// setting DOM variables when the DOM is loaded
document.addEventListener('DOMContentLoaded', event => {
    rock = document.querySelector('#rock')
    paper = document.querySelector('#paper')
    scissors = document.querySelector('#scissors')

    rock.addEventListener('click', event => {
        userChoice = 'rock'
        determineWinner()
    })

    paper.addEventListener('click', event => {
        userChoice = 'paper'
        determineWinner()
    })

    scissors.addEventListener('click', event => {
        userChoice = 'scissors'
        determineWinner()
    })
})

const randomize = () => {
    let number = Math.floor(Math.random() * 3)
    switch(number) {
        case 0:
            computerChoice = 'rock'
            break
        case 1:
            computerChoice = 'paper'
            break
        case 2:
            computerChoice = 'scissors'
            break
    }
}

const determineWinner = () => {
    if (userChoice == computerChoice) {
        console.log('It is a tie!')
    } else if (userChoice == 'rock' && computerChoice == 'paper') {
        console.log('Computer wins!')
        gameOver()
    } else if (userChoice == 'rock' && computerChoice == 'scissors') {
        console.log('Computer wins!')
        gameOver()
    } else if (userChoice == 'paper' && computerChoice == 'rock') {
        console.log('User wins!')
    } else if (userChoice == 'paper' && computerChoice == 'scissors') {
        console.log('Computer wins!')
        gameOver()
    } else if (userChoice == 'scissors' && computerChoice == 'paper') {
        console.log('User wins!')
    } else if (userChoice == 'scissors' && computerChoice == 'rock') {
        console.log('Computer wins!')
        gameOver()
    }
    console.log(`${userChoice} and ${computerChoice}`)
}

randomize()