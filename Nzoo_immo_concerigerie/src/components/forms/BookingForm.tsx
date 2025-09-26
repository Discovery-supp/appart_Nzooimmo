import React, { useState } from 'react';
import FormProgress from '../Common/FormProgress';
import Counter from '../Common/Counter';
import { Calendar, Users, CreditCard, MapPin, Clock } from 'lucide-react';
import { Reservation, FormStep } from '../../types';

const BookingForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<Reservation>>({
    checkIn: new Date(),
    checkOut: new Date(),
    guests: {
      adults: 1,
      children: 0,
      infants: 0,
      pets: 0
    },
    totalAmount: 0,
    paymentMethod: '',
    additionalServices: [],
    specialRequests: ''
  });

  const [guestInfo, setGuestInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    postalCode: ''
  });

  const steps: FormStep[] = [
    { title: 'Dates et voyageurs', isCompleted: false, isActive: true },
    { title: 'Détails de la réservation', isCompleted: false, isActive: false },
    { title: 'Informations et paiement', isCompleted: false, isActive: false },
  ];

  // Données de la propriété (exemple)
  const property = {
    title: "Magnifique appartement avec vue sur le fleuve Congo",
    location: "Kinshasa, RDC",
    pricePerNight: 85,
    cleaningFee: 25,
    serviceFee: 0.12,
    touristTax: 3,
    rating: 4.8,
    reviewsCount: 127,
    images: ["https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"]
  };

  const paymentMethods = [
    { value: 'visa', label: 'Visa' },
    { value: 'mastercard', label: 'Mastercard' },
    { value: 'mobile_money', label: 'Mobile Money' },
    { value: 'cash', label: 'Espèces' }
  ];

  const additionalServices = [
    { id: 'car_rental', label: 'Location véhicule', price: 35 },
    { id: 'breakfast', label: 'Option petit-déjeuner', price: 12 },
    { id: 'extra_cleaning', label: 'Service de ménage supplémentaire', price: 20 },
    { id: 'airport_pickup', label: 'Accueil aéroport', price: 40 }
  ];

  const countries = [
    'République Démocratique du Congo',
    'France', 'Belgique', 'Canada', 'États-Unis', 'Cameroun', 
    'Côte d\'Ivoire', 'Sénégal', 'Maroc', 'Autres'
  ];

  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) return 0;
    const diffTime = Math.abs(new Date(formData.checkOut).getTime() - new Date(formData.checkIn).getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const calculateTotal = () => {
    const nights = calculateNights();
    const subtotal = nights * property.pricePerNight;
    const cleaning = property.cleaningFee;
    const selectedServices = additionalServices
      .filter(service => formData.additionalServices?.includes(service.id))
      .reduce((sum, service) => sum + service.price, 0);
    const serviceFee = (subtotal + cleaning + selectedServices) * property.serviceFee;
    const touristTax = nights * property.touristTax;
    
    return {
      subtotal,
      cleaning,
      selectedServices,
      serviceFee,
      touristTax,
      total: subtotal + cleaning + selectedServices + serviceFee + touristTax
    };
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGuestChange = (field: string, value: any) => {
    setGuestInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices?.includes(serviceId)
        ? prev.additionalServices.filter(s => s !== serviceId)
        : [...(prev.additionalServices || []), serviceId]
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const pricing = calculateTotal();

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Calendar className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Quand souhaitez-vous séjourner ?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date d'arrivée
                </label>
                <input
                  type="date"
                  value={formData.checkIn ? formData.checkIn.toISOString().split('T')[0] : ''}
                  onChange={(e) => handleInputChange('checkIn', new Date(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date de départ
                </label>
                <input
                  type="date"
                  value={formData.checkOut ? formData.checkOut.toISOString().split('T')[0] : ''}
                  onChange={(e) => handleInputChange('checkOut', new Date(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Nombre de voyageurs
              </h3>
              <div className="space-y-4">
                <Counter
                  label="Adultes"
                  value={formData.guests?.adults || 1}
                  min={1}
                  max={16}
                  onChange={(value) => handleInputChange('guests', { ...formData.guests, adults: value })}
                />
                <Counter
                  label="Enfants (2-12 ans)"
                  value={formData.guests?.children || 0}
                  min={0}
                  max={10}
                  onChange={(value) => handleInputChange('guests', { ...formData.guests, children: value })}
                />
                <Counter
                  label="Nourrissons (0-2 ans)"
                  value={formData.guests?.infants || 0}
                  min={0}
                  max={5}
                  onChange={(value) => handleInputChange('guests', { ...formData.guests, infants: value })}
                />
                <Counter
                  label="Animaux domestiques"
                  value={formData.guests?.pets || 0}
                  min={0}
                  max={5}
                  onChange={(value) => handleInputChange('guests', { ...formData.guests, pets: value })}
                />
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Clock className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Finalisez votre réservation</h2>
            </div>

            {/* Récapitulatif du séjour */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Récapitulatif du séjour</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Dates de séjour</span>
                  <span>
                    {formData.checkIn?.toLocaleDateString()} - {formData.checkOut?.toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Nombre de nuits</span>
                  <span>{calculateNights()} nuits</span>
                </div>
                <div className="flex justify-between">
                  <span>Nombre de voyageurs</span>
                  <span>
                    {(formData.guests?.adults || 0) + (formData.guests?.children || 0)} voyageurs
                    {(formData.guests?.infants || 0) > 0 && `, ${formData.guests.infants} nourrisson(s)`}
                    {(formData.guests?.pets || 0) > 0 && `, ${formData.guests.pets} animal(aux)`}
                  </span>
                </div>
              </div>
            </div>

            {/* Détail des prix */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Détail des prix</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>${property.pricePerNight} × {calculateNights()} nuits</span>
                  <span>${pricing.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Frais de ménage</span>
                  <span>${pricing.cleaning.toFixed(2)}</span>
                </div>
                {pricing.selectedServices > 0 && (
                  <div className="flex justify-between">
                    <span>Services additionnels</span>
                    <span>${pricing.selectedServices.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Frais de service</span>
                  <span>${pricing.serviceFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxe de séjour</span>
                  <span>${pricing.touristTax.toFixed(2)}</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${pricing.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Options supplémentaires */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Options supplémentaires</h3>
              <div className="space-y-3">
                {additionalServices.map(service => (
                  <label key={service.id} className="flex items-center justify-between p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.additionalServices?.includes(service.id) || false}
                        onChange={() => handleServiceToggle(service.id)}
                        className="mr-3 text-blue-600 rounded"
                      />
                      <span className="text-gray-700">{service.label}</span>
                    </div>
                    <span className="font-semibold text-gray-900">+${service.price}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <CreditCard className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Vos informations et paiement</h2>
            </div>

            {/* Informations personnelles */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations personnelles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                  <input
                    type="text"
                    value={guestInfo.firstName}
                    onChange={(e) => handleGuestChange('firstName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                  <input
                    type="text"
                    value={guestInfo.lastName}
                    onChange={(e) => handleGuestChange('lastName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={guestInfo.email}
                    onChange={(e) => handleGuestChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                  <input
                    type="tel"
                    value={guestInfo.phone}
                    onChange={(e) => handleGuestChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Adresse</label>
                  <input
                    type="text"
                    value={guestInfo.address}
                    onChange={(e) => handleGuestChange('address', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Code postal</label>
                  <input
                    type="text"
                    value={guestInfo.postalCode}
                    onChange={(e) => handleGuestChange('postalCode', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ville</label>
                  <input
                    type="text"
                    value={guestInfo.city}
                    onChange={(e) => handleGuestChange('city', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pays</label>
                  <select
                    value={guestInfo.country}
                    onChange={(e) => handleGuestChange('country', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un pays</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message au propriétaire (optionnel)
                </label>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                  rows={3}
                  placeholder="Dites au propriétaire pourquoi vous voyagez et ce qui vous intéresse..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
            </div>

            {/* Paiement */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Mode de paiement</h3>
              <div className="space-y-3">
                {paymentMethods.map(method => (
                  <label key={method.value} className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.value}
                      checked={formData.paymentMethod === method.value}
                      onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                      className="mr-3 text-blue-600"
                    />
                    <span className="text-gray-700">{method.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Conditions générales */}
            <div className="bg-gray-50 rounded-lg p-6">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  className="mr-3 mt-1 text-blue-600 rounded"
                />
                <span className="text-sm text-gray-700">
                  J'accepte les{' '}
                  <a href="#" className="text-blue-600 hover:underline">
                    conditions générales
                  </a>{' '}
                  et la{' '}
                  <a href="#" className="text-blue-600 hover:underline">
                    politique de confidentialité
                  </a>
                  .
                </span>
              </label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulaire principal */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Formulaire de Réservation
                </h1>
                <p className="text-gray-600">
                  Finalisez votre réservation en quelques étapes
                </p>
              </div>

              <FormProgress steps={steps} currentStep={currentStep} />

              <form onSubmit={(e) => e.preventDefault()}>
                {renderStepContent()}

                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      currentStep === 0
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Retour
                  </button>

                  <button
                    type="button"
                    onClick={currentStep === steps.length - 1 ? () => console.log('Submit booking', formData) : nextStep}
                    className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-all shadow-lg"
                  >
                    {currentStep === steps.length - 1 ? 'Confirmer la réservation' : 'Suivant'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar avec récapitulatif */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8">
              {/* Header de la propriété */}
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-1">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-xs text-gray-600 mb-2">
                    <MapPin className="w-3 h-3 mr-1" />
                    {property.location}
                  </div>
                  <div className="flex items-center text-xs">
                    <div className="flex text-yellow-400 mr-1">
                      {'★'.repeat(Math.floor(property.rating))}
                    </div>
                    <span className="text-gray-600">
                      {property.rating} ({property.reviewsCount} avis)
                    </span>
                  </div>
                </div>
              </div>

              {/* Récapitulatif des prix */}
              <div className="space-y-3 text-sm">
                {calculateNights() > 0 && (
                  <>
                    <div className="flex justify-between">
                      <span>${property.pricePerNight} × {calculateNights()} nuits</span>
                      <span>${pricing.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Frais de ménage</span>
                      <span>${pricing.cleaning.toFixed(2)}</span>
                    </div>
                    {pricing.selectedServices > 0 && (
                      <div className="flex justify-between">
                        <span>Services additionnels</span>
                        <span>${pricing.selectedServices.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Frais de service</span>
                      <span>${pricing.serviceFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxe de séjour</span>
                      <span>${pricing.touristTax.toFixed(2)}</span>
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${pricing.total.toFixed(2)}</span>
                    </div>
                  </>
                )}
              </div>

              {calculateNights() === 0 && (
                <div className="text-center text-gray-500 py-8">
                  <Calendar className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Sélectionnez vos dates pour voir le prix total</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;