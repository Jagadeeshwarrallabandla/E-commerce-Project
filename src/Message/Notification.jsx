import React, { useEffect } from 'react';
import './Notification.css';

const Notification = ({ message, visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Notification will disappear after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <div className={`notification ${visible ? 'show' : ''}`}>
      {message}
      <div className="progress-bar">
        <div className="loading"></div>
      </div>
    </div>
  );
};

export default Notification;
