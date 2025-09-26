import React, { useState } from 'react';
import { CalendarIcon, UserGroupIcon, CreditCardIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const BookingForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    adults: 2,
    children: 0,
    infants: 0,
    pets: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    city: '',
    country: 'RDC',
    message: '',
    paymentMethod: 'visa',
    options: {
      carRental: false,
      breakfast: false,
      extraCleaning: false,
      airportTransfer: false
    }
  });

  const steps = [
    { id: 1, title: 'Dates et voyageurs', icon: CalendarIcon },
    { id: 2, title: 'Détails de réservation', icon: UserGroupIcon },
    { id: 3, title: 'Informations et paiement', icon: CreditCardIcon }
  ];

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking data:', bookingData);
    // Handle booking submission
  };

  const calculateNights = () => {
    if (bookingData.checkIn && bookingData.checkOut) {
      const checkIn = new Date(bookingData.checkIn);
      const checkOut = new Date(bookingData.checkOut);
      const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
            currentStep >= step.id 
              ? 'bg-primary-600 border-primary-600 text-white' 
              : 'border-gray-300 text-gray-400'
          }`}>
            {currentStep > step.id ? (
              <CheckCircleIcon className="w-6 h-6" />
            ) : (
              <step.icon className="w-5 h-5" />
            )}
          </div>
          <span className={`ml-2 text-sm font-medium ${
            currentStep >= step.id ? 'text-primary-600' : 'text-gray-400'
          }`}>
            {step.title}
          </span>
          {index < steps.length - 1 && (
            <div className={`w-16 h-0.5 mx-4 ${
              currentStep > step.id ? 'bg-primary-600' : 'bg-gray-300'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <StepIndicator />

      <form onSubmit={handleSubmit}>
        {/* Step 1: Dates and Guests */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Quand souhaitez-vous séjourner ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date d'arrivée
                </label>
                <input
                  type="date"
                  value={bookingData.checkIn}
                  onChange={(e) => setBookingData({ ...bookingData, checkIn: e.target.value })}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date de départ
                </label>
                <input
                  type="date"
                  value={bookingData.checkOut}
                  onChange={(e) => setBookingData({ ...bookingData, checkOut: e.target.value })}
                  className="input-field"
                  required
                />
              </div>
            </div>

            {calculateNights() > 0 && (
              <div className="bg-primary-50 p-4 rounded-lg">
                <p className="text-primary-700 font-medium">
                  Durée du séjour: {calculateNights()} nuit{calculateNights() > 1 ? 's' : ''}
                </p>
              </div>
            )}

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Nombre de voyageurs</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adultes
                  </label>
                  <select
                    value={bookingData.adults}
                    onChange={(e) => setBookingData({ ...bookingData, adults: parseInt(e.target.value) })}
                    className="input-field"
                  >
                    {[...Array(16)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enfants
                  </label>
                  <select
                    value={bookingData.children}
                    onChange={(e) => setBookingData({ ...bookingData, children: parseInt(e.target.value) })}
                    className="input-field"
                  >
                    {[...Array(11)].map((_, i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nourrissons
                  </label>
                  <select
                    value={bookingData.infants}
                    onChange={(e) => setBookingData({ ...bookingData, infants: parseInt(e.target.value) })}
                    className="input-field"
                  >
                    {[...Array(6)].map((_, i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Animaux
                  </label>
                  <select
                    value={bookingData.pets}
                    onChange={(e) => setBookingData({ ...bookingData, pets: parseInt(e.target.value) })}
                    className="input-field"
                  >
                    {[...Array(6)].map((_, i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Booking Details */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Finalisez votre réservation
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Récapitulatif du séjour</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Dates de séjour:</span>
                  <span>{bookingData.checkIn} - {bookingData.checkOut}</span>
                </div>
                <div className="flex justify-between">
                  <span>Nombre de nuits:</span>
                  <span>{calculateNights()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Nombre de voyageurs:</span>
                  <span>{bookingData.adults + bookingData.children + bookingData.infants}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Options supplémentaires</h3>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={bookingData.options.carRental}
                    onChange={(e) => setBookingData({
                      ...bookingData,
                      options: { ...bookingData.options, carRental: e.target.checked }
                    })}
                    className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-3 text-gray-700">Location de véhicule (+$30/jour)</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={bookingData.options.breakfast}
                    onChange={(e) => setBookingData({
                      ...bookingData,
                      options: { ...bookingData.options, breakfast: e.target.checked }
                    })}
                    className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-3 text-gray-700">Petit-déjeuner (+$15/personne/jour)</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={bookingData.options.extraCleaning}
                    onChange={(e) => setBookingData({
                      ...bookingData,
                      options: { ...bookingData.options, extraCleaning: e.target.checked }
                    })}
                    className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-3 text-gray-700">Service de ménage supplémentaire (+$25)</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={bookingData.options.airportTransfer}
                    onChange={(e) => setBookingData({
                      ...bookingData,
                      options: { ...bookingData.options, airportTransfer: e.target.checked }
                    })}
                    className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-3 text-gray-700">Accueil aéroport (+$40)</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Personal Information and Payment */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Vos informations et paiement
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  value={bookingData.firstName}
                  onChange={(e) => setBookingData({ ...bookingData, firstName: e.target.value })}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  value={bookingData.lastName}
                  onChange={(e) => setBookingData({ ...bookingData, lastName: e.target.value })}
                  className="input-field"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={bookingData.email}
                  onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                  className="input-field"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresse
              </label>
              <input
                type="text"
                value={bookingData.address}
                onChange={(e) => setBookingData({ ...bookingData, address: e.target.value })}
                className="input-field"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Code postal
                </label>
                <input
                  type="text"
                  value={bookingData.postalCode}
                  onChange={(e) => setBookingData({ ...bookingData, postalCode: e.target.value })}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ville
                </label>
                <input
                  type="text"
                  value={bookingData.city}
                  onChange={(e) => setBookingData({ ...bookingData, city: e.target.value })}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pays
                </label>
                <select
                  value={bookingData.country}
                  onChange={(e) => setBookingData({ ...bookingData, country: e.target.value })}
                  className="input-field"
                >
                  <option value="RDC">RD Congo</option>
                  <option value="FR">France</option>
                  <option value="BE">Belgique</option>
                  <option value="CA">Canada</option>
                  <option value="US">États-Unis</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message au propriétaire (optionnel)
              </label>
              <textarea
                value={bookingData.message}
                onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                rows={4}
                className="input-field"
                placeholder="Partagez vos besoins spéciaux ou questions..."
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Paiement</h3>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="visa"
                    checked={bookingData.paymentMethod === 'visa'}
                    onChange={(e) => setBookingData({ ...bookingData, paymentMethod: e.target.value })}
                    className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500"
                  />
                  <span className="ml-3 text-gray-700">Visa/Mastercard</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="mobile-money"
                    checked={bookingData.paymentMethod === 'mobile-money'}
                    onChange={(e) => setBookingData({ ...bookingData, paymentMethod: e.target.value })}
                    className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500"
                  />
                  <span className="ml-3 text-gray-700">Mobile Money</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={bookingData.paymentMethod === 'cash'}
                    onChange={(e) => setBookingData({ ...bookingData, paymentMethod: e.target.value })}
                    className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500"
                  />
                  <span className="ml-3 text-gray-700">Paiement en espèces</span>
                </label>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  required
                  className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 mt-1"
                />
                <span className="ml-3 text-sm text-gray-700">
                  J'accepte les{' '}
                  <a href="/terms" className="text-primary-600 hover:text-primary-700 underline">
                    conditions générales
                  </a>{' '}
                  et la{' '}
                  <a href="/privacy" className="text-primary-600 hover:text-primary-700 underline">
                    politique de confidentialité
                  </a>
                </span>
              </label>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-8 border-t border-gray-200">
          <button
            type="button"
            onClick={prevStep}
            className={`btn-secondary ${currentStep === 1 ? 'invisible' : ''}`}
          >
            Retour
          </button>
          
          {currentStep < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="btn-primary"
            >
              Suivant
            </button>
          ) : (
            <button
              type="submit"
              className="btn-primary"
            >
              Confirmer la réservation
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default BookingForm;