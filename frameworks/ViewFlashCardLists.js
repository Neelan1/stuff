import { FlashcardList } from '../entities/FlashcardList.js';
import { Deck } from '../entities/Deck.js';
export class ViewFlashCardLists{
  // display(viewModel, id) {
  //   let swapped = false;
  //   const outputEl = document.getElementById(id);
    
  //   // Clear and add the flashcard
  //   outputEl.innerHTML = `
  //     <div id="flashcard" style="cursor: pointer;">
  //       <h2>${viewModel.title}</h2>
  //       <p id="answer${id}" style="display: block; color: gray;">${viewModel.question}</p>
  //     </div>
  //   `;
  // const flashcard = document.getElementById("flashcard");
  // const answerEl = document.getElementById(`answer${id}`);

  //   outputEl.addEventListener("click", () => {
  //     if (swapped === false) {
  //       answerEl.innerHTML = `${viewModel.answer}`;
  //       swapped = true;
  //     } else {
  //       answerEl.innerHTML = `${viewModel.question}`;
  //       swapped = false;
  //     }
  //   });
  // }
  renderDecks(deck){
    let outputEl = document.getElementById("display_deck")

    let deckList = document.createElement("div");
    deckList.id = "deck_list"
    
    deckOfLists = deck.getFlashCardLists();
    for(i = 0; i< deckOfLists.length; i++){
      let flashCardList = document.createElement("div");
      //Maybe make id an attribute in flashcardList?
      flashCardList.id = `list${i}`
      
      let name = document.createElement("h2");
      name.innerText = `${deckOfLists[i].getName}`
      
      let description = document.createElement("p");
      description.innerText = ${deckOfLists[i].getDescription}
      
      flashCardList.appendChild(name);
      flashCardList.appendChild(description);

      flashCardList.addEventListener("click", transition(deckOfLists[i]))

    }
    outputEl.appendChild(flashCardList);
  }
// `
//       <div id="flashcard" style="cursor: pointer;">
//         <h2>${list[i].title}</h2>
//         <p id="answer${id}" style="display: block; color: gray;">${list[i].question}</p>
//       </div>
//     `;
  renderList(flashcardList){
    let outputEl = document.getElementById("display_list")
  
    list = flashcardList.getList();

    let flashcardList = document.createElement("div");
    flashcardList.id = id="flashcardList";
    for(i = 0; i< flashcardList.length; i++){
      let flashcard = document.createElement("div");
      flashcard.id = list[i].getId;
      
      let question = document.createElement("h2");
      question.textContent = `${list[i].getQuestion}`;

      let answer = document.createElement("p")
      answer.textContent = `${list[i].getAnswer}`;
      
      let delButton = document.createElement("button");
      delButton.textContent = "DELETE";
      delButton.addEventListener("click", delButtonFunction(flashcardList, list[i].getId));

      let editButton = document.createElement("button");
      editButton.textContent = "EDIT";
      editButton.addEventListener("click", editButtonFunction());

      flashcard.appendChild(question);
      flashcard.appendChild(answer);
      flashcard.appendChild(delButton);
     



      flashcardList.appendChild(flashcard);
    }
    outputEl.appendChild(flashcardList);
  }
  
  delButtonFunction(flashcardList, id){
    document.getElementById(id).remove();
    flashcardList.removeCard(id);
  }
}