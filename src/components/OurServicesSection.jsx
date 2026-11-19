import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SERVICES_DATA = [
  {
    id: 0,
    number: '.01',
    category: 'RERA-Verified Primary',
    title: 'Buy Premium Homes Direct',
    description: 'Access premier developer launches across Mumbai with verified documentation, neutral advisory, and zero brokerage.',
  },
  {
    id: 1,
    number: '.02',
    category: 'Exclusive Group Pricing',
    title: 'Bulk Buying Rates With Ease',
    description: 'Harness collective buying power to secure pre-negotiated builder rates on Mumbai’s finest residential developments.',
  },
  {
    id: 2,
    number: '.03',
    category: 'Resale & Rental Advisory',
    title: 'Personalized Property Solutions',
    description: 'From verified luxury resales to prime corporate rentals, our advisors guide you through every step with transparency.',
  },
];

export default function OurServicesSection() {
  const [activeId, setActiveId] = useState(1); // Card 2 active by default as shown in reference

  return (
    <section className="homy-services-section" id="services">
      <div className="homy-services-container">
        
        {/* Section Header */}
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
              <span className="homy-badge-text">OUR SERVICES</span>
            </div>
            <h2 className="homy-section-title">
              Everything you need<br />for your home
            </h2>
          </motion.div>

          <motion.p
            className="homy-section-desc"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Built to simplify your home search with clear insights, better options, and confident decisions.
          </motion.p>
        </div>

        {/* 3 Expanding Accordion Service Cards */}
        <div className="homy-service-cards-row">
          {SERVICES_DATA.map((service) => {
            const isActive = activeId === service.id;

            return (
              <motion.div
                key={service.id}
                layout
                onClick={() => setActiveId(service.id)}
                className={`homy-service-card ${isActive ? 'card-active' : 'card-inactive'}`}
                transition={{
                  layout: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                }}
              >
                {isActive ? (
                  /* Active Black Card with 3D House Asset */
                  <div className="homy-card-inner active-content">
                    <div className="homy-card-top-bar">
                      <div className="homy-card-titles">
                        <span className="homy-card-category">{service.category}</span>
                        <h3 className="homy-card-heading-active">{service.title}</h3>
                      </div>
                      <span className="homy-card-num-large">{service.number}</span>
                    </div>

                    {/* 3D Villa Render Graphic */}
                    <div className="homy-card-image-wrap">
                      <motion.img
                        src="/homy/service-villa.png"
                        alt="Modern 3D Villa"
                        className="homy-service-villa-img"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        draggable={false}
                      />
                    </div>
                  </div>
                ) : (
                  /* Inactive Minimal Clean Card */
                  <div className="homy-card-inner inactive-content">
                    <span className="homy-card-watermark-num">{service.number}</span>
                    <div className="homy-card-bottom-info">
                      <span className="homy-card-category">{service.category}</span>
                      <h4 className="homy-card-heading-inactive">{service.title}</h4>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
