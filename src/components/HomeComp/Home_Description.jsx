
import React, { use, useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Description = () => {
 
  const descriptionRef = useRef(null);

  useEffect(() =>{
 const split = new SplitType(descriptionRef.current, {
      types: "lines, words",
  });
  const words = split.words;
  gsap.fromTo( words , {color: "#999"},{
    color: "#fff",
    stagger: 0.03,
    scrollTrigger: {
      trigger: descriptionRef.current,
      start: "top 70%",
      end: "top 40%",
      scrub: true
      }
  })





}, [descriptionRef]);


  return (
    <>
    <div className="des-card">
      <div className="des-image-area">
        <div className="des-image">
          <img src="/images/darkGirl.jpg" alt="Profile" />
        </div>
      </div>

      <div className="des-content">
        <h1 ref={descriptionRef} >
          <span   className="des-title">
            <pre> </pre> A tech where design reveal
          </span>
          everything. Every layer exposed with precision, every component
          crafted to be seen, not hidden. It’s a device built to celebrate
          transparency — smturning complexity into clarity.
        </h1>

       
      </div>
    </div>
   
    </>

  );
};

export default Description;
