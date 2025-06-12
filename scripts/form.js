const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

let productName = document.getElementById("productName");

products.forEach(product => {
    let newOption = document.createElement("option");
    newOption.textContent = product.name;
    newOption.value = product.name;
    productName.appendChild(newOption);
});


const submitButton = document.getElementById("submit");
const productForm = document.querySelector(".productForm");

let numSubmits = Number(localStorage.getItem("numSubmits-ls")) || 0;

productForm.addEventListener("submit", (event) => {
    console.log("inside Event listener");
    if (productForm.checkValidity()) {
        numSubmits++;
        localStorage.setItem("numSubmits-ls", numSubmits);
    } else {
        console.log("Required fields not filled. Counter not incremented.");
    }
});
