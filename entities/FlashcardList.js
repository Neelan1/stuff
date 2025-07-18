export class FlashCardList {
    constructor(name) {
        this.list = [];
        this.name = name;
    }
    addFlashCard(flashCard) {
        this.list.push(flashCard);
    }
    
    get getList(){
        return this.list;
    }
}