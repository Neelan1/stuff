export class Deck{
  flashCardList = [];
  
  get flashCardLists(){
    return this.flashCardList;
  }
/**
 * Adds the FlashCardList to the deck when givent he object
 * @param {*} flashCardList 
 */
  addFlashCardList(flashCardList){
    console.log("Running addFlashCardList");
    this.flashCardList.push(flashCardList);
  }

  /**
   * This method removed the FlashCardList from the deck when given the name
   * @param {*} name 
   */
  removeFlashCardList(name){
    for(i = 0; i < this.flashCardList.length; i++){
      if(this.flashCardList[i].getName == name){
          this.flashCardList.splice(i, 1);
      }
    }
  }
}