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

function match(){

let playerSelection = prompt("your throw?");
playerSelection = playerSelection.toLowerCase();
let computerSelection = computerPlay();
game(playerSelection,computerSelection);
}

let MatchesWon1 = 0;
let MatchesWon2 = 0;
for(i = 0; i<5; i++){
    if(MatchesWon1 === 3){
        console.log("Yipee! you won the tournament")
        break;
    }
    if(MatchesWon2 == 3){
        console.log("Computer has won the tournament!");
        break;
    }
    console.log(`MATCH ${i+1}`);
    match();
}

