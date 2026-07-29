import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Video, FileText, ClipboardList, PlayCircle, BookOpenCheck, Target } from 'lucide-react';
import Footer from '../../components/layout/Footer';
import { FacebookIcon, WhatsAppIcon, WHATSAPP_NUMBER, FACEBOOK_URL } from '../../components/icons/SocialIcons';
import './Landing.css';

const features = [
  {
    icon: Video,
    title: 'فيديوهات شرح مرتّبة',
    desc: 'كل محاضرة بمكانها، تتفرّج عليها بالسرعة اللي تناسبك — جوا الموقع بدون ما تحتاج تروح على يوتيوب.',
  },
  {
    icon: FileText,
    title: 'ملخصات جاهزة',
    desc: 'ملخص PDF لكل مادة، مرتّب ومختصر، تقدر تحمّله وتذاكر منه براحتك.',
  },
  {
    icon: ClipboardList,
    title: 'كويزات وأسئلة سابقة',
    desc: 'اختبر نفسك بأسئلة اختيار من متعدد، وشوف نتيجتك فوراً قبل الامتحان الحقيقي.',
  },
];

const steps = [
  {
    icon: PlayCircle,
    title: 'شاهد وافهم',
    desc: 'ابدأ بفيديوهات الشرح لكل محاضرة لحتى توصل لفهم واضح للمادة.',
  },
  {
    icon: BookOpenCheck,
    title: 'ذاكر على راحتك',
    desc: 'ارجع للملخص PDF وثبّت المعلومة بالسرعة والوقت اللي يناسبك.',
  },
  {
    icon: Target,
    title: 'اختبر نفسك',
    desc: 'جرّب الكويزات وأسئلة الدورات السابقة، وشوف وين أنت فعلاً قبل الامتحان.',
  },
];

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="landing__hero">
        <motion.div
          className="landing__badge"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="landing__badge-dot" />
          منصة تعليمية لطلاب الجامعة الافتراضية
        </motion.div>

        <motion.h1
          className="landing__title"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Zero <span className="landing__title-accent">One</span>
        </motion.h1>

        <motion.p
          className="landing__desc"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          كل ما تحتاجه لتنجح في دراستك في مكان واحد — فيديوهات، ملخصات،
          وامتحانات سابقة منظّمة، بدون ما تضيّع وقتك تدوّر بكل مكان.
        </motion.p>

        <motion.div
          className="landing__socials"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="landing__social-link"
            aria-label="Facebook"
          >
            <FacebookIcon width={18} height={18} />
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="landing__social-link"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon width={18} height={18} />
          </a>
        </motion.div>

        <motion.button
          className="landing__cta"
          onClick={() => navigate('/home')}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          ادخل للموقع
          <ArrowLeft size={18} />
        </motion.button>
      </div>

      <section className="landing__section">
        <motion.h2
          className="landing__section-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          شو بيقدّملك Zero One؟
        </motion.h2>
        <motion.p
          className="landing__section-sub"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          كل أدوات المذاكرة اللي بتحتاجها، منظّمة بمكان واحد
        </motion.p>

        <div className="landing__features-grid">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="landing__feature-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
            >
              <div className="landing__feature-icon">
                <f.icon size={22} strokeWidth={1.8} />
              </div>
              <h3 className="landing__feature-title">{f.title}</h3>
              <p className="landing__feature-desc">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="landing__section landing__section--alt">
        <motion.h2
          className="landing__section-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          خطة الدراسة تبعنا
        </motion.h2>
        <motion.p
          className="landing__section-sub"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          ثلاث خطوات بسيطة توصلك من الصفر لحتى الجاهزية التامة
        </motion.p>

        <div className="landing__steps">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="landing__step"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.1 }}
            >
              <div className="landing__step-number">{i + 1}</div>
              {i < steps.length - 1 && <div className="landing__step-line" />}
              <div className="landing__step-icon">
                <step.icon size={20} strokeWidth={1.8} />
              </div>
              <h3 className="landing__step-title">{step.title}</h3>
              <p className="landing__step-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="landing__cta landing__cta--secondary"
          onClick={() => navigate('/home')}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          يلا نبدأ
          <ArrowLeft size={18} />
        </motion.button>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
