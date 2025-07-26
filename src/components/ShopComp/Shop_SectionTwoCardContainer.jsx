











import Lenis from "@studio-freight/lenis";
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useRef ,useState ,useLayoutEffect } from 'react';
import {shopcontext} from "/src/context/Shopcontext.jsx"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)


const Shop_SectionTwoCardContainer = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const cardContainerRef = useRef(null);
const {AllDeviceDetails}= useContext(shopcontext)

// const lenis = new Lenis()





useEffect(() => {
  const ctx = gsap.context(() => {
    if (cardContainerRef.current) {
      gsap.fromTo(
        cardContainerRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    }
  }, cardContainerRef);

  return () => ctx.revert(); 
}, [activeCategory]);


const filteredData = AllDeviceDetails.filter((item) => {
  if (activeCategory === "all") return true;
  return item.searchKeywords.includes(activeCategory);
});

  return (
     <div className="Section-two-header w-screen   bg-black   ">
    <section className='filterbar w-screen  ' >

<h1 onClick={()=>setActiveCategory("all")}>SHOP ALL</h1>
<h1  onClick={()=>setActiveCategory("phone")}>PHONE</h1>
<h1  onClick={()=>setActiveCategory("CMF")}>CMF</h1>
<h1  onClick={()=>setActiveCategory("audio")}>AUDIO</h1>
 

</section>
<div ref={cardContainerRef} className="cardcontainer">
      {filteredData.map((phone)=>{
       return phone.colors.map((coloroption)=>{
          return<Link to={`/shop/productinfo/${phone.id}`}  key={`${phone.id}-${coloroption.colorName}`} className='card'
          
         
          >
          <div className='image-wrapper'>
            <img   src={coloroption.image} alt={`${phone.name}-(${coloroption.colorName})`} />
          </div>
          <div className='card-info'>
            <h3>{phone.name} ({coloroption.colorName})</h3>
            <p>FROM  {phone.variants[0].price}</p>
          </div>
          
          
          </Link>
        })
      })}

   
    </div>

    
   </div>
  )
}

export default Shop_SectionTwoCardContainer