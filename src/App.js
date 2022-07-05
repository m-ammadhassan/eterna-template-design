import React from 'react';
import './styles/style.css';
import './styles/responsive.css';
import NavigationBar from './components/NavigationBar';
import SocialBar from './components/SocialBar';
import Slider from './components/Slider';
import Features from './components/Features';
import Clients from './components/Clients';
import Footer from './components/Footer';

const App = () =>
{
  return(
    <>
      <SocialBar />
      <NavigationBar />
      <Slider />
      <Features />
      <Clients />
      <Footer />
    </>
  );
}

export default App;
