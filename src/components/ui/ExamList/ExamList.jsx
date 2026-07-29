import { motion } from 'framer-motion';
import EmptyState from '../EmptyState/EmptyState';
import './ExamList.css';

const containerVariants = {
  animate: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  initial: { opacity: 0, x: -12 },
  animate: { opacity: 1, x: 0 },
};

const ExamList = ({ items, emptyMessage }) => {
  if (items.length === 0) {
    return <EmptyState icon="📭" message={emptyMessage} />;
  }

  return (
    <motion.div
      className="exam-list"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {items.map((item) => (
        <motion.a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="exam-list__item"
          variants={itemVariants}
          transition={{ duration: 0.25 }}
          whileHover={{ x: 4 }}
        >
          <span className="exam-list__icon">📎</span>
          <span className="exam-list__title">{item.title}</span>
          <span className="exam-list__action">Open ↗</span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default ExamList;
