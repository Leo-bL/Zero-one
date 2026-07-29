import { Plyr } from 'plyr-react';
import 'plyr/dist/plyr.css';
import './VideoPlayer.css';

// نفس الواجهة القديمة (src + title) بس المحرّك تحت صار Plyr
const VideoPlayer = ({ src, title }) => {
  return (
    <div className="video-player">
      <Plyr
        key={src}
        source={{
          type: 'video',
          title,
          sources: [{ src, type: 'video/mp4' }],
        }}
        options={{
          controls: [
            'play-large',
            'play',
            'progress',
            'current-time',
            'duration',
            'mute',
            'volume',
            'fullscreen',
          ],
          settings: [], // إخفاء قائمة الإعدادات (سرعة/جودة) حتى يضل الشكل بسيط
          i18n: {
            play: 'تشغيل',
            pause: 'إيقاف',
            mute: 'كتم الصوت',
            unmute: 'إلغاء الكتم',
            enterFullscreen: 'ملء الشاشة',
            exitFullscreen: 'الخروج من ملء الشاشة',
            currentTime: 'الوقت الحالي',
            duration: 'المدة',
          },
        }}
      />
    </div>
  );
};

export default VideoPlayer;
