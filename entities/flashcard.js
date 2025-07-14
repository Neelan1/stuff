export class FlashCard {
    constructor(questionText, answerText, id) {
        this.id = id;
        this.questionText = questionText;
        this.answerText = answerText;
        this.answerSide = false;
    }

    toggle() {
        this.answerSide = !this.answerSide;
    }

    get getQuestion(){
        return this.questionText;
    }

    get getAnswer(){
        return this.answerText;
    }

    get getId(){
        return this.id;
    }
        

}