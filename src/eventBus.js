
const eventBus = {
  events: {},

  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);

    // Return unsubscribe function
    return () => {
      this.events[eventName] = this.events[eventName].filter(fn => fn !== callback);
    };
  },

  publish(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(callback => callback(data));
    }
  }
};
  
export default eventBus;