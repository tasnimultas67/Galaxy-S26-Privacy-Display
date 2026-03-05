"use client";

export default function Panel({ mode, setMode, angleVal }) {
  return (
    <div className="panel">
      <div>
        <div className="panel-title">Privacy Display</div>
        <div className="panel-sub">Galaxy S26 Ultra</div>
      </div>
      <div className="mode-toggle">
        <button
          className={`mode-btn ${mode === "full" ? "active" : ""}`}
          data-mode="full"
          onClick={() => setMode("full")}
        >
          Full Screen
        </button>
        <button
          className={`mode-btn ${mode === "notif" ? "active" : ""}`}
          data-mode="notif"
          onClick={() => setMode("notif")}
        >
          Notification
        </button>
      </div>
      <div className="angle-readout">
        Viewing angle{" "}
        <span className="angle-val" id="angleVal">
          {angleVal}
        </span>
      </div>
      <div className="hint">
        Move your cursor away from the phone to change the viewing angle
      </div>
    </div>
  );
}
