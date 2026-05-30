// Smooth scroll behavior
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

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;

        if (email) {
            // Success animation
            const button = this.querySelector('button');
            const originalText = button.textContent;
            button.textContent = '✓ Inscrito com sucesso!';
            button.style.background = 'linear-gradient(135deg, #FFD60A, #9D4EDD)';

            setTimeout(() => {
                this.reset();
                button.textContent = originalText;
                button.style.background = '';
            }, 3000);
        }
    });
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards for animation
document.querySelectorAll('.link-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Mobile menu toggle for future expansion
document.addEventListener('DOMContentLoaded', function() {
    // Add ripple effect to buttons
    document.querySelectorAll('.link-button').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);
        });
    });
});

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    .link-button {
        position: relative;
        overflow: hidden;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Update social links (add actual URLs)
function updateSocialLinks() {
    const socialLinks = {
        instagram: 'https://instagram.com/amarte',
        tiktok: 'https://tiktok.com/@amarte',
        youtube: 'https://youtube.com/@amarte',
        twitter: 'https://twitter.com/amarte'
    };

    const socials = document.querySelectorAll('.social-icon');
    socials.forEach(link => {
        const icon = link.querySelector('i');
        if (icon.classList.contains('fa-instagram')) {
            link.href = socialLinks.instagram;
            link.target = '_blank';
        } else if (icon.classList.contains('fa-tiktok')) {
            link.href = socialLinks.tiktok;
            link.target = '_blank';
        } else if (icon.classList.contains('fa-youtube')) {
            link.href = socialLinks.youtube;
            link.target = '_blank';
        } else if (icon.classList.contains('fa-twitter')) {
            link.href = socialLinks.twitter;
            link.target = '_blank';
        }
    });
}

// Initialize
updateSocialLinks();

// Parallax effect on scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.gradient-bg');

    parallaxElements.forEach(element => {
        element.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
});
