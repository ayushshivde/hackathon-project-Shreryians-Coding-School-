
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import  useLenis  from "@studio-freight/lenis";

const ScrollToTop = () => {
  const location = useLocation();
  const lenis = new useLenis();

  useEffect(() => {
    if (lenis) {
      console.log(lenis);
      lenis.scrollTo(0, {
        immediate: true, // or use duration: 1 if you want smooth
      });
    }
  }, [location.pathname, lenis]);

  return null;
};

export default ScrollToTop;