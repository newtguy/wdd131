//Hamburger menu nav button
const hamNavMenuButton = document.getElementById('hamNavMenuButton');
const navList = document.querySelector('nav ul');

hamNavMenuButton.addEventListener('click', function () {
    navList.classList.toggle('open');

    if (navList.classList.contains('open')) {
        hamNavMenuButton.textContent = '❌';
    } else {
        hamNavMenuButton.textContent = '☰';
    }
});

//Temple array
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "1999, March, 19",
        area: 45800,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/madrid-spain/400x250/madrid-spain-mormon-temple-954942-wallpaper.jpg"
    },
    {
        templeName: "Oaxaca Mexico",
        location: "Oaxaca, Mexico",
        dedicated: "2000, March, 11",
        area: 10700,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oaxaca-mexico/400x250/oaxaca-mexico-temple-759270-wallpaper.jpg"
    },
    {
        templeName: "Rio de Janeiro Brazil",
        location: "Rio de Janeiro, Brazil",
        dedicated: "2022, May, 8",
        area: 29966,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rio-de-janeiro-brazil/400x250/1-001db7326e638032470a02813c9e47191ef74b0e.jpeg"
    },
];

let templeGrid = document.getElementById("templeGrid");
let pageHeading = document.getElementById("pageHeading");

temples.forEach(temple => {
    createTempleCard(temple);
});

function createTempleCard(temple) {
    let container = document.createElement("section");
    let heading = document.createElement("h3");
    let templeLocation = document.createElement("p");
    let dedicationDate = document.createElement("p");
    let size = document.createElement("p");
    let img = document.createElement("img");

    templeLocation.classList.add("templeLocation");
    dedicationDate.classList.add("dedicationDate");
    size.classList.add("areaSize");

    templeGrid.appendChild(container);
    container.append(heading, templeLocation, dedicationDate, size, img);

    heading.textContent = temple.templeName;
    templeLocation.textContent = temple.location;
    dedicationDate.textContent = temple.dedicated;
    size.textContent = temple.area;
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
}

let home = document.getElementById("home");
let old = document.getElementById("old");
let newPage = document.getElementById("new");
let large = document.getElementById("large");
let small = document.getElementById("small");

home.addEventListener("click", () => {
    pageHeading.textContent = "Home";
    templeGrid.innerHTML = "";
    temples.forEach(temple => {
        createTempleCard(temple)
    });
});

old.addEventListener("click", () => {
    pageHeading.textContent = "Old";
    templeGrid.innerHTML = "";
    let oldTemples = temples.filter(temple => parseInt(temple.dedicated.slice(0, 2)) < 19);
    oldTemples.forEach(temple => {
        createTempleCard(temple)
    });
});

newPage.addEventListener("click", () => {
    pageHeading.textContent = "New";
    templeGrid.innerHTML = "";
    let newTemples = temples.filter(temple => parseInt(temple.dedicated.slice(0, 4)) > 2000);
    newTemples.forEach(temple => {
        createTempleCard(temple)
    });
});

large.addEventListener("click", () => {
    pageHeading.textContent = "Large";
    templeGrid.innerHTML = "";
    let largeTemples = temples.filter(temple => temple.area > 90000);
    largeTemples.forEach(temple => {
        createTempleCard(temple)
    });
});

small.addEventListener("click", () => {
    pageHeading.textContent = "Small";
    templeGrid.innerHTML = "";
    let smallTemples = temples.filter(temple => temple.area < 10000);
    smallTemples.forEach(temple => {
        createTempleCard(temple)
    });
});