let rockBtn = document.querySelector("#Rock");
let paperBtn = document.querySelector("#Paper");
let scissorsBtn = document.querySelector("#Scissors");
let h1 = document.querySelector("#winner");
let hC = document.querySelector("#computerChoice")


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



function playGame(playerChoice,computerChoice){
    computerChoice = getComputerChoice();
    let finalResult = winner(playerChoice,computerChoice);
    hC.textContent = "Computer choose " +computerChoice;
    h1.textContent = finalResult;
    console.log(computerChoice);
    console.log(playerChoice);
    console.log(finalResult);
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