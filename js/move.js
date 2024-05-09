function moverBackground() {
  const elementos = document.querySelectorAll(".moving"); // Substitua "suaClasse" pela classe desejada

  elementos.forEach((elemento) => {
    let backgroundPositionX = 0;

    setInterval(() => {
      backgroundPositionX++;
      elemento.style.backgroundPositionX = `${backgroundPositionX}px`;
    }, 20);
  });
}

moverBackground();
