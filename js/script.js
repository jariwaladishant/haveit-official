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
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);
    launchDate.setHours(0, 0, 0, 0);

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

// Newsletter subscription with localStorage
function subscribeNewsletter(email) {
    // Save to localStorage
    let subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
    if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem('subscribers', JSON.stringify(subscribers));
        alert(`Thanks! You're now on our waitlist! 🎉 We'll notify you at ${email}`);

        // Optional: track subscription
        if (typeof gtag !== 'undefined') {
            gtag('event', 'newsletter_signup');
        }
    } else {
        alert('You\'re already subscribed! Thanks for your interest 😊');
    }
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
document.getElementById('newsletterForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const emailInput = document.querySelector('.newsletter-input');
    const email = emailInput.value.trim();

    if (email && isValidEmail(email)) {
        subscribeNewsletter(email);
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address');
    }
});

// Email validation helper
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

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
    }, 2000);

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