const currYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currYear.innerHTML = today.getFullYear();
lastModified.innerHTML = 'Last Modification: ' + document.lastModified;