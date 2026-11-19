import { motion } from 'framer-motion';
import RollingCounter from './RollingCounter.jsx';

export default function OurImpactSection() {
  return (
    <section className="homy-impact-section" id="impact">
      {/* Cloud fog transition floating over the Villa from below */}
      <div className="homy-impact-cloud-top" aria-hidden="true">
        <img
          src="/homy/cloud-fog.png"
          alt=""
          className="homy-cloud-transition layer-2"
        />
        <img
          src="/homy/cloud-fog.png"
          alt=""
          className="homy-cloud-transition layer-1"
        />
      </div>

      <div className="homy-impact-container">
        {/* Section Header */}
        <motion.div
          className="homy-impact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Left Column: Pill & Title */}
          <div className="homy-impact-header-left">
            <div className="homy-impact-tag">
              <span className="homy-tag-dot" />
              <span className="homy-tag-text">WHY VALUE PROPERTIES</span>
            </div>
            <h2 className="homy-impact-title">
              Real insights behind every property decision
            </h2>
          </div>

          {/* Right Column: Description */}
          <div className="homy-impact-header-right">
            <p className="homy-impact-desc">
              Built to simplify your Mumbai real estate journey with bulk-buying rates,
              neutral expert advice, and RERA-verified clarity.
            </p>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="homy-impact-bento"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Left Card: Architecture Photo */}
          <motion.div
            className="homy-bento-card homy-photo-card"
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="homy-card-img-wrapper">
              <img
                src="/homy/impact-left.png"
                alt="Modern concrete glass architectural home"
                className="homy-card-img"
              />
            </div>
          </motion.div>

          {/* Middle Column: 3 Stat Cards with Odometer Numbers */}
          <div className="homy-bento-stats-col">
            {/* Stat Card 1 */}
            <motion.div
              className="homy-stat-card"
              whileHover={{ scale: 1.012, backgroundColor: '#f5f5f5' }}
              transition={{ duration: 0.2 }}
            >
              <div className="homy-stat-number">
                <RollingCounter value="170+" baseDelay={0.15} />
              </div>
              <div className="homy-stat-label">VERIFIED PROJECTS</div>
            </motion.div>

            {/* Stat Card 2 */}
            <motion.div
              className="homy-stat-card"
              whileHover={{ scale: 1.012, backgroundColor: '#f5f5f5' }}
              transition={{ duration: 0.2 }}
            >
              <div className="homy-stat-number">
                <RollingCounter value="1000+" baseDelay={0.25} />
              </div>
              <div className="homy-stat-label">FAMILIES SERVED</div>
            </motion.div>

            {/* Stat Card 3 */}
            <motion.div
              className="homy-stat-card"
              whileHover={{ scale: 1.012, backgroundColor: '#f5f5f5' }}
              transition={{ duration: 0.2 }}
            >
              <div className="homy-stat-number">
                <RollingCounter value="15+" baseDelay={0.35} />
              </div>
              <div className="homy-stat-label">YEARS OF TRUST</div>
            </motion.div>
          </div>

          {/* Right Card: Villa Landscape Photo */}
          <motion.div
            className="homy-bento-card homy-photo-card"
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="homy-card-img-wrapper">
              <img
                src="/homy/impact-right.png"
                alt="Modern hillside glass villa with garden"
                className="homy-card-img"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
