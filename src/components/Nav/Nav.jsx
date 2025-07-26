




import React, { useEffect, useRef } from "react";
import { Nav_NavAnimation } from "./Nav_NavAnimation";
import { Link } from "react-router-dom";


import { useNavigate } from "react-router-dom";

const Nav = () => {

  const navigate = useNavigate()
  const {
    navRef,
    addRefs,
    menuRef,
    expand,
    handleMenuOpening,
    showDetails,
    showNavBtns,
    setShowDetails,
    nothingRef,
  addpageRefs,
  addeviceRef
  } = Nav_NavAnimation();

  return (
    <div ref={navRef} className={`Nav_Parent_div ${expand ? "expand" : ""}`}>
      <div ref={menuRef} className="Nav_div">
        {showNavBtns && !showDetails && (
          <>
            <Link to={"/"} className="logo" ref={addRefs}>
              NOTHING
            </Link>
            <button
              onClick={handleMenuOpening}
              ref={addRefs}
              className="explore-btn"
            >
              Explore Nothing
            </button>
            <button ref={addRefs} className="join-btn">
              Join Nothing
            </button>
          </>
        )}

        {showDetails && (
          <>
            <div className="nav-grid">
              <div className="top">
                <button
                ref={  addeviceRef}  style={{opacity:"0"}}
                  className="close-btn"
                  onClick={() => {
                    handleMenuOpening();
                  }}
                >
                  Close
                </button>
              </div>

              <div className="left "   >
                <Link  ref={addpageRefs}  style={{opacity:"0",
               
                }} to={"/"} className="Link" onClick={() => handleMenuOpening()}>HOME</Link>
                <Link        to={'/shop/productinfo/phone3'}  ref={addpageRefs}  style={{opacity:"0"}} className="Link" onClick={() => {handleMenuOpening()
            
                }}>NOTHING NEW</Link>
                <Link  ref={addpageRefs} style={{opacity:"0"}}to={"/shop"} className="Link" onClick={() => handleMenuOpening()}>SHOP</Link>
                <Link   ref={addpageRefs} style={{opacity:"0"}} to={"/shop/productinfo/Cmfphone2"} className="Link" onClick={() => handleMenuOpening()}>CMF</Link>
              </div>

              <div className="right">
                <div className="right-top">
                  <div className="phone-div">
                    <h3 ref={  addeviceRef}  style={{opacity:"0"}}>PHONE</h3>
                  </div>

                  <div className="phone-names-div">
                    <Link ref={  addeviceRef}  style={{opacity:"0"}}  to={'/shop/productinfo/phone3'}className="phone-link">NOTHING PHONE (3)</Link>
                    <Link  ref={  addeviceRef}  style={{opacity:"0"}} to={'/shop/productinfo/phone3apro'} className="phone-link">NOTHING PHONE 3A PRO</Link>
                    <Link  ref={  addeviceRef}  style={{opacity:"0"}} to={'/shop/productinfo/phone3a'} className="phone-link">NOTHING PHONE 3A</Link>
                    <Link  ref={  addeviceRef}  style={{opacity:"0"}} to={'/shop/productinfo/phone2aplus'} className="phone-link">NOTHING PHONE 2A PLUS</Link>
                    <Link ref={  addeviceRef}  style={{opacity:"0"}}  to={'/shop/productinfo/phone2a'} className="phone-link">NOTHING PHONE 2A</Link>
                  </div>

                  <div className="phone-image-div"></div>
                </div>

                <div className="right-bottom" >
                  <div className="audio-div">
                    <h3 ref={  addeviceRef}  style={{opacity:"0"}} >AUDIO</h3>
                  </div>
                  <div className="audio-name-div">
                    <Link ref={  addeviceRef}  style={{opacity:"0"}}to={'/shop/productinfo/headphone1white'} className="audio-link">NOTHING HEADPHONE 1</Link>
                    <Link ref={  addeviceRef}  style={{opacity:"0"}}to={'/shop/productinfo/earwhite'} className="audio-link">NOTHING EAR</Link>
                    <Link ref={  addeviceRef}  style={{opacity:"0"}}to={'/shop/productinfo/cmfbudspro2'} className="audio-link">CMF BUDS PRO 2</Link>
                    <Link ref={  addeviceRef}  style={{opacity:"0"}}to={'/shop/productinfo/cmfbuds2plus'} className="audio-link">CMF BUDS 2 PLUS</Link>
                    <Link ref={  addeviceRef}  style={{opacity:"0"}}to={'/shop/productinfo/earopen'} className="audio-link">NOTHING EAR OPEN</Link>
                  </div>
                </div>
              </div>

              <div className="bottom">
                <h1>
                  {"NOTHING".split("").map((letter, index) => (
                    <span
                      key={index}
                      ref={(el) => (nothingRef.current[index] = el)}
                      style={{ display: "inline-block", transform: "translateY(100%)" }}
                    >
                      {letter}
                    </span>
                  ))}
                </h1>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;