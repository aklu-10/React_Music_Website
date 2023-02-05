import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSections from './components/ServicesSections';
import SocialSection from './components/SocialSection';
import LinkSection from './components/LinkSection';
import Newsletter from './components/Newsletter';
import FooterSection from './components/FooterSection';

const App = () => {
  return (
    
    <>
        <Navbar/>
        <HeroSection/>
        <AboutSection/>
        <ServicesSections/>
        <SocialSection/>
        <LinkSection/>
        <Newsletter/>
        <FooterSection/>
    </>

    )
}

export default App
