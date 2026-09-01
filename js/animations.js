/* Main UI Animations & Interactivity - Ariel Daud Portfolio */
window.addEventListener('DOMContentLoaded', () => {
  // Sticky Navbar Scroll Handler
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Navigation Drawer Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function toggleDrawer(open) {
    if (open) {
      mobileDrawer.classList.add('open');
      drawerOverlay.classList.add('open');
    } else {
      mobileDrawer.classList.remove('open');
      drawerOverlay.classList.remove('open');
    }
  }

  if (mobileToggle && mobileDrawer && drawerOverlay) {
    mobileToggle.addEventListener('click', () => toggleDrawer(true));
    drawerOverlay.addEventListener('click', () => toggleDrawer(false));
    drawerLinks.forEach(link => {
      link.addEventListener('click', () => toggleDrawer(false));
    });
  }

  // Marquee Track Infinite Loop Duplication
  const marqueeTrack = document.getElementById('marquee-track');
  if (marqueeTrack) {
    const clone = marqueeTrack.innerHTML;
    marqueeTrack.innerHTML += clone;
  }

  // Scroll Reveal Animations using IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Filter Categories Filter Tab Logic (All, Client Work, Interactive Games, Aesthetics & Filters)
  const filterTabs = document.querySelectorAll('.filter-tab-btn');
  const creativeCards = document.querySelectorAll('.creative-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterCategory = tab.getAttribute('data-filter');

      creativeCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterCategory === 'all' || cardCategory === filterCategory) {
          card.style.display = 'flex';
          setTimeout(() => card.style.opacity = '1', 50);
        } else {
          card.style.opacity = '0';
          setTimeout(() => card.style.display = 'none', 200);
        }
      });
    });
  });

  // Video hover auto-play
  document.querySelectorAll('.creative-video-wrapper').forEach(wrapper => {
    const video = wrapper.querySelector('video');
    if (!video) return;

    wrapper.addEventListener('mouseenter', () => {
      video.play().catch(() => {});
    });

    wrapper.addEventListener('mouseleave', () => {
      video.pause();
    });
  });
});
