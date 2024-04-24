/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export default function TextValidationMessage({ children }) {
  return (
    <motion.p
      style={{
        y: -100,
        color: '#F7CD08',
        fontSize: '1.8rem',
        fontWeight: 500,
        textTransform: 'uppercase',
        fontFamily: 'inherit',
      }}
      animate={{
        y: 0,
        transition: { type: 'spring' },
      }}
      whileHover={{ scaleX: 1.3 }}
    >
      {children}
    </motion.p>
  );
}
