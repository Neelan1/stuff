import { FlashCard } from '../../entities/FlashCard.js';
import { AddFlashCardInputBoundary} from './AddFlashCardInputBoundary.js';
import { AddFlashCardOutputData} from './AddFlashCardOutputData.js';
import { ViewFlashCardLists} from '../../frameworks/ViewFlashCardLists.js';


export class AddFlashCardInteractor extends AddFlashCardInputBoundary{
  
  constructor(flashCardList, viewer){
    super();
    this.flashCardList = flashCardList;
    this.viewer = viewer;
  }

  execute(inputAddFlashCard){
    const flashCard = new FlashCard(inputAddFlashCard.getQuestion, inputAddFlashCard.getAnswer, inputAddFlashCard.getId);
    this.flashCardList.addFlashCard(flashCard);
    
    const output = new AddFlashCardOutputData(flashCard);

    this.viewer.renderList(this.flashCardList);
    // this.presenter.present(output, inputAddFlashCard.getId);
  }



}