document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('menuButton');
  const sidebar = document.querySelector('aside');
  const overlay = document.querySelector('.sidebar-overlay');
  const mainContent = document.querySelector('.main-content');

  function toggleSidebar() {
    sidebar.classList.toggle('mobile-show');
    overlay.classList.toggle('active');
    
    // Prevent scrolling when sidebar is open
    if (sidebar.classList.contains('mobile-show')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  // Menu button click event
  menuButton.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleSidebar();
  });

  // Close sidebar when clicking overlay
  overlay.addEventListener('click', toggleSidebar);

  // Close sidebar when clicking outside on mobile
  document.addEventListener('click', function(event) {
    if (window.innerWidth <= 1024 && 
        sidebar.classList.contains('mobile-show') && 
        !sidebar.contains(event.target) && 
        event.target !== menuButton) {
      toggleSidebar();
    }
  });

  // Close sidebar when resizing to larger screens
  window.addEventListener('resize', function() {
    if (window.innerWidth > 1024 && sidebar.classList.contains('mobile-show')) {
      toggleSidebar();
    }
  });
});

/* -----------------------LOGIN PAGE--------------------------------- */
// static/JS/script.js
document.addEventListener("DOMContentLoaded", function () {
  // Create floating particles
  const particlesContainer = document.getElementById("particles");
  const particleCount = 30;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Random size between 2px and 6px
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    // Random animation
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

    // Random opacity
    particle.style.opacity = Math.random() * 0.6 + 0.2;

    particlesContainer.appendChild(particle);
  }

  // Add hover effect to form container
  const formContainer = document.querySelector('div[class*="max-w-md"]');
  formContainer.addEventListener("mouseenter", () => {
    formContainer.classList.add("neon-glow");
  });
  formContainer.addEventListener("mouseleave", () => {
    formContainer.classList.remove("neon-glow");
  });
});

/* ---------------------------SIGN-UP--------------------- */
// static/JS/signup.js
document.addEventListener("DOMContentLoaded", function () {
  // Create floating particles
  const particlesContainer = document.getElementById("particles");
  const particleCount = 30;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animation = `float ${Math.random() * 20 + 10}s ease-in-out ${Math.random() * 5}s infinite`;
    particle.style.opacity = Math.random() * 0.6 + 0.2;

    particlesContainer.appendChild(particle);
  }

  // Password strength indicator (frontend only)
  const passwordInput = document.getElementById("password");
  if (passwordInput) {
    passwordInput.addEventListener("input", function() {
      const password = this.value;
      const strengthBar = document.getElementById("password-strength");
      let strength = 0;

      if (password.length >= 8) strength++;
      if (password.length >= 12) strength++;
      if (/[A-Z]/.test(password)) strength++;
      if (/[0-9]/.test(password)) strength++;
      if (/[^A-Za-z0-9]/.test(password)) strength++;

      strengthBar.className = "password-strength " +
        (strength < 3 ? "weak" : strength < 5 ? "medium" : "strong");
    });
  }

  // Form container hover effect
  const formContainer = document.querySelector('div[class*="max-w-md"]');
  if (formContainer) {
    formContainer.addEventListener("mouseenter", () => {
      formContainer.classList.add("neon-glow");
    });
    formContainer.addEventListener("mouseleave", () => {
      formContainer.classList.remove("neon-glow");
    });
  }
});


// ---------------------- profile page--------------------------

document.addEventListener("DOMContentLoaded", () => {
  console.log("User Profile Page Loaded");

  // Example: Hook up edit button if needed
  const editButtons = document.querySelectorAll("button");
  editButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      console.log("Button clicked:", btn.innerText.trim());
    });
  });
});
