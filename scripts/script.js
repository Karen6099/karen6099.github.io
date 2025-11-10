// Smooth scrolling for navigation links
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

// Dark Mode Toggle
function initDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.textContent = '☀️';
        if (themeText) themeText.textContent = 'Light';
    }
    
    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeIcon.textContent = '☀️';
            if (themeText) themeText.textContent = 'Light';
        } else {
            localStorage.setItem('theme', 'light');
            themeIcon.textContent = '🌙';
            if (themeText) themeText.textContent = 'Dark';
        }
    });
}

// Starfall Background Animation
function createStarfield() {
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star-fall';
        
        // Random horizontal position
        const randomLeft = Math.random() * window.innerWidth;
        const randomDelay = Math.random() * 10;
        const randomDuration = 5 + Math.random() * 10;
        const randomDrift = (Math.random() - 0.5) * 300;
        
        star.style.left = randomLeft + 'px';
        star.style.animationDelay = randomDelay + 's';
        star.style.animationDuration = randomDuration + 's';
        star.style.setProperty('--tx', randomDrift + 'px');
        star.style.opacity = Math.random() * 0.6 + 0.4;
        
        document.body.appendChild(star);
    }
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards and skill categories
document.querySelectorAll('.project-card, .skill-category, .about-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Mobile menu toggle (if you add a hamburger menu later)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Bouncing DVD Logo
class BouncingDVD {
    constructor() {
        this.element = document.getElementById('dvd-logo');
        this.imageElement = document.querySelector('.dvd-image');
        this.width = 100;
        this.height = 100;
        
        // Position and velocity
        this.x = Math.random() * (window.innerWidth - this.width);
        this.y = Math.random() * (window.innerHeight - this.height);
        this.vx = (Math.random() - 0.5) * 6;
        this.vy = (Math.random() - 0.5) * 6;
        
        // Hue rotation values for color changes
        this.hueRotations = [0, 45, 90, 135, 180, 225, 270, 315];
        this.currentHue = 0;
        
        this.setPosition();
        this.animate();
        
        // Handle window resize
        window.addEventListener('resize', () => this.handleResize());
        
        // Allow dragging
        this.element.addEventListener('mousedown', (e) => this.startDrag(e));
        document.addEventListener('mousemove', (e) => this.drag(e));
        document.addEventListener('mouseup', () => this.stopDrag());
    }
    
    setPosition() {
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
    }
    
    changeColor() {
        // Get a random hue rotation value
        this.currentHue = this.hueRotations[Math.floor(Math.random() * this.hueRotations.length)];
        this.imageElement.style.filter = `hue-rotate(${this.currentHue}deg) saturate(1.2)`;
    }
    
    animate() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce off walls
        if (this.x <= 0 || this.x >= window.innerWidth - this.width) {
            this.vx *= -1;
            this.x = Math.max(0, Math.min(this.x, window.innerWidth - this.width));
            this.changeColor();
        }
        
        if (this.y <= 0 || this.y >= window.innerHeight - this.height) {
            this.vy *= -1;
            this.y = Math.max(0, Math.min(this.y, window.innerHeight - this.height));
            this.changeColor();
        }
        
        this.setPosition();
        requestAnimationFrame(() => this.animate());
    }
    
    handleResize() {
        // Keep DVD on screen after resize
        if (this.x > window.innerWidth - this.width) {
            this.x = window.innerWidth - this.width;
            this.vx *= -1;
        }
        if (this.y > window.innerHeight - this.height) {
            this.y = window.innerHeight - this.height;
            this.vy *= -1;
        }
    }
    
    isDragging = false;
    dragOffsetX = 0;
    dragOffsetY = 0;
    
    startDrag(e) {
        this.isDragging = true;
        this.dragOffsetX = e.clientX - this.x;
        this.dragOffsetY = e.clientY - this.y;
        this.element.style.cursor = 'grabbing';
    }
    
    drag(e) {
        if (this.isDragging) {
            this.x = e.clientX - this.dragOffsetX;
            this.y = e.clientY - this.dragOffsetY;
            
            // Keep within bounds
            this.x = Math.max(0, Math.min(this.x, window.innerWidth - this.width));
            this.y = Math.max(0, Math.min(this.y, window.innerHeight - this.height));
            
            this.setPosition();
        }
    }
    
    stopDrag() {
        if (this.isDragging) {
            this.isDragging = false;
            this.element.style.cursor = 'grab';
            // Give it a random velocity when released
            this.vx = (Math.random() - 0.5) * 6;
            this.vy = (Math.random() - 0.5) * 6;
        }
    }
}

// Initialize bouncing DVD when page loads
window.addEventListener('load', () => {
    createStarfield();
    new BouncingDVD();
    initDarkMode();
});

console.log('Portfolio page loaded successfully!');
