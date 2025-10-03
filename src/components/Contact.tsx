import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { Link } from "gatsby";
import { Icon } from "./Icon";

export const ContactCard = () => {
  return (
    <div className="flex flex-wrap justify-center w-full p-8 mb-20 perspective-container">
      <div className="card-3d max-w-4xl w-full relative overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-purple-50/30"></div>
        <div className="relative z-10 p-8 depth-layer-1">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h2 className="text-4xl font-bold text-gradient mb-2">
                Contactează-ne!
              </h2>
              <p className="text-gray-600 text-lg">
                Suntem aici să te ajutăm cu orice întrebare
              </p>
            </div>
            <div className="flex gap-4 mt-4 lg:mt-0">
              <Link
                to="https://www.facebook.com/profile.php?id=100090671270044"
                className="p-3 bg-indigo-950 shadow-lg border-b rounded-full hover:scale-110 transition-all duration-300"
              >
                <Icon icon="facebook" />
              </Link>
              <Link
                to="https://instagram.com/pure.aesthetic.ro?igshid=MzRlODBiNWFlZA=="
                className="p-3 bg-indigo-950 rounded-full hover:scale-110 transition-all duration-300"
              >
                <Icon icon="instagram" />
              </Link>
            </div>
          </div>

          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="glass-3d-dark rounded-xl p-6 hover:scale-105 transition-all duration-300 card-3d-hover shadow-3d hover:shadow-3d-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-white text-lg">📍</div>
                  <h3 className="text-gray-800 font-semibold text-lg">
                    Adresa
                  </h3>
                </div>
                <p className="text-gray-600 ml-13">
                  Aleea Cristalului 2A, Timișoara
                </p>
              </div>

              <div className="glass-3d-dark rounded-xl p-6 hover:scale-105 transition-all duration-300 card-3d-hover shadow-3d hover:shadow-3d-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-white text-lg">🕒</div>
                  <h3 className="text-gray-800 font-semibold text-lg">
                    Program
                  </h3>
                </div>
                <p className="text-gray-600 ml-13">
                  Luni - Vineri, 13:00 - 20:00
                </p>
              </div>

              <div className="glass-3d-dark rounded-xl p-6 hover:scale-105 transition-all duration-300 card-3d-hover shadow-3d hover:shadow-3d-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-white text-lg">📞</div>
                  <h3 className="text-gray-800 font-semibold text-lg">
                    Telefon
                  </h3>
                </div>
                <a
                  href="tel:+40727784478"
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-300 ml-13 hover:underline"
                >
                  0727 784 478
                </a>
              </div>

              <div className="glass-3d-dark rounded-xl p-6 hover:scale-105 transition-all duration-300 card-3d-hover shadow-3d hover:shadow-3d-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-white text-lg">✉️</div>
                  <h3 className="text-gray-800 font-semibold text-lg">Email</h3>
                </div>
                <a
                  href="mailto:drprodanmihaela@gmail.com"
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-300 ml-13 hover:underline"
                >
                  drprodanmihaela@gmail.com
                </a>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="glass-3d-dark rounded-xl p-6 shadow-3d">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Trimite-ne un mesaj
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
