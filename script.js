document.addEventListener("DOMContentLoaded", function() {
    // Framer Motion - Animating videos on load
    const { motion } = window.framerMotion;

    motion('.video', {
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.5 },
    }).start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, delay: 0.2 }
    });

    // Animate PDFs on load
    motion('.pdf', {
        opacity: 0,
        y: 50,
        transition: { duration: 0.5 }
    }).start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.4 }
    });

    // Adding button hover animations
    const buttons = document.querySelectorAll('.styled-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });
});
