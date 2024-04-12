let rockBtn = document.querySelector("#Rock");
let paperBtn = document.querySelector("#Paper");
let scissorsBtn = document.querySelector("#Scissors");
let h1 = document.querySelector("#winner");
let hC = document.querySelector("#computerChoice")
let hP = document.querySelector("#playerChoice");
let hS = document.querySelector("#score");
let hL = document.querySelector("#lose");

rockBtn.addEventListener("click",()=>{
    let playerChoice = "Rock";
    playGame(playerChoice);
})
paperBtn.addEventListener("click",() =>{
    let playerChoice = "Paper";
    playGame(playerChoice);
})
scissorsBtn.addEventListener("click",()=>{
    let playerChoice = "Scissors";
    playGame(playerChoice);
})

function getComputerChoice(){
    let choices = ["Rock","Paper","Scissors"];
    let computerSelection = choices[Math.floor(Math.random()*choices.length)];
    return computerSelection;
}


let winCount = 0; // Initialize win count
let loseCount = 0;

function playGame(playerChoice, computerChoice) {
    computerChoice = getComputerChoice();
    let finalResult = winner(playerChoice, computerChoice);
    hP.textContent = "You choose: " + playerChoice;
    hC.textContent = "Computer choose: " + computerChoice;
    h1.textContent = finalResult;

    if (finalResult === "You win!") {
        winCount++; // Increment win count if player wins
        updateScoreboard();
    }
    if (finalResult === "You lose"){
        loseCount++;
        updateLoseCount();
    }

    console.log(computerChoice);
    console.log(playerChoice);
    console.log(finalResult);
}

function updateScoreboard() {
    hS.textContent = "Win: " + winCount; // Update win count in the scoreboard
}
function updateLoseCount(){
    hL.textContent = "Lose: " + loseCount;
}

function winner(playerChoice,computerChoice){
   
    let result;
    if( playerChoice == computerChoice){
      result = "Draw";
      console.log
      
    }else if(playerChoice == "Rock"  && computerChoice == "Scissors" ){
      result = "You win!";
      
    }else if(playerChoice == "Paper" && computerChoice == "Rock"){
      result = "You win!";
      
    }else if(playerChoice == "Scissors" && computerChoice == "Paper"){
     result = "You win!";
     
    }else{
      result = "You lose";
      
    }
    return result;

}