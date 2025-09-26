import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, MapPinIcon, UserGroupIcon, HomeIcon } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/outline';

const FeaturedProperties: React.FC = () => {
  const properties = [
    {
      id: 1,
      title: 'Villa Moderne avec Piscine',
      location: 'Gombe, Kinshasa',
      price: 120,
      currency: 'USD',
      rating: 4.9,
      reviews: 127,
      guests: 8,
      bedrooms: 4,
      bathrooms: 3,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Piscine privée', 'Wi-Fi gratuit', 'Parking', 'Climatisation'],
      isNew: true
    },
    {
      id: 2,
      title: 'Appartement de Luxe Centre-ville',
      location: 'Kinshasa Centre, Kinshasa',
      price: 85,
      currency: 'USD',
      rating: 4.8,
      reviews: 89,
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Vue panoramique', 'Cuisine équipée', 'Sécurité 24h', 'Ascenseur'],
      isPopular: true
    },
    {
      id: 3,
      title: 'Maison Familiale Spacieuse',
      location: 'Lemba, Kinshasa',
      price: 95,
      currency: 'USD',
      rating: 4.7,
      reviews: 156,
      guests: 10,
      bedrooms: 5,
      bathrooms: 4,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Grand jardin', 'Barbecue', 'Jeux enfants', 'Parking 3 voitures'],
      isNew: false
    },
    {
      id: 4,
      title: 'Studio Moderne Équipé',
      location: 'Bandalungwa, Kinshasa',
      price: 45,
      currency: 'USD',
      rating: 4.6,
      reviews: 73,
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      image: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Design moderne', 'Kitchenette', 'Wi-Fi haut débit', 'Transport proche'],
      isNew: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Propriétés en Vedette
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre sélection de logements exceptionnels, chaque appartement est vérifié, équipé et décoré avec soin.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {properties.map((property) => (
            <div key={property.id} className="property-card group">
              {/* Image Container */}
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="property-image group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {property.isNew && (
                    <span className="bg-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      NOUVEAU
                    </span>
                  )}
                  {property.isPopular && (
                    <span className="bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      POPULAIRE
                    </span>
                  )}
                </div>

                {/* Favorite Button */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 group">
                  <HeartIcon className="w-5 h-5 text-gray-600 group-hover:text-red-500 transition-colors duration-200" />
                </button>

                {/* Price Badge */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-lg font-bold text-gray-900">
                    {property.price} {property.currency}
                  </span>
                  <span className="text-sm text-gray-600">/nuit</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Location & Rating */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-gray-600">
                    <MapPinIcon className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="flex items-center">
                    <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-semibold text-gray-900">{property.rating}</span>
                    <span className="text-sm text-gray-600 ml-1">({property.reviews})</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {property.title}
                </h3>

                {/* Property Details */}
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <UserGroupIcon className="w-4 h-4 mr-1" />
                    <span>{property.guests} pers.</span>
                  </div>
                  <div className="flex items-center">
                    <HomeIcon className="w-4 h-4 mr-1" />
                    <span>{property.bedrooms} ch.</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M10.5 3L12 2l1.5 1M21 3H3l2-2h14l2 2z" />
                    </svg>
                    <span>{property.bathrooms} sdb</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {property.features.slice(0, 2).map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                  {property.features.length > 2 && (
                    <span className="text-xs text-gray-500">
                      +{property.features.length - 2} autres
                    </span>
                  )}
                </div>

                {/* Book Button */}
                <Link
                  to={`/booking/${property.id}`}
                  className="w-full btn-primary text-center block"
                >
                  Réserver maintenant
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/properties"
            className="btn-outline text-lg px-8 py-4"
          >
            Voir toutes les propriétés
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;