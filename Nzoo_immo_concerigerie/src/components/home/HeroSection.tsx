import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Nzoo Immo, votre conciergerie
            <span className="block text-secondary-400">premium Airbnb</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-2">
              en RDCongo
            </span>
          </h1>
          
          <p className="hero-subtitle text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Fini les contraintes de la location courte durée. Déléguer, c'est gagner du temps et de l'argent.
            <span className="block mt-2 font-semibold">
              Nous transformons votre bien immobilier en une source de revenus optimisée et sécurisée.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/become-host"
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 group"
            >
              <span>Devenir propriétaire partenaire</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <Link
              to="/properties"
              className="btn-outline text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900"
            >
              Réserver un séjour
            </Link>
          </div>

          {/* Video Play Button */}
          <div className="flex justify-center mb-16">
            <button className="group flex items-center space-x-3 text-white hover:text-secondary-400 transition-colors duration-300">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                <PlayIcon className="w-8 h-8 ml-1" />
              </div>
              <span className="text-lg font-medium">Découvrir notre approche</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-slide-up">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">150+</div>
            <div className="text-gray-200 text-sm md:text-base">Propriétés gérées</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-gray-200 text-sm md:text-base">Satisfaction client</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-200 text-sm md:text-base">Support disponible</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">5★</div>
            <div className="text-gray-200 text-sm md:text-base">Note moyenne</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;