"use client";

import { useState, useEffect, useRef } from "react";
import Phone from "./components/Phone";
import Panel from "./components/Panel";
import Snooper from "./components/Snooper";

export default function Home() {
  const [mode, setMode] = useState("full");
  const [priv, setPriv] = useState(0);
  const [angleVal, setAngleVal] = useState("0°");
  const [rx, setRx] = useState(0);
  const [ry, setRy] = useState(0);

  const phoneRef = useRef(null);
  const targetRxRef = useRef(0);
  const targetRyRef = useRef(0);
  const targetPrivRef = useRef(0);
  const hasInteractedRef = useRef(false);
  const timeRef = useRef(0);
  const animationRef = useRef();

  // Animation loop
  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      if (!hasInteractedRef.current) {
        timeRef.current += 0.015;
        targetRyRef.current = Math.sin(timeRef.current) * 25;
        targetRxRef.current = Math.cos(timeRef.current * 0.8) * 15;

        const dist = Math.sqrt(
          targetRxRef.current * targetRxRef.current +
            targetRyRef.current * targetRyRef.current,
        );
        const maxTilt = 40;
        const normDist = Math.min(dist / maxTilt, 1);

        targetPrivRef.current = Math.pow(normDist, 1.3) * 0.95;
        setAngleVal(Math.round(normDist * 85) + "°");
      }

      setRx((prev) => lerp(prev, targetRxRef.current, 0.08));
      setRy((prev) => lerp(prev, targetRyRef.current, 0.08));
      setPriv((prev) => lerp(prev, targetPrivRef.current, 0.1));

      animationRef.current = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Global mouse move handler
  useEffect(() => {
    const handleMouseMove = (e) => {
      hasInteractedRef.current = true;

      // Get phone position
      const phoneElement = phoneRef.current;
      if (!phoneElement) return;

      const rect = phoneElement.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      const maxDist = Math.min(window.innerWidth, window.innerHeight) * 0.45;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const normDist = Math.min(dist / maxDist, 1);

      const maxTilt = 40;
      targetRyRef.current = (dx / maxDist) * maxTilt;
      targetRxRef.current = -(dy / maxDist) * maxTilt;
      targetRyRef.current = Math.max(
        -maxTilt,
        Math.min(maxTilt, targetRyRef.current),
      );
      targetRxRef.current = Math.max(
        -maxTilt,
        Math.min(maxTilt, targetRxRef.current),
      );

      targetPrivRef.current = Math.pow(normDist, 1.3) * 0.95;
      setAngleVal(Math.round(normDist * 85) + "°");
    };

    const handleMouseLeave = () => {
      targetRxRef.current = 0;
      targetRyRef.current = 0;
      targetPrivRef.current = 0;
      setAngleVal("0°");
      hasInteractedRef.current = false;
    };

    // Add event listeners to document for global tracking
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div className="scene">
        <Phone ref={phoneRef} mode={mode} priv={priv} rx={rx} ry={ry} />
        <Panel mode={mode} setMode={setMode} angleVal={angleVal} />
      </div>

      <Snooper />
    </>
  );
}
