document.addEventListener('DOMContentLoaded', function() {
    const mode_toggle = document.getElementById("light-toggle");
    const googleMapsIframe = document.getElementById('google-maps-iframe');
    const AdobeDCview = document.getElementById('adobe-dc-view');
    mode_toggle.addEventListener("click", function() {
        toggleTheme(localStorage.getItem("theme"));
    theme=localStorage.getItem("theme");
    if (googleMapsIframe !== null){
        if (theme == "dark") {
          // Dark mode is active
          googleMapsIframe.style.filter = 'invert(1)';
        } else {
          // Dark mode is inactive
          googleMapsIframe.style.filter = 'none'; // Reset to default
        }
    }
    if (AdobeDCview !== null){
        if (theme == "dark") {
          // Dark mode is active
          AdobeDCview.style.filter = 'hue-rotate(180deg)';
        } else {
          // Dark mode is inactive
          AdobeDCview.style.filter = 'none'; // Reset to default
        }
    }
    });  
});

