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

  // Service Request Modal Control
  const modalOverlay = document.getElementById('requestModal');
  const openModalBtns = document.querySelectorAll('.js-open-modal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const inquiryForm = document.getElementById('inquiryForm');

  function openModal() {
    if (modalOverlay) {
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  openModalBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  // Form Submission Handler
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you! Your calibration service request has been received. Our technical team will reach out to you shortly.');
      inquiryForm.reset();
      closeModal();
    });
  }
});
