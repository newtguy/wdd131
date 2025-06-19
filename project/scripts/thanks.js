const submitCounter = document.getElementById("submitCounter");
if (submitCounter) {
    const numSubmits = Number(localStorage.getItem("numSubmits-ls")) || 0;
    submitCounter.textContent = numSubmits;
}