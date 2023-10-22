var likeButtons = document.querySelectorAll('.like-button');
var likeCounts = document.querySelectorAll('.like-count');

var counts = [9, 12, 9];

likeButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        counts[index]++;
        likeCounts[index].textContent = counts[index];
    });
});

const clickButton = document.getElementById('click-button');


clickButton.addEventListener('click', function() {
window.alert("Thank you to the entire Coding Dojo team!");
});
