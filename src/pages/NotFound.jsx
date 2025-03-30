import React from 'react';
import bgImage from '../assets/404-Ampoule.jpeg';

const NotFound = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay pour le mode dark/light */}
      <div className="absolute inset-0 bg-black opacity-50 dark:opacity-80"></div>

      {/* Contenu principal */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold text-white mb-4">Oops ! 404</h1>
        <h3 className="text-3xl text-yellow-500 dark:text-yellow-400 mb-4">
          Il semblerait que vous soyez échoué...
        </h3>
        <p className="text-lg text-gray-300 dark:text-gray-400 mb-8">
          Pas de panique, revenez sur la page d'accueil.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-cyan-600 dark:bg-cyan-950 text-white font-semibold rounded-md hover:bg-cyan-700 dark:hover:bg-cyan-800 transition duration-300"
        >
          Revenez sur terre
        </a>
      </div>
    </div>
  );
};

export default NotFound;