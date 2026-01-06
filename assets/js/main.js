document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// === NAVBAR SCROLL EFFECT ===
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class after 50px
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});


// === ACTIVE NAVIGATION LINK ===
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// === SKILL BAR ANIMATION ===
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const animateSkillBars = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            observer.unobserve(entry.target);
        }
    });
};

const skillObserver = new IntersectionObserver(animateSkillBars, observerOptions);
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => skillObserver.observe(card));

// === SCROLL REVEAL ANIMATION ===
const revealElements = document.querySelectorAll('.timeline-item, .skill-card, .contact-card');

const revealOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';
            entry.target.style.transition = 'all 0.6s ease-out';
            
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            observer.unobserve(entry.target);
        }
    });
};

const revealObserver = new IntersectionObserver(revealOnScroll, {
    threshold: 0.15
});

revealElements.forEach(el => revealObserver.observe(el));

// === CONSOLE MESSAGE ===
console.log(
    '%c👋 Hi there!',
    'font-size: 20px; font-weight: bold; color: #0ea5e9;'
);
console.log(
  '%c👋 Hi there!',
  'font-size: 20px; font-weight: bold; color: #0ea5e9;'
);

console.log(
  '%cThanks for checking out the source code!\n%cInterested in how I built this portfolio? Let’s connect!',
  'font-size: 14px; color: #94a3b8;',
  'font-size: 14px; color: #0ea5e9; font-weight: 600;'
);

console.log(
  '%c📧 rahulkothagundla2002@gmail.com',
  'font-size: 14px; color: #0ea5e9; font-weight: bold;'
);
console.log(
    '%c📧 rahulkothagundla2002@gmail.com',
    'font-size: 14px; color: #0ea5e9; font-weight: bold;'
);

// === PREVENT SCROLL JANK ===
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// === EASTER EGG: KONAMI CODE ===
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiPattern.join('')) {
        document.body.style.animation = 'rainbow 3s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
            alert('🎉 You found the Konami Code! You must be a true engineer!');
        }, 3000);
    }
});

// === PERFORMANCE OPTIMIZATION ===
// Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to expensive scroll operations
const debouncedScroll = debounce(() => {
    // Expensive scroll operations here
}, 100);

window.addEventListener('scroll', debouncedScroll);
