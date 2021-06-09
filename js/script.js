function computerPlay(){
    let computerSelection = Math.floor(Math.random()*3);
    if (computerSelection === 0){
        return "rock";
    }
    else if(computerSelection === 1){
        return "paper";
    }
    else{
    return "scissors";
    }
}

function game(playerSelection, computerSelection){
    
    if (playerSelection === "rock" && computerSelection === "paper"){
        MatchesWon2 += 1;
        console.log(`computer-score:${MatchesWon2}, player-score:${MatchesWon1}`);
        console.log("paper beats rock, YOU LOSE");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        MatchesWon1 += 1;
        console.log(`computer-score:${MatchesWon2}, player-score:${MatchesWon1}`);
        console.log("paper beats rock, YOU WIN");
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        MatchesWon1 += 1;
        console.log(`computer-score:${MatchesWon2}, player-score:${MatchesWon1}`);
        console.log("paper beats rock, YOU WIN");
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        MatchesWon2 += 1;
        console.log(`computer-score:${MatchesWon2}, player-score:${MatchesWon1}`);
        console.log("scissors beats paper, YOU LOSE");
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        MatchesWon2 += 1;
        console.log(`computer-score:${MatchesWon2}, player-score:${MatchesWon1}`);
        console.log("rock beats scissors, YOU WIN");
    }
    else{
        MatchesWon1 += 1;
        console.log(`computer-score:${MatchesWon2}, player-score:${MatchesWon1}`);
        console.log("scissors beats paper, YOU LOSE");
    }
}

function match(pchoice){

let playerSelection = pchoice;
playerSelection = playerSelection.toLowerCase();
let computerSelection = computerPlay();
let e = document.querySelector(".row3 .right")
if (computerSelection === "rock"){
    e.setAttribute('src','images/1x/rock_left.png');
}
else if (computerSelection === "paper"){
    e.setAttribute('src','images/1x/paper_left.png');
}
else{
    e.setAttribute('src','images/1x/scissors_left.png');
}
game(playerSelection,computerSelection);
}

function displayWinner(){
    // let container = document.querySelector(".container");
    let div = document.createElement("div");
    let ref = document.querySelector(".row3");
    if(MatchesWon1 === 3){
        div.innerHTML = '<p>You Win! Reloading</p>';
    }
    else{
        div.innerHTML = '<p>You Lost! Reloading</p>';
    }
    container.insertBefore(div,ref);
}

function hideButtons(){
    container.removeChild(btns);
}

function isGameFinished(){
    if(MatchesWon1 === 3 || MatchesWon2 === 3){
        displayWinner();
        hideButtons();
        setTimeout(function() {
            window.location.reload();
            }, 4000);
    }
}

let MatchesWon1 = 0;
let MatchesWon2 = 0;

let playbtn = document.querySelector(".Playbtn");
let container = document.querySelector(".container");
let btns = document.createElement("div");
let wintext = document.createElement("div");
playbtn.addEventListener('click', ()=>{
    btns.innerHTML = `
    <div class="row4">
        <img id="rockb" class="btn" src="images/1x/rockb_right.png" alt="rock">
        <img id="paperb" class="btn" src="images/1x/paperb_right.png" alt="paper">
        <img id="scissorsb" class="btn" src="images/1x/scissorsb_right.png" alt="scissors">
    </div>`;
    container.removeChild(playbtn);
    container.appendChild(btns);
    
    let rockb = document.querySelector("#rockb");
    let paperb = document.querySelector("#paperb");
    let scissorsb = document.querySelector("#scissorsb");
    rockb.addEventListener('click',() => {
        let rockb = document.querySelector(".row3 .left");
        rockb.setAttribute('src', 'images/1x/rock_right.png');
        match("rock");
        isGameFinished();
    });
    paperb.addEventListener('click',() => {
        let paperb = document.querySelector(".row3 .left");
        paperb.setAttribute('src', 'images/1x/paper_right.png');
        match("paper");
        isGameFinished();
    });
    scissorsb.addEventListener('click',() => {
        let scissorsb = document.querySelector(".row3 .left");
        scissorsb.setAttribute('src', 'images/1x/scissors_right.png');
        match("scissors");
        isGameFinished();
    });

});



