/* Video Lightbox & Certificate Modal Logic - Ariel Daud Portfolio */
window.addEventListener('DOMContentLoaded', () => {
  const modalOverlay = document.getElementById('modal-overlay');
  const modalContainer = document.getElementById('modal-container');
  const modalClose = document.getElementById('modal-close');
  const modalBody = document.getElementById('modal-body');

  if (!modalOverlay || !modalClose || !modalBody) return;

  function closeModal() {
    modalOverlay.classList.remove('open');
    modalBody.innerHTML = '';
  }

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Video Lightbox triggers
  document.querySelectorAll('.video-lightbox-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const videoSrc = trigger.getAttribute('data-video-src');
      const title = trigger.getAttribute('data-title') || 'Work Preview';

      if (!videoSrc) return;

      modalBody.innerHTML = `
        <div style="padding: 1rem; border-bottom: 1px solid var(--border-color); display: flex; align-items: center; justify-content: space-between;">
          <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">${title}</h4>
        </div>
        <div style="width: 100%; aspect-ratio: 9/16; max-height: 75vh; background: #000; display: flex; align-items: center; justify-content: center;">
          <video src="${videoSrc}" controls autoplay loop style="width: 100%; height: 100%; object-fit: contain;"></video>
        </div>
      `;
      modalOverlay.classList.add('open');
    });
  });

  // Certificate Modal triggers
  document.querySelectorAll('.certificate-modal-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const pdfSrc = trigger.getAttribute('data-pdf-src') || 'Certificate Ariel Daud Spark AR Competition.pdf';
      const imgSrc = trigger.getAttribute('data-img-src') || 'img/07 1.png';

      modalBody.innerHTML = `
        <div style="padding: 1.25rem 3.5rem 1.25rem 1.5rem; border-bottom: 1px solid var(--border-color); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
          <div style="display: flex; align-items: center; gap: 0.85rem;">
            <div style="width: 44px; height: 44px; border-radius: var(--radius-md); background: rgba(245, 158, 11, 0.15); color: #F59E0B; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0; border: 1px solid rgba(245, 158, 11, 0.3);">
              <i class="fa-solid fa-trophy"></i>
            </div>
            <div>
              <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--text-primary); margin: 0;">1st Most Interactive Winner</h4>
              <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0.2rem 0 0 0;">National Spark AR Competition · Hacktiv8 Indonesia</p>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <a href="${pdfSrc}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="font-size: 0.85rem; padding: 0.55rem 1.1rem; display: inline-flex; align-items: center; gap: 0.5rem;">
              <i class="fa-solid fa-download"></i> Open / Download PDF <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.75rem;"></i>
            </a>
          </div>
        </div>

        <!-- View Mode Switcher -->
        <div style="padding: 0.85rem 1.5rem 0.5rem; display: flex; gap: 0.5rem; border-bottom: 1px solid var(--border-subtle); background: var(--bg-secondary);">
          <button id="cert-tab-image" class="filter-tab-btn active" style="font-size: 0.825rem; padding: 0.4rem 0.9rem; cursor: pointer;">
            🖼️ Certificate Images
          </button>
          <button id="cert-tab-pdf" class="filter-tab-btn" style="font-size: 0.825rem; padding: 0.4rem 0.9rem; cursor: pointer;">
            📄 Interactive PDF Viewer
          </button>
        </div>

        <div style="padding: 1.5rem; max-height: 70vh; overflow-y: auto;">
          <!-- View 1: High-Res Images -->
          <div id="cert-view-image" style="display: flex; flex-direction: column; align-items: center; gap: 1.5rem;">
            <div style="width: 100%; max-width: 820px; background: var(--bg-card); padding: 0.75rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color); box-shadow: var(--shadow-md);">
              <div style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--accent-purple); text-transform: uppercase; margin-bottom: 0.5rem; letter-spacing: 0.05em;">
                // Official Winner Certificate
              </div>
              <img src="${imgSrc}" alt="Spark AR Competition Winner Certificate - Ariel Daud" style="width: 100%; height: auto; border-radius: var(--radius-md); display: block; border: 1px solid var(--border-subtle);">
            </div>
            
            <div style="width: 100%; max-width: 820px; background: var(--bg-card); padding: 0.75rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color); box-shadow: var(--shadow-md);">
              <div style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: #F59E0B; text-transform: uppercase; margin-bottom: 0.5rem; letter-spacing: 0.05em;">
                // Competition Winner Showcase & Details
              </div>
              <img src="img/Frame 2 (12).png" alt="Spark AR Competition Winner Announcement & Details" style="width: 100%; height: auto; border-radius: var(--radius-md); display: block; border: 1px solid var(--border-subtle);">
            </div>
          </div>

          <!-- View 2: Embedded PDF Viewer -->
          <div id="cert-view-pdf" style="display: none; width: 100%; height: 560px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-color); overflow: hidden; box-shadow: var(--shadow-md);">
            <iframe src="${pdfSrc}#toolbar=1" style="width: 100%; height: 100%; border: none;" title="Certificate PDF Viewer"></iframe>
          </div>
        </div>
      `;

      // Attach Tab Switcher Listeners
      const tabImg = document.getElementById('cert-tab-image');
      const tabPdf = document.getElementById('cert-tab-pdf');
      const viewImg = document.getElementById('cert-view-image');
      const viewPdf = document.getElementById('cert-view-pdf');

      if (tabImg && tabPdf && viewImg && viewPdf) {
        tabImg.addEventListener('click', () => {
          tabImg.classList.add('active');
          tabPdf.classList.remove('active');
          viewImg.style.display = 'flex';
          viewPdf.style.display = 'none';
        });

        tabPdf.addEventListener('click', () => {
          tabPdf.classList.add('active');
          tabImg.classList.remove('active');
          viewImg.style.display = 'none';
          viewPdf.style.display = 'block';
        });
      }

      modalOverlay.classList.add('open');
    });
  });
});
