const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const toggleSign = question.querySelector(".mda");
  const faqGuarda = item.closest(".faq-guarda");

  question.addEventListener("click", () => {
    item.classList.toggle("expanded");
    if (item.classList.contains("expanded")) {
      toggleSign.style.transform = "rotate(90deg)";
      // Define o padding-bottom igual à altura da resposta
      item.style.paddingBottom = answer.clientHeight + "px";
      faqGuarda.classList.add("mostra");
    } else {
      toggleSign.style.transform = "none";
      // Remove o padding-bottom
      item.style.paddingBottom = "0";
      faqGuarda.classList.remove("mostra");
    }
  });
});
