import React from "react";
import { Link } from "gatsby";
import { Icon } from './Icon';

export const Header = ({wHomepage = true, wLogo = false}) => {
    return (
      <div>
        <div className="flex flex-wrap justify-between bg-gradient-to-r from-purple-800 via-purple-700 to-slate-900 shadow-lg border-b border-purple-500/30 text-white mb-10 relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-slate-800/30"></div>
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>

          <div className="relative z-10 flex gap-4 p-6 whitespace-nowrap items-center">
            {wHomepage && (
              <Link to="/" className="group">
                <div className="text-2xl font-bold bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent hover:from-purple-200 hover:to-white transition-all duration-300 transform hover:scale-105 drop-shadow-lg">
                  PURE AESTHETIC
                </div>
              </Link>
            )}
          </div>
          <div className="relative z-10 flex flex-wrap gap-6 items-center p-6 whitespace-nowrap text-sm font-medium">
            <Link to="/rezultate?galerie=default" className="group relative">
              <div className="text-purple-100 hover:text-white transition-all duration-300 font-semibold tracking-wide">
                GALERIE
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-purple-200 group-hover:w-full transition-all duration-300 rounded-full"></div>
            </Link>
            <Link to="/preturi" className="group relative">
              <div className="text-purple-100 hover:text-white transition-all duration-300 font-semibold tracking-wide">
                PRETURI
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-purple-200 group-hover:w-full transition-all duration-300 rounded-full"></div>
            </Link>
            <Link to="/despre" className="group relative">
              <div className="text-purple-100 hover:text-white transition-all duration-300 font-semibold tracking-wide">
                DESPRE
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-purple-200 group-hover:w-full transition-all duration-300 rounded-full"></div>
            </Link>
            <Link to="/blog" className="group relative">
              <div className="text-purple-100 hover:text-white transition-all duration-300 font-semibold tracking-wide">
                BLOG
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-purple-200 group-hover:w-full transition-all duration-300 rounded-full"></div>
            </Link>
            <Link
              to="tel:+40727784478"
              className="bg-gradient-to-r from-white to-purple-100 text-slate-800 px-4 py-2 rounded-full font-bold hover:from-purple-100 hover:to-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <div className="text-lg">📞</div> 0727 784 478
            </Link>
            <div className="flex gap-3">
              <Link
                to="https://www.facebook.com/profile.php?id=100090671270044"
                className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
              >
                <Icon icon="facebook" />
              </Link>
              <Link
                to="https://instagram.com/pure.aesthetic.ro?igshid=MzRlODBiNWFlZA=="
                className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
              >
                <Icon icon="instagram" />
              </Link>
            </div>
          </div>
        </div>
        {wLogo && (
          <div className="flex flex-wrap justify-center pb-10">
            <div className="bg-[url('../images/purelogo.png')] bg-cover h-24 w-40 bg-center"></div>
          </div>
        )}
      </div>
    );
};
