
var likeButton = document.getElementById("likeButton");
var nombreLikes = document.getElementById("numberlikes");
let compteurLikes = 3;
likeButton.addEventListener("click", function() {
compteurLikes++;
nombreLikes.textContent = compteurLikes + " Likes";
});
