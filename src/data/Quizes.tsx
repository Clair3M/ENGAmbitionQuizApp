import { Quiz, QuizInfo, Question } from './QuizStructure'

let info1: QuizInfo = {title:'Monty Python', attempted:false, desc:'Can you make it over the bridge?'};
let questions1: Question[] = [
    {question: "What is your quest?", options: ["I seek the holy grail", "Defeat the white rabbit", ], answerKey: 0},
    {question: "What is your favourite colour?", options: ["Blue", "Yellow", "Green", "Purple"], answerKey: 3},
    {question: "What is the carrying capacity of a european swallow?", options: ["1 coconut", "250 grams", ], answerKey: 1},
];

let info2: QuizInfo = {title:'Bonus Links', attempted:false, desc:'Can you distinguish Link names from random objects?'};
let questions2: Question[] = [
    {question: "What is the name of the Link from BOTW?", options: ["Slate", "Wild", "Moss", "Sheik"], answerKey: 0},
    {question: "What is the name of the Link from Skyward Sword?", options: ["Sword", "Sky", "Loft", "Motion"], answerKey: 3},
    {question: "Who is just a little guy?", options: ["Mini", "Wake", "Mask", "all of the above"], answerKey: 3},
];

export const quizes: Quiz[] = [new Quiz(info1, questions1), new Quiz(info2, questions2)];
