document.addEventListener('DOMContentLoaded', function() {
    const mode_toggle = document.getElementById("light-toggle");
    const googleMapsIframe = document.getElementById('google-maps-iframe');
    const AdobeDCview = document.getElementById('adobe-dc-view');
    mode_toggle.addEventListener("click", function() {
        toggleTheme(localStorage.getItem("theme"));
    theme=localStorage.getItem("theme");
    if (theme == "dark") {
      // Dark mode is active
      googleMapsIframe.style.filter = 'grayscale(1) invert(1) hue-rotate(180deg)';
      AdobeDCview.style.filter = 'grayscale(1) invert(1) hue-rotate(180deg)';
    } else {
      // Dark mode is inactive
      googleMapsIframe.style.filter = 'none'; // Reset to default
      AdobeDCview.style.filter = 'none'; // Reset to default
    }
    });  
});

