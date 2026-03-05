export default function StatusBar() {
  return (
    <div className="status-bar">
      <span className="time">12:45</span>
      <div className="status-icons">
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
          <rect
            x="0"
            y="7"
            width="2.5"
            height="3"
            rx="0.5"
            fill="rgba(255,255,255,0.9)"
          />
          <rect
            x="3.8"
            y="5"
            width="2.5"
            height="5"
            rx="0.5"
            fill="rgba(255,255,255,0.9)"
          />
          <rect
            x="7.6"
            y="2.5"
            width="2.5"
            height="7.5"
            rx="0.5"
            fill="rgba(255,255,255,0.9)"
          />
          <rect
            x="11.4"
            y="0"
            width="2.5"
            height="10"
            rx="0.5"
            fill="rgba(255,255,255,0.9)"
          />
        </svg>
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
          <circle cx="6" cy="9" r="1" fill="rgba(255,255,255,0.9)" />
          <path
            d="M3.5 6.8a4.2 4.2 0 015 0"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M1.5 4.5a7 7 0 019 0"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
          <rect
            x="0.5"
            y="0.5"
            width="16"
            height="9"
            rx="2"
            stroke="rgba(255,255,255,0.85)"
            strokeWidth="1"
          />
          <rect
            x="2"
            y="2"
            width="13"
            height="6"
            rx="1"
            fill="rgba(255,255,255,0.85)"
          />
          <rect
            x="17"
            y="3"
            width="2"
            height="4"
            rx="0.8"
            fill="rgba(255,255,255,0.85)"
          />
        </svg>
      </div>
    </div>
  );
}
