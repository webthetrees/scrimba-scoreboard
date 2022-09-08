let scoreHome = document.getElementById("score_home")
let scoreGuest = document.getElementById("score_guest")
let previousGame = document.getElementById("previous-games")
let newScorehome = 0
let newScoreguest = 0

function home1() {
    newScorehome += 1
    scoreHome.textContent = newScorehome
}
function home2() {
    newScorehome += 2
    scoreHome.textContent = newScorehome
}
function home3() {
    newScorehome += 3
    scoreHome.textContent = newScorehome
}

function guest1() {
    newScoreguest += 1
    scoreGuest.textContent = newScoreguest
}
function guest2() {
    newScoreguest += 2
    scoreGuest.textContent = newScoreguest
}
function guest3() {
    newScoreguest += 3
    scoreGuest.textContent = newScoreguest
}

function newGame(){
    previousGame.textContent += " " + newScorehome + " - " + newScoreguest
    newScorehome = 0
    newScoreguest = 0
    scoreHome.textContent = newScorehome
    scoreGuest.textContent = newScoreguest
    
}