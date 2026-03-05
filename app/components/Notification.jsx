import { forwardRef } from "react";

const Notification = forwardRef((props, ref) => {
  return (
    <div className="notification" id="notif" ref={ref}>
      <div className="notif-header">
        <div className="notif-icon">
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="rgba(255,255,255,0.9)"
          >
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </div>
        <span className="notif-app">Messages</span>
        <span className="notif-when">now</span>
      </div>
      <a
        className="notif-title"
        href="https://calculatequick.com"
        target="_blank"
        rel="noopener"
      >
        Mom
      </a>
      <div className="notif-body">
        Did you remember to change your underwear today?!?!
      </div>
    </div>
  );
});

Notification.displayName = "Notification";

export default Notification;
