function togglePopup() {
    const overlay = document.getElementById('popup-overlay');
    if (overlay.style.display === 'block') {
        overlay.style.display = 'none';
    } else {
        overlay.style.display = 'block';
    }
}

// Optional: Show popup automatically after 5 seconds
window.onload = function() {
    setTimeout(function() {
        document.getElementById('popup-overlay').style.display = 'block';
    }, 5000);
};