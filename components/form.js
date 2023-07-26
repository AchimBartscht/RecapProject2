const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  //form.reset();
});

function createQuestionCard(question, answer, tags) {}

/* const formData = new FormData(event.target);
const data = Object.fromEntries(formData);*/
