import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à Transformer Votre Bien ?
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-8">
            Prêt à transformer votre bien en une source de revenus exceptionnelle sans y consacrer de temps ? 
            Vous planifiez un séjour à Kinshasa et cherchez un havre de paix et de confiance ?
          </p>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Nzoo Immo s'engage à offrir une hospitalité authentique et des services de haut niveau, 
            en faisant de chaque séjour une expérience mémorable.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center max-w-md">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pour les Propriétaires
            </h3>
            <p className="text-white/90 mb-6">
              Maximisez vos revenus locatifs avec notre gestion professionnelle
            </p>
            <Link
              to="/become-host"
              className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 flex items-center space-x-2 justify-center"
            >
              <span>Devenir propriétaire partenaire</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center max-w-md">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pour les Voyageurs
            </h3>
            <p className="text-white/90 mb-6">
              Découvrez Kinshasa dans des logements d'exception
            </p>
            <Link
              to="/properties"
              className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 flex items-center space-x-2 justify-center"
            >
              <span>Réserver un séjour</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center max-w-md">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pour les Prestataires
            </h3>
            <p className="text-white/90 mb-6">
              Rejoignez notre réseau de partenaires qualifiés
            </p>
            <Link
              to="/become-provider"
              className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 flex items-center space-x-2 justify-center"
            >
              <span>Devenir partenaire</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Contactez-nous dès aujourd'hui
            </h3>
            <p className="text-white/90 text-lg">
              Consultation gratuite et sans engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Appelez-nous
              </h4>
              <p className="text-white/90">
                +243 XXX XXX XXX
              </p>
              <p className="text-white/70 text-sm">
                Disponible 24h/24 - 7j/7
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <EnvelopeIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Écrivez-nous
              </h4>
              <p className="text-white/90">
                contact@nzooimmo.com
              </p>
              <p className="text-white/70 text-sm">
                Réponse sous 24h
              </p>
            </div>

            <div className="text-center md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Visitez-nous
              </h4>
              <p className="text-white/90">
                Kinshasa, RDC
              </p>
              <p className="text-white/70 text-sm">
                Sur rendez-vous
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4"
            >
              Demander une consultation gratuite
            </Link>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Rejoignez-nous dans notre voyage pour redéfinir l'accueil à Kinshasa !
          </h3>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Ensemble, créons des expériences exceptionnelles et développons un tourisme de qualité en République Démocratique du Congo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;