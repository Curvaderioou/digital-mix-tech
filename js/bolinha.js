const div = document.querySelector("#bolinha");

document.addEventListener("mousemove", function (event) {
  x = event.clientX;
  y = event.clientY;
  if (true) {
    div.style = `transition: .05s cubic-bezier(0.575, 0.885, 1, 1); transform: translate(calc(${x}px - 50%), calc(${y}px - 50%)); z-index: 1; cursor:default;`;
  }
});
