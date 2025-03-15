import React from "react";
import eventBus from "./eventBus";
import NotificationList from "./components/NotificationList";

const App = () => {
  const notify = (type, message) => {
    eventBus.publish("notify", { type, message });
  };

  return (
    <div>
      <h2>Notification System (Pub-Sub Pattern)</h2>
      <button onClick={() => notify("success", "Success!")}>Success</button>
      <button onClick={() => notify("failure", "Failure!")}>Failure</button>
      <button onClick={() => notify("warning", "Warning!")}>Warning</button>

      <NotificationList />
    </div>
  );
};

export default App;