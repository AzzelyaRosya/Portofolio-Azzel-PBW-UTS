console.log("Portfolio website is running...");

// Fade-in saat scroll
window.addEventListener('scroll', function () {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(function (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('show');
      }
    });
  });
  
  // Smooth scroll saat klik navlink
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      const target = this.getAttribute('href');
      if (target.startsWith('#')) {
        e.preventDefault();
        document.querySelector(target).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  