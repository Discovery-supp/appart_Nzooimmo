import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const PropertyFilters: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['price', 'type']);
  const [filters, setFilters] = useState({
    priceRange: [0, 300],
    propertyType: [] as string[],
    guests: 1,
    bedrooms: 0,
    bathrooms: 0,
    amenities: [] as string[]
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const propertyTypes = [
    'Appartement',
    'Villa',
    'Studio',
    'Penthouse',
    'Maison',
    'Loft'
  ];

  const amenities = [
    'Wi-Fi',
    'Climatisation',
    'Piscine',
    'Parking',
    'Cuisine équipée',
    'Sécurité 24/7',
    'Jardin',
    'Balcon',
    'Ascenseur',
    'Salle de sport'
  ];

  const FilterSection: React.FC<{ title: string; id: string; children: React.ReactNode }> = ({ title, id, children }) => {
    const isExpanded = expandedSections.includes(id);
    
    return (
      <div className="border-b border-gray-200 pb-6 mb-6">
        <button
          onClick={() => toggleSection(id)}
          className="flex items-center justify-between w-full text-left"
        >
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {isExpanded ? (
            <ChevronUpIcon className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDownIcon className="w-5 h-5 text-gray-500" />
          )}
        </button>
        {isExpanded && <div className="mt-4">{children}</div>}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Filtres</h2>
        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
          Réinitialiser
        </button>
      </div>

      {/* Price Range */}
      <FilterSection title="Prix par nuit" id="price">
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}+</span>
          </div>
          <input
            type="range"
            min="0"
            max="300"
            value={filters.priceRange[1]}
            onChange={(e) => setFilters(prev => ({
              ...prev,
              priceRange: [prev.priceRange[0], parseInt(e.target.value)]
            }))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
      </FilterSection>

      {/* Property Type */}
      <FilterSection title="Type de propriété" id="type">
        <div className="space-y-3">
          {propertyTypes.map((type) => (
            <label key={type} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.propertyType.includes(type)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFilters(prev => ({
                      ...prev,
                      propertyType: [...prev.propertyType, type]
                    }));
                  } else {
                    setFilters(prev => ({
                      ...prev,
                      propertyType: prev.propertyType.filter(t => t !== type)
                    }));
                  }
                }}
                className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
              />
              <span className="ml-3 text-gray-700">{type}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Guests */}
      <FilterSection title="Nombre de voyageurs" id="guests">
        <select
          value={filters.guests}
          onChange={(e) => setFilters(prev => ({ ...prev, guests: parseInt(e.target.value) }))}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1} {i === 0 ? 'voyageur' : 'voyageurs'}
            </option>
          ))}
        </select>
      </FilterSection>

      {/* Bedrooms */}
      <FilterSection title="Chambres" id="bedrooms">
        <div className="flex gap-2">
          {[0, 1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => setFilters(prev => ({ ...prev, bedrooms: num }))}
              className={`flex-1 py-2 px-3 rounded-lg border text-sm font-medium transition-colors duration-200 ${
                filters.bedrooms === num
                  ? 'bg-primary-600 text-white border-primary-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-primary-300'
              }`}
            >
              {num === 0 ? 'Toutes' : `${num}+`}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Bathrooms */}
      <FilterSection title="Salles de bain" id="bathrooms">
        <div className="flex gap-2">
          {[0, 1, 2, 3, 4].map((num) => (
            <button
              key={num}
              onClick={() => setFilters(prev => ({ ...prev, bathrooms: num }))}
              className={`flex-1 py-2 px-3 rounded-lg border text-sm font-medium transition-colors duration-200 ${
                filters.bathrooms === num
                  ? 'bg-primary-600 text-white border-primary-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-primary-300'
              }`}
            >
              {num === 0 ? 'Toutes' : `${num}+`}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Amenities */}
      <FilterSection title="Équipements" id="amenities">
        <div className="space-y-3 max-h-48 overflow-y-auto">
          {amenities.map((amenity) => (
            <label key={amenity} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.amenities.includes(amenity)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFilters(prev => ({
                      ...prev,
                      amenities: [...prev.amenities, amenity]
                    }));
                  } else {
                    setFilters(prev => ({
                      ...prev,
                      amenities: prev.amenities.filter(a => a !== amenity)
                    }));
                  }
                }}
                className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
              />
              <span className="ml-3 text-gray-700">{amenity}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      <button className="w-full btn-primary">
        Appliquer les filtres
      </button>
    </div>
  );
};

export default PropertyFilters;