document.addEventListener('DOMContentLoaded', function () {
  // Mobile Navigation Toggle
  const mobileToggleBtn = document.getElementById('mobileToggleBtn');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggleBtn && navMenu) {
    mobileToggleBtn.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });

    // Close mobile menu when link clicked
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('active');
      });
    });
  }

  // FAQ Accordions Toggle
  const faqCards = document.querySelectorAll('.faq-card');

  faqCards.forEach(function (card) {
    const header = card.querySelector('.faq-header');
    if (header) {
      header.addEventListener('click', function () {
        const isOpen = card.classList.contains('open');

        // Close all other cards for clean accordion feel
        faqCards.forEach(function (c) {
          c.classList.remove('open');
        });

        // Toggle current card
        if (!isOpen) {
          card.classList.add('open');
        }
      });
    }
  });
});
