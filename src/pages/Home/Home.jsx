import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageLayout from '../../components/layout/PageLayout';
import Card from '../../components/ui/Card/Card';
import subjects from '../../data/subjects';
import { getSubjectIcon } from '../../utils/icons';
import './Home.css';

const containerVariants = {
  animate: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className="home__header">
        <motion.h1
          className="home__title"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Zero <span className="home__title-accent">One</span>
        </motion.h1>
        <motion.p
          className="home__subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          اختار مادتك وابدأ تذاكر.
        </motion.p>
      </div>

      <motion.div
        className="home__grid"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {subjects.map((subject) => {
          const SubjectIcon = getSubjectIcon(subject.icon);
          return (
            <motion.div key={subject.id} variants={itemVariants} transition={{ duration: 0.3 }}>
              <Card
                icon={SubjectIcon}
                title={subject.title}
                subtitle={subject.description}
                accentColor={subject.color}
                onClick={() => navigate(`/subject/${subject.id}`)}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </PageLayout>
  );
};

export default Home;
