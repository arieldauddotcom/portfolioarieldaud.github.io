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
        <div style="padding: 1.25rem; border-bottom: 1px solid var(--border-color); display: flex; align-items: center; justify-content: space-between;">
          <div>
            <h4 style="font-size: 1.2rem; font-weight: 800; color: var(--text-primary);">1st Most Interactive Winner Certificate</h4>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">Spark AR Competition 2021 · Hacktiv8</p>
          </div>
          <a href="${pdfSrc}" target="_blank" class="btn-primary" style="font-size: 0.825rem; padding: 0.5rem 1rem;">Open Original PDF ↗</a>
        </div>
        <div style="padding: 1.5rem; text-align: center; max-height: 75vh; overflow-y: auto;">
          <img src="${imgSrc}" alt="Spark AR Competition Winner Certificate" style="max-width: 100%; height: auto; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <img src="img/Frame 2 (12).png" alt="Spark AR Competition Certificate Detail" style="max-width: 100%; height: auto; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-top: 1rem;">
        </div>
      `;
      modalOverlay.classList.add('open');
    });
  });
});
