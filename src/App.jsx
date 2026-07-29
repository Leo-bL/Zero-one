import { useState, useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import AppRouter from './router/AppRouter';
import Navbar from './components/layout/Navbar';
import Loader from './components/layout/Loader';
import AnimatedBackground from './components/layout/AnimatedBackground';
import './styles/global.css';

const AppShell = () => {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <>
      <AnimatedBackground />
      <div className="app-content">
        {!isLanding && <Navbar />}
        <AppRouter />
      </div>
    </>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Loader />
        </motion.div>
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
        >
          <BrowserRouter>
            <AppShell />
          </BrowserRouter>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;
