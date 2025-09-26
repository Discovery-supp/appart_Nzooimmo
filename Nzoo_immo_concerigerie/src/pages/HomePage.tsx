import React from 'react';
import HeroSection from '../components/home/HeroSection';
import SearchBar from '../components/home/SearchBar';
import ServicesSection from '../components/home/ServicesSection';
import FeaturedProperties from '../components/home/FeaturedProperties';
import WhyChooseUs from '../components/home/WhyChooseUs';
import PackagesSection from '../components/home/PackagesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SearchBar />
      <FeaturedProperties />
      <ServicesSection />
      <WhyChooseUs />
      <PackagesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;