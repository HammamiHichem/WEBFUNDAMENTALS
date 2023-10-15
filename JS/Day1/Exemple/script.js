const boutonDisparaitre = document.getElementById("boutonDisparaitre");
  const phraseADisparaitre = document.getElementById("phraseADisparaitre");

  boutonDisparaitre.addEventListener("click", function() {
    // Vérifie si l'élément est visible (affiché)
    if (phraseADisparaitre.style.display !== "none") {
      phraseADisparaitre.style.display = "none"; // Le rend invisible
    } else {
      phraseADisparaitre.style.display = "block"; // Le rend visible
    }
  });