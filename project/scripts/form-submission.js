//local Storage forms submitted counter
let numSubmits = Number(localStorage.getItem("numSubmits-ls")) || 0;
let form = document.querySelector(".pc-form");

form.addEventListener("submit", (event) => {
    if (form.checkValidity()) {
        numSubmits++;
        localStorage.setItem("numSubmits-ls", numSubmits);
    } else {
        console.log("Required fields not filled. Counter not incremented.");
    }
});