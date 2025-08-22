import { FlashCardList } from '../entities/FlashCardList.js';
import { Deck } from '../entities/Deck.js';
import { FlashCard } from '../entities/FlashCard.js';
 export class ViewFlashCardLists{
  newDeck = new Deck();
  input_fields = document.getElementById("create-new");
  
  constructor(){
    console.log("ViewFlashCardLists constructor running");
    console.log("submitDeck element before anything:", document.getElementById("submitDeck"));  

      this.input_fields.style.display = "none";
      const question = document.getElementById("question");
      const answer = document.getElementById("answer");
        
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
      console.log("TRIED TRANSITIONING TO flashcard ")
      this.renderFlashCardList(flashCardList);
      document.getElementById("display_deck").style.display = "none";
    }


    //Renders the FlashCardList ie renders the questions to see 
    renderFlashCardList(flashcardList){
      console.log("Start render flash cards");
      let outputEl = document.getElementById("display_list")

      let list = flashcardList.getList;

      let flashcardListDisplay = document.createElement("div");

      // flashcardList.id = id="flashcardList";
      for(let i = 0; i < list.length; i++){
        let flashcard = document.createElement("div");
        flashcard.id = list[i].getId;
        
        let question = document.createElement("p");
        question.textContent = `Question: ${list[i].getQuestion}`;

        let answer = document.createElement("p")
        answer.textContent = `Answer: ${list[i].getAnswer}`;
        // console.log(`${list[i].question} , ${list[i].getAnswer}`);
        let delButton = document.createElement("button");
        delButton.textContent = "DELETE";
        delButton.addEventListener("click", () => this.delButtonFunction(flashcardList, list[i].getId, list[i]));

        let editButton = document.createElement("button");
        editButton.textContent = "EDIT";
        editButton.addEventListener("click", () => editButtonFunction(flashcardList, list[i].getId));
        //FILL THIS IN

        flashcard.appendChild(question);
        flashcard.appendChild(answer);
        flashcard.appendChild(delButton);
        flashcard.className = "flash-card"
        
        flashcardListDisplay.appendChild(flashcard);
      }
      //Need to add a return button to deck of flashCardLists
      
      //When adding a flashcard, make backround transparent gray and have input boxes to put in question and answer
      
      //createFlashCardButtonTransition will be a button that is used to transition to a set of input fields of question, answer, and a button to submit the result
      let createFlashCardButtonTransition = document.createElement("input");
      createFlashCardButtonTransition.id = "submitFlashCardTransition";
      createFlashCardButtonTransition.className = "button";
      createFlashCardButtonTransition.type = "button";
      createFlashCardButtonTransition.value = "+ Create Flash Card";
      createFlashCardButtonTransition.addEventListener("click", this.submitFlashCardScreen);

      flashcardListDisplay.appendChild(createFlashCardButtonTransition);
      // const submitNewFlashCardButton = document.getElementById("submitFlashCard");
      outputEl.appendChild(flashcardListDisplay);
    }
    submitFlashCardScreen(){
      console.log("RAN");
      //submitFlashCard
      document.getElementById("create-new").style.display = "block";
      

      // const newFlashCard = document.createElement("p");

      // document.body.appendChild(newFlashCard);
      // const input = new AddFlashCardInputData(question.value, answer.value, newFlashCard);
      
      
      //Add <p> element here with ID
      //Pass id into interactor.execute 
      // interactor.execute(input, presenter);
    }
    delButtonFunction(flashcardList, id, flashcard){
      document.getElementById(id).remove();
      flashcardList.removeFlashCard(flashcard);
    }
    editButtonFunction(flashcardList, id){

    }
}