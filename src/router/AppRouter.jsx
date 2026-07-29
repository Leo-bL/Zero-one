import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Landing        from '../pages/Landing/Landing';
import Home          from '../pages/Home/Home';
import Subject       from '../pages/Subject/Subject';
import Videos        from '../pages/Videos/Videos';
import Summary       from '../pages/Summary/Summary';
import Exams         from '../pages/Exams/Exams';
import Quizzes       from '../pages/Quizzes/Quizzes';
import PreviousExams from '../pages/PreviousExams/PreviousExams';

const AppRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"                                   element={<Landing />} />
        <Route path="/home"                               element={<Home />} />
        <Route path="/subject/:id"                        element={<Subject />} />
        <Route path="/subject/:id/videos"                 element={<Videos />} />
        <Route path="/subject/:id/summary"                element={<Summary />} />
        <Route path="/subject/:id/exams"                  element={<Exams />} />
        <Route path="/subject/:id/exams/quizzes"          element={<Quizzes />} />
        <Route path="/subject/:id/exams/previous"         element={<PreviousExams />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouter;
