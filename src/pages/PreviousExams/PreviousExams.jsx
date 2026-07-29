import { useParams } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import BackButton from '../../components/ui/BackButton/BackButton';
import QuizPlayer from '../../components/ui/QuizPlayer/QuizPlayer';
import subjects from '../../data/subjects';
import './PreviousExams.css';

const PreviousExams = () => {
  const { id } = useParams();
  const subject = subjects.find((s) => s.id === id);

  if (!subject) return null;

  return (
    <PageLayout>
      <BackButton />
      <h1 className="previous-exams__title">أسئلة سابقة — {subject.title}</h1>
      <QuizPlayer
        items={subject.exams.previous}
        emptyMessage="ما في أسئلة سابقة متاحة حالياً."
      />
    </PageLayout>
  );
};

export default PreviousExams;
