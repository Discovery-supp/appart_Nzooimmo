import React from 'react';
import { 
  BuildingOfficeIcon, 
  UserGroupIcon, 
  Cog6ToothIcon,
  CameraIcon,
  CleaningServicesIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const conciergeryServices = [
    {
      title: 'Gestion Complète Clé en Main',
      description: 'Création de l\'annonce, optimisation, gestion des réservations et de la communication.',
      icon: BuildingOfficeIcon
    },
    {
      title: 'Photographie Professionnelle',
      description: 'Mise en valeur immobilière de votre bien pour attirer plus de voyageurs.',
      icon: CameraIcon
    },
    {
      title: 'Gestion des Entrées/Sorties',
      description: 'Accueil personnalisé des voyageurs, remise des clés, état des lieux.',
      icon: UserGroupIcon
    },
    {
      title: 'Ménage & Maintenance Technique',
      description: 'Nettoyage approfondi après chaque départ et coordination rapide avec des artisans de confiance.',
      icon: CleaningServicesIcon
    },
    {
      title: 'Reporting Financier',
      description: 'Relevé de compte mensuel détaillé avec tous les revenus et les frais.',
      icon: ChartBarIcon
    }
  ];

  const travelerServices = [
    {
      title: 'Sélection de Logements Exceptionnels',
      description: 'Chaque appartement est vérifié, équipé et décoré avec soin.',
      icon: ShieldCheckIcon
    },
    {
      title: 'Service de Conciergerie Personnel',
      description: 'Recommandations locales sur-mesure, réservation de taxi, aide logistique.',
      icon: HeartIcon
    },
    {
      title: 'Check-In Fluide et Sécurisé',
      description: 'Accueil chaleureux ou processus d\'arrivée autonome et sécurisé.',
      icon: UserGroupIcon
    },
    {
      title: 'Support Continu',
      description: 'Une équipe disponible 7j/7 pour répondre à toute question ou besoin durant le séjour.',
      icon: Cog6ToothIcon
    }
  ];

  const additionalServices = [
    {
      title: 'Transport et Accessibilité',
      description: 'Informations sur les transports (aéroport) et la proximité des attractions locales.',
      features: ['Transfert aéroport', 'Location de véhicules', 'Transport local', 'Guides de transport']
    },
    {
      title: 'Activités et Loisirs',
      description: 'Assistance pour les activités de loisirs, culturelles et guides touristiques.',
      features: ['Visites guidées', 'Activités culturelles', 'Excursions', 'Événements locaux']
    },
    {
      title: 'Services de Restauration',
      description: 'Services de restauration et de chef privé pour une expérience culinaire unique.',
      features: ['Chef privé', 'Livraison de repas', 'Réservations restaurant', 'Cours de cuisine']
    },
    {
      title: 'Services Premium',
      description: 'Services VIP et à la carte pour une expérience sur-mesure.',
      features: ['Conciergerie 24/7', 'Services personnalisés', 'Assistance VIP', 'Demandes spéciales']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Une gamme complète de services pour propriétaires, voyageurs et partenaires
          </p>
        </div>
      </section>

      {/* Property Management Services */}
      <section id="conciergerie" className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gestion et Supervision de Propriétés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous nous occupons de tout pour que vous puissiez vous concentrer sur l'essentiel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conciergeryServices.map((service, index) => (
              <div key={index} className="card p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traveler Services */}
      <section id="traveler-assistance" className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Assistance Voyageurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expérience d'hébergement exceptionnelle du début à la fin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {travelerServices.map((service, index) => (
              <div key={index} className="card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section id="additional-services" className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services Additionnels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des services complémentaires pour enrichir votre expérience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="card p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pour les Prestataires & Partenaires
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rejoignez notre réseau de partenaires privilégiés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <UserGroupIcon className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Collaboration Récurrente
              </h3>
              <p className="text-gray-600">
                Intégration dans notre réseau de prestataires privilégiés (nettoyage, maintenance, agences de voyage, sites touristiques, etc.).
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Exigence et Formation
              </h3>
              <p className="text-gray-600">
                Nous partageons nos standards de qualité pour garantir une expérience client uniforme.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <ChartBarIcon className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Paiement Rapide et Fiable
              </h3>
              <p className="text-gray-600">
                Relation commerciale respectueuse basée sur la confiance et la ponctualité des règlements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à Découvrir Nos Services ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons vous aider
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-accent">
              Devenir Propriétaire
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-xl border border-white/30 transition-all duration-200 backdrop-blur-sm">
              Réserver un Séjour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;