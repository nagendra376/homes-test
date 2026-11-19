import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ_ITEMS = [
  {
    id: 1,
    question: 'How do I start searching for a home with Value Properties?',
    answer: 'You can explore 170+ verified Mumbai developments, browse by budget and location, or connect directly with our advisory team on WhatsApp.',
  },
  {
    id: 2,
    question: 'Are all properties RERA-verified?',
    answer: 'Yes, every single project is thoroughly checked and its RERA registration confirmed before it ever reaches you.',
  },
  {
    id: 3,
    question: 'What are bulk-buying rates?',
    answer: 'We pool client demand to negotiate institutional-grade bulk rates and preferential pricing directly with tier-1 developers like Lodha, Godrej, and Shapoorji Pallonji.',
  },
  {
    id: 4,
    question: 'Do you charge brokerage on primary developer bookings?',
    answer: 'No, we do not charge any brokerage on new developer bookings. You get 100% neutral advice and better rates than buying alone.',
  },
  {
    id: 5,
    question: 'Can I explore both rental and luxury resale options?',
    answer: 'Yes, we manage exclusive luxury resales, pre-launch investments, and corporate rentals across prime Mumbai neighborhoods.',
  },
  {
    id: 6,
    question: 'Do I get dedicated assistance through the closing process?',
    answer: 'From private site tours and price negotiation to legal vetting, documentation, and handover, our seasoned advisors accompany you throughout.',
  },
  {
    id: 7,
    question: 'How do I speak with an advisor today?',
    answer: 'You can reach us directly via WhatsApp or call at +91 98191 62911, or email amit@valueproperties.homes.',
  },
];

export default function FaqSection() {
  // First item open by default as shown in the screenshot
  const [openId, setOpenId] = useState(1);

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="homy-faq-section" id="faq">
      <div className="homy-faq-container">
        
        {/* Left Column: Heading & Description */}
        <motion.div
          className="homy-faq-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* FAQ Tag Badge with Bullseye Dot */}
          <div className="homy-faq-badge">
            <span className="homy-faq-bullseye">
              <span className="homy-bullseye-inner" />
            </span>
            <span className="homy-faq-badge-text">FAQ</span>
          </div>

          <h2 className="homy-faq-title">
            Things You<br />Should Know
          </h2>

          <p className="homy-faq-desc">
            We’ve answered the most common questions to help you get started with clarity.
          </p>
        </motion.div>

        {/* Right Column: Accordion List */}
        <motion.div
          className="homy-faq-right"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="homy-faq-accordion-list">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className={`homy-faq-card ${isOpen ? 'is-open' : 'is-closed'}`}
                >
                  <button
                    className="homy-faq-trigger"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="homy-faq-question">{item.question}</span>

                    {/* Animated Plus / Minus Icon */}
                    <span className="homy-faq-icon-box">
                      <span className="homy-icon-bar horizontal" />
                      <motion.span
                        className="homy-icon-bar vertical"
                        animate={{ scaleY: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="homy-faq-answer-collapse"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="homy-faq-answer">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
