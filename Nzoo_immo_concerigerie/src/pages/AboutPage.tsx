import React from 'react';
import { 
  BuildingOfficeIcon, 
  StarIcon, 
  ShieldCheckIcon,
  HeartIcon,
  UserGroupIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Excellence Opérationnelle',
      description: 'Nous nous engageons à maintenir les plus hauts standards de qualité dans tous nos services.',
      icon: StarIcon
    },
    {
      title: 'Relation Humaine',
      description: 'Au cœur de notre approche, la relation humaine authentique et chaleureuse.',
      icon: HeartIcon
    },
    {
      title: 'Transparence',
      description: 'Une gestion transparente et des rapports détaillés pour une confiance totale.',
      icon: ShieldCheckIcon
    },
    {
      title: 'Innovation',
      description: 'Nous adoptons les meilleures technologies pour optimiser nos services.',
      icon: GlobeAltIcon
    }
  ];

  const team = [
    {
      name: 'Marie Kabila',
      role: 'Directrice Générale',
      description: 'Experte en gestion hôtelière avec 10 ans d\'expérience dans l\'hospitalité de luxe.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Jean-Pierre Mukendi',
      role: 'Directeur Opérationnel',
      description: 'Spécialiste en optimisation des revenus et gestion de propriétés immobilières.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Sarah Mbuyi',
      role: 'Responsable Expérience Client',
      description: 'Passionnée par l\'excellence du service client et l\'hospitalité personnalisée.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                À Propos de Nzoo Immo
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Nzoo Immo est une entreprise de conciergerie spécialisée dans la gestion de propriétés 
                meublées (Airbnb) en RDCongo. Nous offrons des services personnalisés tant pour les 
                propriétaires que pour les voyageurs, garantissant des séjours sans souci et des 
                investissements rentables.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-blue-200">Propriétés gérées</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-blue-200">Clients satisfaits</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-blue-200">Années d'expérience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury apartment"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Mission Triple
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous nous engageons à créer de la valeur pour tous les acteurs de notre écosystème
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <BuildingOfficeIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Pour les Propriétaires
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fournir une gestion de propriétés exceptionnelle, maximiser et sécuriser le rendement 
                locatif de nos propriétaires partenaires en leur offrant une gestion transparente, 
                proactive et professionnelle, les libérant ainsi de toute charge opérationnelle.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <UserGroupIcon className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Pour les Voyageurs
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Enchanter chaque voyageur en leur proposant un séjour irréprochable, sûr et authentique, 
                faisant de leur passage à Kinshasa une expérience unique et mémorable.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <GlobeAltIcon className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Pour l'Écosystème
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Créer de la valeur pour notre écosystème en collaborant avec des prestataires locaux 
                d'exception et en promouvant un tourisme responsable et de qualité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Notre Vision
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Être le leader reconnu en matière de gestion de propriétés Airbnb à Kinshasa, 
              la référence incontestée de l'hospitalité locative en établissant de nouvelles 
              normes d'excellence dans le secteur de la conciergerie.
            </p>
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Notre Philosophie</h3>
              <p className="text-xl text-blue-100">
                L'excellence opérationnelle au service de la relation humaine
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident chacune de nos actions et décisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des professionnels passionnés dédiés à votre succès
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card p-8 text-center hover:scale-105 transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez l'Aventure Nzoo Immo
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Que vous soyez propriétaire, voyageur ou prestataire, nous avons une place pour vous 
            dans notre écosystème d'excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-accent">
              Devenir Partenaire
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-xl border border-white/30 transition-all duration-200 backdrop-blur-sm">
              Nous Contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;