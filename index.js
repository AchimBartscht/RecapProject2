// phew… not a lot going on here. Please add some code!
console.clear();
console.log("Hello");

/* Bookmark button toggle-Funktion einfügen */

const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

/* Show answer button toggle-Funktion einfügen */
const answerButton = document.querySelector('[data-js="answer-button"]');
const answerParagraph = document.querySelector('[data-js="answer"]');

answerButton.addEventListener("click", () => {
  answerParagraph.classList.toggle("card__answer--active");
  if (answerParagraph.classList.contains("card__answer--active")) {
    answerButton.textContent = "Hide Answer";
  } else {
    answerButton.textContent = "Show Answer";
  }
});
