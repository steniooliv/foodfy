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

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function(){
    window.location.href = `/recipes/${i}`
  })
}