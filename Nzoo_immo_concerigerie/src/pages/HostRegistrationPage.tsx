import React from 'react';
import HostRegistrationForm from '../components/forms/HostRegistrationForm';

const HostRegistrationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-max py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Devenez Hôte Nzoo Immo
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Rejoignez notre réseau de propriétaires et transformez votre bien en source de revenus optimisée
            </p>
          </div>
          
          <HostRegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default HostRegistrationPage;