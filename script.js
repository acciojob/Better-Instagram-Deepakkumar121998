//your code here
// Drag and drop functionality
let dragged;

document.addEventListener("dragstart", function (event) {
  dragged = event.target;
});

document.addEventListener("dragover", function (event) {
  event.preventDefault();
});

document.addEventListener("drop", function (event) {
  event.preventDefault();
  if (event.target.classList.contains("grid-item")) {
    // Swap background images
    const temp = dragged.style.backgroundImage;
    dragged.style.backgroundImage = event.target.style.backgroundImage;
    event.target.style.backgroundImage = temp;
  }
});
