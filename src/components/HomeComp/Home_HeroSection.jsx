



import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const animations = [
          { selector: '.image:nth-child(1)', startZ: -1500, start: "0% top", end: "25% top", scrub: 2 },
            { selector: '.image:nth-child(2)', startZ: -800,  start: "0% top", end: "50% top", scrub: 2 },
            { selector: '.image:nth-child(3)', startZ: -1200, start: "0% top", end: "10% top", scrub: 2 },
            { selector: '.image:nth-child(4)', startZ: -2000, start: "0% top", end: "15% top", scrub: 2},
            { selector: '.image:nth-child(5)', startZ: -1100, start: "0% top", end: "20% top", scrub: 2 },
            { selector: '.image:nth-child(6)', startZ: -900,  start: "0% top", end: "30% top", scrub: 2},
            { selector: '.image:nth-child(7)', startZ: -1600, start: "0% top", end: "35% top", scrub: 2},
            { selector: '.image:nth-child(8)', startZ: -1000, start: "0% top", end: "15% top", scrub: 2 },
            { selector: '.image:nth-child(9)', startZ: -1400, start: "00% top", end: "50% top", scrub: 2 },
            { selector: '.image:nth-child(10)', startZ: -1300, start: "0% top", end: "30% top", scrub: 2 }
    ];




import GlassCanvas from "./Home_GlassCanvas";

const HeroSection = () => {
  const nothingRef = useRef(null);
  const exploreRef = useRef(null);
 
  const imageRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

   tl.from(exploreRef.current, {
    duration: 1,
    delay: 2,
    y: 100,   
    opacity: 0,
    ease: "power3.out",
  });

  tl.from(nothingRef.current, {
    duration: 1,
    yPercent: 100,
    opacity: 0,
    ease: "power3.out",
  }); 

  tl.fromTo(imageRef.current, {
    opacity: 0,

  },{
    opacity: 1,
    ease: "power3.out",

  })

    tl.fromTo(paraRef.current, {
    opacity: 0,
  },{
    opacity: 1,
    ease: "power3.out",

  })


  }, []);

useEffect(()=>{

 const animations = [
          { selector: '.image:nth-child(1)', startZ: -1500, start: "0% top", end: "25% top", scrub: 2 },
            { selector: '.image:nth-child(2)', startZ: -800,  start: "0% top", end: "50% top", scrub: 2 },
            { selector: '.image:nth-child(3)', startZ: -1200, start: "0% top", end: "10% top", scrub: 2 },
            { selector: '.image:nth-child(4)', startZ: -2000, start: "0% top", end: "15% top", scrub: 2},
            { selector: '.image:nth-child(5)', startZ: -1100, start: "0% top", end: "20% top", scrub: 2 },
            { selector: '.image:nth-child(6)', startZ: -900,  start: "0% top", end: "30% top", scrub: 2},
            { selector: '.image:nth-child(7)', startZ: -1600, start: "0% top", end: "35% top", scrub: 2},
            { selector: '.image:nth-child(8)', startZ: -1000, start: "0% top", end: "15% top", scrub: 2 },
            { selector: '.image:nth-child(9)', startZ: -1400, start: "00% top", end: "50% top", scrub: 2 },
            { selector: '.image:nth-child(10)', startZ: -1300, start: "0% top", end: "30% top", scrub: 2 }
    ];

    animations.forEach(({ selector, startZ, endZ, start, end, scrub }) => {
        gsap.fromTo(selector,
            { z: startZ },
            {
                z: 1500,
                ease: "power3.out",
                scrollTrigger: {
                      trigger: "document.body",
                    start: start,
                    end: end,
                    scrub: scrub,
                   
                    ease: "ease-in-out"
                }
            }
        );
    });


})



  return (
    <>
    
      <div className="section-one-home">
        <video autoPlay muted loop playsInline preload="none" id="heroVideo">
          <source src="/video/introVideo.mp4" type="video/mp4" />
        </video>
      </div>

      <GlassCanvas />

      <div className="hero-title">
        <h1>
          <span ref={exploreRef} className="explore-text">
            EXPLORE
          </span>
          <br />
          <span ref={nothingRef} className="nothing-text text-[#cc3628]">
            NOTHING
          </span>
        </h1>
      </div>

<data  ref={paraRef} className="middlePara">

      <p className="para-1" >We Belive in Creativity and transparency</p>
      <p className="para-2">Come to play</p>

</data>

      <div  ref={imageRef} className="container">
  <div className="image img-1" >
    <img  src="/images/Home_orangeNewspaper.jpg" alt="img1" />
  </div>

  <div className="image img-2" >
    <img className="img-2"  src="/images/CmfGirlOrange.jpg" alt="img2" />
  </div>
 
  
  <div className="image img-3">
    <img  className="img-3"  src="/images/orangeBoy.jpg"  alt="img3" />
  </div>
 
  <div className="image img-4" >
    <img  src="/images/CmfPeopleGroup.jpg" alt="img4" />
  </div>
 
  <div className="image img-5" >
    <img  src="/images/Cmf2Person.jpg"alt="img5" />
  </div>
</div>



    </>
  );
};

export default HeroSection;