import { AddFlashCardInputData } from './usecases/AddFlashCard/AddFlashCardInputData.js';
import { AddFlashCardInteractor } from './usecases/AddFlashCard/AddFlashCardInteractor.js';
import { FlashCardList } from './entities/FlashCardList.js';
import { FlashCard } from './entities/FlashCard.js';


window.addEventListener("load", function () {
    const BossMans_FlashCardList = new FlashCardList();

    const question = document.getElementById("question");
    const answer = document.getElementById("answer");

    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", submitFlashCard);

    function submitFlashCard(){
        console.log("RAN");
        const input = new AddFlashCardInputData(question.value, answer.value);
        const interactor = new AddFlashCardInteractor(BossMans_FlashCardList);
        const newFlashCard = interactor.execute(input);
        const para = document.createElement("p");

        para.innerText = "Question " + newFlashCard.getQuestion + "Answer " + newFlashCard.getAnswer + "Id " + newFlashCard.getId;
        //console.log("Question " + newFlashCard.getQuestion + " Answer " + newFlashCard.getAnswer);
        document.body.appendChild(para);
    }
    
});

