export class AddFlashCardInputData{
  static count = 0;
  constructor(question, answer){
    this.id = AddFlashCardInputData.count;
    this.question = question;
    this.answer = answer;
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

  
}