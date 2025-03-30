import React from "react";
import aboutData from "../data/about.json";

const Contact = () => {
  // Fonction pour gérer le téléchargement du CV
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "https://cv.b2nservices.com/media/CV%20-%20QUERAT%20Nicolas%2012%20-%202020.pdf";
    link.download = "CV-Nicolas-QUÉRAT.pdf";
    link.click();
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Merci pour votre message ! Je vous répondrai dès que possible.");
  };

  // Fonctions pour les interactions
  const handleEmailClick = () => {
    window.location.href = `mailto:${aboutData.email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${aboutData.phoneNumber}`;
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${aboutData.phoneNumber.replace(/\s/g, "")}`, "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-slate-600 dark:from-cyan-900 dark:to-slate-800 p-8">
      <div className="w-full max-w-6xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-12 transform transition-all hover:scale-105 duration-500">
        {/* Section Informations de Contact */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-slate-600 dark:from-cyan-400 dark:to-slate-400 animate-text">
              Contactez-moi
            </h2>
            <div className="mt-6 space-y-4 text-gray-700 dark:text-gray-300">
              {/* Téléphone */}
              <p
                className="text-lg cursor-pointer hover:text-cyan-600 transition duration-300"
                onClick={handlePhoneClick}
              >
                <span className="font-semibold">Téléphone :</span> {aboutData.phoneNumber}
              </p>

              {/* Email */}
              <p
                className="text-lg cursor-pointer hover:text-cyan-600 transition duration-300"
                onClick={handleEmailClick}
              >
                <span className="font-semibold">Email :</span> {aboutData.email}
              </p>

              {/* Adresse */}
              <p
                className="text-lg cursor-pointer hover:text-cyan-600 transition duration-300"
                onClick={() => {
                  window.open(
                    `https://www.google.com/maps?q=${aboutData.address},${aboutData.CP}+${aboutData.ville},${aboutData.region}`,
                    "_blank"
                  );
                }}
              >
                <span className="font-semibold">Adresse :</span> {aboutData.address}, {aboutData.CP}{" "}
                {aboutData.ville}, {aboutData.region}
              </p>

              {/* Bouton Télécharger CV */}
              <button
                onClick={handleDownload}
                className="mt-6 px-6 py-3 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-700 transition duration-300"
              >
                Télécharger mon CV
              </button>

              {/* Logo WhatsApp */}
              <div className="mt-6 flex items-center space-x-4">
                <p className="text-lg font-semibold">Chattez avec moi :</p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-10 h-10 cursor-pointer hover:opacity-80 transition duration-300"
                  onClick={handleWhatsAppClick}
                />
              </div>
            </div>
          </div>

          {/* Section Formulaire de Contact */}
          <div className="w-full sm:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-cyan-900"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-cyan-900"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-cyan-900"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-700 transition duration-300"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Section Carte Google Maps */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">Mon Emplacement</h3>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4012.9911959957303!2d55.3670662752537!3d-20.92456408069878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x218287720a794555%3A0xb21367b5c7cefa16!2s1%20Chem.%20de%20la%20Frm%20Avicole%2C%20La%20Possession%2097419%2C%20La%20R%C3%A9union!5e1!3m2!1sfr!2sfr!4v1742145283216!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;