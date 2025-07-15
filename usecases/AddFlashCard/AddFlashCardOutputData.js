import { FlashCard } from '../../entities/FlashCard.js';

export class AddFlashCardOutputData{
  constructor(flashCard){
      this.id = flashCard.getId;
      this.question = flashCard.getQuestion;
      this.answer = flashCard.getAnswer;
  }

  get getId(){
    return this.id;
  }

  get getQuestion(){
    return this.question;
  }

  get getAnswer(){
    return this.answer;
  }
}
