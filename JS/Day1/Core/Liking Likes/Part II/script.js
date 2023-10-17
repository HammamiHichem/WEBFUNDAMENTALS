<script>
        const likeButton1 = document.getElementById("likeButton1");
        const likeButton2 = document.getElementById("likeButton2");
        const likeButton3 = document.getElementById("likeButton3");
        const like = document.getElementById("like");
        let likes = 0;
        likeButton1.addEventListener("click", incrementLikes);
        likeButton2.addEventListener("click", incrementLikes);
        likeButton3.addEventListener("click", incrementLikes);
        function incrementLikes() {
        likes++;
        likes.textContent = likes;
        }
    </script>