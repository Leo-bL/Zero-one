import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PenLine, Archive } from 'lucide-react';
import PageLayout from '../../components/layout/PageLayout';
import Card from '../../components/ui/Card/Card';
import BackButton from '../../components/ui/BackButton/BackButton';
import subjects from '../../data/subjects';
import './Exams.css';

const containerVariants = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const Exams = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const subject = subjects.find((s) => s.id === id);

  if (!subject) return null;

  const { quizzes, previous } = subject.exams;

  const sections = [
    {
      key: 'quizzes',
      icon: PenLine,
      label: 'الكويزات',
      subtitle: `${quizzes.length} متاح`,
      color: 'cyan',
      path: 'quizzes',
    },
    {
      key: 'previous',
      icon: Archive,
      label: 'أسئلة سابقة',
      subtitle: `${previous.length} متاح`,
      color: 'purple',
      path: 'previous',
    },
  ];

  return (
    <PageLayout>
      <BackButton />
      <h1 className="exams__title">الامتحانات — {subject.title}</h1>

      <motion.div
        className="exams__grid"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {sections.map((section) => (
          <motion.div key={section.key} variants={itemVariants} transition={{ duration: 0.3 }}>
            <Card
              icon={section.icon}
              title={section.label}
              subtitle={section.subtitle}
              accentColor={section.color}
              onClick={() => navigate(`/subject/${id}/exams/${section.path}`)}
            />
          </motion.div>
        ))}
      </motion.div>
    </PageLayout>
  );
};

export default Exams;
