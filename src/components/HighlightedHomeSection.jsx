import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TICKER_WORDS = [
  'Value Properties',
  'Feel The Value',
  'Bulk Buying Rates',
  'Mumbai Luxury',
  'RERA Verified',
  'Expert Advice',
];

export default function HighlightedHomeSection() {
  const trackRef = useRef(null);

  // Track scroll progression through the sticky section
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  // The center card gets big as you scroll (from 1x thumbnail up to 3.6x showcase)
  const scale = useTransform(scrollYProgress, [0, 0.72], [1, 3.65]);

  // The marquee ticker fades out as the card scales up to full size
  const tickerOpacity = useTransform(scrollYProgress, [0.06, 0.42], [1, 0]);

  // Subtle shift of the marquee driven by scroll speed
  const tickerShift = useTransform(scrollYProgress, [0, 1], ['0px', '-240px']);

  // Border radius gently adapts from pill-like 20px to soft 28px
  const borderRadius = useTransform(scrollYProgress, [0, 0.72], [20, 28]);

  return (
    <section className="homy-highlighted-section" id="highlighted">
      {/* Top Header Information */}
      <div className="homy-highlighted-header-container">
        <div className="homy-section-header-split">
          <motion.div
            className="homy-header-left"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="homy-section-badge">
              <span className="homy-badge-dot" />
              <span className="homy-badge-text">HIGHLIGHTED HOME</span>
            </div>
            <h2 className="homy-section-title">
              Modern homes,<br />designed to live better
            </h2>
          </motion.div>

          <motion.p
            className="homy-section-desc"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Explore how modern homes are designed to feel clean, open, and functional.
          </motion.p>
        </div>
      </div>

      {/* Sticky Scroll Track for Smooth Zoom / Getting Big Effect */}
      <div className="homy-highlighted-sticky-track" ref={trackRef}>
        <div className="homy-highlighted-sticky-wrap">
          
          {/* Background Marquee Ticker Layer */}
          <motion.div
            className="homy-ticker-marquee-layer"
            style={{ opacity: tickerOpacity, x: tickerShift }}
          >
            <div className="homy-ticker-stream">
              {/* Set 1 */}
              <div className="homy-ticker-words-group">
                {TICKER_WORDS.map((word, idx) => (
                  <span key={`w1-${idx}`} className="homy-ticker-item-wrap">
                    <span className="homy-ticker-word">{word}</span>
                    <span className="homy-ticker-bullet" />
                  </span>
                ))}
              </div>
              {/* Set 2 (for continuous seamless ticker marquee) */}
              <div className="homy-ticker-words-group" aria-hidden="true">
                {TICKER_WORDS.map((word, idx) => (
                  <span key={`w2-${idx}`} className="homy-ticker-item-wrap">
                    <span className="homy-ticker-word">{word}</span>
                    <span className="homy-ticker-bullet" />
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Center Expanding Media Card (Scales Up & Gets Big on Scroll) */}
          <motion.div
            className="homy-highlighted-center-card"
            style={{
              scale,
              borderRadius,
            }}
          >
            <video
              src="https://framerusercontent.com/assets/zEQ2uqOoz4IUC6n5QUkeURSWg.mp4"
              poster="/homy/ticker-villa.png"
              autoPlay
              loop
              muted
              playsInline
              className="homy-highlighted-video"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
