
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

function scrambleText(spanRefs, finalText, duration = 1500) {
  let frame = 0;
  const totalFrames = duration / (1000 / 60);
  const splitText = finalText.split("");

  const interval = setInterval(() => {
    splitText.forEach((letter, i) => {
      if (!spanRefs.current[i]) return;
      if (i < (frame / totalFrames) * splitText.length) {
        spanRefs.current[i].innerText = letter;
      } else {
        spanRefs.current[i].innerText =
          letters[Math.floor(Math.random() * letters.length)];
      }
    });

    frame++;
    if (frame >= totalFrames) {
      clearInterval(interval);
      splitText.forEach((letter, i) => {
        if (spanRefs.current[i]) spanRefs.current[i].innerText = letter;
      });
    }
  }, 1000 / 60);
}

const Shop_SectionOneheader = () => {
  const textRef1 = useRef([]);
  const textRef2 = useRef([]);
  const textRef3 = useRef([]);
  const textRef4 = useRef([]);
  const pRef = useRef(null);
  const btnRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  const animateText = (refs, text, delay = 0) => {
    scrambleText(refs, text);
    refs.current.forEach((span, i) => {
      if (!span) return;
      gsap.fromTo(
        span,
        { y: i % 2 === 0 ? -50 : 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          duration: 1,
          delay: delay + i * 0.05,
        }
      );
    });
  };

  useEffect(() => {
    
    setIsMobile(window.innerWidth < 768);

   
    requestAnimationFrame(() => {
      setTimeout(() => {
        animateText(textRef1, "REFINE", 0);
        animateText(textRef2, "YOUR WORLD", 1);

        if (isMobile) {
          animateText(textRef3, "WITH PURE", 2);
          animateText(textRef4, "SIMPLICITY", 3);
        } else {
          animateText(textRef3, "WITH PURE SIMPLICITY", 2);
        }

        if (pRef.current && btnRef.current) {
          gsap.to([pRef.current, btnRef.current], {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 3,
            ease: "power3.out",
          });
        }
      }, 1300);
    });
  }, [isMobile]);

  const renderWord = (refArray, text) => {
    refArray.current = [];
    return (
      <span className="scramble-line">
        {text.split("").map((letter, index) => (
          <span
            key={index}
            ref={(el) => el && (refArray.current[index] = el)}
            style={{
              display: "inline-block",
              transform: "translateY(0)",
              opacity: 1,
              color: "#fff",
            }}
          >
            {letter}
          </span>
        ))}
      </span>
    );
  };

  return (
    <div className="Section-one-header w-screen h-screen bg-white">
      <div className="hero-text">
        <h1 className="scramble-text">
          {renderWord(textRef1, "REFINE")}
          {renderWord(textRef2, "YOUR WORLD")}
          {isMobile ? (
            <>
              {renderWord(textRef3, "WITH PURE")}
              {renderWord(textRef4, "SIMPLICITY")}
            </>
          ) : (
            renderWord(textRef3, "WITH PURE SIMPLICITY")
          )}
        </h1>
        <p
          ref={pRef}
          style={{
            opacity: 0,
            transform: "translateY(10px)",
          }}
        >
          A seamless blend of transparency, speed, <br /> and simplicity —
          crafted to offer a distraction-free experience that lets technology
          fade into the background.
        </p>
        <Link
          ref={btnRef}
          className="new-btn"
          to={'/shop/productinfo/phone3'}
          style={{
            opacity: 0,
            transform: "translateY(10px)",
          }}
        >
          NOTHINGNEW →
        </Link>
      </div>
    </div>
  );
};

export default Shop_SectionOneheader;