import { FlashCard } from '../../entities/FlashCard.js';

export class AddFlashCardInteractor{
  
  constructor(flashCardList){
    this.flashCardList = flashCardList;
  }

  execute(inputAddFlashCard){
    const flashCard = new FlashCard(inputAddFlashCard.getQuestion, inputAddFlashCard.getAnswer, inputAddFlashCard.getId);
    this.flashCardList.addFlashCard(flashCard);
    return flashCard;
  }



}