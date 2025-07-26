


import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const Nav_NavAnimation = () => {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const pageRef = useRef([]);
  const deviceRef = useRef([]);
  

const addpageRefs = (el) => {
  if (el && !pageRef.current.includes(el)) {
    pageRef.current.push(el);
  }
};
const addeviceRef= (el) => {
  if (el && !deviceRef.current.includes(el)) {
    deviceRef.current.push(el);
  }
};

  const navBtnEntryRef = useRef([]);
  navBtnEntryRef.current = [];


  const [expand, setExpand] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showNavBtns, setShowNavBtns] = useState(true);

  const addRefs = (navBtn) => {
    if (navBtn && !navBtnEntryRef.current.includes(navBtn)) {
      navBtnEntryRef.current.push(navBtn);
    }
  };

const hideNavBtn = () => {
  gsap.to(navBtnEntryRef.current, {
    opacity: 0,
    y: -50,
    duration: 0.5,
    stagger: 0.1,
    ease: "power2.out",
  });
};


const NavBtnFromUpside = () => {
  gsap.fromTo(
    navBtnEntryRef.current,
    {
      opacity: 0,
      y: -50,
    },
    {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
    }
  );
};




  const openMenuBox = () => {
    gsap.to(menuRef.current, {
      height: "95vh",
      borderRadius: "20px",
      duration: 1,
      ease: "power3.inOut",
      opacity: 1,
      y: 0,
      onComplete: () => {
        setShowDetails(true);
      },
    });
  };




const closeMenuBox = () => {
  const tl = gsap.timeline({
    onComplete: () => {
      setShowNavBtns(true);
      setShowDetails(false);
      setExpand(false);
      NavBtnFromUpside();
    }
  });

 
  tl.to(nothingRef.current, {
    y: "25%",
    opacity: 0,
    duration: 0.3,
    stagger: 0.01,
    ease: "power3.inOut",
  });

  tl.to(pageRef.current,{
    opacity: 0,
    stagger : 0.01,
       duration:0.1,
 ease: "power3.inOut",
  }),"-=0.8"


    tl.to(deviceRef.current,{
    opacity: 0,
   stagger : 0.01,
       duration:0.1,
 ease: "power3.inOut",
  }),"-=0.8"



  tl.to(menuRef.current, {
    height: "10vh",
    borderRadius: "20px",
    duration: 1,
    ease: "power3.inOut",
    opacity: 1,
    y: 0,
  }, "+=0.1"); 
};

const handleMenuOpening = () => {
  if (!expand) {
    hideNavBtn();
    setTimeout(() => {
      openMenuBox();
      setExpand(true);
    }, 600);
  } else {
    closeMenuBox();
  }
};

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      navRef.current,
      {
        width: "0vw",

      },
      {
        width: "98vw",
        duration: 1,
        ease: "linear",
        delay: 1,
      }
    );

    tl.from(navBtnEntryRef.current, {
      opacity: 0,
      y: 100,
      stagger: 0.5,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);




  const nothingRef = useRef([]);

  useEffect(() => {

    const tl = gsap.timeline()


  

    tl.fromTo(
pageRef.current,{
  opacity: 0,

}
,

{
    opacity :1,
   duration:0.1,
 ease: "power3.out",
   
    stagger:0.1
  }
    )




      tl.fromTo(
deviceRef.current,{
  opacity: 0,


}
,

{
      
    opacity :1,
   duration:0.1,
 ease: "power3.out",
   
    stagger:0.1
  }
    ), "-=0.8"

  if (showDetails && nothingRef.current.length) {
      tl.fromTo(
        nothingRef.current,
        {
          y: "25%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: "power3.out",
        }
      ), "-=0.8"


      
    }


  }, [showDetails]);


 


  


  return {
    navRef,
    addRefs,
    menuRef,
    expand,
    handleMenuOpening,
    showDetails,
    setShowDetails,
    showNavBtns ,
    nothingRef,
  addeviceRef,
    addpageRefs
  

  };
};