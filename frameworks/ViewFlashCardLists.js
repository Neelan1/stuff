import { FlashCardList } from '../entities/FlashCardList.js';
import { Deck } from '../entities/Deck.js';
import { FlashCard } from '../entities/FlashCard.js';
 export class ViewFlashCardLists{
  newDeck = new Deck();
  constructor(){
    console.log("ViewFlashCardLists constructor running");
    console.log("submitDeck element before anything:", document.getElementById("submitDeck"));  


      const question = document.getElementById("question");
      const answer = document.getElementById("answer");
        
      const submitNewFlashCardButton = document.getElementById("submit");
        submitNewFlashCardButton.addEventListener("click", this.submitFlashCard);

      const submitNewDeckButton = document.getElementById("submitDeck");
        submitNewDeckButton.addEventListener("click", this.createDeck)

      this.populateDeck();
      this.renderDecks(this.newDeck);


 }
    //function createDeck()
    createDeck(){
      console.log("CREATED NEW DECK");
      newDeck.addFlashCardList(new FlashcardList(document.getElementById("deckName"), document.getElementById("deckDescription")));
      renderDecks(newDeck);
    }
    populateDeck(){
        let l1 = new FlashCardList("Deck about bananas", "about bananas");
        let l2 = new FlashCardList("Deck about apples", "about apples");
        let card1 = new FlashCard("Bananas are? ", "Long");
        let card2 = new FlashCard("Bananas are what Color? ", "Yellow");
        let card3 = new FlashCard("Apples are? ", "Round");
        l1.addFlashCard(card1);
        l1.addFlashCard(card2);
        l2.addFlashCard(card3);

        this.newDeck.addFlashCardList(l1);
        this.newDeck.addFlashCardList(l2);
        // console.log(l1.length + " " + l2.length);
        
    }
  
    // Renders all the different flash card decks you own
    renderDecks(deck){
      let outputEl = document.getElementById("display_deck")

      let deckList = document.createElement("div");
      deckList.id = "deck_list"
      let deckOfLists = deck.flashCardLists;
      console.log("LENGTH OF DECK " + deckOfLists.length)
      for(let i = 0; i< deckOfLists.length; i++){
        let flashCardList = document.createElement("div");
        //Maybe make id an attribute in flashcardList?
        flashCardList.id = `list${i}`;
        
        let name = document.createElement("h2");
        name.innerText = `${deckOfLists[i].name}`
        
        let description = document.createElement("p");
        description.innerText = `${deckOfLists[i].description}`
        
        flashCardList.appendChild(name);
        flashCardList.appendChild(description);
        flashCardList.addEventListener("click", () => this.transitionToFlashCardList(deckOfLists[i], "display_deck"))
        console.log("LENGTH " + deckOfLists[i].getList.length);
        deckList.appendChild(flashCardList);
        

        //When adding a flashcardList, make backround transparent gray and have input boxes to put in name and description
      }
      //need to add a add flashcardList and a remove flashCardList button
      let addFlashCardListButton = document.createElement("button");
      addFlashCardListButton.id = `addFlashCardButton`;
      addFlashCardListButton.addEventListener("click", deck.addFlashCardList(deckList.id));
      deckList.appendChild(addFlashCardListButton);

      outputEl.appendChild(deckList);
    }

    transitionToFlashCardList(flashCardList, id){
      //Make id element invisible (ie the deck of flashCardLists invisible)
      console.log("TRIED TRANSITIONING TO flashcard " + flashCardList.length)
      this.renderFlashCardList(flashCardList);
    }


    //Renders the FlashCardList ie renders the questions to see 
    renderFlashCardList(flashcardList){
      console.log("Start render flash cards");
      let outputEl = document.getElementById("display_list")

      let list = flashcardList.getList;

      let flashcardListDisplay = document.createElement("div");

      // flashcardList.id = id="flashcardList";
      console.log("length" + flashcardList.length)
      for(let i = 0; i< list.length; i++){
        let flashcard = document.createElement("div");
        flashcard.id = list[i].getId;
        
        let question = document.createElement("h2");
        question.textContent = `${list[i].getQuestion}`;

        let answer = document.createElement("p")
        answer.textContent = `${list[i].getAnswer}`;
        console.log(`${list[i].question} , ${list[i].getAnswer}`);
        let delButton = document.createElement("button");
        delButton.textContent = "DELETE";
        delButton.addEventListener("click", () => delButtonFunction(flashcardList, list[i].getId));

        let editButton = document.createElement("button");
        editButton.textContent = "EDIT";
        editButton.addEventListener("click", () => editButtonFunction(flashcardList, list[i].getId));
        //FILL THIS IN

        flashcard.appendChild(question);
        flashcard.appendChild(answer);
        flashcard.appendChild(delButton);
        



        flashcardListDisplay.appendChild(flashcard);
      }
      //Need to add a return button to deck of flashCardLists
      //When adding a flashcard, make backround transparent gray and have input boxes to put in question and answer
      outputEl.appendChild(flashcardListDisplay);
    }
    submitFlashCard(){
      console.log("RAN");
      const newFlashCard = document.createElement("p");
      document.body.appendChild(newFlashCard);
      const input = new AddFlashCardInputData(question.value, answer.value, newFlashCard);
      

      //Add <p> element here with ID
      //Pass id into interactor.execute 
      // interactor.execute(input, presenter);
    }
    delButtonFunction(flashcardList, id){
      document.getElementById(id).remove();
      flashcardList.removeCard(id);
    }
    editButtonFunction(flashcardList, id){

    }
}