const e = require("express");

const toggleVisible = document.querySelectorAll(".isVisible");
const paragraphs = document.querySelectorAll(".info");
const cards = document.querySelectorAll(".card");

for (let h = 0; h < toggleVisible.length; h++) {
  toggleVisible[h].addEventListener("click", () => {
    if (paragraphs[h].classList.contains("hidden")) {
      paragraphs[h].classList.remove("hidden");
      toggleVisible[h].innerHTML = "Esconder";
    } else {
      paragraphs[h].classList.add("hidden");
      toggleVisible[h].innerHTML = "Mostrar";
    }
  });
}

function addIngredient() {
  const ingredients = document.querySelector("#ingredients");
  const fieldContainer = document.querySelectorAll(".ingredient");

  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  if (newField.children[0].value == "") return false;

  newField.children[0].value = "";
  ingredients.appendChild(newField);
}

document.querySelector(".add-ingredient").addEventListener("click", addIngredient);

function addPreparation() {
  const ingredients = document.querySelector("#preparations");
  const fieldContainer = document.querySelectorAll(".preparation");

  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  if (newField.children[0].value == "") return false;

  newField.children[0].value = "";
  ingredients.appendChild(newField);
}

document.querySelector(".add-preparation").addEventListener("click", addPreparation);


function deleteConfirm(e) {
  if (!confirm("Deseja mesmo deletar?")) {
    e.preventDefault();
  };
}