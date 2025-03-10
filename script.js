document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully!");
  
    const navLinks = document.querySelectorAll("nav ul li a");
  
    navLinks.forEach(link => {
        link.addEventListener("mouseover", event => {
            event.target.style.color = "#fdb927"; // Changes color on hover
        });
        link.addEventListener("mouseout", event => {
            event.target.style.color = "white"; // Reverts back
        });
    });
  });