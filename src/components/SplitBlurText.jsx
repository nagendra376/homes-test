import { motion } from 'framer-motion';

/**
 * SplitBlurText - Exact word-by-word blur-to-focus mount animation from Bildora
 * Initial: filter: blur(10px), opacity: 0.001, y: 10-12px
 * Animate: filter: blur(0px), opacity: 1, y: 0px
 * Transition: spring, bounce: 0, duration: 0.4-0.5s, staggered per word
 */
export default function SplitBlurText({
  text,
  className = '',
  as: Component = 'span',
  delay = 0,
  stagger = 0.08,
  duration = 0.45,
}) {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0.001,
      filter: 'blur(10px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0,
        duration: duration,
      },
    },
  };

  return (
    <Component className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ display: 'inline' }}
      >
        {words.map((word, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              whiteSpace: 'pre',
            }}
          >
            <motion.span
              variants={wordVariants}
              style={{
                display: 'inline-block',
                willChange: 'transform, filter, opacity',
              }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && ' '}
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
