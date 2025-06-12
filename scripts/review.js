const submitCounter = document.getElementById("displayCounter");
if (submitCounter) {
    const numSubmits = Number(localStorage.getItem("numSubmits-ls")) || 0;
    submitCounter.textContent = numSubmits;
}