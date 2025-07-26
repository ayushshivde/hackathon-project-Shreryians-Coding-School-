import SmoothScrollWrapper from "../context/SmoothScrollWrapper.jsx";
import Shop_SectionOneheader from "../components/ShopComp/Shop_SectionOneheader.jsx";
import Shop_SectionTwoCardContainer from "../components/ShopComp/Shop_SectionTwoCardContainer.jsx";
// import ScrollToTop from "../components/globalComp/ScrollToTop.jsx";

const Shop = () => {
  return (
    <>
    
      <SmoothScrollWrapper>
      
        <section className="maincontainer-shop w-screen ">
          <Shop_SectionOneheader />

          <Shop_SectionTwoCardContainer />
        </section>
      </SmoothScrollWrapper>
    </>
  );
};

export default Shop;


