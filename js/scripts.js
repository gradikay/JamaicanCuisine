// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Menu tabs functionality - only runs if we're on the menu page
if (document.querySelector('.menu-tab')) {
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuSections = document.querySelectorAll('.menu-items');

    menuTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            menuTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Get the category of the clicked tab
            const category = tab.getAttribute('data-category');
            
            // Hide all menu sections
            menuSections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Show the selected menu section
            document.getElementById(category).style.display = 'grid';
        });
    });
}