// adds a new flashcard input field when the add button is clicked
document.getElementById("add-button").addEventListener("click", function(event) {

  if (event.type === "click") {

    addFlashCardInputField();

  }
});

// removes the last flashcard input field added
document.getElementById("subtract-button").addEventListener("click", function(event) {

  if (event.type === "click") {

    if (i != 0) {

      removeFlashCardInputField();

    }
  }
});

document.getElementById("create-button").addEventListener("click", function(event) {

  if (event.type === "click") {

    createFlashCardInfo();
    createFlashCards();
    addFlashcardIndicators();

    toggleFlashcards();
    toggleInputFields();
    toggleBackButton();

  }
});

document.getElementById("back-button").addEventListener("click", function(event) {

  if (event.type === "click") {

    if (promptUserToReturnToStartIndicator()) {
    deleteFlashcardIndicators()

    toggleFlashcards();
    toggleInputFields();
    toggleBackButton();
  }
  }
});


// Flashcard input field duplicator function
var i = 0;

var front = [];

var back = [];

function addFlashCardInputField() {
  var flashCardInputField = document.getElementById("flashcard-input-field0");
  var flashCardInputFieldClone = flashCardInputField.cloneNode(true);
  flashCardInputFieldClone.id = "flashcard-input-field" + ++i;
  flashCardInputField.parentNode.appendChild(flashCardInputFieldClone);
}

function removeFlashCardInputField() {
  if (confirm('Are you sure you want to delete your last flashcard?')) {
    var inputToRemove = document.getElementById("flashcard-input-field" + i);
    inputToRemove.remove();
    --i;
  } else {

  }
}

function createFlashCardInfo() {

  front = []
  back = []

  for (var x = 0; x < i + 1; x++) {
    front.push(document.getElementsByClassName("flashcard-input-front")[x].value);
    back.push(document.getElementsByClassName("flashcard-input-back")[x].value);
  }
}

function createFlashCards() {
  if (i == 0) {
    document.getElementsByClassName("flip-card-front")[0].firstElementChild.innerHTML = front[0];
    document.getElementsByClassName("flip-card-back")[0].firstElementChild.innerHTML = back[0];

  } else if (document.getElementById("flashcard1")) {
    for (var x = 0; x < i; x++) {
      if (document.getElementById("flashcard" + (x + 1))) {
        document.getElementById("flashcard" + (x + 1)).remove();
      }
    }

    generateFlashCards();

  } else if (i > 0) {
    generateFlashCards();

  }
}

function toggleFlashcards() {
  document.getElementById("flashcard-carousel").classList.toggle("hidden");
}

function toggleInputFields() {

  if (document.getElementById("input-field-container").classList.contains('hidden') == false) {
    document.getElementById("input-field-container").classList.add("hidden");
  } else {
    document.getElementById("input-field-container").classList.toggle("hidden");
  }

  if (document.getElementById("input-field-controls-container").classList.contains('hidden') == false) {
    document.getElementById("input-field-controls-container").classList.add("hidden");
  } else {
    document.getElementById("input-field-controls-container").classList.toggle("hidden");
  }

}

function toggleBackButton() {
  if (document.getElementById("back-button-container").classList.contains('hidden')) {
    document.getElementById("back-button-container").classList.toggle("hidden");
  } else {
    document.getElementById("back-button-container").classList.toggle("hidden");
  }
}

function generateFlashCards() {
  for (var x = 0; x < i; x++) {
    var flashCard = document.getElementById("flashcard0");
    var flashCardClone = flashCard.cloneNode(true);
    flashCardClone.setAttribute('id', ("flashcard" + (x + 1)));
    flashCardClone.classList.remove("active");
    flashCard.parentNode.appendChild(flashCardClone);
    document.getElementsByClassName("flip-card-front")[x].firstElementChild.innerHTML = front[x];
    document.getElementsByClassName("flip-card-back")[x].firstElementChild.innerHTML = back[x];
  }

  document.getElementsByClassName("flip-card-front")[i].firstElementChild.innerHTML = front[i];
  document.getElementsByClassName("flip-card-back")[i].firstElementChild.innerHTML = back[i];

}


function addFlashcardIndicators() {

  flashcardIndicators()
}

function deleteFlashcardIndicators() {
if (document.getElementsByClassName("indicator").length > 0) {
  for (var x = 0; x < i; x++) {
    var length = document.getElementsByClassName("indicator").length
    document.getElementsByClassName("indicator")[length - 1].remove()
  }
}
}

function flashcardIndicators() {
  for (var x = 0; x < i; x++) {
    var indicator = document.getElementById("carousel-indicator");
    var indicatorClone = indicator.cloneNode(true);
    indicatorClone.setAttribute("data-bs-slide-to", (x + 1));
    indicatorClone.setAttribute("aria-label", ("Slide " + (x + 1)));
    indicatorClone.setAttribute('id', ("carousel-indicator" + (x + 1)));
    indicatorClone.setAttribute("class", "indicator");
    indicatorClone.removeAttribute("aria-current");
    indicator.parentNode.appendChild(indicatorClone);
  }
}

function promptUserToReturnToStartIndicator() {
    if (document.getElementById("flashcard0").classList.contains("active")) {
        return true;
    } else {
        alert("Please navigate to the first flashcard before clicking \"Back\"");
        return false;
    }
}
