import './AnimatedBackground.css';

const AnimatedBackground = () => {
  return (
    <div className="animated-bg">
      <div className="animated-bg__blob animated-bg__blob--cyan" />
      <div className="animated-bg__blob animated-bg__blob--purple" />
      <div className="animated-bg__blob animated-bg__blob--green" />
      {/* خطوط ضوئية */}
      <div className="animated-bg__line" />
      <div className="animated-bg__line" />
      <div className="animated-bg__line" />
      <div className="animated-bg__line" />
      <div className="animated-bg__line" />
      {/* نقاط مضيئة */}
      <div className="animated-bg__dot" />
      <div className="animated-bg__dot" />
      <div className="animated-bg__dot" />
      <div className="animated-bg__dot" />
      <div className="animated-bg__dot" />
    </div>
  );
};

export default AnimatedBackground;
