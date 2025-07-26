import React, { use } from "react";


import { useEffect,useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom"; 

gsap.registerPlugin(ScrollTrigger)

const ShowCase = () => {
  const imgRef1 = useRef(null);

  const ScrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isMobile = window.innerWidth <= 768;
  useEffect(() => {
    gsap.to(".showcase", {
     padding: isMobile ? "5rem" : "50rem",
   

      scrollTrigger: {
        trigger: ".showcase ",
        scroller: "body",
        start: "top 50%",
        end:  isMobile ? "top 30%" : "bottom top",
        scrub: true,
        // markers: true,
      },
      yPercent: -100,
    });



     gsap.to(imgRef1.current, {
         yPercent: 500,
         scale: isMobile? 1.5: 4,
       
       
         
          scrollTrigger: {
            trigger: ".showcase",
            start: isMobile? "top -60%" :"top 25%",
            end: isMobile ? "top -10%" :"top -10%",
            scrub: 1,
            // markers: true,
          },
        });
  });
  return (
    <>
    
      <div className="showcase w-screen h-screen  ">
      <Link to={"/shop/productinfo/phone3"} ref={imgRef1} className="card" id="card-1">
          <img  src="/images/2GuysPhone3.jpg" alt="" />
        </Link>
      <p>
        We believe in creativity <br />— in challenging the ordinary, blending
        art with innovation, and building technology that not only works but
        inspires, excites, and invites you to feel something real.
      </p>
    </div>
    <div className="footer ">
     <Link className="link" onClick={ScrolltoTop} >Home</Link>
     <Link className="link" to={"/shop/productinfo/phone3"}>Nothing new</Link>
     <Link className="link" to={"/shop/productinfo/Cmfphone2"}>CMF</Link>
     <Link className="link " to={"/shop"}>Shop</Link>
     
    </div>
    </>
  
  );
};

export default ShowCase;
