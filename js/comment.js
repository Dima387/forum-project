const commentForm = document.querySelector(".comment-form");
const commentField = document.querySelector(".comment-field");
const commentList  = document.querySelector(".comment-list");
const submitButton = document.querySelector(".submit-button");

commentForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    let comment = document.createElement('li');
    comment.classList.add('user-comment');
    commentList.appendChild(comment);
    comment.textContent = evt.target.elements.commentField.value;
    commentField.value = "";
})