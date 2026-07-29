import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import './Card.css';

const Card = ({ icon: Icon, title, subtitle, onClick, accentColor = 'cyan', className = '' }) => {
  return (
    <motion.div
      className={`card card--${accentColor} ${className}`}
      onClick={onClick}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {Icon && (
        <div className={`card__icon card__icon--${accentColor}`}>
          <Icon size={22} strokeWidth={1.8} />
        </div>
      )}
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        {subtitle && <p className="card__subtitle">{subtitle}</p>}
      </div>
      <ChevronRight size={18} className="card__arrow" />
    </motion.div>
  );
};

export default Card;
