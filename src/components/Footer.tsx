import React from "react";
import { Link } from "gatsby";
import { Icon } from "./Icon";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden mt-20">
      {/* Background gradients - matching header */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-purple-700 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-slate-800/30"></div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 border-t border-purple-500/30 shadow-2xl">
        <div className="max-w-7xl mx-auto p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Brand Section */}
            <div className="flex flex-col items-center md:items-start space-y-6">
              <div className="text-4xl font-bold bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent drop-shadow-lg hover:from-purple-200 hover:to-white transition-all duration-300">
                PURE AESTHETIC
              </div>
              <p className="text-purple-100 text-base text-center md:text-left max-w-sm leading-relaxed">
                Clinică de chirurgie plastică, oculoplastică, estetică și
                chirurgia mâinii cu peste 15 ani de experiență în domeniu.
              </p>
              <div className="flex flex-col space-y-2 text-purple-200/90 text-sm">
                <p className="flex items-center gap-2">
                  <div className="text-lg">🏥</div>
                  Servicii medicale de înaltă calitate
                </p>
                <p className="flex items-center gap-2">
                  <div className="text-lg">⭐</div>
                  Peste 1000 de pacienți mulțumiți
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col items-center space-y-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Contactează-ne
              </h3>
              <div className="space-y-4 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <p className="text-purple-100 text-sm flex items-center justify-center gap-2">
                    <div className="text-lg">📍</div>
                    Aleea Cristalului 2A, Timișoara
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <p className="text-purple-100 text-sm flex items-center justify-center gap-2">
                    <div className="text-lg">📞</div>
                    0727 784 478
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <p className="text-purple-100 text-sm flex items-center justify-center gap-2">
                    <div className="text-lg">🕒</div>
                    Luni - Vineri, 13:00 - 20:00
                  </p>
                </div>
              </div>
            </div>

            {/* Social & Navigation */}
            <div className="flex flex-col items-center md:items-end space-y-6">
              <div className="text-center md:text-right">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Urmărește-ne
                </h3>
                <div className="flex gap-4 justify-center md:justify-end">
                  <Link
                    to="https://www.facebook.com/profile.php?id=100090671270044"
                    className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20 shadow-lg hover:shadow-xl group"
                  >
                    <Icon icon="facebook" />
                  </Link>
                  <Link
                    to="https://instagram.com/pure.aesthetic.ro?igshid=MzRlODBiNWFlZA=="
                    className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20 shadow-lg hover:shadow-xl group"
                  >
                    <Icon icon="instagram" />
                  </Link>
                </div>
              </div>

              <div className="text-center md:text-right">
                <div className="flex flex-col space-y-2">
                  <Link
                    to="/preturi"
                    className="text-purple-100 hover:text-white transition-colors duration-300 font-medium tracking-wide"
                  >
                    Prețuri
                  </Link>
                  <Link
                    to="/despre"
                    className="text-purple-100 hover:text-white transition-colors duration-300 font-medium tracking-wide"
                  >
                    Despre noi
                  </Link>
                  <Link
                    to="/rezultate"
                    className="text-purple-100 hover:text-white transition-colors duration-300 font-medium tracking-wide"
                  >
                    Galerie rezultate
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-purple-400/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-purple-200/80 text-sm text-center md:text-left">
                <p>
                  © {new Date().getFullYear()} PureAesthetic. Toate drepturile
                  rezervate.
                </p>
                <p className="mt-1">
                  Conținutul acestui site este protejat de legile drepturilor de
                  autor.
                </p>
              </div>
              <div className="flex items-center gap-1 text-purple-200/80 text-sm">
                <div>Dezvoltat cu</div>
                <div className="text-red-400 animate-pulse">dragoste</div>
                <div>pentru frumusețea ta</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
