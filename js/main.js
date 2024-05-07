function showMore() {
    let moreText = document.getElementById("more-text");
    let btn = document.querySelector("button");

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        btn.textContent = "Скрыть";
    } else {
        moreText.style.display = "none";
        btn.textContent = "Показать больше";
    }
}

function showMore2() {
    let moreText = document.getElementById("more-text2");
    let btn = document.querySelector("button");

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        btn.textContent = "Скрыть";
    } else {
        moreText.style.display = "none";
        btn.textContent = "Показать больше";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let commentForm = document.getElementById("commentForm");
    let commentsList = document.getElementById("commentsList");

    commentForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let nameInput = document.getElementById("name");
        let commentInput = document.getElementById("comment");

        if (nameInput.value && commentInput.value) {
            let commentItem = document.createElement("li");
            commentItem.classList.add("comment");

            let commentContent = document.createElement("div");
            commentContent.classList.add("comment-content");
            commentContent.innerHTML = nameInput.value + "<p>" + commentInput.value + "</p>";

            let deleteButton = document.createElement("button");
            deleteButton.classList.add("delete-btn");
            deleteButton.textContent = "Удалить";

            deleteButton.addEventListener("click", function() {
                commentItem.parentNode.removeChild(commentItem);
            });

            commentItem.appendChild(commentContent);
            commentItem.appendChild(deleteButton);
            commentsList.appendChild(commentItem);

            nameInput.value = "";
            commentInput.value = "";
        }
    });
});



const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const actorContainer = document.querySelector('.actor-container');

        document.getElementById('prev-btn').addEventListener('click', function() {
            document.querySelector('.actor-container').scrollLeft -= 100;
        });
        
        document.getElementById('next-btn').addEventListener('click', function() {
            document.querySelector('.actor-container').scrollLeft += 100;
        });
        

