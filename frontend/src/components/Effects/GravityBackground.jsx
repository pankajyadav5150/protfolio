import React, { useEffect, useRef } from 'react';

export default function GravityBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let particlesArray = [];
        const numberOfParticles = 200; // Increased for a denser feel
        const mouse = {
            x: null,
            y: null,
            radius: 250
        };

        // Antigravity palette: Cyan, Purple, Orange, Neutral
        const colors = [
            'rgba(34, 211, 238, 0.6)',   // Cyan
            'rgba(168, 85, 247, 0.6)',   // Purple
            'rgba(251, 146, 60, 0.6)',   // Orange
            'rgba(148, 163, 184, 0.4)'    // Slate Gray
        ];

        const handleMouseMove = (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
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

        class Needle {
            constructor(x, y, color) {
                this.x = x;
                this.y = y;
                this.baseX = x;
                this.baseY = y;
                this.color = color;
                this.size = Math.random() * 8 + 4; // Length of the needle
                this.angle = Math.random() * Math.PI * 2;
                this.velocity = Math.random() * 0.01 + 0.005;
                this.friction = 0.95;
                this.ease = 0.05;
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.angle);

                ctx.beginPath();
                ctx.moveTo(-this.size / 2, 0);
                ctx.lineTo(this.size / 2, 0);
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 1.5;
                ctx.lineCap = 'round';
                ctx.stroke();

                ctx.restore();
            }

            update() {
                // Slow drifting movement
                this.angle += this.velocity;

                // Interaction with mouse
                if (mouse.x !== null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        // Magnetic orientation: point needle towards mouse
                        let targetAngle = Math.atan2(dy, dx);
                        let angleDiff = targetAngle - this.angle;

                        // Normalize angle diff
                        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
                        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;

                        this.angle += angleDiff * 0.1;

                        // Subtle attraction to mouse
                        const force = (mouse.radius - distance) / mouse.radius;
                        this.x += dx * force * 0.02;
                        this.y += dy * force * 0.02;
                    } else {
                        // Return to base position slowly
                        let dxBase = this.baseX - this.x;
                        let dyBase = this.baseY - this.y;
                        this.x += dxBase * this.ease;
                        this.y += dyBase * this.ease;
                    }
                }

                // Keep inside bounds (with some padding)
                if (this.x < -20) this.x = canvas.width + 20;
                if (this.x > canvas.width + 20) this.x = -20;
                if (this.y < -20) this.y = canvas.height + 20;
                if (this.y > canvas.height + 20) this.y = -20;

                this.draw();
            }
        }

        function init() {
            particlesArray = [];
            for (let i = 0; i < numberOfParticles; i++) {
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                let color = colors[Math.floor(Math.random() * colors.length)];
                particlesArray.push(new Needle(x, y, color));
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
            animationFrameId = requestAnimationFrame(animate);
        }

        init();
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full z-[100] pointer-events-none opacity-40"
        />
    );
}
