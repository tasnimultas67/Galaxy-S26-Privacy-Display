export default function Dock() {
  return (
    <div className="dock">
      <a
        className="dock-icon di-phone"
        href="https://tasnimul.vercel.app"
        target="_blank"
        rel="noopener"
        aria-label="Phone"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="rgba(255,255,255,0.92)"
        >
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
        </svg>
      </a>
      <a
        className="dock-icon di-msg"
        href="https://tasnimul.vercel.app"
        target="_blank"
        rel="noopener"
        aria-label="Messages"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="rgba(255,255,255,0.92)"
        >
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
      </a>
      <a
        className="dock-icon di-chrome"
        href="https://tasnimul.vercel.app"
        target="_blank"
        rel="noopener"
        aria-label="Browser"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="rgba(255,255,255,0.92)"
            strokeWidth="1.8"
            fill="none"
          />
          <circle cx="12" cy="12" r="4" fill="rgba(255,255,255,0.92)" />
        </svg>
      </a>
      <a
        className="dock-icon di-cam"
        href="https://tasnimul.vercel.app"
        target="_blank"
        rel="noopener"
        aria-label="Camera"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="rgba(255,255,255,0.92)"
        >
          <path d="M12 15.2a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4z" />
          <path
            d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9z"
            fill="none"
            stroke="rgba(255,255,255,0.92)"
            strokeWidth="1.5"
          />
        </svg>
      </a>
    </div>
  );
}
