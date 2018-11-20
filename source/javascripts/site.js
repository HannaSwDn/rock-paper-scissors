// declaring DOM variables
let rock, paper, scissors, p_points, div_update, div_gameover

// declaring global variables
let userChoice, computerChoice
let userPoints = 0
let computerPoints = 0

// setting DOM variables when the DOM is loaded
document.addEventListener('DOMContentLoaded', event => {
    rock = document.querySelector('#rock')
    paper = document.querySelector('#paper')
    scissors = document.querySelector('#scissors')
    p_points = document.querySelector('#points')
    div_update = document.querySelector('#update')
    div_gameover = document.querySelector('#gameover')

    rock.addEventListener('click', event => {
        userChoice = 'rock'
        randomize()
        determineWinner()
    })

    paper.addEventListener('click', event => {
        userChoice = 'paper'
        randomize()
        determineWinner()
    })

    scissors.addEventListener('click', event => {
        userChoice = 'scissors'
        randomize()
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
        tie()
    } else if (userChoice == 'rock' && computerChoice == 'paper') {
        // gameOver()
        addComputerPoints()
    } else if (userChoice == 'rock' && computerChoice == 'scissors') {
        addUserPoints()
    } else if (userChoice == 'paper' && computerChoice == 'rock') {
        addUserPoints()
    } else if (userChoice == 'paper' && computerChoice == 'scissors') {
        // gameOver()
        addComputerPoints()
    } else if (userChoice == 'scissors' && computerChoice == 'paper') {
        addUserPoints()
    } else if (userChoice == 'scissors' && computerChoice == 'rock') {
        // gameOver()
        addComputerPoints()
    }
}

const addUserPoints = () => {
    userPoints++
    div_update.style.backgroundColor = 'lightgreen'
    p_points.innerHTML = `You have ${userPoints} points, computer has ${computerPoints} points`
    update()
    endGame()
}

const addComputerPoints = () => {
    computerPoints++
    div_update.style.backgroundColor = 'red'
    p_points.innerHTML = `You have ${userPoints} points, computer has ${computerPoints} points`
    update()
}

const tie = () => {
    div_update.style.backgroundColor = 'lightblue'
    update()
}

const update = () => {
    div_update.innerHTML = `You chose ${userChoice}, computer chose ${computerChoice}`
}

const win = () => {
    points = 0
    div_win.style.display = 'block'
}

const gameOver = () => {
    points = 0
    div_gameover.style.display = 'block'
}