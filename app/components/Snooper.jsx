"use client";

import { useEffect, useRef } from "react";

export default function Snooper() {
  const snooperRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (snooperRef.current) {
        snooperRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div id="snooper" ref={snooperRef}>
      👀
    </div>
  );
}
