let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".container div");


const showWinner= (userWin)=>{
    const userCount=document.querySelector("#user-score");
    const compCount=document.querySelector("#comp-score");
    const msg = document.querySelector("#msg");
    if (userWin){
         userCount.innerText=Number(userCount.innerText)+1;
         msg.innerText = "You won!";


    }else{
         compCount.innerText=Number(compCount.innerText)+1;
         msg.innerText = "Computer won!";
    }
}


const drawGame=()=>{
    const msg =document.querySelector("#msg");
    msg.innerText="Game draw!";
}

const genCompChoice = () => {
     const computerChoices=["stone","paper","scissor"];
     const index= Math.floor(Math.random()* 3);
     return computerChoices[index];
     
}

const playGame=(userChoice)=>{
   console.log("user choice =", userChoice);

   // generate random choice of computer
        const compChoice = genCompChoice();

        console.log("computer choice =", compChoice);

        if(userChoice==compChoice){
           drawGame();
        }else{
            let userWin=true;
            if(userChoice === "stone"){
              userWin=  compChoice==="paper"? false : true;
            }
            else if(userChoice=== "paper"){
                userWin = compChoice ==="scissor" ? false :  true;
            }else{
                userWin = compChoice ==="stone" ? false : true ;
            }

            showWinner(userWin);
        }

};


choices.forEach((choice)=>{
   const userChoice= choice.getAttribute("id");
    choice.addEventListener("click",()=>{
      playGame(userChoice);
    });
});