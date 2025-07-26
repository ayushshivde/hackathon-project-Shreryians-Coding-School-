







import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { Link, useLocation } from "react-router-dom";
import Footer from "../ShowCase";
import ShowCase from "../ShowCase";

gsap.registerPlugin(ScrollTrigger);

const Home_3section_slide = () => {
  const location = useLocation();

  const triangleWrapperRef = useRef(null);
  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);
  const imgRef4 = useRef(null);
  const horizontalScrollRef = useRef(null);

  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    // ✅ Run only on homepage "/"
    if (location.pathname !== "/") return;

    // Triangle Scroll
    gsap.to(triangleWrapperRef.current, {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".section3-mainContainer",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });


    const split1 = new SplitType(heading1Ref.current, {
      types: "char",
      tagName: "span",
    });

    gsap.from(split1.chars, {
      x: window.innerHeight,
      opacity: 0,
      stagger: 0.03,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".triangles-wrapper",
        start: "top 70%",
        end: "top 30%",
        scrub: 1,
      },
    });

    const split2 = new SplitType(heading2Ref.current, {
      types: "char",
      tagName: "span",
    });

    gsap.from(split2.chars, {
      x: window.innerHeight,
      opacity: 0,
      stagger: 0.03,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".triangle1",
        start: "bottom 40%",
        end: "bottom 30%",
        scrub: 2,

      },
    });

    // Horizontal Scroll
    gsap.to(horizontalScrollRef.current, {
      transform: isMobile ? "translateX(-800%)" : "translateX(-300%)",
      scrollTrigger: {
        trigger: ".section-fourth-home",
        scroller: "body",
        start: "top 0%",
        end: "top -120%",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          gsap.to(".wrapper-404", {
            x: `${-350 * self.progress}vw`,
            duration: 0.5,
            ease: "power3.out",
          });
        },
      },
    });

    // Card image scrolls
    gsap.to(imgRef1.current, {
      xPercent: -200,
      skewX: 10,
      skewY: -5,
      scrollTrigger: {
        trigger: ".section-fourth-home",
        start: "top 0%",
        end: "top -10%",
        scrub: 1,
      },
    });

    gsap.to(imgRef2.current, {
      xPercent: -500,
      skewX: 10,
      skewY: -5,
      scrollTrigger: {
        trigger: ".section-fourth-home",
        start: "top 0%",
        end: "top -35%",
        scrub: 1,
      },
    });

    gsap.to(imgRef3.current, {
      xPercent: -1000,
      skewX: 10,
      skewY: -5,
      scrollTrigger: {
        trigger: ".section-fourth-home",
        start: "top 0%",
        end: "top -65%",
        scrub: 1,
      },
    });

    gsap.to(imgRef4.current, {
      xPercent: -1300,
      skewX: 10,
      skewY: -5,
      scrollTrigger: {
        trigger: ".section-fourth-home",
        start: "top 0%",
        end: "top -95%",
        scrub: 1,
      },
    });

   
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [location.pathname]);

  return (
    <>
      <div className="section3-mainContainer">
        <div ref={triangleWrapperRef} className="triangles-wrapper">
          <div className="triangle1">
            <h1 ref={heading1Ref} className="triangle-heading">
              TRANSPARENCY
            </h1>
          </div>
          <Link className="triangle2">
            <h1 ref={heading2Ref}></h1>
          </Link>
          <div className="triangle3"></div>
      
        </div>
         <div className="section-fourth-home w-screen h-screen">
          
        <h1 ref={horizontalScrollRef} className="cometoplay-h1">
          COME TO PLAY
        </h1>
        <div className="card" id="card-1">
          <img ref={imgRef1} src="/images/Scrollimages/img1.jpg" alt="" />
        </div>
        <div className="card" id="card-2">
          <img ref={imgRef2} src="/images/Scrollimages/img4.jpg" alt="" />
        </div>
        <div ref={imgRef3} className="card" id="card-3">
          <img src="/images/Scrollimages/img3.jpg" alt="" />
        </div>
        <div ref={imgRef4} className="card" id="card-4">
          <img src="/images/Scrollimages/img2.jpg" alt="" />
        </div>

      </div>

   
<ShowCase/>
      </div>

     
    </>
  );
};

export default Home_3section_slide;