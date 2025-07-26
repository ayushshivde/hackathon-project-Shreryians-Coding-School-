import HeroSection from '../components/HomeComp/Home_HeroSection.jsx'
import Description from '../components/HomeComp/Home_Description.jsx'
import SmoothScrollWrapper from '../context/SmoothScrollWrapper.jsx';
import Home_3section_slide from '../components/HomeComp/Home_3section_slide.jsx';
import { useLocation } from 'react-router-dom';


const Home = () => {

  const location = useLocation()
  const isHomepage = location.pathname==="/";
  return (
<>

<div className='home-page w-full -auto'></div>

<HeroSection />
<SmoothScrollWrapper>

  <Description />

{ isHomepage && <Home_3section_slide />}


</SmoothScrollWrapper>



</>
  )
}

export default Home