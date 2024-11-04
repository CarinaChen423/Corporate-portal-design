let minSizeCZ, maxSizeCZ;
let numRowsCZ, numColsCZ;
let originalNumbersCZ = [];
let numbersCZ = [];
let currentMoveCountCZ = 0;
let scoreCZ = 0;
let countdownTime = 60;
let timerInterval;
let fullWinAudioCZ = new Audio("bigwin.mp3");
let smallWinAudioCZ = new Audio("semiwin.mp3");

function initGameCZ() {
  minSizeCZ = 2;
  maxSizeCZ = 8;
  createSelectOptionsCZ();
  startGameCZ();
}

function createSelectOptionsCZ() {
  let rowSelect = document.getElementById("rows");
  let colSelect = document.getElementById("columns");
  for (let i = minSizeCZ; i <= maxSizeCZ; i++) {
    let rowOption = document.createElement("option");
    rowOption.innerHTML = rowOption.value = i;
    rowSelect.appendChild(rowOption);

    let colOption = document.createElement("option");
    colOption.innerHTML = colOption.value = i;
    colSelect.appendChild(colOption);
  }
  let defaultSelection = Math.floor((maxSizeCZ - minSizeCZ) / 2);
  rowSelect.getElementsByTagName("option")[defaultSelection].selected = "selected";
  colSelect.getElementsByTagName("option")[defaultSelection].selected = "selected";
}

function startGameCZ() {
  numRowsCZ = document.getElementById("rows").value;
  numColsCZ = document.getElementById("columns").value;
  let board = document.getElementById("board");
  board.innerHTML = "";

  currentMoveCountCZ = 0;
  scoreCZ = 0;
  initializeNumbersCZ();
  shuffleNumbersCZ();
  createBoardCZ();
  calculateScoreCZ();
  countdownTime = 60; 
  updateInfoCZ();

 
  clearInterval(timerInterval); 
  timerInterval = setInterval(updateInfoCZ, 1000); 
}

function initializeNumbersCZ() {
  originalNumbersCZ = [];
  numbersCZ = [];
  for (let i = 1; i < numRowsCZ * numColsCZ; i++) {
    originalNumbersCZ.push(i);
    numbersCZ.push(i);
  }
  originalNumbersCZ.push(0);
  numbersCZ.push(0);
}

function shuffleNumbersCZ() {
  let temp;
  for (let j, i = numbersCZ.length - 2; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = numbersCZ[j];
    numbersCZ[j] = numbersCZ[i];
    numbersCZ[i] = temp;
  }
}

function createBoardCZ() {
  let board = document.getElementById("board");
  for (let i = 0; i < numRowsCZ; i++) {
    let row = board.insertRow(i);
    for (let j = 0; j < numColsCZ; j++) {
      let cell = row.insertCell(j);
      cell.id = i + "." + j;
      let value = numbersCZ[i * numColsCZ + j];
      cell.innerHTML = value === 0 ? "" : value;

      cell.onclick = function () {
        if (cell.innerHTML) {
          moveTileCZ(i, j, cell);
        }
      };
    }
  }
}

function moveTileCZ(i, j, cell) {
  if (
    (j > 0 && document.getElementById(i + "." + (j - 1)).innerHTML === "") ||
    (i > 0 && document.getElementById(i - 1 + "." + j).innerHTML === "") ||
    (j < numColsCZ - 1 && document.getElementById(i + "." + (j + 1)).innerHTML === "") ||
    (i < numRowsCZ - 1 && document.getElementById(i + 1 + "." + j).innerHTML === "")
  ) {
    swapTilesCZ(i, j, cell);
    currentMoveCountCZ++;
    updateInfoCZ();

    if (checkWinConditionCZ()) {
      clearInterval(timerInterval); 
      displayWinMessageCZ("Well done! A perfect victory.", "bigwin.jpg", fullWinAudioCZ);
    } else if (checkSemiWinConditionCZ()) {
      displayWinMessageCZ("Nice work! Almost there", "smallwin.png", smallWinAudioCZ);
    }
  }
}

function swapTilesCZ(i, j, cell) {
  let emptyCell;
  if (j > 0 && document.getElementById(i + "." + (j - 1)).innerHTML === "") {
    emptyCell = document.getElementById(i + "." + (j - 1));
  } else if (i > 0 && document.getElementById(i - 1 + "." + j).innerHTML === "") {
    emptyCell = document.getElementById(i - 1 + "." + j);
  } else if (j < numColsCZ - 1 && document.getElementById(i + "." + (j + 1)).innerHTML === "") {
    emptyCell = document.getElementById(i + "." + (j + 1));
  } else if (i < numRowsCZ - 1 && document.getElementById(i + 1 + "." + j).innerHTML === "") {
    emptyCell = document.getElementById(i + 1 + "." + j);
  }

  if (emptyCell) {
    emptyCell.innerHTML = cell.innerHTML;
    cell.innerHTML = "";

    let emptyIndex = parseInt(emptyCell.id.split(".")[0]) * numColsCZ + parseInt(emptyCell.id.split(".")[1]);
    let currentIndex = i * numColsCZ + j;
    numbersCZ[emptyIndex] = numbersCZ[currentIndex];
    numbersCZ[currentIndex] = 0;
  }
}

function calculateScoreCZ() {
  scoreCZ = 0;
  for (let i = 0; i < numRowsCZ * numColsCZ; i++) {
    scoreCZ += numbersCZ[i] == originalNumbersCZ[i];
  }
}

function updateInfoCZ() {
  if (countdownTime > 0) {
    countdownTime--; 
    document.getElementById("time").innerHTML = countdownTime + " seconds remaining";
  } else {
    clearInterval(timerInterval); 
    displayWinMessageCZ("Time's up! Better luck next time.", "lose.png", smallWinAudioCZ);
  }

  document.getElementById("current").innerHTML = currentMoveCountCZ;
  document.getElementById("score").innerHTML = scoreCZ;
}

function checkWinConditionCZ() {
  for (let i = 0; i < numRowsCZ * numColsCZ - 1; i++) {
    if (numbersCZ[i] !== i + 1) {
      return false;
    }
  }
  return true;
}

function checkSemiWinConditionCZ() {
  for (let i = 0; i < numRowsCZ * numColsCZ - 2; i++) {
    if (numbersCZ[i] !== i + 1) {
      return false;
    }
  }
  return (
    numbersCZ[numRowsCZ * numColsCZ - 2] === 0 &&
    numbersCZ[numRowsCZ * numColsCZ - 1] === numRowsCZ * numColsCZ - 1
  );
}

function displayWinMessageCZ(message, image, audio) {
  clearInterval(timerInterval);
  document.getElementById("status").innerHTML =
    `<img src="${image}" alt="Win Image" width="100"><br>` +
    message +
    " You completed the puzzle in " +
    currentMoveCountCZ +
    " moves.";
  audio.play();
}
