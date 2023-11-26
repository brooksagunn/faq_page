const faqBlock = document.getElementById("faq-block");

let faqArr = [
  {
    question: "Why is there no light in space?",
    answer:
      "Space appears dark because there is little to no matter for light to bounce back into our line of sight. Space is a near-perfect vacuum, so there is almost nothing to scatter light between stars and planets.",
  },
  {
    question: "Where did the renaissance begin?",
    answer:
      'The Renaissance is generally considered to have begun in Florence, Italy between 1350 and 1400. The Renaissance was a cultural movement that spread throughout Europe and ended around 1600. The word "Renaissance" means "rebirth".',
  },
  { question: "Question 3", answer: "Answer 3" },
];

faqArr.forEach((faq) => {
  faqBlock.innerHTML += `<div class="faq">
    <div class="question">
        <h2>${faq.question}</h2>
        <i class="fa-solid fa-chevron-down" style="color: #095cec"></i>
    </div>
    <div class="answer" style="display: none">${faq.answer}</div>
</div>`;
});

const toggleDisplay = (el) => {
  el.style.display === "none"
    ? (el.style.display = "block")
    : (el.style.display = "none");
};

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-chevron-down")) {
    let faqParent = e.target.parentNode;
    let corrAnswer = faqParent.nextElementSibling;
    toggleDisplay(corrAnswer);
  }
});
