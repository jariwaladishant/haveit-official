// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const navLinksItems = document.querySelectorAll('.nav-link');

function toggleMenu() {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');

    // Prevent body scroll when menu is open
    if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function closeMenu() {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listeners
if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
}

navLinksItems.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Countdown Timer
function updateCountdown() {
    // Set your fixed launch date here (Year, Month-1, Day, Hour, Minute, Second)
    const launchDate = new Date(2026, 3, 30, 0, 0, 0); // April 30, 2026

    function updateTimer() {
        const now = new Date().getTime();
        const distance = launchDate - now;

        if (distance < 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

// Functions
function notifyMe() {
    alert('Thanks! We\'ll notify you when we launch. 🎉');

    // Optional: track notification clicks
    if (typeof gtag !== 'undefined') {
        gtag('event', 'notify_me_click');
    }
}

function learnMore() {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}

// Share functions
function shareOnWhatsApp() {
    const text = encodeURIComponent("Check out HAVE IT - Something delicious is coming soon! 🍽️");
    const url = encodeURIComponent("https://haveitofficial.com");
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
}

function shareOnTwitter() {
    const text = encodeURIComponent("Something delicious is coming! HAVE IT 🍽️");
    const url = encodeURIComponent("https://haveitofficial.com");
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

function shareOnFacebook() {
    const url = encodeURIComponent("https://haveitofficial.com");
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

// Back to Top Button
const backToTop = document.getElementById('backToTop');

if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Cookie Consent
function showCookieConsent() {
    const cookieConsent = document.getElementById('cookieConsent');
    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            cookieConsent.classList.add('show');
        }, 2000);
    }
}

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookieConsent').classList.remove('show');

    // Initialize analytics or other cookie-dependent features
    if (typeof gtag !== 'undefined') {
        gtag('consent', 'update', {
            'analytics_storage': 'granted'
        });
    }
}

// Event Listeners for buttons
document.getElementById('notifyBtn')?.addEventListener('click', notifyMe);
document.getElementById('learnMoreBtn')?.addEventListener('click', learnMore);

// Newsletter form
document.getElementById('newsletterForm')?.addEventListener('submit', async function (e) {
    e.preventDefault();
    const form = e.target;
    const emailInput = form.querySelector('.newsletter-input');
    const submitBtn = form.querySelector('.newsletter-btn');
    const email = emailInput.value.trim();

    if (!email || !isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Show loading state
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
    submitBtn.disabled = true;

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert(`Thanks! You're now on our waitlist! 🎉 We'll notify you at ${email}`);
            emailInput.value = '';

            // Track subscription
            if (typeof gtag !== 'undefined') {
                gtag('event', 'newsletter_signup', { 'event_category': 'engagement' });
            }
        } else {
            throw new Error('Subscription failed');
        }
    } catch (error) {
        alert('Oops! Something went wrong. Please try again later.');
        console.error('Newsletter subscription error:', error);
    } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
});

// Email validation helper
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Contact form
document.getElementById('contactForm')?.addEventListener('submit', async function (e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('.contact-submit-btn');
    const formData = new FormData(form);

    // Show loading state
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert('Thanks for your message! We\'ll get back to you soon. 🎉');
            form.reset();

            // Track form submission
            if (typeof gtag !== 'undefined') {
                gtag('event', 'contact_form_submit', { 'event_category': 'engagement' });
            }
        } else {
            throw new Error('Submission failed');
        }
    } catch (error) {
        alert('Oops! Something went wrong. Please try again later.');
        console.error('Contact form submission error:', error);
    } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
});

// Gallery Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCounter = document.getElementById('lightboxCounter');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
let currentImageIndex = 0;
let galleryImages = [];

// Initialize gallery
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryImages = Array.from(galleryItems).map(img => img.src);

    galleryItems.forEach((img, index) => {
        img.parentElement.addEventListener('click', () => {
            openLightbox(index);
        });
    });
}

function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function updateLightboxImage() {
    lightboxImage.src = galleryImages[currentImageIndex];
    lightboxCounter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateLightboxImage();
}

// Event listeners
if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

if (lightboxPrev) {
    lightboxPrev.addEventListener('click', showPrevImage);
}

if (lightboxNext) {
    lightboxNext.addEventListener('click', showNextImage);
}

// Close on background click
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrevImage();
    if (e.key === 'ArrowRight') showNextImage();
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');

        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Toggle current item
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', function (event) {
    if (navLinks.classList.contains('active') &&
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)) {
        closeMenu();
    }
});

// Handle touch events for mobile
document.addEventListener('touchstart', function (event) {
    if (navLinks.classList.contains('active') &&
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)) {
        closeMenu();
    }
});

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registered successfully:', registration.scope);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}

// Initialize everything on page load
window.addEventListener('load', function () {
    // Loading animation
    setTimeout(() => {
        const loader = document.querySelector('.loader-wrapper');
        if (loader) {
            loader.classList.add('fade-out');
        }
    }, 800);

    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-in-out',
            disable: window.innerWidth < 768 ? true : false // Disable on mobile for performance
        });
    }

    // Initialize countdown
    updateCountdown();

    // Initialize gallery lightbox
    initGallery();

    // Show cookie consent
    showCookieConsent();

    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Handle page visibility change (for timer accuracy)
document.addEventListener('visibilitychange', function () {
    if (!document.hidden) {
        updateCountdown(); // Refresh timer when page becomes visible
    }
});