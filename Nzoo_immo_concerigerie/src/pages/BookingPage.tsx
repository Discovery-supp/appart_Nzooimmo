import React from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from '../components/booking/BookingForm';
import PropertySummary from '../components/booking/PropertySummary';

const BookingPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock property data - replace with actual API call
  const property = {
    id: parseInt(id || '1'),
    title: 'Appartement Moderne - Gombe',
    location: 'Gombe, Kinshasa',
    price: 85,
    rating: 4.9,
    reviews: 127,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    host: {
      name: 'Marie Kabila',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      verified: true
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-max py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Formulaire de Réservation
          </h1>
          <p className="text-gray-600">
            Finalisez votre réservation en quelques étapes simples
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <BookingForm />
          </div>

          {/* Property Summary */}
          <div className="lg:col-span-1">
            <PropertySummary property={property} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;