import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { QuoteIcon } from '@heroicons/react/24/outline';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Marie Kabila',
      role: 'Propriétaire',
      location: 'Gombe, Kinshasa',
      rating: 5,
      comment: 'Nzoo Immo a transformé ma propriété en une véritable source de revenus. Leur professionnalisme et leur attention aux détails sont remarquables. Je recommande vivement leurs services !',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      revenue: '+150% de revenus'
    },
    {
      id: 2,
      name: 'Jean-Claude Mbuyi',
      role: 'Voyageur d\'affaires',
      location: 'Paris, France',
      rating: 5,
      comment: 'Séjour exceptionnel à Kinshasa ! L\'accueil était parfait, le logement impeccable et l\'équipe toujours disponible. Une expérience que je n\'oublierai pas.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      stays: '12 séjours'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      role: 'Touriste',
      location: 'Londres, UK',
      rating: 5,
      comment: 'Amazing experience in Kinshasa! The team at Nzoo Immo made everything so easy and comfortable. The property was beautiful and the local recommendations were perfect.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      stays: '3 séjours'
    },
    {
      id: 4,
      name: 'Patrick Lumumba',
      role: 'Prestataire',
      location: 'Kinshasa, RDC',
      rating: 5,
      comment: 'Travailler avec Nzoo Immo est un plaisir. Ils sont professionnels, ponctuels dans les paiements et nous permettent de développer notre activité. Une collaboration enrichissante !',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      partnership: '2 ans de collaboration'
    },
    {
      id: 5,
      name: 'Fatima Ngozi',
      role: 'Propriétaire',
      location: 'Lemba, Kinshasa',
      rating: 5,
      comment: 'Depuis que j\'ai confié ma maison à Nzoo Immo, je n\'ai plus aucun souci. Ils gèrent tout parfaitement et mes revenus ont considérablement augmenté. Merci à toute l\'équipe !',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      revenue: '+200% de revenus'
    },
    {
      id: 6,
      name: 'David Martinez',
      role: 'Voyageur',
      location: 'Madrid, Espagne',
      rating: 5,
      comment: 'Increíble servicio! La atención al detalle y la hospitalidad del equipo de Nzoo Immo superaron todas mis expectativas. Definitivamente volveré a Kinshasa.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      stays: '5 séjours'
    }
  ];

  const stats = [
    { number: '98%', label: 'Satisfaction client' },
    { number: '4.9/5', label: 'Note moyenne' },
    { number: '500+', label: 'Avis positifs' },
    { number: '24h', label: 'Temps de réponse' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les témoignages de nos propriétaires, voyageurs et partenaires qui nous font confiance
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <QuoteIcon className="w-4 h-4 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.comment}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                {testimonial.revenue && (
                  <div className="text-sm font-semibold text-green-600">
                    {testimonial.revenue}
                  </div>
                )}
                {testimonial.stays && (
                  <div className="text-sm font-semibold text-blue-600">
                    {testimonial.stays}
                  </div>
                )}
                {testimonial.partnership && (
                  <div className="text-sm font-semibold text-purple-600">
                    {testimonial.partnership}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ils Nous Font Confiance
            </h3>
            <p className="text-gray-600">
              Rejoignez des centaines de propriétaires et voyageurs satisfaits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Propriétaires Satisfaits
              </h4>
              <p className="text-gray-600 text-sm">
                Plus de 150 propriétaires nous font confiance pour gérer leurs biens
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Voyageurs du Monde
              </h4>
              <p className="text-gray-600 text-sm">
                Des clients de plus de 50 pays ont séjourné dans nos propriétés
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 6V8a2 2 0 00-2-2H10a2 2 0 00-2 2v8a2 2 0 002 2h4a2 2 0 002-2z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Partenaires Locaux
              </h4>
              <p className="text-gray-600 text-sm">
                Un réseau de plus de 50 prestataires qualifiés et vérifiés
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;