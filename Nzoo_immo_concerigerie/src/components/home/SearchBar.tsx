import React, { useState } from 'react';
import { MagnifyingGlassIcon, MapPinIcon, CalendarDaysIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const SearchBar: React.FC = () => {
  const [searchData, setSearchData] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 1
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic
    console.log('Search data:', searchData);
  };

  return (
    <section className="relative -mt-20 z-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {/* Location */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Destination
              </label>
              <div className="relative">
                <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Où souhaitez-vous aller ?"
                  value={searchData.location}
                  onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Check-in */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Arrivée
              </label>
              <div className="relative">
                <CalendarDaysIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  value={searchData.checkIn}
                  onChange={(e) => setSearchData({ ...searchData, checkIn: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Check-out */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Départ
              </label>
              <div className="relative">
                <CalendarDaysIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  value={searchData.checkOut}
                  onChange={(e) => setSearchData({ ...searchData, checkOut: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Voyageurs
              </label>
              <div className="relative">
                <UserGroupIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={searchData.guests}
                  onChange={(e) => setSearchData({ ...searchData, guests: parseInt(e.target.value) })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                >
                  {[...Array(16)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} {i === 0 ? 'voyageur' : 'voyageurs'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="md:col-span-4 flex justify-center mt-4">
              <button
                type="submit"
                className="btn-primary text-lg px-12 py-4 flex items-center space-x-2 group"
              >
                <MagnifyingGlassIcon className="w-5 h-5" />
                <span>Rechercher</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;