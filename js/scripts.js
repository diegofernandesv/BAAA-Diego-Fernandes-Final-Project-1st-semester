function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    const burgerMenu = document.getElementById('burger-menu');
    
    navLinks.classList.toggle('active');
    burgerMenu.classList.toggle('active'); // Add this line to toggle animation class
}

document.getElementById("burger-menu").addEventListener("click", toggleMenu);


document.getElementById('explore-button').addEventListener('click', function () {
    window.location.href = 'explore.html';
  });


