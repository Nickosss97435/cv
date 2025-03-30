// components/PersonalInfo.js
import React from 'react';

function PersonalInfo() {
  return (
    <div className="flex flex-col">
      <h2 className="text-lg font-bold">Informations Personnelles</h2>
      <p className="text-sm">Nom : Votre Nom</p>
      <p className="text-sm">Adresse : Votre Adresse</p>
      <p className="text-sm">Téléphone : Votre Téléphone</p>
    </div>
  );
}

export default PersonalInfo;
