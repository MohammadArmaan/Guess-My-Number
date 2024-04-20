'use strict';

let random = Math.floor(Math.random() * 20) + 1;

document.querySelector(".check").addEventListener("click", function(){
    let guess = Number(document.querySelector(".guess").value);
    // console.log(guess);
    
    // console.log(random);


    document.querySelector(".number").textContent = guess;

    let highscore = Number(document.querySelector(".highscore").textContent);

    let score = Number(document.querySelector(".score").textContent);

    if(random === guess){
        document.querySelector(".message").textContent = "Correct Number 🏆";
        document.body.style.backgroundColor = "#60b347";
        
        if(highscore<score){
            document.querySelector(".highscore").textContent = score;
        }
    }

    if(guess == "0"){
        score++;
    }

    if(random < guess){
        document.querySelector(".message").textContent =  "Try Low 📉";
        document.body.style.backgroundColor = "#222";
        score--;
        document.querySelector(".score").textContent = score;

    }

    if(random > guess){
        document.querySelector(".message").textContent = "Try High 📈";
        document.body.style.backgroundColor = "#222";
        score--;
        document.querySelector(".score").textContent = score;
    }

    if(!guess){
        document.querySelector(".message").textContent = "⛔️ No Number";
        document.body.style.backgroundColor = "#222";
        document.querySelector(".number").textContent = "?";
    }

    if(score <= 0){
        document.querySelector(".message").textContent = "Game Over ❌";
        document.querySelector(".score").textContent = 0;
    }

});

document.querySelector(".again").addEventListener("click", function(){
    document.querySelector(".message").textContent = "Start guessing...";

    document.querySelector(".guess").value = '';

    document.querySelector(".score").textContent = 20;

    // document.querySelector(".highscore").textContent = 0;

    document.querySelector(".number").textContent = "?";

    document.body.style.backgroundColor = "#222";

    random = Math.floor(Math.random() * 20) + 1
});