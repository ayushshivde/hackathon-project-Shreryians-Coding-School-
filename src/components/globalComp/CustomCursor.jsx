import React, { useEffect, useRef } from "react";

import earbud from "/images/earbudBlack.png"; // adjust path as per your project

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

    let lastX = pos.current.x;
    let lastY = pos.current.y;

    const followMouse = () => {
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.15);
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.15);

      let dx = pos.current.x - lastX;
      let dy = pos.current.y - lastY;

      let scaleX = 1 + Math.min(Math.abs(dx) / 100, 0.35);
      let scaleY = 1 + Math.min(Math.abs(dy) / 100, 0.35);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) scale(${scaleX}, ${scaleY})`;
      }

      lastX = pos.current.x;
      lastY = pos.current.y;

      requestAnimationFrame(followMouse);
    };
    followMouse();

    const handleMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div id="cursor-wrap">
      <img ref={cursorRef} src={earbud} alt="cursor" className="earbud-cursor" />
    </div>
  );
};

export default CustomCursor;
