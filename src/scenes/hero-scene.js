export const initHeroScene = () => {
  const canvas = document.querySelector('#hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const state = {
    width: 0,
    height: 0,
    dpr: window.devicePixelRatio || 1,
    pointer: { x: 0.5, y: 0.5 },
    frames: 0,
    nodes: []
  };

  const seedNodes = () => {
    const count = Math.min(32, Math.max(20, Math.round(state.width / 20)));
    state.nodes = Array.from({ length: count }, (_, index) => ({
      id: index,
      x: Math.random() * state.width,
      y: Math.random() * state.height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      radius: 1.2 + Math.random() * 2.4,
      drift: Math.random() * Math.PI * 2
    }));
  };

  const resizeCanvas = () => {
    const bounds = canvas.getBoundingClientRect();
    state.width = bounds.width;
    state.height = bounds.height;
    state.dpr = window.devicePixelRatio || 1;

    canvas.width = Math.max(1, Math.floor(bounds.width * state.dpr));
    canvas.height = Math.max(1, Math.floor(bounds.height * state.dpr));

    ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
    seedNodes();
  };

  const drawWaveLines = (time) => {
    const cx = state.width * 0.5 + (state.pointer.x - 0.5) * 46;
    const cy = state.height * 0.54 + (state.pointer.y - 0.5) * 28;
    const baseRadius = Math.min(state.width, state.height) * 0.22;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(time * 0.00018);

    for (let ring = 0; ring < 4; ring += 1) {
      const radius = baseRadius + ring * 18;
      ctx.beginPath();
      for (let step = 0; step <= 180; step += 2) {
        const angle = (step / 180) * Math.PI * 2;
        const wave = Math.sin(angle * 3 + time * 0.0014 + ring) * (8 + ring * 4);
        const x = Math.cos(angle) * (radius + wave);
        const y = Math.sin(angle) * (radius + wave * 0.45);
        if (step === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = ring % 2 === 0 ? 'rgba(95, 211, 196, 0.26)' : 'rgba(242, 167, 60, 0.2)';
      ctx.lineWidth = ring === 0 ? 1.3 : 1;
      ctx.stroke();
    }

    ctx.beginPath();
    for (let i = -60; i <= 60; i += 1) {
      const x = i * 3.8;
      const y = Math.sin(i * 0.38 + time * 0.0018) * 10 + Math.cos(i * 0.17 + time * 0.0012) * 5;
      if (i === -60) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = 'rgba(237, 231, 218, 0.42)';
    ctx.lineWidth = 1.3;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, baseRadius * 0.85, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(237, 231, 218, 0.12)';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, baseRadius * 0.46, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(95, 211, 196, 0.08)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(95, 211, 196, 0.34)';
    ctx.stroke();

    ctx.restore();
  };

  const drawBackground = (time) => {
    ctx.clearRect(0, 0, state.width, state.height);

    const ambient = ctx.createRadialGradient(
      state.width * (0.52 + (state.pointer.x - 0.5) * 0.2),
      state.height * (0.46 + (state.pointer.y - 0.5) * 0.18),
      30,
      state.width * 0.5,
      state.height * 0.5,
      state.width * 0.8,
    );
    ambient.addColorStop(0, 'rgba(95, 211, 196, 0.12)');
    ambient.addColorStop(0.52, 'rgba(201, 80, 60, 0.07)');
    ambient.addColorStop(1, 'rgba(10, 16, 30, 0)');
    ctx.fillStyle = ambient;
    ctx.fillRect(0, 0, state.width, state.height);

    for (let i = 0; i < state.nodes.length; i += 1) {
      const node = state.nodes[i];
      node.x += node.vx + Math.sin(time * 0.0009 + node.drift) * 0.22;
      node.y += node.vy + Math.cos(time * 0.0011 + node.drift) * 0.22;

      if (node.x < 0 || node.x > state.width) node.vx *= -1;
      if (node.y < 0 || node.y > state.height) node.vy *= -1;

      const alpha = 0.22 + (i % 7) * 0.05;
      ctx.beginPath();
      ctx.fillStyle = `rgba(237, 231, 218, ${alpha})`;
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const draw = (time) => {
    drawBackground(time);
    drawWaveLines(time);
    requestAnimationFrame(draw);
  };

  resizeCanvas();
  requestAnimationFrame(draw);

  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('pointermove', (event) => {
    const rect = canvas.getBoundingClientRect();
    state.pointer.x = (event.clientX - rect.left) / rect.width;
    state.pointer.y = (event.clientY - rect.top) / rect.height;
  });
};
