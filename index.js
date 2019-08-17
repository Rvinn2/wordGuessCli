

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


