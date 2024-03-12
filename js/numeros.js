function initAnimaNumeros() {
  const numerosSection = document.querySelector("#numeros");
  const numerosObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateNumbers();
          numerosObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );

  numerosObserver.observe(numerosSection);
}

const numberContainers = document.querySelectorAll(".number");
const targetNumbers = [130, 200, 6, 50, 300, 2];
const duration = 2500; // milissegundos

function updateNumbers() {
  const startTimestamp = performance.now();

  function animateNumbers(timestamp) {
    const elapsed = timestamp - startTimestamp;
    const progress = Math.min(1, elapsed / duration);

    numberContainers.forEach((numberContainer, index) => {
      const currentNumber = Math.round(targetNumbers[index] * progress);

      numberContainer.textContent = currentNumber;
    });

    if (progress < 1) {
      requestAnimationFrame(animateNumbers);
    }
  }

  requestAnimationFrame(animateNumbers);
}

initAnimaNumeros();
