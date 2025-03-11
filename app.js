let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScoreboard=document.querySelector("#user-score");
const compScoreboard=document.querySelector("#comp-score");

const genCompChoice = () => {
    const options=["rock","paper","scissors"];
    let randInd=Math.floor(Math.random()*3);
    return options[randInd];
}

const drawGame=(userChoice)=>{
    msg.innerText="Game was draw. Both selected "+userChoice;
    msg.style.backgroundColor="#081B31";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        msg.innerText="You lose. Your "+userChoice+" beats "+compChoice;
        msg.style.backgroundColor="green";
        userScore++;
        userScoreboard.innerText=userScore;
    }
    else{
        msg.innerText="You lose. "+compChoice+" beats your "+userChoice;
        msg.style.backgroundColor="red";
        compScore++;
        compScoreboard.innerText=compScore;
    }
};

playGame=(userChoice)=>{
    let compChoice=genCompChoice();

    if(userChoice===compChoice){
        drawGame(userChoice);
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=> {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});