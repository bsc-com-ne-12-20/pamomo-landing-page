import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import PricingSection from '../components/PricingSection';
import MerchantSection from '../components/MerchantSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <MerchantSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default HomePage;