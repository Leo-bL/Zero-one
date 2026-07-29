import { Inbox } from 'lucide-react';
import './EmptyState.css';

const EmptyState = ({ icon, message = 'ما في شي هون بعد.' }) => {
  return (
    <div className="empty-state">
      <span className="empty-state__icon">
        {icon || <Inbox size={40} strokeWidth={1.5} />}
      </span>
      <p className="empty-state__message">{message}</p>
    </div>
  );
};

export default EmptyState;
