import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, MapPinIcon, UserGroupIcon, HomeIcon } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/outline';

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
  features: string[];
  type: string;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="card group hover:scale-105 transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Favorite Button */}
        <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200">
          <HeartIcon className="w-5 h-5 text-gray-600 hover:text-red-500" />
        </button>
        
        {/* Property Type Badge */}
        <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {property.type}
        </div>
        
        {/* Rating */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
          <div className="flex items-center space-x-1">
            <StarIcon className="w-4 h-4 text-yellow-400" />
            <span className="font-semibold text-gray-800">{property.rating}</span>
            <span className="text-gray-600 text-sm">({property.reviews})</span>
          </div>
        </div>
        
        {/* Price */}
        <div className="absolute bottom-4 left-4 bg-white text-primary-600 rounded-lg px-3 py-1">
          <span className="font-bold">${property.price}</span>
          <span className="text-sm">/nuit</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center text-gray-500 mb-2">
          <MapPinIcon className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
          {property.title}
        </h3>

        <div className="flex items-center space-x-4 text-gray-600 mb-4">
          <div className="flex items-center">
            <UserGroupIcon className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.guests} voyageurs</span>
          </div>
          <div className="flex items-center">
            <HomeIcon className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.bedrooms} chambres</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm">{property.bathrooms} SDB</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {property.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
          {property.features.length > 3 && (
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
              +{property.features.length - 3} autres
            </span>
          )}
        </div>

        <div className="flex gap-3">
          <Link
            to={`/booking/${property.id}`}
            className="flex-1 btn-primary text-center"
          >
            Réserver
          </Link>
          <Link
            to={`/properties/${property.id}`}
            className="flex-1 btn-secondary text-center"
          >
            Détails
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;