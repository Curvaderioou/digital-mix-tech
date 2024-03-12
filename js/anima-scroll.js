function initAnimaScroll() {
  const sections = document.querySelectorAll(".js-section-scroll");

  if (sections.length) {
    const windowsHalf = window.innerHeight * 0.7;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowsHalf;
        if (sectionTop < 0) {
          section.classList.add("ativo");
        }
      });
    }
  }

  animaScroll();

  window.addEventListener("scroll", animaScroll);
}
initAnimaScroll();
