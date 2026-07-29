import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import subjects from '../../data/subjects';
import { searchSubjects } from '../../utils/search';
import { getSubjectIcon } from '../../utils/icons';
import './Navbar.css';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const navigate = useNavigate();

  const results = query.trim() ? searchSubjects(subjects, query).slice(0, 6) : [];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (subject) => {
    navigate(`/subject/${subject.id}`);
    setQuery('');
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <button
          className="navbar__brand"
          onClick={() => navigate('/')}
          title="رجوع لصفحة الهبوط"
        >
          <span className="navbar__brand-main">zero one</span>
          <span className="navbar__brand-beta">.beta</span>
        </button>

        <div className="navbar__search" ref={wrapperRef}>
          <Search size={17} strokeWidth={1.8} className="navbar__search-icon" />
          <input
            type="text"
            className="navbar__search-input"
            placeholder="دوّر عن مادة..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
          />

          <AnimatePresence>
            {isOpen && query.trim() && (
              <motion.div
                className="navbar__results"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
              >
                {results.length === 0 ? (
                  <div className="navbar__no-results">ما لقينا مادة بهاد الاسم 🤔</div>
                ) : (
                  results.map((subject) => {
                    const SubjectIcon = getSubjectIcon(subject.icon);
                    return (
                      <button
                        key={subject.id}
                        className="navbar__result-item"
                        onClick={() => handleSelect(subject)}
                      >
                        <SubjectIcon size={16} strokeWidth={1.8} />
                        <span className="navbar__result-title">{subject.title}</span>
                        <span className="navbar__result-desc">{subject.description}</span>
                      </button>
                    );
                  })
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
