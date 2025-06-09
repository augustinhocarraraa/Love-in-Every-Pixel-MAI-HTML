document.addEventListener('DOMContentLoaded', function() {
    const enterButton = document.getElementById('enterButton');
    
    // Improved touch handling
    enterButton.addEventListener('click', function() {
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        // Navigation with slight delay for better UX
        setTimeout(() => {
            window.location.href = '/dashboard';
        }, 300);
    });
    
    // Service Worker registration
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful');
                })
                .catch(err => {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }
});
