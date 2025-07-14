import { AddFlashCardOutputBoundary} from '../usecases/AddFlashCard/AddFlashCardOutputBoundary.js';

export class Presenter extends AddFlashCardOutputBoundary{
  constructor(view){
    super();
    this.view = view;
  }
  
 present(outputData, id){
    const viewModel = {
      title: `Flashcard #${outputData.getId}`,
      question: outputData.getQuestion,
      answer: outputData.getAnswer
    };
    this.view.display(viewModel, id); // Pass formatted data to view
  }
}
