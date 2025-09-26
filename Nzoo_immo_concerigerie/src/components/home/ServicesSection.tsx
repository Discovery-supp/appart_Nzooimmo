import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HomeIcon, 
  UserGroupIcon, 
  CogIcon, 
  HeartIcon,
  ShieldCheckIcon,
  ClockIcon,
  StarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: HomeIcon,
      title: 'Gestion de Propriétés',
      description: 'Gestion complète clé en main de votre propriété Airbnb',
      features: ['Création d\'annonces optimisées', 'Gestion des réservations', 'Communication voyageurs', 'Reporting détaillé'],
      link: '/services',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: UserGroupIcon,
      title: 'Assistance Voyageurs',
      description: 'Service de conciergerie personnalisé pour vos invités',
      features: ['Accueil personnalisé', 'Support 24/7', 'Recommandations locales', 'Services VIP'],
      link: '/services',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: CogIcon,
      title: 'Services Additionnels',
      description: 'Solutions complètes pour optimiser votre expérience',
      features: ['Transport aéroport', 'Chef privé', 'Visites guidées', 'Maintenance technique'],
      link: '/services',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: HeartIcon,
      title: 'Partenaires & Prestataires',
      description: 'Réseau de professionnels qualifiés à votre service',
      features: ['Prestataires vérifiés', 'Tarifs négociés', 'Qualité garantie', 'Paiements sécurisés'],
      link: '/become-provider',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const whyChooseUs = [
    {
      icon: ShieldCheckIcon,
      title: 'Sécurité & Confiance',
      description: 'Propriétés vérifiées et assurées pour votre tranquillité d\'esprit'
    },
    {
      icon: ClockIcon,
      title: 'Disponibilité 24/7',
      description: 'Support client disponible à tout moment pour vous accompagner'
    },
    {
      icon: StarIcon,
      title: 'Excellence Garantie',
      description: 'Standards de qualité élevés pour une expérience exceptionnelle'
    },
    {
      icon: GlobeAltIcon,
      title: 'Expertise Locale',
      description: 'Connaissance approfondie de Kinshasa et de ses attractions'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Notre philosophie : <span className="font-semibold text-primary-600">L'excellence opérationnelle au service de la relation humaine</span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to={service.link}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
              >
                En savoir plus
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Nous Choisir ?
            </h3>
            <p className="text-xl text-gray-600">
              L'Expertise Nzoo Immo Fait la Différence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            On s'occupe de tout
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Consultation gratuite
            </Link>
            <Link to="/services" className="btn-outline">
              Découvrir tous nos services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;