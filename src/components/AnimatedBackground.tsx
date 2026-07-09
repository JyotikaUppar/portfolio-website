import React, { useEffect, useRef } from 'react';

interface TwinkleStar {
  x: number;
  y: number;
  z: number; // depth for parallax
  size: number;
  alpha: number;
  twinkleSpeed: number;
}

interface NeuralNode {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  pulsePhase: number;
  size: number;
  color: string;
}

interface Planet {
  radius: number; // orbit radius
  size: number;
  color: string;
  speed: number;
  angle: number;
  glowColor: string;
  moons: { angle: number; speed: number; radius: number; size: number }[];
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isHovered: false });
  const scrollRef = useRef({ current: 0, target: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Re-initialize lists on resize
    let stars: TwinkleStar[] = [];
    let neuralNodes: NeuralNode[] = [];
    
    // Create cosmic background stars
    const initStars = () => {
      stars = [];
      const starCount = Math.floor((width * height) / 4000);
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 0.8 + 0.2, // Parallax depth factor
          size: Math.random() * 1.5 + 0.5,
          alpha: Math.random(),
          twinkleSpeed: 0.005 + Math.random() * 0.015,
        });
      }
    };

    // Create neural network nodes (constellations overlapping space)
    const initNeuralNodes = () => {
      neuralNodes = [];
      const nodeCount = Math.min(80, Math.floor((width * height) / 20000) + 30);
      const colors = ['#00C896', '#7EE8FA', '#8B5CF6', '#EC4899', '#3B82F6'];
      
      for (let i = 0; i < nodeCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        neuralNodes.push({
          x,
          y,
          z: Math.random() * 0.6 + 0.4,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          baseX: x,
          baseY: y,
          pulsePhase: Math.random() * Math.PI * 2,
          size: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    // Planetary configurations (Realistic Orbiting System with Moons)
    const planets: Planet[] = [
      {
        radius: 120,
        size: 8,
        color: '#00C896',
        speed: 0.002,
        angle: Math.random() * Math.PI * 2,
        glowColor: 'rgba(0, 200, 150, 0.4)',
        moons: [{ angle: 0, speed: 0.02, radius: 16, size: 2.5 }]
      },
      {
        radius: 200,
        size: 14,
        color: '#7EE8FA',
        speed: 0.0012,
        angle: Math.random() * Math.PI * 2,
        glowColor: 'rgba(126, 232, 250, 0.4)',
        moons: [
          { angle: 0, speed: 0.015, radius: 24, size: 3 },
          { angle: Math.PI, speed: 0.01, radius: 32, size: 2 }
        ]
      },
      {
        radius: 320,
        size: 18,
        color: '#8B5CF6',
        speed: 0.0008,
        angle: Math.random() * Math.PI * 2,
        glowColor: 'rgba(139, 92, 246, 0.4)',
        moons: [{ angle: 2, speed: 0.008, radius: 36, size: 4 }]
      },
      {
        radius: 460,
        size: 22,
        color: '#EC4899',
        speed: 0.0004,
        angle: Math.random() * Math.PI * 2,
        glowColor: 'rgba(236, 72, 153, 0.4)',
        moons: [
          { angle: 1, speed: 0.018, radius: 38, size: 3.5 },
          { angle: 4, speed: 0.012, radius: 46, size: 2.5 }
        ]
      }
    ];

    initStars();
    initNeuralNodes();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
      initNeuralNodes();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      mouseRef.current.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovered = false;
    };

    const handleScroll = () => {
      scrollRef.current.target = window.scrollY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    // Animation Loop
    const draw = () => {
      // Smooth interpolation for mouse and scroll
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      const scroll = scrollRef.current;
      scroll.current += (scroll.target - scroll.current) * 0.08;

      // Dark futuristic space background
      ctx.fillStyle = '#090D14';
      ctx.fillRect(0, 0, width, height);

      // Render cosmic nebula dust glows (layered radial gradients)
      const sunCenterX = width * 0.5;
      const sunCenterY = height * 0.5 - scroll.current * 0.15;

      // Base ambient nebula core
      const baseNebula = ctx.createRadialGradient(sunCenterX, sunCenterY, 50, sunCenterX, sunCenterY, width * 0.6);
      baseNebula.addColorStop(0, 'rgba(13, 20, 35, 0.65)');
      baseNebula.addColorStop(0.5, 'rgba(9, 13, 22, 0.85)');
      baseNebula.addColorStop(1, '#090D14');
      ctx.fillStyle = baseNebula;
      ctx.fillRect(0, 0, width, height);

      // Accent purple/teal dust clouds
      const tealNebula = ctx.createRadialGradient(width * 0.2, height * 0.3 - scroll.current * 0.05, 0, width * 0.2, height * 0.3 - scroll.current * 0.05, width * 0.4);
      tealNebula.addColorStop(0, 'rgba(0, 200, 150, 0.025)');
      tealNebula.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = tealNebula;
      ctx.fillRect(0, 0, width, height);

      const violetNebula = ctx.createRadialGradient(width * 0.8, height * 0.7 - scroll.current * 0.1, 0, width * 0.8, height * 0.7 - scroll.current * 0.1, width * 0.4);
      violetNebula.addColorStop(0, 'rgba(139, 92, 246, 0.03)');
      violetNebula.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = violetNebula;
      ctx.fillRect(0, 0, width, height);

      // 1. Draw Twinkling Background Stars
      stars.forEach((star) => {
        // Apply vertical scroll parallax
        const starY = (star.y - scroll.current * star.z) % height;
        const adjustedY = starY < 0 ? starY + height : starY;

        star.alpha += (Math.random() - 0.5) * star.twinkleSpeed;
        if (star.alpha < 0.1) star.alpha = 0.1;
        if (star.alpha > 0.9) star.alpha = 0.9;

        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha * star.z})`;
        ctx.beginPath();
        ctx.arc(star.x, adjustedY, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw Solar System Orbits & Core (Neural Center Star)
      // Central Star (Sun) - The AI Core Hub
      const corePulse = 1 + Math.sin(Date.now() * 0.001) * 0.05;
      const sunGradient = ctx.createRadialGradient(sunCenterX, sunCenterY, 0, sunCenterX, sunCenterY, 70 * corePulse);
      sunGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      sunGradient.addColorStop(0.15, 'rgba(0, 200, 150, 0.95)');
      sunGradient.addColorStop(0.4, 'rgba(0, 200, 150, 0.25)');
      sunGradient.addColorStop(0.8, 'rgba(126, 232, 250, 0.06)');
      sunGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = sunGradient;
      ctx.beginPath();
      ctx.arc(sunCenterX, sunCenterY, 75 * corePulse, 0, Math.PI * 2);
      ctx.fill();

      // Outer rings of the core
      ctx.strokeStyle = 'rgba(0, 200, 150, 0.12)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(sunCenterX, sunCenterY, 35 * corePulse, 0, Math.PI * 2);
      ctx.stroke();

      // Draw Orbit Lines & Orbiting Planets
      planets.forEach((planet) => {
        // Orbit ring path (dotted)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 12]);
        ctx.beginPath();
        ctx.arc(sunCenterX, sunCenterY, planet.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]); // reset

        // Calculate planet position
        planet.angle += planet.speed;
        const px = sunCenterX + Math.cos(planet.angle) * planet.radius;
        const py = sunCenterY + Math.sin(planet.angle) * planet.radius;

        // Render connection thread from sun core to planet (living neural connections)
        ctx.strokeStyle = 'rgba(0, 200, 150, 0.05)';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(sunCenterX, sunCenterY);
        ctx.lineTo(px, py);
        ctx.stroke();

        // Planet Glow aura
        const planetGlow = ctx.createRadialGradient(px, py, 0, px, py, planet.size * 2.8);
        planetGlow.addColorStop(0, planet.color);
        planetGlow.addColorStop(0.3, planet.glowColor);
        planetGlow.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = planetGlow;
        ctx.beginPath();
        ctx.arc(px, py, planet.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Planet solid core
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(px, py, planet.size * 0.4, 0, Math.PI * 2);
        ctx.fill();

        // Draw moons orbiting this planet
        planet.moons.forEach((moon) => {
          moon.angle += moon.speed;
          const mx = px + Math.cos(moon.angle) * moon.radius;
          const my = py + Math.sin(moon.angle) * moon.radius;

          // Moon connection line
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(mx, my);
          ctx.stroke();

          // Moon body
          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.arc(mx, my, moon.size, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      // 3. Draw Living AI Neural Network Overlay
      // Calculate scroll shift for nodes
      const nodeYOffset = scroll.current * 0.25;

      neuralNodes.forEach((node) => {
        // Subtle drift movement
        node.x += node.vx;
        node.y += node.vy;

        // Warp bounds check
        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;

        // Mouse reactive interaction (force field push/pull)
        let actualX = node.x;
        let actualY = node.y - nodeYOffset;

        if (mouse.isHovered) {
          const dx = mouse.x - actualX;
          const dy = mouse.y - actualY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const activeRadius = 180;
          if (dist < activeRadius) {
            const force = (activeRadius - dist) / activeRadius;
            // Push node away slightly
            actualX -= dx * force * 0.15;
            actualY -= dy * force * 0.15;
          }
        }

        // Draw connected edges (proximity calculation)
        neuralNodes.forEach((otherNode) => {
          if (node === otherNode) return;
          const ox = otherNode.x;
          const oy = otherNode.y - nodeYOffset;

          const dx = actualX - ox;
          const dy = actualY - oy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 140;

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.13 * node.z;
            ctx.strokeStyle = `rgba(0, 200, 150, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(actualX, actualY);
            ctx.lineTo(ox, oy);
            ctx.stroke();

            // Render glowing electric impulses passing between close nodes
            if (dist < 80 && Math.random() < 0.001) {
              const impulseGrad = ctx.createLinearGradient(actualX, actualY, ox, oy);
              impulseGrad.addColorStop(0, 'rgba(0, 200, 150, 0)');
              impulseGrad.addColorStop(0.5, '#7EE8FA');
              impulseGrad.addColorStop(1, 'rgba(0, 200, 150, 0)');
              ctx.strokeStyle = impulseGrad;
              ctx.lineWidth = 1.5;
              ctx.stroke();
            }
          }
        });

        // Connecting lines to cursor if close
        if (mouse.isHovered) {
          const dx = mouse.x - actualX;
          const dy = mouse.y - actualY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.22;
            ctx.strokeStyle = `rgba(126, 232, 250, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(actualX, actualY);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        // Draw node body
        node.pulsePhase += 0.02;
        const nodePulseSize = node.size * (1 + Math.sin(node.pulsePhase) * 0.25);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(actualX, actualY, nodePulseSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow
      });

      // Continue draw loop
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-[#090D14]" />;
};

export default AnimatedBackground;
