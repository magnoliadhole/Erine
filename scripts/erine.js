"use strict";

/* Let's see if I can keep this as much like an engine by allowing for modularised shit */

let erineGameState = [];

// Required functions for any Erine engine game to work
// You need to initialise some kind of game state so that the player can save progress
erineGameState = newGameState();

/* state save */
function erineSaveGame() {
  let erineGameStateJSon = JSON.stringify(erineGameState);
}

function erineLoadGame() {
  erineGameState = "haha nothing";
}

let saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", erineSaveGame);

/* state load */
let loadButton = document.getElementById("loadButton");
loadButton.addEventListener("click", erineLoadGame);
