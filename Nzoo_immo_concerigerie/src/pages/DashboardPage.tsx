import React from 'react';
import { 
  ChartBarIcon, 
  CalendarIcon, 
  BuildingOfficeIcon, 
  CurrencyDollarIcon,
  UserGroupIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const DashboardPage: React.FC = () => {
  // Mock data - replace with actual API calls
  const stats = [
    {
      title: 'Revenus ce mois',
      value: '$2,450',
      change: '+12%',
      changeType: 'positive' as const,
      icon: CurrencyDollarIcon
    },
    {
      title: 'Réservations actives',
      value: '8',
      change: '+3',
      changeType: 'positive' as const,
      icon: CalendarIcon
    },
    {
      title: 'Propriétés gérées',
      value: '3',
      change: '0',
      changeType: 'neutral' as const,
      icon: BuildingOfficeIcon
    },
    {
      title: 'Taux d\'occupation',
      value: '85%',
      change: '+5%',
      changeType: 'positive' as const,
      icon: ChartBarIcon
    }
  ];

  const recentBookings = [
    {
      id: 1,
      guest: 'Marie Dubois',
      property: 'Appartement Gombe',
      checkIn: '2024-01-15',
      checkOut: '2024-01-18',
      status: 'confirmed',
      amount: '$255'
    },
    {
      id: 2,
      guest: 'Jean Mukendi',
      property: 'Villa Bandalungwa',
      checkIn: '2024-01-20',
      checkOut: '2024-01-25',
      status: 'pending',
      amount: '$750'
    },
    {
      id: 3,
      guest: 'Sarah Johnson',
      property: 'Studio Lemba',
      checkIn: '2024-01-22',
      checkOut: '2024-01-24',
      status: 'confirmed',
      amount: '$90'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'Confirmée';
      case 'pending':
        return 'En attente';
      case 'cancelled':
        return 'Annulée';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-max py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Tableau de Bord
          </h1>
          <p className="text-gray-600">
            Gérez vos propriétés et suivez vos performances
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className={`text-sm font-medium ${
                    stat.changeType === 'positive' 
                      ? 'text-green-600' 
                      : stat.changeType === 'negative'
                      ? 'text-red-600'
                      : 'text-gray-600'
                  }`}>
                    {stat.change}
                  </p>
                </div>
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Bookings */}
          <div className="lg:col-span-2">
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Réservations Récentes
                </h2>
                <button className="text-primary-600 hover:text-primary-700 font-medium">
                  Voir tout
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Voyageur</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Propriété</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Dates</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Statut</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Montant</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentBookings.map((booking) => (
                      <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                              <UserGroupIcon className="w-4 h-4 text-primary-600" />
                            </div>
                            <span className="font-medium text-gray-900">{booking.guest}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-gray-600">{booking.property}</td>
                        <td className="py-4 px-4 text-gray-600">
                          <div className="flex items-center">
                            <ClockIcon className="w-4 h-4 mr-1" />
                            {booking.checkIn} - {booking.checkOut}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                            {getStatusText(booking.status)}
                          </span>
                        </td>
                        <td className="py-4 px-4 font-semibold text-gray-900">{booking.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Actions Rapides
              </h2>
              <div className="space-y-3">
                <button className="w-full btn-primary text-left">
                  + Ajouter une propriété
                </button>
                <button className="w-full btn-secondary text-left">
                  Voir le calendrier
                </button>
                <button className="w-full btn-secondary text-left">
                  Gérer les tarifs
                </button>
                <button className="w-full btn-secondary text-left">
                  Rapport financier
                </button>
              </div>
            </div>

            {/* Calendar Widget */}
            <div className="card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Prochaines Arrivées
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CalendarIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Aujourd'hui</p>
                    <p className="text-sm text-gray-600">Marie Dubois - 15h00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CalendarIcon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Demain</p>
                    <p className="text-sm text-gray-600">Jean Mukendi - 14h00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;