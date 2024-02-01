export type QuizInfo = {
    title: string;
    attempted: boolean;
    desc: string;
}

export type Question = {
    question: string;
    options: string[];
    answerKey: number;
};

export class Quiz {
    info: QuizInfo;
    highScore: number;
    currentQuestion: number;
    questions: Question[];
    numQuestions: number;
    answers: Array<number>;

    constructor(newInfo: QuizInfo, questions: Question[]) {
        this.info = newInfo;
        this.highScore = 0.0;
        this.currentQuestion = 0;
        this.questions = questions;
        this.numQuestions = questions.length;
        this.answers = new Array<number>(this.numQuestions);
    }    

    getInfo() {
        return this.info;
    }

    getHighScore() {
        return this.highScore;
    }

    answerQuestion(answer: number) {
        this.answers[this.currentQuestion] = answer;
    }

    getNextQuestion() {
        this.currentQuestion += 1;
        return this.questions[this.currentQuestion];
    }

    getPreviousQuestion() {
        this.currentQuestion -= 1;
        return this.questions[this.currentQuestion];
    }

    finishQuiz() {
        let correct = 0;
        this.info.attempted = true;
        for (let i = 0; i < this.numQuestions; i++) {
            if (this.questions[i].answerKey == this.answers[i]) {
                correct++;
            }
        }
        this.highScore = correct / this.numQuestions;
    }
};
