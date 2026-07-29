import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { FacebookIcon, WhatsAppIcon, WHATSAPP_NUMBER, FACEBOOK_URL } from '../icons/SocialIcons';
import './Footer.css';

const Footer = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!message.trim()) return;
    const encoded = encodeURIComponent(message.trim());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
    setMessage('');
  };

  return (
    <footer className="footer">
      <div className="footer__inner">
        <motion.div
          className="footer__feedback"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="footer__feedback-title">عندك اقتراح أو ملاحظة؟</h3>
          <p className="footer__feedback-sub">اكتب رسالتك وبتوصلنا مباشرة عالواتساب</p>
          <div className="footer__feedback-box">
            <textarea
              className="footer__feedback-input"
              placeholder="اكتب هون... مدح، شكوى، أو اقتراح 🙂"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={2}
            />
            <motion.button
              className="footer__feedback-send"
              onClick={handleSend}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              disabled={!message.trim()}
            >
              <Send size={16} />
              إرسال
            </motion.button>
          </div>
        </motion.div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Zero One — كل الحقوق محفوظة لـ محمد البلاطي
          </p>
          <div className="footer__socials">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Facebook"
            >
              <FacebookIcon width={18} height={18} />
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon width={18} height={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
