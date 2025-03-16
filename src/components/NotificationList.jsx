import React, { useState, useEffect } from "react";
import eventBus from "./../eventBus";
import "./Notifications.css";

const NotificationList = ({ autoDismiss = 3000 }) => {
const [notifications, setNotifications] = useState([]);

useEffect(() => {
  // Subscribe to "notify" event
  const unsubscribe = eventBus.subscribe("notify", (notification) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, ...notification }]);

    // Auto-remove notification after 3 seconds
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, autoDismiss);
  });

  return () => unsubscribe(); // Cleanup on unmount
}, []);

return (
  <div className="notifications-container">
    {notifications.map((notify) => (
      <div key={notify.id} className={`notification ${notify.type}`}>
        {notify.content}
      </div>
    ))}
  </div>
);
};

NotificationList.propTypes = {
  autoDismiss: PropTypes.number,
};

export default NotificationList;