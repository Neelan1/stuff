import { AddFlashCardInputData } from './usecases/AddFlashCard/AddFlashCardInputData.js';
import { AddFlashCardInteractor } from './usecases/AddFlashCard/AddFlashCardInteractor.js';
import { FlashCardList } from './entities/FlashCardList.js';
import { FlashCard } from './entities/FlashCard.js';
import { Presenter } from './frameworks/Presenter.js';
import { ViewModel } from './frameworks/ViewModel.js';

const view = new ViewModel();
const presenter = new Presenter(view);
const BossMans_FlashCardList = new FlashCardList();
const interactor = new AddFlashCardInteractor(BossMans_FlashCardList, presenter);





const question = document.getElementById("question");
const answer = document.getElementById("answer");

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", submitFlashCard);

function submitFlashCard(){
  console.log("RAN");
  const newFlashCard = document.createElement("p");
  document.body.appendChild(newFlashCard);
  const input = new AddFlashCardInputData(question.value, answer.value, newFlashCard);


  //Add <p> element here with ID
  //Pass id into interactor.execute 
  interactor.execute(input, presenter);


}
