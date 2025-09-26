import React, { useState } from 'react';
import { UserIcon, BriefcaseIcon, WrenchScrewdriverIcon, ClockIcon, CurrencyDollarIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const ServiceProviderRegistrationForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    civility: 'M.',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    primaryPhone: '',
    secondaryPhone: '',
    email: '',
    address: '',
    postalCode: '',
    city: '',
    country: 'RDC',
    
    // Professional Information
    companyName: '',
    rccmNumber: '',
    legalForm: 'auto-entrepreneur',
    taxNumber: '',
    experience: '2-5',
    activityDescription: '',
    
    // Skills and Services
    mainSkills: [] as string[],
    specialties: '',
    availableEquipment: [] as string[],
    interventionTypes: [] as string[],
    
    // Availability and Coverage
    workingDays: [] as string[],
    workingHours: {
      monday: { start: '08:00', end: '17:00' },
      tuesday: { start: '08:00', end: '17:00' },
      wednesday: { start: '08:00', end: '17:00' },
      thursday: { start: '08:00', end: '17:00' },
      friday: { start: '08:00', end: '17:00' },
      saturday: { start: '08:00', end: '12:00' },
      sunday: { start: '', end: '' }
    },
    weekendWork: false,
    eveningWork: false,
    eveningSupplement: 0,
    coverageArea: [] as string[],
    
    // Pricing and Documents
    hourlyRate: 0,
    flatRate: false,
    travelFee: 0,
    urgencySupplement: 0,
    weekendSupplement: 0,
    idFiles: [] as File[],
    certificates: [] as File[],
    portfolioImages: [] as File[],
    references: '',
    acceptTerms: false,
    certifyInfo: false
  });

  const steps = [
    { id: 1, title: 'Informations personnelles', icon: UserIcon },
    { id: 2, title: 'Informations professionnelles', icon: BriefcaseIcon },
    { id: 3, title: 'Compétences et services', icon: WrenchScrewdriverIcon },
    { id: 4, title: 'Disponibilités et zones', icon: ClockIcon },
    { id: 5, title: 'Tarification et documents', icon: CurrencyDollarIcon }
  ];

  const nextStep = () => {
    if (currentStep < 5) {
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
    console.log('Service provider registration data:', formData);
    // Handle form submission
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-8 overflow-x-auto">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center flex-shrink-0">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
            currentStep >= step.id 
              ? 'bg-primary-600 border-primary-600 text-white' 
              : 'border-gray-300 text-gray-400'
          }`}>
            {currentStep > step.id ? (
              <CheckCircleIcon className="w-5 h-5" />
            ) : (
              <step.icon className="w-5 h-5" />
            )}
          </div>
          <div className="ml-2 hidden lg:block">
            <div className={`text-xs font-medium ${
              currentStep >= step.id ? 'text-primary-600' : 'text-gray-400'
            }`}>
              Étape {step.id}
            </div>
            <div className={`text-xs ${
              currentStep >= step.id ? 'text-gray-900' : 'text-gray-400'
            }`}>
              {step.title}
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className={`w-8 h-0.5 mx-2 ${
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
              Identité du Prestataire
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone principal *
                </label>
                <input
                  type="tel"
                  value={formData.primaryPhone}
                  onChange={(e) => setFormData({ ...formData, primaryPhone: e.target.value })}
                  className="input-field"
                  placeholder="+243 XXX XXX XXX"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone secondaire
                </label>
                <input
                  type="tel"
                  value={formData.secondaryPhone}
                  onChange={(e) => setFormData({ ...formData, secondaryPhone: e.target.value })}
                  className="input-field"
                  placeholder="+243 XXX XXX XXX"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresse postale complète *
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="input-field"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Code postal
                </label>
                <input
                  type="text"
                  value={formData.postalCode}
                  onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ville *
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pays
                </label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="input-field"
                >
                  <option value="RDC">RD Congo</option>
                  <option value="FR">France</option>
                  <option value="BE">Belgique</option>
                  <option value="CA">Canada</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Professional Information */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Votre Activité Professionnelle
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom de l'entreprise (si applicable)
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Numéro RCCM
                </label>
                <input
                  type="text"
                  value={formData.rccmNumber}
                  onChange={(e) => setFormData({ ...formData, rccmNumber: e.target.value })}
                  className="input-field"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Forme juridique
                </label>
                <select
                  value={formData.legalForm}
                  onChange={(e) => setFormData({ ...formData, legalForm: e.target.value })}
                  className="input-field"
                >
                  <option value="auto-entrepreneur">Auto-entrepreneur</option>
                  <option value="sarl">SARL</option>
                  <option value="sa">SA</option>
                  <option value="sarlu">SARLU</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Numéro d'impôt
                </label>
                <input
                  type="text"
                  value={formData.taxNumber}
                  onChange={(e) => setFormData({ ...formData, taxNumber: e.target.value })}
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Années d'expérience
              </label>
              <select
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                className="input-field"
              >
                <option value="0-1">0-1 an</option>
                <option value="2-5">2-5 ans</option>
                <option value="5-10">5-10 ans</option>
                <option value="10+">10+ ans</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description de votre activité (500 caractères max)
              </label>
              <textarea
                value={formData.activityDescription}
                onChange={(e) => setFormData({ ...formData, activityDescription: e.target.value })}
                rows={4}
                maxLength={500}
                className="input-field"
                placeholder="Décrivez votre activité, vos spécialités, votre approche..."
              />
              <p className="text-xs text-gray-500 mt-1">
                {formData.activityDescription.length}/500 caractères
              </p>
            </div>
          </div>
        )}

        {/* Step 3: Skills and Services */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Vos Domaines d'Intervention
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Compétences principales (sélectionnez toutes celles qui s'appliquent)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Plomberie',
                  'Électricité',
                  'Climatisation/Chauffage',
                  'Serrurerie',
                  'Menuiserie',
                  'Peinture',
                  'Montage meubles',
                  'Jardinage',
                  'Nettoyage',
                  'Maintenance générale'
                ].map((skill) => (
                  <label key={skill} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.mainSkills.includes(skill)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({ ...formData, mainSkills: [...formData.mainSkills, skill] });
                        } else {
                          setFormData({ ...formData, mainSkills: formData.mainSkills.filter(s => s !== skill) });
                        }
                      }}
                      className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <span className="ml-3 text-gray-700">{skill}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Spécialités (précisez vos domaines d'expertise)
              </label>
              <textarea
                value={formData.specialties}
                onChange={(e) => setFormData({ ...formData, specialties: e.target.value })}
                rows={3}
                className="input-field"
                placeholder="Ex: Installation de systèmes de climatisation, réparation de fuites, dépannage électrique d'urgence..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Matériel disponible
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Véhicule utilitaire',
                  'Outillage professionnel complet',
                  'Équipements de sécurité',
                  'Échelle/Échafaudage',
                  'Matériel de soudure',
                  'Outils électriques',
                  'Matériel de mesure',
                  'Équipement de nettoyage'
                ].map((equipment) => (
                  <label key={equipment} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.availableEquipment.includes(equipment)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({ ...formData, availableEquipment: [...formData.availableEquipment, equipment] });
                        } else {
                          setFormData({ ...formData, availableEquipment: formData.availableEquipment.filter(eq => eq !== equipment) });
                        }
                      }}
                      className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <span className="ml-3 text-gray-700">{equipment}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Types d'intervention
              </label>
              <div className="space-y-3">
                {[
                  'Dépannage d\'urgence',
                  'Interventions programmées',
                  'Conseils à distance',
                  'Maintenance préventive',
                  'Installation neuve',
                  'Rénovation'
                ].map((type) => (
                  <label key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.interventionTypes.includes(type)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({ ...formData, interventionTypes: [...formData.interventionTypes, type] });
                        } else {
                          setFormData({ ...formData, interventionTypes: formData.interventionTypes.filter(t => t !== type) });
                        }
                      }}
                      className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <span className="ml-3 text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Availability and Coverage */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Quand et Où Intervenez-vous ?
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Jours de travail
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'
                ].map((day) => (
                  <label key={day} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.workingDays.includes(day)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({ ...formData, workingDays: [...formData.workingDays, day] });
                        } else {
                          setFormData({ ...formData, workingDays: formData.workingDays.filter(d => d !== day) });
                        }
                      }}
                      className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <span className="ml-2 text-gray-700">{day}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    checked={formData.weekendWork}
                    onChange={(e) => setFormData({ ...formData, weekendWork: e.target.checked })}
                    className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-3 text-gray-700">Interventions le week-end</span>
                </label>
              </div>
              <div>
                <label className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    checked={formData.eveningWork}
                    onChange={(e) => setFormData({ ...formData, eveningWork: e.target.checked })}
                    className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-3 text-gray-700">Interventions en soirée</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Zones d'intervention (communes de Kinshasa)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  'Gombe', 'Kinshasa', 'Barumbu', 'Lingwala', 'Kasa-Vubu',
                  'Kalamu', 'Makala', 'Ngiri-Ngiri', 'Kintambo', 'Lemba',
                  'Limete', 'Matete', 'Ngaba', 'Bandalungwa', 'Selembao',
                  'Bumbu', 'Makala', 'Ngaliema', 'Mont-Ngafula', 'Kisenso'
                ].map((area) => (
                  <label key={area} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.coverageArea.includes(area)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({ ...formData, coverageArea: [...formData.coverageArea, area] });
                        } else {
                          setFormData({ ...formData, coverageArea: formData.coverageArea.filter(a => a !== area) });
                        }
                      }}
                      className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{area}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Pricing and Documents */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Tarification et Documents
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tarif horaire (USD) *
                </label>
                <input
                  type="number"
                  value={formData.hourlyRate}
                  onChange={(e) => setFormData({ ...formData, hourlyRate: parseFloat(e.target.value) })}
                  className="input-field"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.flatRate}
                    onChange={(e) => setFormData({ ...formData, flatRate: e.target.checked })}
                    className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-3 text-gray-700">Tarif forfaitaire disponible</span>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Frais de déplacement (USD)
                </label>
                <input
                  type="number"
                  value={formData.travelFee}
                  onChange={(e) => setFormData({ ...formData, travelFee: parseFloat(e.target.value) })}
                  className="input-field"
                  min="0"
                  step="0.01"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Majoration urgences (%)
                </label>
                <input
                  type="number"
                  value={formData.urgencySupplement}
                  onChange={(e) => setFormData({ ...formData, urgencySupplement: parseFloat(e.target.value) })}
                  className="input-field"
                  min="0"
                  max="100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Majoration soirée/week-end (%)
                </label>
                <input
                  type="number"
                  value={formData.weekendSupplement}
                  onChange={(e) => setFormData({ ...formData, weekendSupplement: parseFloat(e.target.value) })}
                  className="input-field"
                  min="0"
                  max="100"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pièce d'identité (recto-verso) *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => setFormData({ ...formData, idFiles: Array.from(e.target.files || []) })}
                  className="hidden"
                  id="id-upload"
                />
                <label htmlFor="id-upload" className="cursor-pointer">
                  <div className="text-gray-600">
                    <UserIcon className="w-12 h-12 mx-auto mb-2" />
                    <p>Téléchargez votre pièce d'identité</p>
                    <p className="text-sm">JPG, PNG (max 10MB par fichier)</p>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Diplômes/Certifications
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  multiple
                  onChange={(e) => setFormData({ ...formData, certificates: Array.from(e.target.files || []) })}
                  className="hidden"
                  id="cert-upload"
                />
                <label htmlFor="cert-upload" className="cursor-pointer">
                  <div className="text-gray-600">
                    <BriefcaseIcon className="w-12 h-12 mx-auto mb-2" />
                    <p>Téléchargez vos certifications</p>
                    <p className="text-sm">JPG, PNG, PDF (max 10MB par fichier)</p>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Photos de réalisations
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => setFormData({ ...formData, portfolioImages: Array.from(e.target.files || []) })}
                  className="hidden"
                  id="portfolio-upload"
                />
                <label htmlFor="portfolio-upload" className="cursor-pointer">
                  <div className="text-gray-600">
                    <WrenchScrewdriverIcon className="w-12 h-12 mx-auto mb-2" />
                    <p>Montrez vos réalisations</p>
                    <p className="text-sm">JPG, PNG (max 5MB par fichier)</p>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Références clients (optionnel)
              </label>
              <textarea
                value={formData.references}
                onChange={(e) => setFormData({ ...formData, references: e.target.value })}
                rows={3}
                className="input-field"
                placeholder="Noms et contacts de clients qui peuvent témoigner de votre travail..."
              />
            </div>

            <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.acceptTerms}
                  onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                  className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 mt-1"
                  required
                />
                <span className="ml-3 text-sm text-gray-700">
                  J'accepte les{' '}
                  <a href="/terms" className="text-primary-600 hover:text-primary-700 underline">
                    conditions générales
                  </a>{' '}
                  de Nzoo Immo
                </span>
              </label>

              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.certifyInfo}
                  onChange={(e) => setFormData({ ...formData, certifyInfo: e.target.checked })}
                  className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 mt-1"
                  required
                />
                <span className="ml-3 text-sm text-gray-700">
                  Je certifie l'exactitude des informations fournies et m'engage à 
                  respecter les standards de qualité de Nzoo Immo
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
          
          {currentStep < 5 ? (
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
              Créer mon compte prestataire
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ServiceProviderRegistrationForm;