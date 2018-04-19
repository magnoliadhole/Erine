"use strict";

let erineGameState = {
  characterStats: [],
  characterEquipment: [],
  currentScene: [],
  plotFlags: []
};

function WriteToTitle(notificationText) {
  let titleArea = document.querySelector("#title-area");
  titleArea.firstElementChild.innerHTML = notificationText;
}
