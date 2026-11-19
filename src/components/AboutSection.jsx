import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import SplitBlurText from './SplitBlurText.jsx';

/**
 * 7 columns from Bildora, spaced at 30-degree intervals across a 1400px diameter cylinder.
 * Each column holds 2 mirrored cards at opposite ends (space-between),
 * rotated 90deg and -90deg with backface-visibility: hidden.
 */
const COLUMNS_CONFIG = [
  { name: 'Column 5', angle: 0,   src: '/bildora/card5.jpg', alt: 'Terracotta arched villa' },
  { name: 'Column 6', angle: 30,  src: '/bildora/card6.jpg', alt: 'Pink classic facade' },
  { name: 'Column 7', angle: 60,  src: '/bildora/card7.jpg', alt: 'Orange and yellow architecture' },
  { name: 'Column 1', angle: 90,  src: '/bildora/card1.jpg', alt: 'Modern red townhouse' },
  { name: 'Column 2', angle: 120, src: '/bildora/card2.jpg', alt: 'Terracotta angled geometric structure' },
  { name: 'Column 3', angle: 150, src: '/bildora/card3.jpg', alt: 'Red modern residential building' },
  { name: 'Column 4', angle: 180, src: '/bildora/card4.jpg', alt: 'Brick facade apartment building' },
];

const STATS_DATA = [
  { num: '15+', label: 'Years Active' },
  { num: '1,000+', label: 'Families Served' },
  { num: '170+', label: 'Verified Projects' },
  { num: '60+', label: 'Advisory Experts' },
];

export default function AboutSection() {
  const [rotation] = useState(0);
  const rotationRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartAngleRef = useRef(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const isHoveredRef = useRef(false);
  const animFrameRef = useRef(null);
  const carouselTrackRef = useRef(null);

  // Smooth continuous spin + momentum inertia (9 deg/s = 40s per 360 rotation, exact to Bildora)
  useEffect(() => {
    let prevTime = performance.now();
    const baseSpeed = 0.15; // 9 deg/sec at 60 FPS

    const loop = (currentTime) => {
      const dt = Math.min((currentTime - prevTime) / 16.67, 2.0); // normalized frame delta
      prevTime = currentTime;

      if (!isDraggingRef.current) {
        if (Math.abs(velocityRef.current) > 0.005) {
          // Inertia decay after drag release
          rotationRef.current += velocityRef.current * dt;
          velocityRef.current *= Math.pow(0.93, dt);
        } else {
          velocityRef.current = 0;
          // Standard auto-rotation (slow down slightly on hover for inspection)
          const currentSpeed = isHoveredRef.current ? baseSpeed * 0.35 : baseSpeed;
          rotationRef.current += currentSpeed * dt;
        }

        // Keep angle cleanly bounded
        if (rotationRef.current > 36000 || rotationRef.current < -36000) {
          rotationRef.current = rotationRef.current % 360;
        }

        // Apply rotation directly to DOM for high-performance 60-120fps animation
        if (carouselTrackRef.current) {
          carouselTrackRef.current.style.transform = `rotateY(${rotationRef.current}deg)`;
        }
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  // Pointer drag event handlers
  const handlePointerDown = useCallback((e) => {
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    dragStartAngleRef.current = rotationRef.current;
    lastXRef.current = dragStartXRef.current;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
  }, []);

  const handlePointerMove = useCallback((e) => {
    if (!isDraggingRef.current) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const now = performance.now();
    const dt = Math.max(now - lastTimeRef.current, 8);
    const deltaX = clientX - dragStartXRef.current;
    const stepDeltaX = clientX - lastXRef.current;

    // 0.22deg per pixel drag sensitivity
    rotationRef.current = dragStartAngleRef.current + deltaX * 0.22;
    
    // Smooth velocity calculation with safety clamp
    const rawVelocity = (stepDeltaX / dt) * 1.8;
    velocityRef.current = Math.max(-1.8, Math.min(1.8, rawVelocity));

    lastXRef.current = clientX;
    lastTimeRef.current = now;

    if (carouselTrackRef.current) {
      carouselTrackRef.current.style.transform = `rotateY(${rotationRef.current}deg)`;
    }
  }, []);

  const handlePointerUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  return (
    <section className="bildora-about-section" id="about">
      <div className="bildora-about-container">
        
        {/* Top Tag Pill */}
        <motion.div
          className="bildora-tag-wrapper"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="bildora-pill-tag">About Us</span>
        </motion.div>

        {/* Center Headline */}
        <motion.div
          className="bildora-heading-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="bildora-heading">
            <SplitBlurText
              text="A one-stop solution for real estate, done personally. Our first move is never a listing, it's a conversation to find your perfect home."
              delay={0.1}
              stagger={0.03}
              duration={0.4}
            />
          </h2>
        </motion.div>

        {/* 3D Cylindrical Panoramic Carousel */}
        <div
          className="bildora-carousel-perspective-viewport"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onMouseEnter={() => { isHoveredRef.current = true; }}
          onMouseLeave={() => {
            isHoveredRef.current = false;
            isDraggingRef.current = false;
          }}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerUp}
        >
          <div
            ref={carouselTrackRef}
            className="bildora-carousel-cylinder"
            style={{ transform: `rotateY(${rotation}deg)` }}
          >
            {COLUMNS_CONFIG.map((col, idx) => (
              <div
                key={col.name}
                className="bildora-cylinder-column"
                style={{
                  transform: `rotateY(${col.angle}deg)`,
                }}
              >
                {/* Card A (Left End) */}
                <div className="bildora-cylinder-card card-left">
                  <img
                    src={col.src}
                    alt={col.alt}
                    loading={idx < 4 ? 'eager' : 'lazy'}
                    draggable={false}
                    className="bildora-card-img"
                  />
                </div>

                {/* Card B (Right End) */}
                <div className="bildora-cylinder-card card-right">
                  <img
                    src={col.src}
                    alt={col.alt}
                    loading={idx < 4 ? 'eager' : 'lazy'}
                    draggable={false}
                    className="bildora-card-img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Stats Grid Row */}
        <motion.div
          className="bildora-stats-grid"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {STATS_DATA.map((item, index) => (
            <div key={index} className="bildora-stat-item">
              <span className="bildora-stat-num">{item.num}</span>
              <p className="bildora-stat-label">{item.label}</p>
            </div>
          ))}
        </motion.div>


      </div>
    </section>
  );
}
