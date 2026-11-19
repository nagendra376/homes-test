import { motion } from 'framer-motion';

const PROPERTIES_DATA = [
  {
    id: 1,
    title: 'DLH Signature, Bandra West',
    price: '₹9.2 Cr',
    type: 'For Sale',
    beds: '4+',
    baths: '3',
    sqft: '2,400 sq ft',
    image: '/homy/listing-1.jpg',
  },
  {
    id: 2,
    title: 'Pantheion Palmera, Parel',
    price: '₹5.8 Cr',
    type: 'For Sale',
    beds: '3',
    baths: '3',
    sqft: '2,100 sq ft',
    image: '/homy/listing-2.jpg',
  },
  {
    id: 3,
    title: 'Lodha Corinthia, Central Mumbai',
    price: '₹1.98 Cr',
    type: 'Pre-Launch',
    beds: '2',
    baths: '2',
    sqft: '980 sq ft',
    image: '/homy/listing-3.png',
  },
  {
    id: 4,
    title: '25 South, Prabhadevi Seafront',
    price: '₹14.5 Cr',
    type: 'Luxury Exclusive',
    beds: '4+',
    baths: '4',
    sqft: '4,200 sq ft',
    image: '/homy/listing-4.png',
  },
];

export default function PropertyListingsSection() {
  return (
    <section className="homy-listings-section" id="properties">
      <div className="homy-listings-container">
        
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
              <span className="homy-badge-text">PROPERTY LISTINGS</span>
            </div>
            <h2 className="homy-section-title">
              Discover homes<br />that fit your lifestyle
            </h2>
          </motion.div>

          <motion.div
            className="homy-header-right"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="homy-section-desc">
              Explore a range of properties built for comfort, location, and everyday living.
            </p>
            <button className="homy-explore-all-btn">
              <span>Explore All</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33337 8H12.6667" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 3.33334L12.6667 8.00001L8 12.6667" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </motion.div>
        </div>

        {/* 2x2 Grid of Property Cards */}
        <div className="homy-listings-grid">
          {PROPERTIES_DATA.map((prop, idx) => (
            <motion.div
              key={prop.id}
              className="homy-property-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Background Photo */}
              <div className="homy-property-img-wrapper">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="homy-property-img"
                  loading="lazy"
                />
              </div>

              {/* Top-Right Badge ("For Rent" or "For Buy") */}
              <div className="homy-property-badge-wrap">
                <span className="homy-property-type-pill">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <span>{prop.type}</span>
                </span>
              </div>

              {/* Bottom Frosted Glass Blur Overlay */}
              <div className="homy-property-bottom-glass">
                <div className="homy-property-info-row">
                  <div className="homy-property-text-left">
                    <span className="homy-property-name">{prop.title}</span>
                    <span className="homy-property-price">{prop.price}</span>
                  </div>

                  {/* Specs Icons (Beds, Baths, Sqft) */}
                  <div className="homy-property-specs">
                    <div className="homy-spec-item">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" />
                      </svg>
                      <span>{prop.beds}</span>
                    </div>

                    <div className="homy-spec-divider" />

                    <div className="homy-spec-item">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-1C4.7 2.5 4 3.2 4 4v2" />
                        <path d="M4 14h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2H4" />
                        <path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
                      </svg>
                      <span>{prop.baths}</span>
                    </div>

                    <div className="homy-spec-divider" />

                    <div className="homy-spec-item">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
                      </svg>
                      <span>{prop.sqft}</span>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
