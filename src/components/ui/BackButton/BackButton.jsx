import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import './BackButton.css';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      className="back-button"
      onClick={() => navigate(-1)}
      whileHover={{ x: -3 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      <ArrowLeft size={16} strokeWidth={2} />
      <span>رجوع</span>
    </motion.button>
  );
};

export default BackButton;
