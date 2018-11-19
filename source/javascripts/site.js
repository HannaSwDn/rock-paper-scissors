// declaring DOM variables
let rock, paper, scissors, p_points

// declaring global variables
let userChoice, computerChoice
let points = 0

// setting DOM variables when the DOM is loaded
document.addEventListener('DOMContentLoaded', event => {
    rock = document.querySelector('#rock')
    paper = document.querySelector('#paper')
    scissors = document.querySelector('#scissors')
    p_points = document.querySelector('#points')

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

// this function decides the value of computerChoice variable
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
        gameOver()
    } else if (userChoice == 'rock' && computerChoice == 'scissors') {
        addPoints()
    } else if (userChoice == 'paper' && computerChoice == 'rock') {
        addPoints()
    } else if (userChoice == 'paper' && computerChoice == 'scissors') {
        gameOver()
    } else if (userChoice == 'scissors' && computerChoice == 'paper') {
        addPoints()
    } else if (userChoice == 'scissors' && computerChoice == 'rock') {
        gameOver()
    }
    console.log(`${userChoice} and ${computerChoice}`)
}

const addPoints = () => {
    points++
    p_points.innerHTML = `You have ${points} points`
}

const gameOver = () => {
    points = 0
    p_points.innerHTML = `You have ${points} points`
}

randomize()