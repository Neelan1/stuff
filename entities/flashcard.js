export class Flashcard {
    constructor(id, questionText, answerText) {
        this.id = id;
        this.questionText = questionText;
        this.answerText = answerText;
        this.answerSide = false;
    }

    toggle() {
        this.answerSide = !this.answerSide;
    }
}