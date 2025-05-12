// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Menu tabs functionality - only runs if we're on the menu page
if (document.querySelector('.menu-tab')) {
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuSections = document.querySelectorAll('.menu-items');
    
    // Set initial state - hide all sections except the first one (Main Dishes)
    menuSections.forEach((section, index) => {
        if (index === 0) {
            // First section (mains) should be visible
            section.style.display = 'grid';
        } else {
            // All other sections should be hidden
            section.style.display = 'none';
        }
    });
    
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

// Gallery category tabs functionality - only runs if we're on the gallery page
if (document.querySelector('.category-tab')) {
    const categoryTabs = document.querySelectorAll('.category-tab');
    const galleryItems = document.querySelectorAll('.gallery-item');

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            categoryTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Get the category of the clicked tab
            const category = tab.getAttribute('data-category');
            
            // Show all items if "all" category is selected
            if (category === 'all') {
                galleryItems.forEach(item => {
                    item.style.display = 'block';
                });
                return;
            }
            
            // Filter gallery items based on category
            galleryItems.forEach(item => {
                // Check if the item has the selected category as a class
                if (item.classList.contains(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Menu item hover effect for romantic descriptions
const menuItems = document.querySelectorAll('.menu-item');
if (menuItems.length > 0) {
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const description = item.querySelector('.romantic-description');
            if (description) {
                description.style.opacity = '1';
                description.style.transform = 'translateY(0)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            const description = item.querySelector('.romantic-description');
            if (description) {
                description.style.opacity = '0';
                description.style.transform = 'translateY(10px)';
            }
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Scroll reveal animation
document.addEventListener('DOMContentLoaded', function() {
    // Add reveal class to sections that should animate on scroll
    const sections = document.querySelectorAll('section:not(.page-banner)');
    sections.forEach(section => {
        section.classList.add('reveal');
    });
    
    // Also add to featured items, menu items, about-content, etc.
    const revealElements = document.querySelectorAll('.menu-item, .featured-item, .about-content, .gallery-item, .testimonial, .team-member');
    revealElements.forEach(el => {
        el.classList.add('reveal');
    });
    
    // Initialize scroll observer
    const revealCallback = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Once revealed, no need to watch anymore
            }
        });
    };
    
    const revealObserver = new IntersectionObserver(revealCallback, {
        root: null,
        threshold: 0.15, // When 15% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Slight offset to trigger earlier
    });
    
    // Observe all elements with reveal class
    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });
});