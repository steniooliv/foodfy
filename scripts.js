const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = document.querySelectorAll(".card");

for (let card of cards) {
  card.addEventListener("click", function(){
    const card_id = card.getAttribute("id");
    const title = card.getElementsByClassName("title")[0].innerHTML;
    const chef = card.getElementsByClassName("chef")[0].innerHTML;
    modalOverlay.classList.add("active");

    modal.querySelector("img").src = `assets/${card_id}.png`
    modal.querySelector("img").alt = title
    modal.getElementsByClassName("title")[0].innerHTML = title;
    modal.getElementsByClassName("chef")[0].innerHTML = chef;
  })
  
}

document.querySelector(".close").addEventListener("click", function(){
  modalOverlay.classList.remove("active");

  modal.querySelector("img").src = ""
  modal.querySelector("img").alt = ""
  modal.getElementsByClassName("title")[0].innerHTML = "";
  modal.getElementsByClassName("chef")[0].innerHTML = "";
});