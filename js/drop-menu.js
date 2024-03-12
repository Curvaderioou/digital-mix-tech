const dropMenu = document.getElementById("drop-menu");
const dropContent = document.getElementById("drop-content");
const dropRect = dropMenu.getBoundingClientRect();
const contentRect = dropMenu.getBoundingClientRect();
const header = document.getElementById("header").getBoundingClientRect();
var hoverDrop = false;



document.addEventListener('DOMContentLoaded', () => {
  dropContent.style = `transform: translate(calc(${dropRect.left}px - 20px), -100px);`;
  // console.log(dropRect.top);
});

document.addEventListener("mousemove", (e) => {
  if (e.target == dropMenu) {
    hoverDrop = true;
  }
  if (hoverDrop == true) {
    dropContent.classList.add("dropped");
    dropContent.style = `transform: translate(calc(${dropRect.left}px - 20px), 90px);`;
    if (
      e.clientX > contentRect.right ||
      e.clientX < contentRect.left
    ) {
      dropContent.classList.remove("dropped");
      dropContent.style = `transform: translate(calc(${dropRect.left}px - 20px), -100px);`;
      hoverDrop = false;
    }
  }
});
