import React, { useEffect, useRef } from 'react';

export default function Galaxy({
    starSpeed = 0.5,
    density = 1,
    hueShift = 140,
    speed = 1,
    glowIntensity = 0.3,
    saturation = 0,
    mouseRepulsion = true,
    repulsionStrength = 2,
    twinkleIntensity = 0.3,
    rotationSpeed = 0.1,
    transparent = true
}) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let stars = [];
        const numStars = 200 * density;
        const mouse = { x: null, y: null };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class Star {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.z = Math.random() * canvas.width;
                this.size = 0.5 + Math.random() * 2;
                this.twinkle = Math.random() * Math.PI * 2;
                this.twinkleSpeed = Math.random() * 0.05;

                // Base color - Darker and more visible for light theme
                this.color = `rgba(0, 0, 0, ${0.7 + Math.random() * 0.3})`;
            }

            update() {
                // Star movement
                this.z -= starSpeed * speed;
                if (this.z <= 0) {
                    this.z = canvas.width;
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                }

                // Perspective mapping
                const k = 128 / this.z;
                const px = (this.x - canvas.width / 2) * k + canvas.width / 2;
                const py = (this.y - canvas.height / 2) * k + canvas.height / 2;

                // Twinkle - less aggressive to keep dots visible
                this.twinkle += this.twinkleSpeed;
                const twinkleAlpha = 1 - (Math.sin(this.twinkle) * (twinkleIntensity * 0.4));

                // Mouse Repulsion
                let rx = 0, ry = 0;
                if (mouseRepulsion && mouse.x !== null) {
                    const dx = mouse.x - px;
                    const dy = mouse.y - py;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 200) {
                        const force = (200 - dist) / 200;
                        rx = -dx * force * repulsionStrength * 0.1;
                        ry = -dy * force * repulsionStrength * 0.1;
                    }
                }

                // Drawing
                const finalSize = this.size * k * 0.5;
                if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
                    ctx.beginPath();
                    ctx.arc(px + rx, py + ry, finalSize, 0, Math.PI * 2);
                    ctx.fillStyle = this.color.replace(/[\d.]+\)$/, `${twinkleAlpha})`);

                    if (glowIntensity > 0) {
                        ctx.shadowBlur = glowIntensity * 10;
                        ctx.shadowColor = 'rgba(0,0,0,0.2)';
                    }

                    ctx.fill();
                }
            }
        }

        function init() {
            stars = [];
            for (let i = 0; i < numStars; i++) {
                stars.push(new Star());
            }
        }

        function animate() {
            if (!transparent) {
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }

            // Rotate canvas subtly
            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(Date.now() * 0.00001 * rotationSpeed);
            ctx.translate(-canvas.width / 2, -canvas.height / 2);

            stars.forEach(star => star.update());

            ctx.restore();
            animationFrameId = requestAnimationFrame(animate);
        }

        init();
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [starSpeed, density, speed, glowIntensity, mouseRepulsion, repulsionStrength, twinkleIntensity, rotationSpeed, transparent]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full z-[50] pointer-events-none opacity-70"
            style={{ mixBlendMode: 'multiply' }}
        />
    );
}
