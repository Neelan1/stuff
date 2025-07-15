export class ViewModel{
  display(viewModel, id) {
    let swapped = false;
    const outputEl = document.getElementById(id);
    
    // Clear and add the flashcard
    outputEl.innerHTML = `
      <div id="flashcard" style="cursor: pointer;">
        <h2>${viewModel.title}</h2>
        <p id="answer${id}" style="display: block; color: gray;">${viewModel.question}</p>
      </div>
    `;
  const flashcard = document.getElementById("flashcard");
  const answerEl = document.getElementById(`answer${id}`);

    outputEl.addEventListener("click", () => {
      if (swapped === false) {
        answerEl.innerHTML = `${viewModel.answer}`;
        swapped = true;
      } else {
        answerEl.innerHTML = `${viewModel.question}`;
        swapped = false;
      }
    });
  }
}