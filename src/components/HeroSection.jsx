import { motion, useScroll, useTransform } from 'framer-motion';
import { ActionButton } from './Header.jsx';
import SplitBlurText from './SplitBlurText.jsx';

export default function HeroSection() {
  const { scrollY } = useScroll();

  // Home rises UP over the text: formula -0.5 * scrollY
  // At scroll 0: y is 0 (sits below CTA buttons).
  // At scroll 1300: y is -650px (rises up and covers the text completely, filling viewport).
  const homeY = useTransform(scrollY, [0, 1300], [0, -650]);

  // Text content moves down slowly (0.1x), scales slightly (1 -> 0.94),
  // and stays solid until the rising house physically covers it
  const textY = useTransform(scrollY, [0, 1300], [0, 130]);
  const textScale = useTransform(scrollY, [0, 1300], [1, 0.94]);
  const textOpacity = useTransform(scrollY, [0, 750, 1100], [1, 0.95, 0]);

  // Smoke layers parallax drift with scroll
  const smoke1X = useTransform(scrollY, [0, 1300], [-100, -50]);
  const smoke2X = useTransform(scrollY, [0, 1300], [0, 35]);
  const smoke3X = useTransform(scrollY, [0, 1300], [0, -35]);
  const smoke4X = useTransform(scrollY, [0, 1300], [100, 45]);

  return (
    <section className="homy-hero-section" id="hero">
      {/* Background Gradient & Animated Smoke Layers */}
      <div className="homy-hero-bg-canvas" aria-hidden="true">
        {/* Smoke Layer 1 - Left upper drift */}
        <motion.div
          className="homy-smoke-layer smoke-1"
          style={{ x: smoke1X }}
          animate={{
            y: [-10, 15, -10],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <img src="/homy/smoke.png" alt="" />
        </motion.div>

        {/* Smoke Layer 2 - Left lower fog */}
        <motion.div
          className="homy-smoke-layer smoke-2"
          style={{ x: smoke2X }}
          animate={{
            y: [10, -20, 10],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <img src="/homy/smoke.png" alt="" />
        </motion.div>

        {/* Smoke Layer 3 - Right drift */}
        <motion.div
          className="homy-smoke-layer smoke-3"
          style={{ x: smoke3X }}
          animate={{
            rotate: [18, 24, 18],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <img src="/homy/smoke.png" alt="" />
        </motion.div>

        {/* Smoke Layer 4 - Far right mist */}
        <motion.div
          className="homy-smoke-layer smoke-4"
          style={{ x: smoke4X }}
          animate={{
            y: [-15, 10, -15],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <img src="/homy/smoke.png" alt="" />
        </motion.div>
      </div>

      {/* Text Content: z-index 1 (sits in normal flow, rising villa will cover it) */}
      <motion.div
        className="homy-hero-content"
        style={{
          y: textY,
          scale: textScale,
          opacity: textOpacity,
        }}
      >
        {/* Pro Users Pill - Bildora Mount Blur Effect */}
        <motion.div
          className="homy-users-badge"
          initial={{ opacity: 0.001, filter: 'blur(8px)', y: 12 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ type: 'spring', bounce: 0, duration: 0.5, delay: 0.05 }}
        >
          <div className="homy-avatar-stack">
            <img src="/homy/avatar1.png" alt="Happy family" className="homy-avatar" />
            <img src="/homy/avatar2.png" alt="Happy family" className="homy-avatar" />
            <img src="/homy/avatar3.png" alt="Happy family" className="homy-avatar" />
          </div>
          <span className="homy-users-text">1,000+ Happy Families</span>
        </motion.div>

        {/* Main Title - Bildora Word-by-Word Staggered Blur Mount Animation */}
        <SplitBlurText
          as="h1"
          className="homy-hero-title"
          text="Feel the Value In Every Deal"
          delay={0.16}
          stagger={0.09}
          duration={0.48}
        />

        {/* Subtitle - Bildora Word-by-Word Quick Stagger Blur Mount Animation */}
        <SplitBlurText
          as="p"
          className="homy-hero-subtitle"
          text="Bulk-buying rates and straight numbers on 170+ verified luxury listings across Mumbai, crafted with comfort, elegance, and long-term value."
          delay={0.45}
          stagger={0.022}
          duration={0.4}
        />

        {/* CTA Buttons - Bildora Soft Blur Appear */}
        <motion.div
          className="homy-hero-ctas"
          initial={{ opacity: 0.001, filter: 'blur(8px)', y: 12 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ type: 'spring', bounce: 0, duration: 0.55, delay: 0.72 }}
        >
          <ActionButton text="Explore Homes" href="#properties" variant="primary" />
          <ActionButton text="Talk on WhatsApp" href="https://wa.me/919819162911" variant="outline" />
        </motion.div>
      </motion.div>

      {/* Villa Mansion Showcase: z-index 2 (Bildora Mount Zoom Settle + Scroll Parallax) */}
      <motion.div
        className="homy-hero-mansion-wrapper"
        style={{ y: homeY }}
      >
        <motion.div
          className="homy-hero-mansion-container"
          initial={{ scale: 1.15, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: 'spring',
            bounce: 0,
            delay: 0.3,
            duration: 3,
          }}
        >
          <img
            src="/homy/hero-villa.png"
            alt="Modern multi-level home with large glass windows and layered terraces at dusk"
            className="homy-hero-mansion-img"
          />
        </motion.div>

        {/* Subtle Bottom Fog Overlays on Mansion Base */}
        <div className="homy-mansion-fog-blend" aria-hidden="true">
          <motion.img
            src="/homy/cloud-fog.png"
            alt=""
            className="homy-fog-img fog-top"
            animate={{
              x: [-15, 15, -15],
              opacity: [0.85, 0.98, 0.85],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.img
            src="/homy/cloud-fog.png"
            alt=""
            className="homy-fog-img fog-bottom"
            animate={{
              x: [15, -15, 15],
              opacity: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
