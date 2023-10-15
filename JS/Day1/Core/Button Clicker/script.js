const supprimerBouton = document.getElementById("btn-1");
const phraseASupprimer = document.getElementById("remove");
supprimerBouton.addEventListener("click", function() {
    if (remove) {
        remove.remove(); // Supprime l'élément
    }
  });