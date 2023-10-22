document.addEventListener("DOMContentLoaded", function() {
    var userName = document.getElementById("userName");
    var userAvatar = document.getElementById("userAvatar");
    var editProfileLink = document.getElementById("editProfileLink");

    editProfileLink.addEventListener("click", function(event) {
        event.preventDefault(); // Empêcher le lien de suivre le lien

        // Changer le nom en "Adrien D" et l'image en une nouvelle image
        userName.textContent = "Adrien D";
        userAvatar.src = "adrien-s.jpg";
        userAvatar.alt = "adrien";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var connectionRequestsCard = document.getElementById("connectionRequestsCard");
    var acceptIcons = connectionRequestsCard.querySelectorAll(".icon");
    var closeIcons = connectionRequestsCard.querySelectorAll(".icon");

    acceptIcons.forEach(function(acceptIcon, index) {
        acceptIcon.addEventListener("click", function() {
            // Supprimer l'élément parent li lorsque l'icône "accept" est cliquée
            const listItem = acceptIcon.closest(".card-list-item");
            listItem.remove();
        });
    });

    closeIcons.forEach(function(closeIcon, index) {
        closeIcon.addEventListener("click", function() {
            // Supprimer l'élément parent li lorsque l'icône "close" est cliquée
            const listItem = closeIcon.closest(".card-list-item");
            listItem.remove();
        });
    });
});
