import { Quiz, QuizInfo, Question } from './QuizStructure'

let MPInfo: QuizInfo = {title:'Uhhh', attempted:false, desc:'Can you make it over the bridge?'};
let MPQs: Question[] = [
    {question: "What is your quest?", options: ["I seek the holy grail", "Defeat the white rabbit", ], answerKey: 0},
    {question: "What is your favourite colour?", options: ["Blue", "Yellow", "Green", "Purple"], answerKey: 3},
    {question: "What is the carrying capacity of a european swallow?", options: ["1 coconut", "250 grams", ], answerKey: 1},
];

let BLInfo: QuizInfo = {title:'Bonus Links', attempted:false, desc:'Can you distinguish Link names from random objects?'};
let BLQs: Question[] = [
    {question: "What is the name of the Link from BOTW?", options: ["Slate", "Wild", "Moss", "Sheik"], answerKey: 0},
    {question: "What is the name of the Link from Skyward Sword?", options: ["Sword", "Sky", "Loft", "Motion"], answerKey: 2},
    {question: "What colour is Mage's hair?", options: ["Red", "Pink", "Green", "Blue"], answerKey: 1},
    {question: "Which of the following is not a flying companion?", options: ["A bee", "A parrot", "A fairy", "A Beetle"], answerKey: 1},
    {question: "Who is just a little guy?", options: ["Mini", "Wake", "Mask", "all of the above"], answerKey: 3},
];

let CDInfo: QuizInfo = {title:'City Design', attempted:false, desc:'This was one of my hyperfixations.'};
let CDQs: Question[] = [
    {question: "What is a road?", options: ["A"], answerKey: 0},
    {question: "Which of the following generates the most tax income?", options: [], answerKey: 0},
    {question: "What is the vehicle classification of an SUV?", options: [], answerKey: 0},
    {question: "What is the vehicle classification of an SUV?", options: [], answerKey: 0},
];

let MKInfo: QuizInfo = {title:'Mechanical Keyboards', attempted:false, desc:'Another hyperfixation.'};
let MKQs: Question[] = [
    {question: "What year was the IBM model M released?", options: ["1979", "1985", "1987", "1981"], answerKey: 1},
    {question: "Which switch type is not considered mechanical?", options: ["Buckling Spring", "Butterfly", "Leaf Spring", "Optical"], answerKey: 3},
    {question: "What of the following is a PCB mount type?", options: ["Side Mount", "Sandwich Mount", "Elastic Mount", "Floating Mount"], answerKey: 1},
    {question: "What switches does Claire have in her main keyboard?", options: ["Gateron Ink Black v2", "Cherry Black", "Kailh Cream", "Creamsicle"], answerKey: 0},
];

export const quizes: Quiz[] = [new Quiz(BLInfo, BLQs), new Quiz(MPInfo, MPQs), new Quiz(CDInfo, CDQs), new Quiz(MKInfo, MKQs)];
