// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowToApply from './components/HowToApply';
import RequiredDocuments from './components/RequiredDocuments';
import AboutScheme from './components/AboutScheme';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <HowToApply />
        <RequiredDocuments />
        <AboutScheme />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;