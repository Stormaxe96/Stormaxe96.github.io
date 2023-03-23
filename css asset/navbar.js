// Adaugă un eveniment de tip scroll la div-ul navbar
document.querySelector(".navbar").addEventListener("scroll", function() {
    // Când utilizatorul derulează la dreapta, adaugă clasa "scroll-right"
    if (this.scrollLeft > 0) {
      this.classList.add("scroll-right");
    }
    // Când utilizatorul revine la poziția inițială, elimină clasa "scroll-right"
    else {
      this.classList.remove("scroll-right");
    }
  });
  