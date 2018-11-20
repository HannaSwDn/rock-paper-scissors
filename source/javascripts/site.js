// declaring DOM variables
let rock, paper, scissors, p_points, div_update

// declaring global variables
let userChoice, computerChoice
let points = 0

// setting DOM variables when the DOM is loaded
document.addEventListener('DOMContentLoaded', event => {
    rock = document.querySelector('#rock')
    paper = document.querySelector('#paper')
    scissors = document.querySelector('#scissors')
    p_points = document.querySelector('#points')
    div_update = document.querySelector('#update')

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
        console.log('It is a tie!')
    } else if (userChoice == 'rock' && computerChoice == 'paper') {
        gameOver()
    } else if (userChoice == 'rock' && computerChoice == 'scissors') {
        addPoints()
        update()
    } else if (userChoice == 'paper' && computerChoice == 'rock') {
        addPoints()
        update()
    } else if (userChoice == 'paper' && computerChoice == 'scissors') {
        gameOver()
    } else if (userChoice == 'scissors' && computerChoice == 'paper') {
        addPoints()
        update()
    } else if (userChoice == 'scissors' && computerChoice == 'rock') {
        gameOver()
    }
    console.log(`${userChoice} and ${computerChoice}`)
}

const update = () => {
    div_update.style.backgroundColor = 'lightgreen'
    div_update.style.height = '15vh'
    div_update.innerHTML = `You chose ${userChoice}, computer chose ${computerChoice}`
    setTimeout(function(){
        div_update.style.height = '0vh'
    }, 1500);
}

const addPoints = () => {
    points++
    p_points.innerHTML = `You have ${points} points`
}

const gameOver = () => {
    points = 0
    div_update.style.backgroundColor = 'red'
    div_update.innerHTML = `You chose ${userChoice}, computer chose ${computerChoice}... game over`
    p_points.innerHTML = `You have ${points} points`
}