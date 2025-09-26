import React from 'react';
import { 
  ShieldCheckIcon, 
  ClockIcon, 
  StarIcon, 
  GlobeAltIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  HomeIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Sécurité & Confiance',
      description: 'Propriétés vérifiées et assurées pour votre tranquillité d\'esprit',
      stats: '100% sécurisé'
    },
    {
      icon: ClockIcon,
      title: 'Disponibilité 24/7',
      description: 'Support client disponible à tout moment pour vous accompagner',
      stats: '24h/24 - 7j/7'
    },
    {
      icon: StarIcon,
      title: 'Excellence Garantie',
      description: 'Standards de qualité élevés pour une expérience exceptionnelle',
      stats: '4.9/5 étoiles'
    },
    {
      icon: GlobeAltIcon,
      title: 'Expertise Locale',
      description: 'Connaissance approfondie de Kinshasa et de ses attractions',
      stats: '5+ ans d\'expérience'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Tarifs Transparents',
      description: 'Aucun frais caché, prix clairs et compétitifs',
      stats: 'Prix justes'
    },
    {
      icon: UserGroupIcon,
      title: 'Équipe Dédiée',
      description: 'Professionnels expérimentés à votre service',
      stats: '50+ experts'
    },
    {
      icon: HomeIcon,
      title: 'Propriétés Premium',
      description: 'Sélection rigoureuse de logements de qualité supérieure',
      stats: '150+ propriétés'
    },
    {
      icon: HeartIcon,
      title: 'Service Personnalisé',
      description: 'Attention particulière à chaque détail de votre séjour',
      stats: '98% satisfaction'
    }
  ];

  const missionPoints = [
    {
      title: 'Fournir une gestion de propriétés exceptionnelle',
      description: 'Maximiser et sécuriser le rendement locatif de nos propriétaires partenaires en leur offrant une gestion transparente, proactive et professionnelle, les libérant ainsi de toute charge opérationnelle.'
    },
    {
      title: 'Enchanter chaque voyageur',
      description: 'Proposer un séjour irréprochable, sûr et authentique, faisant de leur passage à Kinshasa une expérience unique.'
    },
    {
      title: 'Créer de la valeur pour notre écosystème',
      description: 'Collaborer avec des prestataires locaux d\'exception et promouvoir un tourisme responsable et de qualité.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pourquoi Nous Choisir ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            L'Expertise Nzoo Immo Fait la Différence
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                {feature.description}
              </p>
              <div className="text-primary-600 font-bold text-sm">
                {feature.stats}
              </div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Mission
            </h3>
            <p className="text-xl text-gray-600">
              Notre mission est triple
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {missionPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {point.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div className="text-center bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Notre Vision
          </h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            Être le leader reconnu en matière de gestion de propriétés Airbnb à Kinshasa, 
            la référence incontestée de l'hospitalité locative en établissant de nouvelles 
            normes d'excellence dans le secteur de la conciergerie.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">150+</div>
            <div className="text-gray-600">Propriétés gérées</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction client</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">5000+</div>
            <div className="text-gray-600">Séjours réussis</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600">Support disponible</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;