export type QuizInfo = {
    title: string;
    desc: string;
}

export type Question = {
    

};

export class Quiz {
    constructor(newInfo: QuizInfo, questions: []) {
        this.info = newInfo;
        this.attempted = false;
        this.highScore = 0.0;
        this.questions = questions;
    }    

    setHighScore(newHighScore) {
        this.getHighScore = newHighScore;
    }

    getAttempted() {
        return this.attempted;
    }

    getHighScore() {
        return this.highScore;
    }

    
};
