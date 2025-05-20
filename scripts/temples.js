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