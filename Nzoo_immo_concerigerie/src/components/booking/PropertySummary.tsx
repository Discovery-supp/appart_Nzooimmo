import React from 'react';
import { StarIcon, MapPinIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  host: {
    name: string;
    avatar: string;
    verified: boolean;
  };
}

interface PropertySummaryProps {
  property: Property;
}

const PropertySummary: React.FC<PropertySummaryProps> = ({ property }) => {
  // Mock calculation - replace with actual booking data
  const nights = 3;
  const basePrice = property.price * nights;
  const cleaningFee = 25;
  const serviceFee = Math.round(basePrice * 0.12);
  const taxes = Math.round(basePrice * 0.08);
  const total = basePrice + cleaningFee + serviceFee + taxes;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
      {/* Property Header */}
      <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-gray-200">
        <img
          src={property.image}
          alt={property.title}
          className="w-20 h-20 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-1">{property.title}</h3>
          <div className="flex items-center text-gray-500 mb-2">
            <MapPinIcon className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <StarIcon className="w-4 h-4 text-yellow-400" />
            <span className="font-semibold text-gray-800">{property.rating}</span>
            <span className="text-gray-600 text-sm">({property.reviews} avis)</span>
          </div>
        </div>
      </div>

      {/* Host Information */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3">Votre hôte</h4>
        <div className="flex items-center space-x-3">
          <img
            src={property.host.avatar}
            alt={property.host.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-900">{property.host.name}</span>
              {property.host.verified && (
                <ShieldCheckIcon className="w-4 h-4 text-accent-500" />
              )}
            </div>
            <span className="text-sm text-gray-600">Hôte vérifié</span>
          </div>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-900">Détail des prix</h4>
        
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">${property.price} x {nights} nuits</span>
            <span className="text-gray-900">${basePrice}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Frais de ménage</span>
            <span className="text-gray-900">${cleaningFee}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Frais de service</span>
            <span className="text-gray-900">${serviceFee}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Taxes de séjour</span>
            <span className="text-gray-900">${taxes}</span>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900">Total</span>
            <span className="text-lg font-bold text-gray-900">${total}</span>
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <ShieldCheckIcon className="w-5 h-5 text-accent-500" />
            <span>Paiement sécurisé</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <ShieldCheckIcon className="w-5 h-5 text-accent-500" />
            <span>Annulation flexible</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <ShieldCheckIcon className="w-5 h-5 text-accent-500" />
            <span>Support 24/7</span>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-3">
          Une question ? Contactez-nous :
        </p>
        <div className="space-y-2 text-sm">
          <div className="text-primary-600">+243 XXX XXX XXX</div>
          <div className="text-primary-600">contact@nzooimmo.com</div>
        </div>
      </div>
    </div>
  );
};

export default PropertySummary;