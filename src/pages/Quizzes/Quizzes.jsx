import { useParams } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import BackButton from '../../components/ui/BackButton/BackButton';
import QuizPlayer from '../../components/ui/QuizPlayer/QuizPlayer';
import subjects from '../../data/subjects';
import './Quizzes.css';

const Quizzes = () => {
  const { id } = useParams();
  const subject = subjects.find((s) => s.id === id);

  if (!subject) return null;

  return (
    <PageLayout>
      <BackButton />
      <h1 className="quizzes__title">الكويزات — {subject.title}</h1>
      <QuizPlayer
        items={subject.exams.quizzes}
        emptyMessage="ما في كويزات متاحة حالياً."
      />
    </PageLayout>
  );
};

export default Quizzes;
