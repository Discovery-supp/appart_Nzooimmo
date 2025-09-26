import React, { useState } from 'react';
import { UserIcon, HomeIcon, DocumentCheckIcon, PresentationChartLineIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const HostRegistrationForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    civility: 'M.',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    
    // Identity Verification
    idType: 'passport',
    idFile: null as File | null,
    selfieFile: null as File | null,
    twoFactorAuth: false,
    
    // Personal Presentation
    profilePhoto: null as File | null,
    description: '',
    languages: [] as string[],
    profession: '',
    interests: [] as string[],
    whyHost: '',
    
    // Hosting Preparation
    hostingFrequency: 'occasionally',
    propertyType: '',
    acceptStandards: false,
    nonDiscrimination: false,
    safetyStandards: false,
    preferredGuests: [] as string[],
    stayDuration: 'any'
  });

  const steps = [
    { id: 1, title: 'Informations personnelles', icon: UserIcon },
    { id: 2, title: 'Vérification d\'identité', icon: DocumentCheckIcon },
    { id: 3, title: 'Présentation personnelle', icon: PresentationChartLineIcon },
    { id: 4, title: 'Préparation à l\'accueil', icon: HomeIcon }
  ];

  const nextStep = () => {
    if (currentStep < 4) {
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
    console.log('Host registration data:', formData);
    // Handle form submission
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
            currentStep >= step.id 
              ? 'bg-primary-600 border-primary-600 text-white' 
              : 'border-gray-300 text-gray-400'
          }`}>
            {currentStep > step.id ? (
              <CheckCircleIcon className="w-6 h-6" />
            ) : (
              <step.icon className="w-6 h-6" />
            )}
          </div>
          <div className="ml-3 hidden md:block">
            <div className={`text-sm font-medium ${
              currentStep >= step.id ? 'text-primary-600' : 'text-gray-400'
            }`}>
              Étape {step.id}
            </div>
            <div className={`text-sm ${
              currentStep >= step.id ? 'text-gray-900' : 'text-gray-400'
            }`}>
              {step.title}
            </div>
          </div>
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
        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Informations Personnelles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Civilité
                </label>
                <select
                  value={formData.civility}
                  onChange={(e) => setFormData({ ...formData, civility: e.target.value })}
                  className="input-field"
                >
                  <option value="M.">M.</option>
                  <option value="Mme">Mme</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
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
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="input-field"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date de naissance *
                </label>
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Numéro de téléphone *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="input-field"
                  placeholder="+243 XXX XXX XXX"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresse email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="input-field"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mot de passe *
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="input-field"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Minimum 8 caractères avec majuscules, minuscules et chiffres
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirmation du mot de passe *
                </label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="input-field"
                  required
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Identity Verification */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Vérification d'Identité
            </h2>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800 text-sm">
                Pour garantir la sécurité de tous, nous devons vérifier votre identité. 
                Vos informations sont traitées de manière sécurisée et confidentielle.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type de pièce d'identité
              </label>
              <select
                value={formData.idType}
                onChange={(e) => setFormData({ ...formData, idType: e.target.value })}
                className="input-field"
              >
                <option value="passport">Passeport</option>
                <option value="id-card">Carte d'identité</option>
                <option value="driving-license">Permis de conduire</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Photo de votre pièce d'identité (recto-verso) *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFormData({ ...formData, idFile: e.target.files?.[0] || null })}
                  className="hidden"
                  id="id-upload"
                />
                <label htmlFor="id-upload" className="cursor-pointer">
                  <div className="text-gray-600">
                    <DocumentCheckIcon className="w-12 h-12 mx-auto mb-2" />
                    <p>Cliquez pour télécharger votre pièce d'identité</p>
                    <p className="text-sm">JPG, PNG (max 10MB)</p>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Selfie de vérification *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFormData({ ...formData, selfieFile: e.target.files?.[0] || null })}
                  className="hidden"
                  id="selfie-upload"
                />
                <label htmlFor="selfie-upload" className="cursor-pointer">
                  <div className="text-gray-600">
                    <UserIcon className="w-12 h-12 mx-auto mb-2" />
                    <p>Prenez un selfie en tenant votre pièce d'identité</p>
                    <p className="text-sm">JPG, PNG (max 10MB)</p>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.twoFactorAuth}
                  onChange={(e) => setFormData({ ...formData, twoFactorAuth: e.target.checked })}
                  className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                />
                <span className="ml-3 text-gray-700">
                  Activer l'authentification à deux facteurs (recommandé)
                </span>
              </label>
            </div>
          </div>
        )}

        {/* Step 3: Personal Presentation */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Présentation Personnelle
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Photo de profil
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFormData({ ...formData, profilePhoto: e.target.files?.[0] || null })}
                  className="hidden"
                  id="profile-upload"
                />
                <label htmlFor="profile-upload" className="cursor-pointer">
                  <div className="text-gray-600">
                    <UserIcon className="w-12 h-12 mx-auto mb-2" />
                    <p>Ajoutez une photo de profil</p>
                    <p className="text-sm">JPG, PNG (max 5MB)</p>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description personnelle (500 caractères max)
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                maxLength={500}
                className="input-field"
                placeholder="Parlez-nous de vous, de vos passions, de ce qui vous motive à devenir hôte..."
              />
              <p className="text-xs text-gray-500 mt-1">
                {formData.description.length}/500 caractères
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Langues parlées
                </label>
                <div className="space-y-2">
                  {['Français', 'Lingala', 'Anglais', 'Swahili', 'Espagnol', 'Portugais'].map((lang) => (
                    <label key={lang} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.languages.includes(lang)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData({ ...formData, languages: [...formData.languages, lang] });
                          } else {
                            setFormData({ ...formData, languages: formData.languages.filter(l => l !== lang) });
                          }
                        }}
                        className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                      />
                      <span className="ml-3 text-gray-700">{lang}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Profession
                </label>
                <input
                  type="text"
                  value={formData.profession}
                  onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                  className="input-field"
                  placeholder="Votre profession actuelle"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Centres d'intérêt
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {['Voyage', 'Cuisine', 'Sport', 'Musique', 'Art', 'Lecture', 'Cinéma', 'Nature', 'Technologie'].map((interest) => (
                  <label key={interest} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({ ...formData, interests: [...formData.interests, interest] });
                        } else {
                          setFormData({ ...formData, interests: formData.interests.filter(i => i !== interest) });
                        }
                      }}
                      className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pourquoi souhaitez-vous devenir hôte ?
              </label>
              <select
                value={formData.whyHost}
                onChange={(e) => setFormData({ ...formData, whyHost: e.target.value })}
                className="input-field"
              >
                <option value="">Sélectionnez une raison</option>
                <option value="income">Générer des revenus supplémentaires</option>
                <option value="meet-people">Rencontrer des personnes du monde entier</option>
                <option value="share-culture">Partager ma culture et ma ville</option>
                <option value="property-use">Optimiser l'utilisation de ma propriété</option>
                <option value="experience">Vivre une nouvelle expérience</option>
              </select>
            </div>
          </div>
        )}

        {/* Step 4: Hosting Preparation */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Préparation à l'Accueil
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fréquence d'accueil prévue
              </label>
              <select
                value={formData.hostingFrequency}
                onChange={(e) => setFormData({ ...formData, hostingFrequency: e.target.value })}
                className="input-field"
              >
                <option value="occasionally">Occasionnellement (quelques fois par an)</option>
                <option value="regularly">Régulièrement (plusieurs fois par mois)</option>
                <option value="frequently">Fréquemment (plusieurs fois par semaine)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type de logement proposé
              </label>
              <select
                value={formData.propertyType}
                onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                className="input-field"
              >
                <option value="">Sélectionnez le type</option>
                <option value="entire-place">Logement entier</option>
                <option value="private-room">Chambre privée</option>
                <option value="shared-room">Chambre partagée</option>
              </select>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Engagements</h3>
              
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.acceptStandards}
                  onChange={(e) => setFormData({ ...formData, acceptStandards: e.target.checked })}
                  className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 mt-1"
                  required
                />
                <span className="ml-3 text-gray-700">
                  J'accepte de respecter les standards de qualité Nzoo Immo et de maintenir 
                  un niveau d'excellence dans l'accueil de mes voyageurs
                </span>
              </label>

              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.nonDiscrimination}
                  onChange={(e) => setFormData({ ...formData, nonDiscrimination: e.target.checked })}
                  className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 mt-1"
                  required
                />
                <span className="ml-3 text-gray-700">
                  Je m'engage à respecter les politiques de non-discrimination et à accueillir 
                  tous les voyageurs sans distinction
                </span>
              </label>

              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.safetyStandards}
                  onChange={(e) => setFormData({ ...formData, safetyStandards: e.target.checked })}
                  className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 mt-1"
                  required
                />
                <span className="ml-3 text-gray-700">
                  J'accepte de respecter toutes les normes de sécurité et de fournir un 
                  environnement sûr pour mes voyageurs
                </span>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Types de voyageurs préférés
                </label>
                <div className="space-y-2">
                  {['Familles', 'Professionnels', 'Couples', 'Groupes d\'amis', 'Voyageurs solo'].map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.preferredGuests.includes(type)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData({ ...formData, preferredGuests: [...formData.preferredGuests, type] });
                          } else {
                            setFormData({ ...formData, preferredGuests: formData.preferredGuests.filter(g => g !== type) });
                          }
                        }}
                        className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                      />
                      <span className="ml-3 text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Préférence de durée de séjour
                </label>
                <select
                  value={formData.stayDuration}
                  onChange={(e) => setFormData({ ...formData, stayDuration: e.target.value })}
                  className="input-field"
                >
                  <option value="any">Toute durée</option>
                  <option value="short">Courte durée (1-3 nuits)</option>
                  <option value="medium">Moyenne durée (4-7 nuits)</option>
                  <option value="long">Longue durée (8+ nuits)</option>
                </select>
              </div>
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
          
          {currentStep < 4 ? (
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
              Créer mon compte hôte
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default HostRegistrationForm;