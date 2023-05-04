function playGif(element) {
  element.src = element.dataset.gif;
}

function stopGif(element) {
  element.src = element.getAttribute('src').replace('.gif', '.png');
}
