import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-light py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Mon CV. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;