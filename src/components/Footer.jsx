import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="homy-footer-section" id="contact">
      <div className="homy-footer-card-container">
        
        {/* Soft Cloudy Atmosphere Background Layer */}
        <div className="homy-footer-cloud-bg">
          <img
            src="/homy/footer-cloud.png"
            alt=""
            className="homy-footer-cloud-img"
            aria-hidden="true"
          />
        </div>

        {/* Content Area containing CTA, Villa, and Water Reflection */}
        <div className="homy-footer-content-area">
          {/* Top CTA Content Wrapper */}
          <div className="homy-footer-cta-wrapper">
            <motion.div
              className="homy-footer-cta-badge"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="homy-footer-badge-dot" />
              <span className="homy-footer-badge-text">Find your next home in Mumbai</span>
            </motion.div>

            <motion.h2
              className="homy-footer-cta-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              Discover homes designed<br />for your lifestyle
            </motion.h2>

            <motion.p
              className="homy-footer-cta-desc"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            >
              Explore verified Mumbai properties, compare bulk-buying options, and move forward with confidence<br className="homy-cta-desc-br" />— everything you need in one place.
            </motion.p>

            <motion.div
              className="homy-footer-cta-btn-wrap"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              <a href="https://wa.me/919819162911" target="_blank" rel="noopener noreferrer" className="homy-footer-get-touch-btn">
                <span>Talk to an Advisor</span>
                <span className="homy-footer-btn-icon">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33337 8H12.6667" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 3.33334L12.6667 8.00001L8 12.6667" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
            </motion.div>
          </div>

          {/* Luxury Villa Stage */}
          <div className="homy-footer-mansion-stage">
            <div className="homy-footer-mansion-image-wrap">
              <img
                src="/homy/ticker-villa.png"
                alt="Luxury modern villa reflecting on wet driveway at dusk"
                className="homy-footer-mansion-img"
                loading="lazy"
              />
            </div>

            {/* Giant Water Reflection VALUE SVG Text */}
            <div className="homy-giant-logo-reflection-wrap">
              <svg
                viewBox="0 0 1035.435 247.115"
                className="homy-giant-logo-svg"
                preserveAspectRatio="none"
                aria-label="VALUE"
              >
                <defs>
                  <linearGradient id="value-reflect-grad" x1="0.5" y1="0" x2="0.5" y2="1">
                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0.82)" />
                    <stop offset="65%" stopColor="rgba(140, 155, 170, 0.42)" />
                    <stop offset="98%" stopColor="rgba(8, 11, 15, 0.02)" />
                  </linearGradient>
                  <filter id="value-reflect-shadow" x="-5%" y="-30%" width="110%" height="160%">
                    <feDropShadow dx="0" dy="-8" stdDeviation="12" floodColor="rgba(0,0,0,0.35)" />
                  </filter>
                </defs>

                {/* Translucent Metallic Water-Reflection Letters spelling VALUE */}
                <text
                  x="517"
                  y="200"
                  textAnchor="middle"
                  fontFamily="'Inter', 'Plus Jakarta Sans', sans-serif"
                  fontWeight="900"
                  fontSize="200"
                  letterSpacing="18"
                  fill="url(#value-reflect-grad)"
                  filter="url(#value-reflect-shadow)"
                >
                  VALUE
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Dark Navigation Section */}
        <div className="homy-footer-nav-block">
          <div className="homy-footer-nav-grid">
            
            {/* Left Brand Column */}
            <div className="homy-footer-brand-col">
              <a href="#" className="homy-footer-logo-link">
                <img
                  src="/images/logo.png"
                  alt="Value Properties"
                  className="value-footer-logo-img"
                />
              </a>

              <p className="homy-footer-tagline">
                A one-stop solution for real estate, done personally. Bulk-buying rates and straight numbers on 170+ verified listings across Mumbai.
              </p>

              {/* Social Media Link Buttons */}
              <div className="homy-footer-socials">
                {/* WhatsApp */}
                <a href="https://wa.me/919819162911" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="homy-social-icon-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#instagram" aria-label="Instagram" className="homy-social-icon-btn">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                {/* Facebook */}
                <a href="#facebook" aria-label="Facebook" className="homy-social-icon-btn">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                {/* X */}
                <a href="#twitter" aria-label="X" className="homy-social-icon-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Navigation & Contact Columns */}
            <div className="homy-footer-right-panels">
              {/* Explore Column */}
              <div className="homy-footer-links-col">
                <span className="homy-footer-col-title">Explore</span>
                <ul className="homy-footer-menu">
                  <li><a href="#properties">Properties</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="https://valueproperties.homes/compare" target="_blank" rel="noopener noreferrer">Compare Projects</a></li>
                  <li><a href="#faq">FAQ</a></li>
                </ul>
              </div>

              {/* Contact Column */}
              <div className="homy-footer-contact-col">
                <span className="homy-footer-col-title">Contact</span>
                <ul className="homy-footer-contact-list">
                  <li>
                    <span className="homy-contact-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                    </span>
                    <a href="mailto:amit@valueproperties.homes">amit@valueproperties.homes</a>
                  </li>
                  <li>
                    <span className="homy-contact-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </span>
                    <a href="tel:+919819162911">+91 98191 62911</a>
                  </li>
                  <li>
                    <span className="homy-contact-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                    </span>
                    <span>Satya House, Parel, Mumbai 400015</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Horizontal Divider Line */}
          <div className="homy-footer-divider" />

          {/* Bottom Legal & Copyright Bar */}
          <div className="homy-footer-bottom-bar">
            <span className="homy-bottom-copy">© 2026 Value Properties. All rights reserved.</span>
            <span className="homy-bottom-crafted">
              RERA Verified Advisory
            </span>
            <a href="https://valueproperties.homes/PrivacyPolicy" target="_blank" rel="noopener noreferrer" className="homy-bottom-privacy">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
