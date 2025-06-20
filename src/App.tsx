import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import Services from './components/Services';
import Training from './components/Training';
import About from './components/About';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';
import TrainingApplication from './components/TrainingApplication';
import ContactPage from './components/ContactPage';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [showTrainingApplication, setShowTrainingApplication] = useState(false);
  const [showContactPage, setShowContactPage] = useState(false);

  const handleNavigate = (section: string) => {
    if (section === 'coming-soon') {
      setShowComingSoon(true);
      setShowTrainingApplication(false);
      setShowContactPage(false);
      return;
    }
    
    if (section === 'training-application') {
      setShowTrainingApplication(true);
      setShowComingSoon(false);
      setShowContactPage(false);
      return;
    }

    if (section === 'contact') {
      setShowContactPage(true);
      setShowComingSoon(false);
      setShowTrainingApplication(false);
      return;
    }
    
    setShowComingSoon(false);
    setShowTrainingApplication(false);
    setShowContactPage(false);
    setActiveSection(section);
    
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(section);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (showComingSoon || showTrainingApplication || showContactPage) return;
    
    const handleScroll = () => {
      const sections = ['home', 'services', 'training', 'about'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        } else if (section === 'home' && scrollPosition < 100) {
          setActiveSection('home');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showComingSoon, showTrainingApplication, showContactPage]);

  if (showComingSoon) {
    return (
      <div className="min-h-screen bg-white font-inter">
        <ComingSoon 
          title="Revolutionary Training Platform"
          subtitle="AI-Powered Learning & Advanced Digital Solutions"
          description="We're building the future of digital education with personalized AI tutors, immersive project simulations, and industry-leading certification programs. Get ready for a learning experience that adapts to you."
          launchDate="2025-08-15"
          onNavigate={handleNavigate}
        />
      </div>
    );
  }

  if (showTrainingApplication) {
    return (
      <div className="min-h-screen bg-white font-inter">
        <TrainingApplication onNavigate={handleNavigate} />
      </div>
    );
  }

  if (showContactPage) {
    return (
      <div className="min-h-screen bg-white font-inter">
        <ContactPage onNavigate={handleNavigate} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-inter">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        <div id="home">
          <Hero onNavigate={handleNavigate} />
          <WhoWeAre />
        </div>
        
        <Services onNavigate={handleNavigate} />
        <Training onNavigate={handleNavigate} />
        <About />
      </main>
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;