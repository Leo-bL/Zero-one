import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardList, CheckCircle2, XCircle, RotateCcw, ArrowRight } from 'lucide-react';
import EmptyState from '../EmptyState/EmptyState';
import './QuizPlayer.css';

// Reusable for both Quizzes and Previous Exams — same design and logic,
// only the `items` data source changes.
const QuizPlayer = ({ items, emptyMessage }) => {
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  if (items.length === 0) {
    return <EmptyState icon={<ClipboardList size={40} strokeWidth={1.5} />} message={emptyMessage} />;
  }

  const startQuiz = (quiz) => {
    setActiveQuiz(quiz);
    setQuestionIndex(0);
    setSelected(null);
    setAnswers([]);
    setFinished(false);
  };

  const resetToList = () => {
    setActiveQuiz(null);
    setFinished(false);
  };

  const currentQuestion = activeQuiz?.questions[questionIndex];

  const handleSelect = (optionIndex) => {
    if (selected !== null) return; // lock after first pick
    setSelected(optionIndex);
  };

  const handleNext = () => {
    const isCorrect = selected === currentQuestion.correctIndex;
    const nextAnswers = [...answers, isCorrect];
    setAnswers(nextAnswers);

    if (questionIndex + 1 < activeQuiz.questions.length) {
      setQuestionIndex(questionIndex + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  // --- Quiz picker ---
  if (!activeQuiz) {
    return (
      <div className="quiz-list">
        {items.map((quiz) => (
          <motion.button
            key={quiz.id}
            className="quiz-list__item"
            onClick={() => startQuiz(quiz)}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            <ClipboardList size={20} strokeWidth={1.8} />
            <div className="quiz-list__info">
              <span className="quiz-list__title">{quiz.title}</span>
              <span className="quiz-list__count">{quiz.questions.length} سؤال</span>
            </div>
            <ArrowRight size={16} className="quiz-list__arrow" />
          </motion.button>
        ))}
      </div>
    );
  }

  // --- Results screen ---
  if (finished) {
    const score = answers.filter(Boolean).length;
    const total = answers.length;
    const percent = Math.round((score / total) * 100);

    return (
      <motion.div
        className="quiz-result"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="quiz-result__score">{percent}%</div>
        <p className="quiz-result__label">
          إجبت صح على {score} من {total}
        </p>
        <div className="quiz-result__actions">
          <button className="quiz-result__btn" onClick={() => startQuiz(activeQuiz)}>
            <RotateCcw size={15} /> حاول مرة ثانية
          </button>
          <button className="quiz-result__btn quiz-result__btn--ghost" onClick={resetToList}>
            رجوع للقائمة
          </button>
        </div>
      </motion.div>
    );
  }

  // --- Active question ---
  return (
    <div className="quiz-play">
      <div className="quiz-play__progress-bar">
        <motion.div
          className="quiz-play__progress-fill"
          animate={{ width: `${((questionIndex + 1) / activeQuiz.questions.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <p className="quiz-play__counter">
        سؤال {questionIndex + 1} من {activeQuiz.questions.length}
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={questionIndex}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="quiz-play__question">{currentQuestion.question}</h3>

          <div className="quiz-play__options">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selected === index;
              const isCorrectAnswer = index === currentQuestion.correctIndex;
              const showFeedback = selected !== null;

              let stateClass = '';
              if (showFeedback && isCorrectAnswer) stateClass = 'quiz-play__option--correct';
              else if (showFeedback && isSelected && !isCorrectAnswer) stateClass = 'quiz-play__option--wrong';

              return (
                <button
                  key={index}
                  className={`quiz-play__option ${stateClass}`}
                  onClick={() => handleSelect(index)}
                  disabled={selected !== null}
                >
                  <span>{option}</span>
                  {showFeedback && isCorrectAnswer && <CheckCircle2 size={18} />}
                  {showFeedback && isSelected && !isCorrectAnswer && <XCircle size={18} />}
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {selected !== null && (
        <motion.button
          className="quiz-play__next"
          onClick={handleNext}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {questionIndex + 1 < activeQuiz.questions.length ? 'السؤال التالي' : 'شوف النتيجة'}
        </motion.button>
      )}
    </div>
  );
};

export default QuizPlayer;
