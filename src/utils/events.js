export const emit = (eventName) => {
  window.dispatchEvent(new Event(eventName));
};

export const on = (eventName, handler) => {
  window.addEventListener(eventName, handler);
  return () => window.removeEventListener(eventName, handler);
};