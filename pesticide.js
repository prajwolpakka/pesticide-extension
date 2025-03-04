var resultBanner = document.getElementById('pesticide-for-chrome-result');
function init() {
  if (!resultBanner) {
    console.warn("Pesticide result banner not found.");
    return;
  }
  resultBanner.innerHTML = '<p>Ready to kill some bugs!</p>';
}

// updates the info banner at the bottom of the page
function updateBanner(event) {
  if (!resultBanner) return;

  if (!(event.target instanceof HTMLElement)) return; // Ensure it's a valid HTML element

  var id = event.target.id || "none";
  var classList = event.target.classList.value || "none";
  var node = event.target.nodeName.toLowerCase();

  // combine the node name, classes, and id into a string in the banner
  resultBanner.innerHTML = `<p>You're hovering on = { 
    node: <b>${node}</b>; 
    classes: <b>${classList}</b>; 
    id: <b>${id}</b>; 
  }</p>`;
}

// toggles the visibility of the banner
function showBanner(event) {
  if (!resultBanner) return;
  resultBanner.classList.toggle("show", event.ctrlKey);
}

init();
document.addEventListener("mouseover", updateBanner);
window.addEventListener("keydown", showBanner);
window.addEventListener("keyup", showBanner);
