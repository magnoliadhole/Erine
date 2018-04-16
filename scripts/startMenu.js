var startButton = document.getElementById("start-game");
startButton.addEventListener("click", startGame);

function startGame() {
  document.getElementById("erine-start-menu").style.display = "none";
  document.getElementById("erine-explore-mode").style.display = "grid";
}
