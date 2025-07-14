export class AddFlashCardInputData{
  static count = 0;
  constructor(question, answer, htmlElement){
    this.id = AddFlashCardInputData.count;
    this.question = question;
    this.answer = answer;
    this.htmlElement = htmlElement;
    this.htmlElement.id = this.id;
    AddFlashCardInputData.count++;
  }

  /**
   * Getters for the information
   */
  get getQuestion(){
    return this.question;
  }

  get getAnswer(){
    return this.answer;
  }

  get getId(){
    return this.id;
  }

  get getHtmlElement(){
    return this.htmlElement;
  }

  
}