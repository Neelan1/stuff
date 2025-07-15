import { FlashCard } from '../../entities/FlashCard.js';
import { AddFlashCardInputBoundary} from './AddFlashCardInputBoundary.js';
import { AddFlashCardOutputData} from './AddFlashCardOutputData.js';
import { Presenter} from '../../frameworks/Presenter.js';

export class AddFlashCardInteractor extends AddFlashCardInputBoundary{
  
  constructor(flashCardList, presenter){
    super();
    this.flashCardList = flashCardList;
    this.presenter = presenter;
  }

  execute(inputAddFlashCard){
    const flashCard = new FlashCard(inputAddFlashCard.getQuestion, inputAddFlashCard.getAnswer, inputAddFlashCard.getId);
    this.flashCardList.addFlashCard(flashCard);
    
    const output = new AddFlashCardOutputData(flashCard);
    this.presenter.present(output, inputAddFlashCard.getId);
  }



}