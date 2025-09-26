import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import PropertyListingPage from './pages/PropertyListingPage';
import BookingPage from './pages/BookingPage';
import HostRegistrationPage from './pages/HostRegistrationPage';
import ServiceProviderRegistrationPage from './pages/ServiceProviderRegistrationPage';
import DashboardPage from './pages/DashboardPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<PropertyListingPage />} />
            <Route path="/booking/:id" element={<BookingPage />} />
            <Route path="/become-host" element={<HostRegistrationPage />} />
            <Route path="/become-provider" element={<ServiceProviderRegistrationPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;