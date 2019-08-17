

var Word = require("./word.js");

var inquirer = require("inquirer");

var letterArray = "abcdefghijklmnopqrstuvwxyz";

var randomColors = [
    "Red",
    "Blue",
    "Green",
    "Orange",
    "Black",
];

var randomIndex = Math.floor(Math.random() * randomColors.length);

var randomWord = randomColors[randomIndex];

var computerWord = new Word(randomWord);

var requireNewWord = false;
var incorrectLetters = [];
var correctLetters = [];


var guessesLeft = 10;

function theLogic(){
    if(requireNewWord){
        var randomIndex = Math.floor(Math.random() * randomColors.length);
        randomWord = randomColors[randomIndex];

        computerWord = new Word(randomWord);

        requireNewWord = false;
    }

    var wordComplete = [];

    if(wordComplete.includes(false)){
        inquirer.prompt([
            {
                type: "input",
                message: "Choose a letter from A - Z ",
                name: "userinput"
            }
           
        ]).then(function(input){
            
        })
    }
}

