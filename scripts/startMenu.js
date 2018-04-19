let newGameButton = document.querySelector("#erine-start-game");
let continueGameButton = document.querySelector("#erine-continue-game");

newGameButton.addEventListener("click", startGame);
continueGameButton.addEventListener("click", continueGame);

function startGame() {
  document.querySelector("#erine-start-menu").style.display = "none";
  document.querySelector("#erine-explore-mode").style.display = "grid";
  newGameState();
}

function loadGame() {
  document.querySelector("#erine-start-menu > p").firstChild.nodeValue =
    "I haven't even implemented saving yet";
}

function continueGame() {
  document.querySelector("#erine-start-menu > p").firstChild.nodeValue =
    "I haven't even implemented saving yet";
}

function newGameState() {
  (erineGameState.characterStats = {
    characterClass: "Morsel",
    timesEaten: 0,
    timesCuddled: 3,
    favouritePred: "unknown"
  }),
    (erineGameState.characterEquipment = {
      head: "",
      chest: "scrappy cloth",
      pants: "loin cloth",
      leftHand: "",
      rightHand: ""
    }),
    (erineGameState.CurrentScene = [1, 1]),
    (erineGameState.plotFlags = [1, 1, 0, 0, 0, 0]);
}
