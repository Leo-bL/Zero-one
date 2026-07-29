import { motion } from 'framer-motion';
import './PageLayout.css';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -8 },
};

const PageLayout = ({ children, className = '' }) => {
  return (
    <motion.main
      className={`page-layout ${className}`}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="page-layout__inner">
        {children}
      </div>
    </motion.main>
  );
};

export default PageLayout;
