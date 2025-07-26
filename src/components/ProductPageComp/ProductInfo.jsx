

import { useContext, useState, useEffect, useRef, useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { shopcontext } from "/src/context/Shopcontext.jsx";
import gsap from 'gsap';
import ScrollToTop from "../globalComp/ScrollToTop";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import "../../style/productinfo.scss";



const ProductInfo = () => {
  const params = useParams();
  const navigate = useNavigate();
const headingRefs = useRef([]);
  const brandRef = useRef(null);
  const imgRef = useRef(null);
  const colorRef = useRef(null);
  const pointsRef = useRef([]);
  const colorNameRef = useRef(null);
  const pointingLineRef = useRef(null);
  const highlightsRef = useRef(null);


  useLayoutEffect(() => {
    const container = document.querySelector('.maincontainer-productinfo');
    if (container) {
      container.scrollTop = 0;
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [params.id]);

  const { AllDeviceDetails } = useContext(shopcontext);

  const product = AllDeviceDetails.find((item) => item.id == params.id);
  const isAudioDevice = product.searchKeywords.includes("audio");

  const [selectedVariant, setSelectedVariant] = useState(
    !isAudioDevice && product.variants?.length > 0
      ? product.variants[0]
      : { price: product.variants?.[0]?.price || product.price || "N/A" }
  );

  const [selectedImage, setSelectedImage] = useState(product.defaultImage);
  const [selectedColorName, setSelectedColorName] = useState(
    product.colors[0].colorName
  );

  

  const handleColorClick = (img, colorName) => {
    setSelectedImage(img);
    setSelectedColorName(colorName);
  };

  useLayoutEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(headingRefs.current, {
      y: -100,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
    })
      .from(brandRef.current, { opacity: 0, y: 20, duration: 0.7 }, "-=0.6")
      .from(imgRef.current, { opacity: 0, y: 50, duration: 1 }, "-=0.5")
      .from(
        colorRef.current,
        { opacity: 0, scale: 0.5, duration: 0.5 },
        "-=0.5"
      )
      .from(
        pointsRef.current,
        { opacity: 0, y: 10, stagger: 0.1, duration: 0.5 },
        "-=0.4"
      )
      .from(
        colorNameRef.current,
        { opacity: 0, y: 10, duration: 0.5 },
        "-=0.3"
      );

    return () => tl.kill();
  }, []);


useEffect(() => {
  const isMobile = window.innerWidth <= 768;
  const img = imgRef.current;

  if (!img) return;



  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-two-product-features",
      start: "top 20%",
      end: "top 0%",
      scrub: 1,
    },
  });

 
  tl.to(img, {

    position: "fixed",
    top: "50%",
    left: "50%",
    x: "-50%",
    y: "-50%",
    ease: "power4.out",
    xPercent: isMobile ? 0 : 2,
    scale: isMobile ? 1 : 1.1,
    yPercent: 10,
    zIndex: 19,
  });

  // Pointing lines
  tl.fromTo(
    pointingLineRef.current,
    { opacity: 0 },
    { opacity: 1, duration: 5, ease: "power3.inOut" },
    "+=0.5"
  );

  // Highlights
  tl.fromTo(
    highlightsRef.current,
    { opacity: 0 },
    { opacity: 1, duration: 5 },
    "+=3"
  );

  return () => {
    tl.kill();
  };
}, []);





  return (
    <>
     <ScrollToTop />
        <div className="maincontainer-productinfo">
          <div className="back-btn-div">
            <button className="back-btn" onClick={() => navigate(-1)}>
              Backkk
            </button>
          </div>
          <div className="container-productinfo w-screen h-screen">



            <div className="section-one-header ">
              <div className="header-div">
                {"NOTHING".split("").map((char, index) => (
                  <h1
                    key={index}
                    ref={(el) => (headingRefs.current[index] = el)}
                  >
                    {char}
                  </h1>
                ))}
              </div>

              <div ref={brandRef} className="brand-name-div">
                <h1>{product.name}</h1>
              </div>

              <div ref={imgRef} className="product-img-div">
                <img src={selectedImage} alt="" />
              </div>

              <div
                ref={colorRef}
                className="color-options flex gap-2 justify-center mt-4 z-10"
              >
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    style={{
                      zIndex: "999",
                      width: "2rem",
                      height: "2rem",
                      borderRadius: "50%",
                      backgroundColor: color.colorHex.toLowerCase(),
                      border:
                        selectedImage === color.image
                          ? "2px solid white"
                          : "1px solid gray",
                    }}
                    onClick={() =>
                      handleColorClick(color.image, color.colorName)
                    }
                  />
                ))}
              </div>

              <small ref={colorNameRef} className="colorName text-white">
                {selectedColorName}
              </small>

              <div className="description-div">
                <ul>
                  {product.highlights.map((point, index) => (
                    <li
                      ref={(el) => (pointsRef.current[index] = el)}
                      key={index}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="button-group">
                {isAudioDevice ? (
                  <div className="ifaudio">
                    <span>Standard Model</span>
                    <span>
                      {product?.variants?.[0]?.price || product?.price || "N/A"}
                    </span>
                  </div>
                ) : (
                  <div className="ifPhone">
                    <select
                      className="select"
                      onChange={(e) => {
                        const variant = product.variants.find(
                          (v) => `${v.ram}GB/${v.storage}GB` === e.target.value
                        );
                        setSelectedVariant(variant);
                      }}
                    >
                      {product?.variants?.map((variant, index) => (
                        <option
                          key={index}
                          style={{ color: "#000" }}
                          value={`${variant.ram}GB/${variant.storage}GB`}
                        >
                          {variant.ram}GB / {variant.storage}GB
                        </option>
                      ))}
                    </select>
                    <span>{selectedVariant?.price}</span>
                  </div>
                )}

                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>

            <div className="section-two-product-features">
              <div ref={pointingLineRef} className="pointing-lines-parent">
                <div className="pointing-line pointing-line-1"></div>{" "}
                <div className="pointing-line pointing-line-2"></div>{" "}
                <div className="pointing-line pointing-line-3"></div>{" "}
                <div className="pointing-line pointing-line-4"></div>
                <div className="pointing-line pointing-line-5"></div>

              </div>
<div ref={highlightsRef} className="highlights  text-white w-screen">
  <div className="highlight-1">{product.highlights[0]}</div>
  <div className="highlight-2">{product.highlights[1]}</div>
  <div className="highlight-3">{product.highlights[2]}</div>
  <div className="highlight-4">{product.highlights[3]}</div>
</div>
              <div className="footer-details w-screen flex justify-end items-center ">
                <div className="colorName">
                  <div
                    ref={colorRef}
                    className="color-options flex gap-4  mt-4 z-10"
                  >
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        style={{
                          zIndex: "999",
                          width: "2rem",
                          height: "2rem",
                          borderRadius: "50%",
                          backgroundColor: color.colorHex.toLowerCase(),
                          border:
                            selectedImage === color.image
                              ? "2px solid white"
                              : "1px solid gray",
                        }}
                        onClick={() =>
                          handleColorClick(color.image, color.colorName)
                        }
                      />
                    ))}
                  </div>
                  <h3 ref={colorNameRef} className="colorName text-white">
                    {selectedColorName}
                  </h3>
                </div>

                <h3>{product.name}</h3>
              </div>
            </div>

            {/* <div className="img-on-heading">
              <img src="/images/koreanBoyPhone3.jpg" alt="" />
            </div> */}
          </div>




          
        </div>
     
    </>
  );
};

export default ProductInfo;
