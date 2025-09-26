import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, Users, Bed, Bath, Wifi, Car, School as Pool, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
  amenities: string[];
  type: string;
  neighborhood: string;
  beachAccess: boolean;
  category: string;
}

const PropertiesPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('all');
  const [beachAccess, setBeachAccess] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Données d'exemple
  const properties: Property[] = [
    {
      id: '1',
      title: 'Magnifique appartement avec vue sur le fleuve Congo',
      location: 'Gombe, Kinshasa',
      price: 85,
      rating: 4.8,
      reviews: 127,
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      amenities: ['wifi', 'parking', 'pool'],
      type: 'apartment',
      neighborhood: 'Gombe',
      beachAccess: false,
      category: 'Luxe'
    },
    {
      id: '2',
      title: 'Villa moderne avec piscine privée',
      location: 'Ngaliema, Kinshasa',
      price: 150,
      rating: 4.9,
      reviews: 89,
      guests: 8,
      bedrooms: 4,
      bathrooms: 3,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      amenities: ['wifi', 'parking', 'pool'],
      type: 'villa',
      neighborhood: 'Ngaliema',
      beachAccess: true,
      category: 'Premium'
    },
    {
      id: '3',
      title: 'Chambre confortable en centre-ville',
      location: 'Kinshasa Centre',
      price: 45,
      rating: 4.6,
      reviews: 203,
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      amenities: ['wifi'],
      type: 'room',
      neighborhood: 'Kinshasa Centre',
      beachAccess: false,
      category: 'Standard'
    },
    {
      id: '4',
      title: 'Maison familiale spacieuse',
      location: 'Lemba, Kinshasa',
      price: 120,
      rating: 4.7,
      reviews: 156,
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
      amenities: ['wifi', 'parking'],
      type: 'house',
      neighborhood: 'Lemba',
      beachAccess: false,
      category: 'Confort'
    },
    {
      id: '5',
      title: 'Studio moderne et équipé',
      location: 'Bandalungwa, Kinshasa',
      price: 60,
      rating: 4.5,
      reviews: 78,
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
      amenities: ['wifi'],
      type: 'studio',
      neighborhood: 'Bandalungwa',
      beachAccess: false,
      category: 'Économique'
    },
    {
      id: '6',
      title: 'Penthouse de luxe avec terrasse',
      location: 'Gombe, Kinshasa',
      price: 200,
      rating: 5.0,
      reviews: 45,
      guests: 6,
      bedrooms: 3,
      bathrooms: 3,
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
      amenities: ['wifi', 'parking', 'pool'],
      type: 'apartment',
      neighborhood: 'Gombe',
      beachAccess: false,
      category: 'Luxe'
    }
  ];

  const propertyTypes = [
    { value: 'all', label: 'Tous les types' },
    { value: 'apartment', label: 'Appartement' },
    { value: 'house', label: 'Maison' },
    { value: 'villa', label: 'Villa' },
    { value: 'studio', label: 'Studio' },
    { value: 'room', label: 'Chambre' }
  ];

  const categories = [
    { value: 'all', label: 'Toutes catégories' },
    { value: 'Économique', label: 'Économique' },
    { value: 'Standard', label: 'Standard' },
    { value: 'Confort', label: 'Confort' },
    { value: 'Luxe', label: 'Luxe' },
    { value: 'Premium', label: 'Premium' }
  ];

  const neighborhoods = [
    { value: 'all', label: 'Tous les quartiers' },
    { value: 'Gombe', label: 'Gombe' },
    { value: 'Ngaliema', label: 'Ngaliema' },
    { value: 'Kinshasa Centre', label: 'Kinshasa Centre' },
    { value: 'Lemba', label: 'Lemba' },
    { value: 'Bandalungwa', label: 'Bandalungwa' }
  ];

  const availableAmenities = [
    { value: 'wifi', label: 'Wi-Fi' },
    { value: 'parking', label: 'Parking' },
    { value: 'pool', label: 'Piscine' },
    { value: 'kitchen', label: 'Cuisine' },
    { value: 'tv', label: 'Télévision' },
    { value: 'ac', label: 'Climatisation' }
  ];

  const amenityIcons = {
    wifi: Wifi,
    parking: Car,
    pool: Pool
  };

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || property.type === selectedType;
    const matchesCategory = selectedCategory === 'all' || property.category === selectedCategory;
    const matchesNeighborhood = selectedNeighborhood === 'all' || property.neighborhood === selectedNeighborhood;
    const matchesBeachAccess = !beachAccess || property.beachAccess;
    const matchesRating = property.rating >= minRating;
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];
    const matchesAmenities = selectedAmenities.length === 0 || 
      selectedAmenities.every(amenity => property.amenities.includes(amenity));
    
    return matchesSearch && matchesType && matchesCategory && matchesNeighborhood && 
           matchesBeachAccess && matchesRating && matchesPrice && matchesAmenities;
  });

  const handleAmenityToggle = (amenity: string) => {
    setSelectedAmenities(prev => 
      prev.includes(amenity) 
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };

  const handlePropertyClick = (propertyId: string) => {
    navigate(`/property/${propertyId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold font-heading text-primary mb-4">
            Nos Propriétés Disponibles
          </h1>
          <p className="text-xl text-secondary">
            Découvrez nos hébergements exceptionnels à Kinshasa
          </p>
        </div>

        {/* Barre de recherche et filtres */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Recherche */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-secondary" />
                <input
                  type="text"
                  placeholder="Rechercher par titre ou localisation..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-light-gray rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Type de propriété */}
            <div className="lg:w-64">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 border border-light-gray rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {propertyTypes.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Catégorie */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-light-gray rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Bouton filtres */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors flex items-center space-x-2"
            >
              <Filter className="w-5 h-5" />
              <span>Filtres</span>
            </button>
          </div>

          {/* Filtres avancés */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-light-gray">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Fourchette de prix */}
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Prix par nuit (USD)
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="w-full px-3 py-2 border border-light-gray rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <span className="text-secondary">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 500])}
                      className="w-full px-3 py-2 border border-light-gray rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Quartier */}
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Quartier</label>
                  <select
                    value={selectedNeighborhood}
                    onChange={(e) => setSelectedNeighborhood(e.target.value)}
                    className="w-full px-3 py-2 border border-light-gray rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    {neighborhoods.map(neighborhood => (
                      <option key={neighborhood.value} value={neighborhood.value}>
                        {neighborhood.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Note minimum */}
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Note minimum</label>
                  <select
                    value={minRating}
                    onChange={(e) => setMinRating(parseFloat(e.target.value))}
                    className="w-full px-3 py-2 border border-light-gray rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value={0}>Toutes les notes</option>
                    <option value={3}>3+ étoiles</option>
                    <option value={4}>4+ étoiles</option>
                    <option value={4.5}>4.5+ étoiles</option>
                  </select>
                </div>

                {/* Accès plage */}
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Options</label>
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      checked={beachAccess}
                      onChange={(e) => setBeachAccess(e.target.checked)}
                      className="mr-2 text-primary rounded" 
                    />
                    <span className="text-sm text-secondary">Accès à la plage</span>
                  </label>
                </div>
              </div>

              {/* Équipements */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-secondary mb-3">Équipements</label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {availableAmenities.map(amenity => (
                    <label key={amenity.value} className="flex items-center">
                      <input 
                        type="checkbox" 
                        checked={selectedAmenities.includes(amenity.value)}
                        onChange={() => handleAmenityToggle(amenity.value)}
                        className="mr-2 text-primary rounded" 
                      />
                      <span className="text-sm text-secondary">{amenity.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Résultats */}
        <div className="mb-6">
          <p className="text-secondary">
            {filteredProperties.length} propriété{filteredProperties.length > 1 ? 's' : ''} trouvée{filteredProperties.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Grille des propriétés */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => handlePropertyClick(property.id)}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                  <span className="text-sm font-semibold text-primary">
                    ${property.price}/nuit
                  </span>
                </div>
              </div>

              {/* Catégorie et quartier */}
              <div className="px-6 pb-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 bg-primary bg-opacity-10 text-primary text-xs font-medium rounded-full">
                    {property.category}
                  </span>
                  <span className="text-xs text-secondary">
                    {property.neighborhood}
                  </span>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                {/* Titre et localisation */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold font-heading text-primary mb-2 line-clamp-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-secondary text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{property.location}</span>
                  </div>
                </div>

                {/* Note et avis */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium text-primary">
                      {property.rating}
                    </span>
                  </div>
                  <span className="ml-2 text-sm text-secondary">
                    ({property.reviews} avis)
                  </span>
                </div>

                {/* Détails */}
                <div className="flex items-center justify-between mb-4 text-sm text-secondary">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{property.guests}</span>
                    </div>
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      <span>{property.bathrooms}</span>
                    </div>
                  </div>
                </div>

                {/* Équipements */}
                <div className="flex items-center space-x-2 mb-4">
                  {property.amenities.map((amenity, index) => {
                    const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons];
                    return IconComponent ? (
                      <div key={index} className="p-2 bg-gray-100 rounded-lg">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                    ) : null;
                  })}
                </div>

                {/* Bouton de réservation */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePropertyClick(property.id);
                  }}
                  className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors"
                >
                  Voir les détails
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Message si aucun résultat */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold font-heading text-primary mb-2">
              Aucune propriété trouvée
            </h3>
            <p className="text-secondary">
              Essayez de modifier vos critères de recherche
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertiesPage;