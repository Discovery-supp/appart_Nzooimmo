import React, { useState } from 'react';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactReason: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form data:', formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      title: 'Téléphone',
      value: '+243 XXX XXX XXX',
      description: 'Lun-Ven 8h-18h, Sam 9h-15h',
      icon: PhoneIcon,
      action: 'tel:+243XXXXXXXXX'
    },
    {
      title: 'Email',
      value: 'contact@nzooimmo.com',
      description: 'Réponse sous 24h',
      icon: EnvelopeIcon,
      action: 'mailto:contact@nzooimmo.com'
    },
    {
      title: 'Adresse',
      value: 'Kinshasa, RDCongo',
      description: 'Sur rendez-vous uniquement',
      icon: MapPinIcon,
      action: null
    },
    {
      title: 'Support Urgence',
      value: '24/7 Disponible',
      description: 'Pour nos clients actifs',
      icon: ClockIcon,
      action: null
    }
  ];

  const faqs = [
    {
      question: 'Comment puis-je devenir propriétaire partenaire ?',
      answer: 'Il vous suffit de remplir notre formulaire d\'inscription en ligne. Notre équipe vous contactera dans les 48h pour évaluer votre propriété et discuter des modalités de collaboration.'
    },
    {
      question: 'Quels sont vos tarifs de commission ?',
      answer: 'Nos tarifs varient selon le forfait choisi : 15% pour le forfait Essentiel, 25% pour le forfait Optimisé, et tarification sur mesure pour le forfait Premium.'
    },
    {
      question: 'Proposez-vous des services d\'urgence ?',
      answer: 'Oui, nous offrons un support 24/7 pour tous nos clients actifs. En cas d\'urgence dans une de nos propriétés, notre équipe intervient rapidement.'
    },
    {
      question: 'Dans quelles zones de Kinshasa intervenez-vous ?',
      answer: 'Nous couvrons principalement Gombe, Bandalungwa, Lemba, Ngaliema, et les zones centrales de Kinshasa. Contactez-nous pour vérifier la couverture de votre zone.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contactez-Nous
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Notre équipe est là pour répondre à toutes vos questions et vous accompagner dans vos projets
          </p>
        </div>
      </section>

      <div className="container-max py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Informations de Contact
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h3>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="text-primary-600 hover:text-primary-700 font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-medium">{info.value}</p>
                      )}
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Actions Rapides
              </h3>
              <div className="space-y-3">
                <button className="w-full btn-primary text-left flex items-center">
                  <ChatBubbleLeftRightIcon className="w-5 h-5 mr-3" />
                  Chat en direct
                </button>
                <button className="w-full btn-secondary text-left flex items-center">
                  <PhoneIcon className="w-5 h-5 mr-3" />
                  Demander un rappel
                </button>
                <button className="w-full btn-secondary text-left flex items-center">
                  <EnvelopeIcon className="w-5 h-5 mr-3" />
                  Envoyer un email
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Envoyez-nous un Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Motif de contact
                  </label>
                  <select
                    value={formData.contactReason}
                    onChange={(e) => setFormData({ ...formData, contactReason: e.target.value })}
                    className="input-field"
                  >
                    <option value="general">Question générale</option>
                    <option value="host">Devenir propriétaire</option>
                    <option value="provider">Devenir prestataire</option>
                    <option value="booking">Réservation</option>
                    <option value="support">Support technique</option>
                    <option value="partnership">Partenariat</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
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
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="input-field"
                      placeholder="+243 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="input-field"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="input-field"
                    placeholder="Décrivez votre demande en détail..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                >
                  <PaperAirplaneIcon className="w-5 h-5 mr-2" />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Trouvez rapidement les réponses à vos questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Contact d'Urgence</h3>
          <p className="text-red-100 mb-6">
            Pour toute urgence concernant une propriété gérée par Nzoo Immo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+243XXXXXXXXX"
              className="inline-flex items-center justify-center bg-white text-red-600 font-semibold py-3 px-8 rounded-xl hover:bg-red-50 transition-colors duration-200"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Appeler maintenant
            </a>
            <a 
              href="https://wa.me/243XXXXXXXXX"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-xl border border-white/30 transition-all duration-200 backdrop-blur-sm"
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;