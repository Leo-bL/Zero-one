import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import PageLayout from '../../components/layout/PageLayout';
import BackButton from '../../components/ui/BackButton/BackButton';
import Button from '../../components/ui/Button/Button';
import EmptyState from '../../components/ui/EmptyState/EmptyState';
import subjects from '../../data/subjects';
import { downloadFile } from '../../utils/download';
import './Summary.css';

const Summary = () => {
  const { id } = useParams();
  const subject = subjects.find((s) => s.id === id);

  if (!subject) return null;

  return (
    <PageLayout>
      <BackButton />
      <h1 className="summary__title">الملخص — {subject.title}</h1>

      {subject.summary ? (
        <motion.div
          className="summary__card"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="summary__icon">
            <FileText size={32} strokeWidth={1.5} />
          </span>
          <div className="summary__info">
            <p className="summary__name">ملخص {subject.title}</p>
            <p className="summary__hint">ملف PDF جاهز للتحميل</p>
          </div>
          <Button
            variant="primary"
            icon={<Download size={16} />}
            onClick={() => downloadFile(subject.summary, `ملخص ${subject.title}.pdf`)}
          >
            تحميل
          </Button>
        </motion.div>
      ) : (
        <EmptyState icon={<FileText size={40} strokeWidth={1.5} />} message="ما في ملخص متاح حالياً." />
      )}
    </PageLayout>
  );
};

export default Summary;
