import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Video, FileText, ClipboardList, SearchX } from 'lucide-react';
import PageLayout from '../../components/layout/PageLayout';
import Card from '../../components/ui/Card/Card';
import BackButton from '../../components/ui/BackButton/BackButton';
import EmptyState from '../../components/ui/EmptyState/EmptyState';
import subjects from '../../data/subjects';
import './Subject.css';

const containerVariants = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const Subject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const subject = subjects.find((s) => s.id === id);

  if (!subject) {
    return (
      <PageLayout>
        <BackButton />
        <EmptyState icon={<SearchX size={40} strokeWidth={1.5} />} message="ما لقينا هيك مادة." />
      </PageLayout>
    );
  }

  const sections = [
    { key: 'videos',  icon: Video,          label: 'الفيديوهات', subtitle: `${subject.videos.length} محاضرة`, color: 'cyan',   path: 'videos' },
    { key: 'summary', icon: FileText,       label: 'الملخص',     subtitle: subject.summary ? 'متوفر' : 'غير متوفر', color: 'purple', path: 'summary' },
    { key: 'exams',   icon: ClipboardList,  label: 'الامتحانات', subtitle: 'كويزات وأسئلة سابقة', color: 'green',  path: 'exams' },
  ];

  return (
    <PageLayout>
      <BackButton />

      <motion.div
        className="subject__header"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="subject__title">{subject.title}</h1>
        <p className="subject__desc">{subject.description}</p>
      </motion.div>

      <motion.div
        className="subject__grid"
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
              onClick={() => navigate(`/subject/${id}/${section.path}`)}
            />
          </motion.div>
        ))}
      </motion.div>
    </PageLayout>
  );
};

export default Subject;
