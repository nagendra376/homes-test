import { motion } from 'framer-motion';

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function SingleDigit({ digit, delay = 0 }) {
  const target = parseInt(digit, 10);
  if (isNaN(target)) {
    return <span>{digit}</span>;
  }

  return (
    <span className="digit-reel-viewport">
      <motion.span
        className="digit-reel-strip"
        initial={{ y: '0%' }}
        whileInView={{ y: `-${target * 10}%` }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 1.6,
          delay: delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {DIGITS.map((d) => (
          <span key={d} className="digit-reel-number">
            {d}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

export default function RollingCounter({ value, baseDelay = 0.1 }) {
  const chars = value.split('');
  let digitIndex = 0;

  return (
    <span className="rolling-counter">
      {chars.map((char, index) => {
        const isDigit = !isNaN(parseInt(char, 10));
        if (isDigit) {
          const delay = baseDelay + digitIndex * 0.12;
          digitIndex++;
          return <SingleDigit key={index} digit={char} delay={delay} />;
        }
        return (
          <span key={index} className="rolling-symbol">
            {char}
          </span>
        );
      })}
    </span>
  );
}
