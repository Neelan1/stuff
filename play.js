

import { AddFlashCardInputData } from './usecases/AddFlashCard/AddFlashCardInputData.js';
// import { AddFlashCardInteractor } from './usecases/AddFlashCard/AddFlashCardInteractor.js';
import { FlashCardList } from './entities/FlashCardList.js';
import { FlashCard } from './entities/FlashCard.js';
// import { Presenter } from './frameworks/Presenter.js';
// import { ViewModel } from './frameworks/ViewModel.js';

//const view = new ViewModel();
//const presenter = new Presenter(view);
//const interactor = new AddFlashCardInteractor(BossMans_FlashCardList, presenter);
class play{
  const BossMans_FlashCardList = new FlashCardList();
  constructor(deck){
    this.deck = deck;
  }

}

createDeck();



const nextButton = document.getElementById("next");
const curQuestion = document.getElementById("curQuestion");

nextButton.addEventListener("click", nextFlashCard);

curQuestion.innerHTML = BossMans_FlashCardList.getList[0].getQuestion;
let j = 0;
function nextFlashCard(){
  j++;
  curQuestion.innerHTML = BossMans_FlashCardList.getList[j].getQuestion;


}

function createDeck(){
  for (let i = 1; i < 5; i++){
    let input = new FlashCard(`Questions ${i}`, `Answer ${i*2}`, i);
    BossMans_FlashCardList.addFlashCard(input);
  }
  
}
   