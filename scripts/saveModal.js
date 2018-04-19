let openSaveScreenButtons = document.querySelectorAll(".erine-save-game");
let openLoadScreenButtons = document.querySelectorAll(".erine-load-game");
let saveSlotButtons = document.querySelectorAll(".erine-save-slot");

let operation = "save";
let savesModal = document.querySelector("#erine-saves-modal");

openSaveScreenButtons.forEach(function(button) {
  button.addEventListener("click", openSaveScreen);
});

openLoadScreenButtons.forEach(function(button) {
  button.addEventListener("click", openLoadScreen);
});

saveSlotButtons.forEach(function(button) {
  if (operation == "save") {
    button.addEventListener("click", saveGameToSlot);
  } else {
    button.addEventListener("Click", loadGameFromSlot);
  }
});

function openSaveScreen() {
  document.querySelector("#erine-saves-modal > p").firstChild.nodeValue =
    "Save Game";
  operation = "save";
  savesModal.style.display = "block";
}

function openLoadScreen() {
  document.querySelector("#erine-saves-modal > p").firstChild.nodeValue =
    "Load Game";
  operation = "load";
  savesModal.style.display = "block";
}

/* state save */
function saveGameToSlot() {
  let erineGameStateJSon = JSON.stringify(erineGameState);
  //call the html save thingy
}

function loadGameToSlot() {
  //haha no clue dude
}
