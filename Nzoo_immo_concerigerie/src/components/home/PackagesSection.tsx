import React from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, XMarkIcon, StarIcon } from '@heroicons/react/24/solid';

const PackagesSection: React.FC = () => {
  const packages = [
    {
      name: 'Forfait Essentielle et partielle',
      subtitle: 'Pour les propriétaires débutants',
      description: 'Vous gérez l\'intendance, on s\'occupe du reste',
      price: '15%',
      priceNote: 'de commission',
      color: 'from-blue-500 to-blue-600',
      popular: false,
      features: [
        { name: 'Création de l\'annonce', included: true },
        { name: 'Multi diffusion sur les principaux sites', included: true },
        { name: 'Gestion et optimisation des tarifs', included: false },
        { name: 'Communication et assistance aux voyageurs', included: false },
        { name: 'Gestion Réservations', included: false },
        { name: 'Reporting Mensuel', included: true },
        { name: 'Shooting standard', included: true },
        { name: 'Gestion des Entrées/Sorties', included: false },
        { name: 'Ménage & Maintenance Technique', included: false },
        { name: 'Entretien du linge et consommables', included: false },
        { name: 'Reporting Mensuel détaillé', included: false },
        { name: 'Shooting professionnelle', included: false },
        { name: 'Kit d\'accueil basique', included: false },
        { name: 'Rédaction livret d\'accueil', included: false },
        { name: 'Gestion des avis et performance', included: true },
        { name: 'Kit d\'accueil prémium', included: false },
        { name: 'Stratégie marketing et storytelling', included: false }
      ]
    },
    {
      name: 'Forfait Optimisée et Complete',
      subtitle: 'Le plus populaire',
      description: 'Laissez-nous tout gérer, du début à la fin',
      price: '25%',
      priceNote: 'de commission',
      color: 'from-green-500 to-green-600',
      popular: true,
      features: [
        { name: 'Création de l\'annonce', included: true },
        { name: 'Multi diffusion sur les principaux sites', included: true },
        { name: 'Gestion et optimisation des tarifs', included: true },
        { name: 'Communication et assistance aux voyageurs', included: true },
        { name: 'Gestion Réservations', included: true },
        { name: 'Reporting Mensuel', included: false },
        { name: 'Shooting standard', included: false },
        { name: 'Gestion des Entrées/Sorties', included: true },
        { name: 'Ménage & Maintenance Technique', included: true },
        { name: 'Entretien du linge et consommables', included: true },
        { name: 'Reporting Mensuel détaillé', included: true },
        { name: 'Shooting professionnelle', included: true },
        { name: 'Kit d\'accueil basique', included: true },
        { name: 'Rédaction livret d\'accueil', included: true },
        { name: 'Gestion des avis et performance', included: true },
        { name: 'Kit d\'accueil prémium', included: false },
        { name: 'Stratégie marketing et storytelling', included: false }
      ]
    },
    {
      name: 'Forfait Prémium',
      subtitle: 'Pour les propriétés d\'exception',
      description: 'Gestion exigeante et services à la carte',
      price: 'Sur mesure',
      priceNote: 'Tarif négociable',
      color: 'from-purple-500 to-purple-600',
      popular: false,
      features: [
        { name: 'Création de l\'annonce', included: true },
        { name: 'Multi diffusion sur les principaux sites', included: true },
        { name: 'Gestion et optimisation des tarifs', included: true },
        { name: 'Communication et assistance aux voyageurs', included: true },
        { name: 'Gestion Réservations', included: true },
        { name: 'Reporting Mensuel', included: false },
        { name: 'Shooting standard', included: false },
        { name: 'Gestion des Entrées/Sorties', included: true },
        { name: 'Ménage & Maintenance Technique', included: true },
        { name: 'Entretien du linge et consommables', included: true },
        { name: 'Reporting Mensuel détaillé', included: true },
        { name: 'Shooting professionnelle', included: true },
        { name: 'Kit d\'accueil basique', included: false },
        { name: 'Rédaction livret d\'accueil', included: true },
        { name: 'Gestion des avis et performance', included: true },
        { name: 'Kit d\'accueil prémium', included: true },
        { name: 'Stratégie marketing et storytelling', included: true }
      ]
    }
  ];

  const voyageurPackage = {
    name: 'Forfait Voyageur Prémium',
    description: 'Une offre complète pour tous les voyageurs',
    features: [
      'Service d\'assistance voyageur complet',
      'Accueil et check-in flexible',
      'Accueil personnalisé à l\'arrivée',
      'Flexibilité dans les horaires',
      'Expériences locales personnalisées',
      'Services VIP et à la carte sur demande',
      'Options de séjour prolongé à tarifs préférentiels'
    ]
  };

  const partnerPackage = {
    name: 'Pour les Partenaires et Prestataires',
    description: 'Rejoignez notre réseau de professionnels',
    features: [
      'Opportunités de collaboration',
      'Accès à un réseau de clients internationaux',
      'Support marketing conjoint',
      'Formation aux standards de qualité',
      'Paiement rapide et fiable',
      'Relation commerciale respectueuse'
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos Forfaits Conciergerie
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trouvez la Formule qui Vous Correspond
          </p>
        </div>

        {/* Main Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div key={index} className={`package-card ${pkg.popular ? 'featured' : ''} relative`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-bold px-4 py-2 rounded-full flex items-center space-x-1">
                    <StarIcon className="w-4 h-4" />
                    <span>POPULAIRE</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {pkg.subtitle}
                  </p>
                  <p className="text-sm text-gray-500 mb-6">
                    {pkg.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className={`text-4xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent mb-2`}>
                      {pkg.price}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {pkg.priceNote}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <XMarkIcon className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-gray-900' : 'text-gray-400'}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  to="/become-host"
                  className={`w-full btn-primary ${pkg.popular ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' : ''}`}
                >
                  Choisir ce forfait
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Voyageur Package */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {voyageurPackage.name}
            </h3>
            <p className="text-gray-600 mb-6">
              {voyageurPackage.description}
            </p>
            <ul className="space-y-3 mb-8">
              {voyageurPackage.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/properties" className="btn-primary bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
              Réserver un séjour
            </Link>
          </div>

          {/* Partner Package */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {partnerPackage.name}
            </h3>
            <p className="text-gray-600 mb-6">
              {partnerPackage.description}
            </p>
            <ul className="space-y-3 mb-8">
              {partnerPackage.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/become-provider" className="btn-primary bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
              Devenir partenaire
            </Link>
          </div>
        </div>

        {/* Note */}
        <div className="text-center bg-gray-50 rounded-xl p-6">
          <p className="text-gray-600">
            <span className="font-semibold">Note :</span> Toutes nos offres sont négociables en commission sur pourcentage du revenu. 
            Contactez-nous pour une consultation personnalisée.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;