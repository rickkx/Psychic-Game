//game requirements
let magicLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let wins = 0;
let loss = 0;
let guessLeft = 10;
console.log(guessLeft);
let guessed = [];

let compRandom = Math.floor(Math.random()*magicLetter.length);
console.log(compRandom);

let compGuess = magicLetter[compRandom];
console.log(compGuess);

function reset(){
        guessLeft = 10;
        guessed = [];
        compRandom = Math.floor(Math.random()*magicLetter.length);
        compGuess = magicLetter[compRandom];
        console.log(compGuess);
}

document.onkeyup = function(event){
        let userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(userGuess);
        guessed.push(userGuess);
        document.querySelector('#guessed').innerHTML = guessed.join(' , ');
        guessLeft--;
        console.log(guessLeft);
        document.querySelector('#guessLeft').innerHTML = guessLeft;

        if(guessLeft===0){
                console.log('you loss');
                loss++;
                document.querySelector('#loss').innerHTML = loss;
                reset();
        } else{
                if(compGuess===userGuess){
                        console.log('you win');
                        wins++;
                        document.querySelector('#wins').innerHTML = wins;
                        reset();
                }
        }

}


