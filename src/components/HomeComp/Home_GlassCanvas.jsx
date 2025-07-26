

import React, { useEffect, useRef } from "react";

const GlassCanvas = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const isDrawingRef = useRef(false);
  const lastPosRef = useRef({ x: 0, y: 0 });

  const setupCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = "rgba(0,0,0,0.8)";
    ctx.globalCompositeOperation = "destination-out";

    ctx.lineWidth = window.innerWidth < 768 ? 60 : 100;
  };

  useEffect(() => {
    setupCanvas();

    const handleResize = () => {
      setupCanvas();
    };

    window.addEventListener("resize", handleResize);

    const canvas = canvasRef.current;

    const getPos = (e) => {
      if (e.touches) {
        return {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
      }
      return { x: e.offsetX, y: e.offsetY };
    };

    const startDrawing = (e) => {
      isDrawingRef.current = true;
      const { x, y } = getPos(e);
      lastPosRef.current = { x, y };
    };

    const stopDrawing = () => {
      isDrawingRef.current = false;
    };

    const draw = (e) => {
      if (!isDrawingRef.current) return;
      const ctx = ctxRef.current;
      const { x, y } = getPos(e);
      ctx.beginPath();
      ctx.moveTo(lastPosRef.current.x, lastPosRef.current.y);
      ctx.lineTo(x, y);
      ctx.stroke();
      lastPosRef.current = { x, y };
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);
    canvas.addEventListener("mousemove", draw);

    canvas.addEventListener(
      "touchstart",
      (e) => {
        e.preventDefault();
        startDrawing(e);
      },
      { passive: false }
    );
    canvas.addEventListener(
      "touchend",
      (e) => {
        e.preventDefault();
        stopDrawing();
      },
      { passive: false }
    );
    canvas.addEventListener(
      "touchcancel",
      (e) => {
        e.preventDefault();
        stopDrawing();
      },
      { passive: false }
    );
    canvas.addEventListener(
      "touchmove",
      (e) => {
        e.preventDefault();
        draw(e);
      },
      { passive: false }
    );

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseout", stopDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("touchstart", startDrawing);
      canvas.removeEventListener("touchend", stopDrawing);
      canvas.removeEventListener("touchcancel", stopDrawing);
      canvas.removeEventListener("touchmove", draw);
    };
  }, []);





  return (
    <div className="canvas-wrapper">
   <canvas
  ref={canvasRef}
 
  
  
/>
    </div>
  );
};

export default GlassCanvas;


