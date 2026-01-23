import { useEffect, useRef } from 'react';

const CodeRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters
    const characters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = new Array(columns).fill(0);

    // Drawing the rain
    const draw = () => {
      // Semi-transparent black to create fade effect
      // Use theme background color variable if possible, but transparent black works well for overlays
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#10B981'; // Matrix Green
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = characters.charAt(Math.floor(Math.random() * characters.length));

        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down
        drops[i]++;
      }
    };

    // Animation Loop
    const animate = () => {
      draw();
      // Control speed
      animationFrameId = setTimeout(() => {
        requestAnimationFrame(animate);
      }, 50); // Slower framerate for Matrix feel
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      // Clear timeout
      clearTimeout(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.08]" // Very subtle overlay
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CodeRain;
