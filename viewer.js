window.addEventListener('DOMContentLoaded', function() {
    const darkModeValue = localStorage.getItem('dark-theme');
    let darkMode = null;
    
    if (darkModeValue !== null) {
        darkMode = darkModeValue === 'dark';
    }
    
    fetch('/understanding', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            referrer: document.referrer,
            user_agent: navigator.userAgent,
            dark_mode: darkMode,
            url: window.location.href,
            timestamp: new Date().toISOString()
        })
    });
});