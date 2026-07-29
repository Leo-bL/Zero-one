import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Video as VideoIcon, Download } from 'lucide-react';
import PageLayout from '../../components/layout/PageLayout';
import BackButton from '../../components/ui/BackButton/BackButton';
import EmptyState from '../../components/ui/EmptyState/EmptyState';
import VideoPlayer from '../../components/ui/VideoPlayer/VideoPlayer';
import subjects from '../../data/subjects';
import { downloadFile } from '../../utils/download';
import './Videos.css';

const Videos = () => {
  const { id } = useParams();
  const subject = subjects.find((s) => s.id === id);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!subject) return null;

  const { videos } = subject;

  if (videos.length === 0) {
    return (
      <PageLayout>
        <BackButton />
        <EmptyState icon={<VideoIcon size={40} strokeWidth={1.5} />} message="ما في فيديوهات متاحة حالياً." />
      </PageLayout>
    );
  }

  const activeVideo = videos[activeIndex];

  const handleDownloadOne = (video) => {
    downloadFile(video.url, `${subject.title} - ${video.title}.mp4`);
  };

  const handleDownloadAll = () => {
    videos.forEach((video, i) => {
      setTimeout(() => handleDownloadOne(video), i * 600);
    });
  };

  return (
    <PageLayout>
      <BackButton />

      <div className="videos__header">
        <h1 className="videos__title">فيديوهات — {subject.title}</h1>
        <button className="videos__download-all-btn" onClick={handleDownloadAll}>
          <Download size={16} />
          تحميل الكل ({videos.length})
        </button>
      </div>

      <div className="videos__layout">
        <motion.div
          key={activeIndex}
          className="videos__player-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          {/* مشغّل بتصميم احترافي مخصص */}
          <VideoPlayer
            key={activeVideo.id}
            src={activeVideo.url}
            title={activeVideo.title}
          />

          <div className="videos__player-footer">
            <p className="videos__now-playing">{activeVideo.title}</p>
            <button
              className="videos__download-btn"
              onClick={() => handleDownloadOne(activeVideo)}
            >
              <Download size={14} />
              تحميل
            </button>
          </div>
        </motion.div>

        <div className="videos__list">
          {videos.map((video, index) => (
            <motion.button
              key={video.id}
              className={`videos__item ${index === activeIndex ? 'videos__item--active' : ''}`}
              onClick={() => setActiveIndex(index)}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <Play
                size={13}
                strokeWidth={2}
                fill={index === activeIndex ? 'currentColor' : 'none'}
                className="videos__item-icon"
              />
              <span className="videos__item-title">{video.title}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Videos;
