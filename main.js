/** Number of games */
 

/* calling the Id's and the button class from the html */
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const winCount = document.querySelector("#wins");
const lossCount = document.querySelector("#loss");
/* Creating variables */
/* number of games selection */
let winGames = 0;
let lossGames = 0;
let player;
let computer;
let result;

/* creating a function for each button in the choiceBtn class */
choiceBtns.forEach(button => button.addEventListener("click", () => {
    
    player = button.textContent;
    computerTurn();
    playerText.textContent = `player: ${player}`;
    computerText.textContent = `computer: ${computer}`;
    resultText.textContent = checkWinner();
    winCount.textContent = addWinCount();
    lossCount.textContent = addLossCount();
}));

/** calling the computerTurn to function */
function computerTurn() {
    /** randomizing the computer selection between 1-3 */
    const ranNum = Math.floor(Math.random() * 3) + 1;
   /** examining the ranNum call with switch */
    switch(ranNum){
        case 1:
            computer = "ROCK";
                break;
        case 2:
            computer = "PAPER";
                break;
        case 3:
            computer = "SCISSORS";
                break;
    }
}
/** creating the checkWinner function */
function checkWinner() {
    if(player == computer){
        return "It's a TIE!";
    } else if(computer == "ROCK"){
        /** this part of the function is asking if player has paper to rock they win */
        return (player == "PAPER") ? "Winner, Winner!" : "AWWW ... you LOST!"
        /* if the above condition is "false (:)" will state player lost */
        /* creating another else if statement for if AI has paper to player scissors */
    } else if(computer == "PAPER"){
        return (player == "SCISSORS") ? "Winner, Winner!" : "AWWW ... you LOST!"
        /* creating a else if statement for if AI has scissors and player has rock */
    } else if(computer == "SCISSORS"){
        return (player == "ROCK") ? "Winner, Winner!" : "AWWW ... you LOST!"
    };
   
};


/**count logic */

function addWinCount() {
    if(player == computer){
        return winGames;
    } 
    else if(computer == "ROCK"){
        return (player == "PAPER") 
        ? ++winGames : winGames       
    } 
    else if(computer == "PAPER"){
        return (player == "SCISSORS") 
        ? ++winGames : winGames        
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK") 
        ? ++winGames : winGames  
    }; 
    }
        winCount.textContent = winGames;
    
function addLossCount() {
    if(player == computer){
        return lossGames;
    } 
    else if(computer == "ROCK"){
        return (player == "PAPER") 
        ? lossGames : ++lossGames       
    } 
    else if(computer == "PAPER"){
        return (player == "SCISSORS") 
        ? lossGames : ++lossGames        
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK") 
        ? lossGames : ++lossGames  
    }; 
    }
        lossCount.textContent = lossGames;
/**back button function */
function goBack() {
    window.history.back()
};



