export class FlashCardList {
    constructor(name, description) {
        this.list = [];
        this.name = name;
        this.description = description
    }
    addFlashCard(flashCard) {
        this.list.push(flashCard);
    }

    removeFlashCard(flashCard) {
        this.list.splice(1, this.list.indexOf(flashCard));
    }
    
    get getList(){
        return this.list;
    }

    get getName(){
        return this.name;
    }
    get getDescription(){
        return this.description;
    }
}