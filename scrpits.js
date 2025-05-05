document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    // Image Protection System
    document.querySelectorAll('.portfolio-item, .client-item').forEach(item => {
        // Add watermark overlay
        const watermark = document.createElement('div');
        watermark.className = 'watermark';
        item.appendChild(watermark);
        
        // Prevent right-click saving
        item.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            alert('Image downloading is disabled to protect the artist\'s work.');
        });
    });

    // Disable drag-and-drop for protected images
    document.querySelectorAll('.portfolio-item img, .client-item img').forEach(img => {
        img.setAttribute('draggable', 'false');
    });

    // Testimonial Carousel
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.dot');
    let currentTestimonial = 0;

    function showTestimonial(index) {
       