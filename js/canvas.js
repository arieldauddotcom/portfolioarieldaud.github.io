/* Interactive Hero System Canvas - AR TikTok Developer Highlighted */
window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    width = canvas.width = rect.width * (window.devicePixelRatio || 1);
    height = canvas.height = rect.height * (window.devicePixelRatio || 1);
    ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Core Nodes prioritizing AR TikTok Developer & Effect House
  const nodes = [
    { label: 'TIKTOK EFFECT HOUSE', sub: 'Interactive AR & Game Logic', x: 0.35, y: 0.32, vx: 0.2, vy: 0.15, radius: 28, color: '#7C3AED' },
    { label: 'SPARK AR & FILTERS', sub: 'Winner 1st Interactive AR', x: 0.72, y: 0.35, vx: -0.15, vy: 0.2, radius: 26, color: '#8B5CF6' },
    { label: 'BRAND AR CAMPAIGNS', sub: 'Ultra Milk / Infinix / Implora', x: 0.3, y: 0.72, vx: 0.18, vy: -0.12, radius: 25, color: '#EC4899' },
    { label: 'WEB & AUTOMATION', sub: 'n8n / Next.js / Docker', x: 0.75, y: 0.75, vx: -0.2, vy: -0.18, radius: 24, color: '#6366F1' }
  ];

  let mouse = { x: -1000, y: -1000 };

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  function draw() {
    const w = canvas.width / (window.devicePixelRatio || 1);
    const h = canvas.height / (window.devicePixelRatio || 1);

    ctx.clearRect(0, 0, w, h);

    // Subtle background grid
    const gridSize = 40;
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--border-subtle').trim() || '#E4E4E7';
    ctx.lineWidth = 0.5;
    for (let x = 0; x < w; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Draw connecting lines with glow on mouse hover
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const n1 = nodes[i];
        const n2 = nodes[j];
        const x1 = n1.x * w;
        const y1 = n1.y * h;
        const x2 = n2.x * w;
        const y2 = n2.y * h;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);

        const dist1 = Math.hypot(mouse.x - x1, mouse.y - y1);
        const dist2 = Math.hypot(mouse.x - x2, mouse.y - y2);

        if (dist1 < 130 || dist2 < 130) {
          ctx.strokeStyle = '#7C3AED';
          ctx.lineWidth = 2.5;
        } else {
          ctx.strokeStyle = 'rgba(124, 58, 237, 0.25)';
          ctx.lineWidth = 1;
        }
        ctx.stroke();
      }
    }

    // Render Nodes
    nodes.forEach(node => {
      let px = node.x * w;
      let py = node.y * h;

      if (px < 60 || px > w - 60) node.vx *= -1;
      if (py < 60 || py > h - 60) node.vy *= -1;

      node.x += (node.vx * 0.0005);
      node.y += (node.vy * 0.0005);

      px = node.x * w;
      py = node.y * h;

      const dist = Math.hypot(mouse.x - px, mouse.y - py);
      const isHovered = dist < node.radius + 15;

      // Glow circle
      ctx.beginPath();
      ctx.arc(px, py, node.radius + (isHovered ? 14 : 6), 0, Math.PI * 2);
      ctx.fillStyle = isHovered ? 'rgba(124, 58, 237, 0.3)' : 'rgba(124, 58, 237, 0.12)';
      ctx.fill();

      // Core Circle
      ctx.beginPath();
      ctx.arc(px, py, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = isHovered ? '#7C3AED' : node.color;
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#FFFFFF';
      ctx.stroke();

      // Node Titles
      ctx.font = '700 11px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-primary').trim() || '#09090B';
      ctx.textAlign = 'center';
      ctx.fillText(node.label, px, py + node.radius + 18);

      ctx.font = '500 9px "JetBrains Mono", monospace';
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim() || '#52525B';
      ctx.fillText(node.sub, px, py + node.radius + 30);
    });

    requestAnimationFrame(draw);
  }

  draw();
});
