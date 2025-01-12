document.querySelector('.nav-toggle').addEventListener('click', function() {
    const nav = document.querySelector('.nav');
    const hamburgerIcon = document.querySelector('.nav-toggle .icon'); // Hamburger icon
    const xIcon = document.querySelector('.nav-toggle .icon.x'); // X icon
    
    nav.classList.toggle('active'); // Toggle the active class
    
    // Change the icon based on the navigation state
    if (nav.classList.contains('active')) {
        hamburgerIcon.style.display = 'none'; // Hide hamburger icon
        xIcon.style.display = 'inline'; // Show X icon
    } else {
        hamburgerIcon.style.display = 'inline'; // Show hamburger icon
        xIcon.style.display = 'none'; // Hide X icon
    }
});