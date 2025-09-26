import React, { useState } from 'react';
import { MagnifyingGlassIcon, FunnelIcon, MapIcon, ListBulletIcon } from '@heroicons/react/24/outline';
import PropertyCard from '../components/properties/PropertyCard';
import PropertyFilters from '../components/properties/PropertyFilters';

const PropertyListingPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - replace with actual API call
  const properties = [
    {
      id: 1,
      title: 'Appartement Moderne - Gombe',
      location: 'Gombe, Kinshasa',
      price: 85,
      rating: 4.9,
      reviews: 127,
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Wi-Fi', 'Climatisation', 'Cuisine équipée', 'Parking'],
      type: 'Appartement'
    },
    {
      id: 2,
      title: 'Villa Luxueuse - Bandalungwa',
      location: 'Bandalungwa, Kinshasa',
      price: 150,
      rating: 4.8,
      reviews: 89,
      guests: 8,
      bedrooms: 4,
      bathrooms: 3,
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Piscine', 'Jardin', 'Sécurité 24/7', 'Chef privé'],
      type: 'Villa'
    },
    {
      id: 3,
      title: 'Studio Cosy - Lemba',
      location: 'Lemba, Kinshasa',
      price: 45,
      rating: 4.7,
      reviews: 203,
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Wi-Fi', 'Kitchenette', 'Balcon', 'Transport'],
      type: 'Studio'
    },
    {
      id: 4,
      title: 'Penthouse Vue Fleuve - Kinshasa',
      location: 'Centre-ville, Kinshasa',
      price: 200,
      rating: 4.9,
      reviews: 45,
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Vue panoramique', 'Terrasse', 'Ascenseur', 'Concierge'],
      type: 'Penthouse'
    },
    {
      id: 5,
      title: 'Maison Familiale - Ngaliema',
      location: 'Ngaliema, Kinshasa',
      price: 120,
      rating: 4.6,
      reviews: 78,
      guests: 10,
      bedrooms: 5,
      bathrooms: 3,
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Grand jardin', 'Barbecue', 'Parking 3 voitures', 'Salle de jeux'],
      type: 'Maison'
    },
    {
      id: 6,
      title: 'Loft Artistique - Kalamu',
      location: 'Kalamu, Kinshasa',
      price: 75,
      rating: 4.8,
      reviews: 156,
      guests: 4,
      bedrooms: 2,
      bathrooms: 1,
      image: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Design unique', 'Espace créatif', 'Lumineux', 'Quartier animé'],
      type: 'Loft'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-max py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Propriétés Disponibles
              </h1>
              <p className="text-gray-600 mt-1">
                {properties.length} logements disponibles à Kinshasa
              </p>
            </div>

            {/* Search and Controls */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1 lg:w-80">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher par quartier, type..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <FunnelIcon className="w-5 h-5 mr-2" />
                  Filtres
                </button>
                
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-3 ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors duration-200`}
                  >
                    <ListBulletIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('map')}
                    className={`p-3 ${viewMode === 'map' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors duration-200`}
                  >
                    <MapIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-max py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 flex-shrink-0">
              <PropertyFilters />
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1">
            {viewMode === 'list' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {properties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <MapIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Vue Carte
                </h3>
                <p className="text-gray-600">
                  La vue carte sera bientôt disponible avec l'intégration de Google Maps
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListingPage;