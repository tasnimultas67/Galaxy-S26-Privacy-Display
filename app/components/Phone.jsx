"use client";

import { useEffect, useRef, forwardRef } from "react";
import StatusBar from "./StatusBar";
import Notification from "./Notification";
import Dock from "./Dock";

const Phone = forwardRef(({ mode, priv, rx, ry }, ref) => {
  const screenRef = useRef(null);
  const notifRef = useRef(null);

  useEffect(() => {
    // Create corner elements
    const corners = ["tl", "tr", "bl", "br"];
    corners.forEach((c) => {
      const cornerEl = document.createElement("div");
      cornerEl.className = `corner corner-${c}`;
      for (let i = 1; i <= 16; i++) {
        const layer = document.createElement("div");
        layer.className = "c-layer";
        layer.style.transform = `translateZ(-${i}px)`;
        cornerEl.appendChild(layer);
      }
      ref.current?.appendChild(cornerEl);
    });
  }, [ref]);

  // Apply transform
  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    }
  }, [rx, ry, ref]);

  // Apply privacy opacity
  useEffect(() => {
    if (mode === "full" && screenRef.current && notifRef.current) {
      screenRef.current.style.setProperty("--priv-opacity", priv);
      notifRef.current.style.setProperty("--notif-priv", 0);
    } else if (notifRef.current && screenRef.current) {
      screenRef.current.style.setProperty("--priv-opacity", 0);
      notifRef.current.style.setProperty("--notif-priv", priv);
    }
  }, [mode, priv]);

  return (
    <div className="phone" id="phone" ref={ref}>
      <div className="back"></div>
      <div className="edge edge-r"></div>
      <div className="edge edge-l"></div>
      <div className="edge edge-t"></div>
      <div className="edge edge-b"></div>
      <div className="bezel">
        <div className="inner">
          <div className="screen" id="screen" ref={screenRef}>
            <div className="wallpaper"></div>
            <StatusBar />
            <Notification ref={notifRef} />
            <Dock />
            <div className="home-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
});

Phone.displayName = "Phone";

export default Phone;
