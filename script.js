// Example animation on scroll or other interactions
document.addEventListener('DOMContentLoaded', () => {
    const socials = document.querySelectorAll('.social-card');

    socials.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.15) rotateY(10deg)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1) rotateY(0deg)';
        });
    });
});
