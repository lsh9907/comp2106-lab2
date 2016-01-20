    var userChoice = prompt("Do you choose rock, paper or scissors?");

    var computerChoice = Math.random();

    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    if ((userChoice != 'rock') && (userChoice != 'paper') && (userChoice != 'scissors')) {
        if (userChoice === 'rope') {
            console.log('Rope is not allowed');
        } else {
            console.log('You must type in one of rock, paper, and scissors');
        }
    } else {
        console.log("Computer: " + computerChoice);
        var func = test(userChoice, computerChoice);
        console.log(func);

        if (func === 'The result is a tie!') {
            var userChoice = prompt('The result is a tie! Do you choose rock, paper or scissors?');
            test(userChoice, computerChoice);   
        };
    }


function test(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
        // prompt('The result is a tie! Do you choose rock, paper or scissors?');
    } else if (choice1 === 'rock') {
        if (choice2 === 'scissors') {
            return 'rock wins';
        } else {
            return 'paper  wins';
        }
    } else if (choice1 === 'paper') {
        if (choice2 === 'rock') {
            return 'paper wins';
        } else {
            return 'scissors wins';
        }
    } else {
        if (choice2 === 'paper') {
            return 'scissors wins';
        } else {
            return 'rock wins';
        }
    }
};