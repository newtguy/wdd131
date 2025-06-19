const pcBuilds = [
    {
        cpu: "Ryzen 7800x3D",
        gpu: "AMD 7900XT",
        ram: "Corsair Vengeance 32 GB DDR5",
        psu: "Corsair RM850e",
        motherboard: "ASRock B650M Pro RS WiFi",
        storage: "2TB SSD",
        cooler: "Thermalright Peerless Assassin",
        case: "Asus Prime AP201 MicroATX"
    },
    {
        cpu: "Intel Core i7-14700K",
        gpu: "NVIDIA GeForce RTX 5090",
        ram: "G.Skill Trident Z5 RGB 64 GB",
        psu: "Corsair RM1000e",
        motherboard: "Asus ProArt Z790",
        storage: "4TB NVMe SSD",
        cooler: "be quiet! Silent Loop 3 CFM Liquid",
        case: "Phanteks EVOLV X2 ATX Mid Tower"
    }
]

function DisplayBuild(currBuild) {
    displayContainer.innerHTML = "";
    let buildIndex = 0;
    if (currBuild == intelBuild) {
        buildIndex = 1;
    }

    let elementArray = [];
    for (let i = 0; i < 8; i++) {
        elementArray.push(document.createElement("p"));
    }

    elementArray[0].innerHTML = `CPU: ${pcBuilds[buildIndex].cpu}<br>`;
    elementArray[1].innerHTML = `GPU: ${pcBuilds[buildIndex].gpu}<br>`;
    elementArray[2].innerHTML = `RAM: ${pcBuilds[buildIndex].ram}<br>`;
    elementArray[3].innerHTML = `PSU: ${pcBuilds[buildIndex].psu}<br>`;
    elementArray[4].innerHTML = `Motherboard: ${pcBuilds[buildIndex].motherboard}<br>`;
    elementArray[5].innerHTML = `Storage: ${pcBuilds[buildIndex].storage}<br>`;
    elementArray[6].innerHTML = `Cooler: ${pcBuilds[buildIndex].cooler}<br>`;
    elementArray[7].innerHTML = `Case: ${pcBuilds[buildIndex].case}<br>`;

    elementArray.forEach(element => {
        displayContainer.appendChild(element);
    });
}

const ryzenBuild = document.getElementById("ryzenBuild");
const intelBuild = document.getElementById("intelBuild");
const displayContainer = document.getElementById("pc-build-displayer");

ryzenBuild.addEventListener('click', () => {
    DisplayBuild(ryzenBuild);
});

intelBuild.addEventListener('click', () => {
    DisplayBuild(intelBuild);
});