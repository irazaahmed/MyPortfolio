function toggleMenu() {
  const navMenu = document.querySelector(".nav-menu");
  navMenu.classList.toggle("active");
}

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.remove("active");
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 100) {
    nav.style.background = "rgba(255, 255, 255, 0.98)";
  } else {
    nav.style.background = "rgba(255, 255, 255, 0.95)";
  }
});

// top button
// Get the button
let topBtn = document.getElementById("topBtn");

// Show button when scrolling down 100px
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// Scroll to top when button clicked
topBtn.onclick = function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
};



// Scroll to top when button clicked
 window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  
  // Run loader for at least 5 seconds
  setTimeout(() => {
    // Add fade-out class to loader
    loader.classList.add('hidden');
    
    // Add fade-in animation to body content
    document.body.classList.add('fade-in');
    
    // Optional: Remove loader from DOM after transition to avoid any issues
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500); // corresponding to CSS transition duration
  }, 1500); // 1500ms = 1.5 seconds delay
});
