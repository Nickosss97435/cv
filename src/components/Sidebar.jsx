import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/profil-2.svg";
import {
  FaHome,
  FaBriefcase,
  FaGraduationCap,
  FaProjectDiagram,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const links = [
    { name: "Présentation", href: "/", icon: <FaHome /> },
    { name: "À Propos", href: "/languages", icon: <FaCode /> },
    { name: "Expérience", href: "/experience", icon: <FaBriefcase /> },
    { name: "Formation", href: "/education", icon: <FaGraduationCap /> },
    { name: "Projets", href: "/projects", icon: <FaProjectDiagram /> },
    { name: "Contact", href: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <motion.aside
      className={`fixed top-0 left-0 h-screen bg-gray-800 dark:bg-cyan-600 text-white shadow-lg transition-all duration-300 ${
        isOpen ? "p-6 w-[256px]" : "w-16"
      } overflow-y-auto z-50`}
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header avec logo et bouton de collapse */}
      <div
        className={`flex items-center justify-center ${
          isOpen ? "mb-8" : "my-4"
        }`}
      >
        {/* Logo utilisé comme bouton de basculement */}
        <button
          onClick={toggleSidebar}
          className="focus:outline-none flex items-center justify-center"
        >
          <img
            src={logo}
            alt="logo"
            className={`h-8 w-auto ${isOpen ? "" : "mx-auto"}`}
          />
          {isOpen && (
            <span className="text-xl font-semibold ml-2">Nicolas QUÉRAT</span>
          )}
        </button>
      </div>

      {/* Navigation principale */}
      <nav>
        <ul>
          {links.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mb-4"
            >
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `flex items-center text-gray-400 dark:text-gray-800 hover:text-white rounded-lg transition-colors ${
                    isActive ? "text-white font-bold" : ""
                  }`
                }
              >
                <span
                  className={`${
                    isOpen ? "mr-2 text-xl" : "mx-auto text-2xl block"
                  }`}
                >
                  {link.icon}
                </span>
                {isOpen && link.name}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Pied de page avec copyright */}
      {isOpen && (
        <div className="absolute bottom-0 left-0 w-full p-4 text-center text-sm text-gray-400 dark:text-gray-800 border-t border-gray-700">
          &copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.
        </div>
      )}
    </motion.aside>
  );
};

export default Sidebar;