import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import MyServices from './components/MyServices';
import Skills from './components/Skills';
import ProjectsSlider from './components/ProjectsSlider';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutUs />
      <MyServices />
      <Skills />
      <ProjectsSlider />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
