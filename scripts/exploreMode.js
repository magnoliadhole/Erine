//Code for updating stats on character info div unhiding
let mainExploreScreen = document.querySelector("#erine-explore-mode");
let characterInfoDisplay = document.querySelector("#character-info");
let navigationDisplay = document.querySelector("#erine-game-navigation");

let explorePageObserver = new MutationObserver(updateExplorePageOnDisplay);
let explorePageObserverConfig = { attributes: true };

explorePageObserver.observe(mainExploreScreen, explorePageObserverConfig);

function updateExplorePageOnDisplay(mutations) {
  for (let mutation of mutations) {
    console.log(mutation);
    if (mutation.attributeName == "style") {
      refreshCharacterInfo();
    }
  }
}

function refreshCharacterInfo() {
  characterInfoDisplay.firstElementChild.innerHTML = `Class: ${
    erineGameState.characterStats.characterClass
  }`;
}

function refreshExplore() {
  //"Show some art dunno"
}

function RefreshNavigationInfo() {
  //"Show some navigation"
}
