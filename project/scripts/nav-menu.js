//Hamburger menu nav button
const navMenuButton = document.getElementById('navMenuButton');
const navList = document.querySelector('nav');

navMenuButton.addEventListener('click', function () {
    navList.classList.toggle('open');

    if (navList.classList.contains('open')) {
        navMenuButton.textContent = '❌';
    } else {
        navMenuButton.textContent = '☰';
    }
});

