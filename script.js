const faqBlock = document.getElementById("faq-block");
const answers = document.querySelectorAll(".answer");

let faqArr = [
  { question: "Question 1", answer: "Answer 1" },
  { question: "Question 2", answer: "Answer 2" },
  { question: "Question 3", answer: "Answer 3" },
];

faqArr.forEach((faq) => {
  faqBlock.innerHTML += `<div class="faq">
    <div class="question">
        <h2>${faq.question}</h2>
        <i class="fa-solid fa-chevron-down" style="color: #095cec"></i>
    </div>
    <div class="answer">${faq.answer}</div>
</div>`;
});
