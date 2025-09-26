import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import FormProgress from '../Common/FormProgress';
import { User, Shield, FileText, Settings, Upload } from 'lucide-react';
import { FormStep } from '../../types';

const HostForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Forfait sélectionné
    selectedPackage: '',
    commissionRate: 0,
    // Informations personnelles
    gender: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    
    // Présentation
    profileImage: '',
    description: '',
    languages: [] as string[],
    profession: '',
    interests: [] as string[],
    whyHost: '',
    
    // Préparation
    hostingFrequency: '',
    accommodationType: '',
    guestTypes: [] as string[],
    stayDuration: '',
    
    // Paiement
    paymentMethod: '',
    bankAccount: '',
    bankName: '',
    bankCountry: '',
    mobileNumber: '',
    mobileName: '',
    mobileCity: '',
    mobileNetwork: ''
  });

  // Récupérer les paramètres du forfait depuis l'URL
  useEffect(() => {
    const packageParam = searchParams.get('package');
    const commissionParam = searchParams.get('commission');
    
    if (packageParam && commissionParam) {
      const packageNames = {
        'forfait-essentielle': 'Forfait Essentielle',
        'forfait-optimisée': 'Forfait Optimisée',
        'forfait-prémium': 'Forfait Prémium'
      };
      
      const commissionRates = {
        '15%': 15,
        '25%': 25,
        'FFT*': 0 // À négocier
      };
      
      setFormData(prev => ({
        ...prev,
        selectedPackage: packageNames[packageParam as keyof typeof packageNames] || '',
        commissionRate: commissionRates[commissionParam as keyof typeof commissionRates] || 0
      }));
    }
  }, [searchParams]);

  const steps: FormStep[] = [
    { title: 'Forfait sélectionné', isCompleted: false, isActive: true },
    { title: 'Informations personnelles', isCompleted: false, isActive: false },
    { title: 'Vérification d\'identité', isCompleted: false, isActive: false },
    { title: 'Présentation personnelle', isCompleted: false, isActive: false },
    { title: 'Préparation à l\'accueil', isCompleted: false, isActive: false },
  ];

  const languages = [
    'Français', 'Lingala', 'Swahili', 'Kikongo', 'Anglais', 'Espagnol', 'Portugais', 'Arabe'
  ];

  const interests = [
    'Voyage', 'Cuisine', 'Sport', 'Musique', 'Art', 'Lecture', 'Cinema', 'Photographie',
    'Nature', 'Technologie', 'Mode', 'Histoire'
  ];

  const guestTypes = [
    'Familles avec enfants', 'Voyageurs d\'affaires', 'Couples', 'Groupes d\'amis',
    'Voyageurs solo', 'Étudiants', 'Seniors'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayToggle = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).includes(value)
        ? (prev[field] as string[]).filter(item => item !== value)
        : [...(prev[field] as string[]), value]
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

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Settings className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900">Forfait sélectionné</h2>
            </div>

            <div className="bg-primary bg-opacity-10 rounded-2xl p-8 border border-primary">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {formData.selectedPackage || 'Aucun forfait sélectionné'}
                </h3>
                <div className="text-4xl font-bold text-primary mb-4">
                  {formData.commissionRate > 0 ? `${formData.commissionRate}%` : 'FFT*'}
                </div>
                <p className="text-secondary">Commission sur vos revenus</p>
              </div>
              
              {!formData.selectedPackage && (
                <div className="mt-6 text-center">
                  <p className="text-secondary mb-4">
                    Vous n'avez pas encore choisi de forfait. Sélectionnez celui qui vous convient :
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/services"
                      className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors"
                    >
                      Voir les forfaits
                    </a>
                  </div>
                </div>
              )}
            </div>

            {formData.selectedPackage && (
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Récapitulatif de votre forfait :</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Commission automatique : {formData.commissionRate > 0 ? `${formData.commissionRate}%` : 'À négocier'}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Gestion complète selon le forfait choisi
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Support dédié 7j/7
                  </li>
                </ul>
              </div>
            )}
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <User className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900">Informations personnelles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Civilité</label>
                <select
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Sélectionner</option>
                  <option value="M">M.</option>
                  <option value="Mme">Mme</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date de naissance</label>
                <input
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => handleInputChange('birthDate', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Numéro de téléphone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+243 XXX XXX XXX"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Adresse email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <div className="mt-1 text-xs text-gray-500">
                  Minimum 8 caractères, avec lettres et chiffres
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirmer le mot de passe</label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Mode de paiement */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Mode de paiement préféré</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    checked={formData.paymentMethod === 'bank'}
                    onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                    className="mr-3 text-primary"
                  />
                  <span className="text-gray-700 font-medium">Compte bancaire</span>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="mobile"
                    checked={formData.paymentMethod === 'mobile'}
                    onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                    className="mr-3 text-primary"
                  />
                  <span className="text-gray-700 font-medium">Mobile Money</span>
                </label>
              </div>

              {formData.paymentMethod === 'bank' && (
                <div className="bg-gray-50 rounded-lg p-4 space-y-4">
                  <h4 className="font-medium text-gray-900">Informations bancaires</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Numéro de compte</label>
                      <input
                        type="text"
                        value={formData.bankAccount}
                        onChange={(e) => handleInputChange('bankAccount', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nom de la banque</label>
                      <input
                        type="text"
                        value={formData.bankName}
                        onChange={(e) => handleInputChange('bankName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pays du compte</label>
                      <input
                        type="text"
                        value={formData.bankCountry}
                        onChange={(e) => handleInputChange('bankCountry', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )}

              {formData.paymentMethod === 'mobile' && (
                <div className="bg-gray-50 rounded-lg p-4 space-y-4">
                  <h4 className="font-medium text-gray-900">Informations Mobile Money</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Numéro de téléphone</label>
                      <input
                        type="tel"
                        value={formData.mobileNumber}
                        onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                      <input
                        type="text"
                        value={formData.mobileName}
                        onChange={(e) => handleInputChange('mobileName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Ville</label>
                      <input
                        type="text"
                        value={formData.mobileCity}
                        onChange={(e) => handleInputChange('mobileCity', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Réseau mobile</label>
                      <select
                        value={formData.mobileNetwork}
                        onChange={(e) => handleInputChange('mobileNetwork', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Sélectionner</option>
                        <option value="Vodacom">Vodacom M-Pesa</option>
                        <option value="Airtel">Airtel Money</option>
                        <option value="Orange">Orange Money</option>
                        <option value="Africell">Africell Mobile Money</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900">Vérification d'identité</h2>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Pour garantir la sécurité de tous, nous devons vérifier votre identité
              </h3>
              <p className="text-blue-800 text-sm">
                Vos données sont traitées de manière sécurisée et confidentielle, conformément à notre politique de confidentialité.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Options de vérification</h3>
                
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="font-medium text-gray-900 mb-2">Photo de pièce d'identité</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Passeport, carte d'identité ou permis de conduire (recto-verso)
                    </p>
                    <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors">
                      Télécharger une photo
                    </button>
                  </div>

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
                    <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="font-medium text-gray-900 mb-2">Selfie en temps réel</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Prenez un selfie en suivant les instructions pour vérifier votre identité
                    </p>
                    <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                      Prendre un selfie
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-medium text-gray-900 mb-3">Sécurité des données</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Vos documents sont chiffrés et stockés en sécurité</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Seuls nos agents de vérification autorisés y ont accès</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Vos données ne sont jamais partagées avec des tiers</span>
                  </li>
                </ul>
              </div>

              <div>
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    className="mt-1 text-primary rounded"
                  />
                  <span className="text-sm text-gray-700">
                    Activer la vérification en deux étapes (recommandée) pour une sécurité renforcée de votre compte
                  </span>
                </label>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900">Présentation personnelle</h2>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Photo de profil</label>
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-gray-400" />
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors">
                  Choisir une photo
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description personnelle (500 caractères max)
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                maxLength={500}
                rows={5}
                placeholder="Parlez de vous, de vos passions, de votre style d'accueil..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              />
              <div className="text-right text-xs text-gray-500 mt-1">
                {formData.description.length}/500 caractères
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Langues parlées</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {languages.map(language => (
                  <label key={language} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.languages.includes(language)}
                      onChange={() => handleArrayToggle('languages', language)}
                      className="mr-2 text-primary rounded"
                    />
                    <span className="text-sm text-gray-700">{language}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Profession</label>
              <input
                type="text"
                value={formData.profession}
                onChange={(e) => handleInputChange('profession', e.target.value)}
                placeholder="Ex: Ingénieur, Enseignant, Entrepreneur..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Centres d'intérêt</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {interests.map(interest => (
                  <label key={interest} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleArrayToggle('interests', interest)}
                      className="mr-2 text-primary rounded"
                    />
                    <span className="text-sm text-gray-700">{interest}</span>
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
                onChange={(e) => handleInputChange('whyHost', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Sélectionnez une raison principale</option>
                <option value="income">Générer des revenus supplémentaires</option>
                <option value="meeting">Rencontrer des personnes du monde entier</option>
                <option value="sharing">Partager ma culture et ma ville</option>
                <option value="experience">Vivre une nouvelle expérience</option>
                <option value="property">Rentabiliser ma propriété</option>
                <option value="passion">Passion pour l'hospitalité</option>
              </select>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Settings className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900">Préparation à l'accueil</h2>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Disponibilité</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <label className="p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-colors">
                  <input
                    type="radio"
                    name="hostingFrequency"
                    value="occasionally"
                    checked={formData.hostingFrequency === 'occasionally'}
                    onChange={(e) => handleInputChange('hostingFrequency', e.target.value)}
                    className="mb-3 text-primary"
                  />
                  <div className="font-medium text-gray-900">Occasionnellement</div>
                  <div className="text-sm text-gray-600">1-2 fois par mois</div>
                </label>
                <label className="p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-colors">
                  <input
                    type="radio"
                    name="hostingFrequency"
                    value="regularly"
                    checked={formData.hostingFrequency === 'regularly'}
                    onChange={(e) => handleInputChange('hostingFrequency', e.target.value)}
                    className="mb-3 text-primary"
                  />
                  <div className="font-medium text-gray-900">Régulièrement</div>
                  <div className="text-sm text-gray-600">Plusieurs fois par mois</div>
                </label>
                <label className="p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-colors">
                  <input
                    type="radio"
                    name="hostingFrequency"
                    value="frequently"
                    checked={formData.hostingFrequency === 'frequently'}
                    onChange={(e) => handleInputChange('hostingFrequency', e.target.value)}
                    className="mb-3 text-primary"
                  />
                  <div className="font-medium text-gray-900">Fréquemment</div>
                  <div className="text-sm text-gray-600">Presque tous les jours</div>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type de logement proposé
                </label>
                <select
                  value={formData.accommodationType}
                  onChange={(e) => handleInputChange('accommodationType', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Sélectionnez un type</option>
                  <option value="entire_home">Logement entier</option>
                  <option value="private_room">Chambre privée</option>
                  <option value="shared_room">Chambre partagée</option>
                </select>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagements</h3>
              
              <div className="space-y-3">
                <label className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <input
                    type="checkbox"
                    className="mt-1 text-primary rounded"
                  />
                  <div>
                    <div className="font-medium text-gray-900">Standards de qualité Nzoo Immo</div>
                    <div className="text-sm text-gray-600">
                      Je m'engage à respecter les standards de propreté, de sécurité et d'accueil
                    </div>
                  </div>
                </label>
                
                <label className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <input
                    type="checkbox"
                    className="mt-1 text-primary rounded"
                  />
                  <div>
                    <div className="font-medium text-gray-900">Politique de non-discrimination</div>
                    <div className="text-sm text-gray-600">
                      Je m'engage à accueillir tous les voyageurs sans discrimination
                    </div>
                  </div>
                </label>
                
                <label className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <input
                    type="checkbox"
                    className="mt-1 text-primary rounded"
                  />
                  <div>
                    <div className="font-medium text-gray-900">Normes de sécurité</div>
                    <div className="text-sm text-gray-600">
                      Je garantis que mon logement respecte les normes de sécurité requises
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Préférences</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Types de voyageurs préférés
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {guestTypes.map(type => (
                    <label key={type} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.guestTypes.includes(type)}
                        onChange={() => handleArrayToggle('guestTypes', type)}
                        className="mr-3 text-primary rounded"
                      />
                      <span className="text-sm text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Préférence de durée de séjour
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['Courte (1-3 nuits)', 'Moyenne (4-7 nuits)', 'Longue (8+ nuits)'].map(duration => (
                    <label key={duration} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-colors">
                      <input
                        type="radio"
                        name="stayDuration"
                        value={duration}
                        checked={formData.stayDuration === duration}
                        onChange={(e) => handleInputChange('stayDuration', e.target.value)}
                        className="mr-3 text-primary"
                      />
                      <span className="text-sm text-gray-700">{duration}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Devenez hôte Nzoo Immo
            </h1>
            <p className="text-gray-600">
              Rejoignez la communauté Nzoo Immo et transformez votre propriété en source de revenus
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
                onClick={currentStep === steps.length - 1 ? () => console.log('Submit host form', formData) : nextStep}
                className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-all shadow-lg"
              >
                {currentStep === steps.length - 1 ? 'Créer mon compte hôte' : 'Suivant'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HostForm;