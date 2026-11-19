import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function HomyLogo() {
  return (
    <a href="#" className="homy-brand value-brand" aria-label="Value Properties homepage">
      <img
        src="/images/logo.png"
        alt="Value Properties"
        className="value-header-logo-img"
      />
    </a>
  );
}

export function ActionButton({ text, href = '#', variant = 'primary', className = '' }) {
  const isPrimary = variant === 'primary';

  return (
    <a
      href={href}
      className={`homy-action-btn ${isPrimary ? 'homy-btn-black' : 'homy-btn-outline'} ${className}`}
    >
      <span className="homy-btn-text">{text}</span>
      {isPrimary && (
        <span className="homy-btn-arrow-box">
          <span className="homy-btn-arrow-slider">
            <svg
              className="homy-arrow-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#080B0F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
            <svg
              className="homy-arrow-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#080B0F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </span>
      )}
    </a>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('PROPERTIES');
  const [isScrolled, setIsScrolled] = useState(false);

  const links = ['PROPERTIES', 'SERVICES', 'ABOUT'];

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      setIsScrolled(y > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    let lenisTimer;
    if (window.lenis) {
      window.lenis.on('scroll', handleScroll);
    } else {
      lenisTimer = setTimeout(() => {
        if (window.lenis) {
          window.lenis.on('scroll', handleScroll);
        }
      }, 150);
    }

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (window.lenis) {
        window.lenis.off('scroll', handleScroll);
      }
      if (lenisTimer) clearTimeout(lenisTimer);
    };
  }, []);

  return (
    <motion.header
      className={`homy-header ${isScrolled ? 'is-scrolled' : ''}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="homy-header-inner">
        <HomyLogo />

        <nav className="homy-nav-desktop" aria-label="Main Navigation">
          <div className="homy-nav-links">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`homy-nav-item ${activeLink === link ? 'is-active' : ''}`}
                onClick={() => setActiveLink(link)}
              >
                <span>{link}</span>
                <span className="homy-nav-indicator" />
              </a>
            ))}
          </div>

          <ActionButton text="Contact us" href="#contact" variant="primary" />
        </nav>

        {/* Mobile menu trigger */}
        <button
          className="homy-mobile-toggle"
          type="button"
          aria-label={mobileOpen ? 'Close Menu' : 'Open Menu'}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`homy-burger-line ${mobileOpen ? 'open-top' : ''}`} />
          <span className={`homy-burger-line ${mobileOpen ? 'open-bottom' : ''}`} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="homy-mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="homy-mobile-links">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="homy-mobile-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              ))}
              <ActionButton
                text="Contact us"
                href="#contact"
                variant="primary"
                className="homy-mobile-cta"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
