document.addEventListener('DOMContentLoaded', function() {
    // ======================
    // Navigation Functionality
    // ======================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.navlinks');
    
    
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');

        // Toggle body overflow to prevent scrolling when menu is open
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // ======================
    // Navbar scroll effect
    // ======================
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ======================
    // Back to Top Button
    // ======================
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });
    }
/*
// ======================
    // Image Protection System
    // ======================
    const protectionOverlay = document.createElement('div');
    protectionOverlay.className = 'protection-overlay';
    document.body.appendChild(protectionOverlay);

    const protectedModal = document.getElementById('protected-modal') || document.createElement('div');
    protectedModal.id = 'protected-modal';
    protectedModal.className = 'protected-modal';
    protectedModal.innerHTML = `
        <div class="protected-content">
            <span class="close-modal">&times;</span>
            <p>Image downloading is disabled to protect the artist's work.</p>
            <p>For inquiries about licensing or usage, please contact me.</p>
            <a href="#contact" class="btn">Contact Me</a>
        </div>
    `;
    document.body.appendChild(protectedModal);

    // Apply protection to all portfolio images
    function protectImages() {
        document.querySelectorAll('.portfolio-item, .client-item, .testimonial-author').forEach(item => {
            // Add watermark overlay
            const watermark = document.createElement('div');
            watermark.className = 'watermark';
            item.appendChild(watermark);
            
            // Add transparent click shield
            const clickShield = document.createElement('div');
            clickShield.className = 'click-shield';
            item.appendChild(clickShield);
            
            // Disable pointer events on images
            const images = item.querySelectorAll('img');
            images.forEach(img => {
                img.style.pointerEvents = 'none';
                img.setAttribute('draggable', 'false');
                img.setAttribute('unselectable', 'on');
                
                // Replace src with data-src to prevent direct access
                if (!img.hasAttribute('data-protected')) {
                    const src = img.src;
                    img.setAttribute('data-protected-src', src);
                    img.removeAttribute('src');
                    img.style.backgroundImage = `url('${src}')`;
                    img.style.backgroundSize = 'cover';
                    img.style.backgroundPosition = 'center';
                }
            });
        });
    }

    // Show protection modal
    function showProtectedModal() {
        protectedModal.style.display = 'block';
        protectionOverlay.style.pointerEvents = 'auto';
    }

    // Hide protection modal
    function hideProtectedModal() {
        protectedModal.style.display = 'none';
        protectionOverlay.style.pointerEvents = 'none';
    }

    // Close modal handlers
    document.querySelector('.close-modal')?.addEventListener('click', hideProtectedModal);
    window.addEventListener('click', function(e) {
        if (e.target === protectedModal) {
            hideProtectedModal();
        }
    });

    // Protection event listeners
    document.addEventListener('contextmenu', function(e) {
        if (e.target.closest('.portfolio-item, .client-item, .testimonial-author')) {
            e.preventDefault();
            showProtectedModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        // Block Print Screen
        if (e.key === 'PrintScreen') {
            e.preventDefault();
            showProtectedModal();
        }
        // Block Ctrl+S, Ctrl+C, etc.
        if ((e.ctrlKey || e.metaKey) && ['s', 'c', 'p'].includes(e.key)) {
            e.preventDefault();
            showProtectedModal();
        }
    });

    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });

    // ======================
    // Lightbox Functionality
    // ======================
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <span class="close-lightbox">&times;</span>
        <img class="lightbox-content" id="lightbox-img">
        <div class="lightbox-caption"></div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');

    // Open lightbox
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').getAttribute('data-protected-src') || 
                         this.querySelector('img').src;
            const title = this.querySelector('.portfolio-overlay h3')?.textContent || '';
            
            lightbox.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Use blurred placeholder first
            lightboxImg.style.filter = 'blur(20px)';
            lightboxImg.src = '';
            
            // Load image after a delay to prevent easy saving
            setTimeout(() => {
                lightboxImg.src = imgSrc;
                lightboxImg.style.filter = 'none';
            }, 300);
            
            lightboxCaption.textContent = title;
        });
    });

    // Close lightbox
    document.querySelector('.close-lightbox')?.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
        lightboxImg.src = '';
    }

    // Protect lightbox images
    lightbox.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        showProtectedModal();
    });
*/


//ya samma protection wala na halau aaile lai  
    // ======================
    // Testimonial Carousel
    // ======================
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.dot');
    let currentTestimonial = 0;
    let testimonialInterval;

    function showTestimonial(index) {
        testimonialItems.forEach(item => item.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonialItems[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function startTestimonialCarousel() {
        if (testimonialItems.length > 0) {
            testimonialInterval = setInterval(function() {
                currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
                showTestimonial(currentTestimonial);
            }, 7000);
        }
    }

    if (dots.length > 0) {
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                clearInterval(testimonialInterval);
                currentTestimonial = index;
                showTestimonial(currentTestimonial);
                startTestimonialCarousel();
            });
        });
    }

    // ======================
    // Clients Carousel
    // ======================
    const clientTrack = document.querySelector('.client-track');
    let animationPaused = false;
    
    function animateClients() {
        if (clientTrack && !animationPaused) {
            clientTrack.style.animationPlayState = 'running';
        }
    }
    
    function pauseAnimation() {
        animationPaused = true;
        if (clientTrack) {
            clientTrack.style.animationPlayState = 'paused';
        }
    }
    
    if (clientTrack) {
        clientTrack.parentElement.addEventListener('mouseenter', pauseAnimation);
        clientTrack.parentElement.addEventListener('mouseleave', animateClients);
        animateClients();
    }

    // ======================
    // Initialize Everything
    // ======================
    protectImages();
    showTestimonial(currentTestimonial);
    startTestimonialCarousel();
    
    // Set current year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Additional protection against dev tools
window.addEventListener('devtoolschange', function(e) {
    if (e.detail.isOpen) {
        document.body.style.display = 'none';
    } else {
        document.body.style.display = 'block';
    }
});