import React from "react";
import { Link } from "gatsby";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";
import bgimage from "../../images/minimal-bg.jpg";
import face from "../../images/face.jpeg";

const AcidHialuronicBlog = () => {
  return (
    <div
      className="min-h-screen font-merriweather bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <Header wLogo={true} />

      {/* Article Content */}
      <div className="relative z-10 pt-8 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-purple-900">
              <Link to="/" className="hover:text-purple-950 transition-colors">
                Acasă
              </Link>
              <span>/</span>
              <Link
                to="/blog"
                className="hover:text-purple-950 transition-colors"
              >
                Blog
              </Link>
              <span>/</span>
              <span className="text-purple-900">Acid Hialuronic</span>
            </div>
          </nav>

          {/* Article Header */}
          <article className="bg-gradient-to-br from-purple-800/80 via-purple-700/70 to-slate-900/90 backdrop-blur-md border border-purple-500/20 rounded-2xl shadow-2xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tl from-purple-600/10 to-slate-800/15 rounded-2xl"></div>
            <div
              className="absolute inset-0 opacity-20 blur-sm"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="bg-purple-600/90 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                  Proceduri Estetice
                </span>
                <div className="text-purple-200 text-sm">
                  <span>18 Decembrie 2024</span>
                  <span className="mx-2">•</span>
                  <span>6 min citire</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Acid Hialuronic: Soluția pentru Riduri și Volum Facial
              </h1>

              <div className="h-64 bg-gradient-to-r from-purple-600/20 to-slate-600/20 rounded-xl mb-8 flex items-center justify-center">
                <img
                  src={face}
                  alt="Tratament Acid Hialuronic"
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
            </div>
          </article>

          {/* Article Content */}
          <div className="bg-gradient-to-br from-purple-800/80 via-purple-700/70 to-slate-900/90 backdrop-blur-md border border-purple-500/20 rounded-2xl shadow-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tl from-purple-600/10 to-slate-800/15 rounded-2xl"></div>

            <div className="relative z-10 prose prose-lg max-w-none">
              <div className="text-purple-100/90 leading-relaxed space-y-6">
                <p className="text-xl font-medium text-purple-200">
                  Acidul hialuronic este unul dintre cei mai eficienți și siguri
                  agenți de umplere folosiți în estetică. Descoperă cum poate
                  restaura volumul facial și reduce ridurile pentru un aspect
                  mai tânăr și natural.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Ce este Acidul Hialuronic?
                </h2>
                <p>
                  Acidul hialuronic este o substanță naturală prezentă în corpul
                  uman, cu proprietăți excepționale de reținere a apei. În
                  estetică, este folosit pentru a restaura volumul facial, umple
                  ridurile și îmbunătăți hidratarea pielii.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Indicații Principale
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Riduri fine și profunde</li>
                  <li>Pierzarea volumului facial</li>
                  <li>Buze subțiri sau lipsite de volum</li>
                  <li>Pomeți căzuți</li>
                  <li>Șanțuri nazo-geniene</li>
                  <li>Contururi faciale slăbite</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Zonele de Aplicare
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-purple-200 mb-2">
                      Zona Centrală a Feței
                    </h3>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>Pomeți</li>
                      <li>Șanțuri nazo-geniene</li>
                      <li>Riduri periorale</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-200 mb-2">
                      Zona Inferioară
                    </h3>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>Buze</li>
                      <li>Menton</li>
                      <li>Liniile de expresie</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Tipuri de Acid Hialuronic
                </h2>
                <p>
                  Există diferite tipuri de acid hialuronic, fiecare cu
                  densitate și consistență specifică:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Densitate mică:</strong> Pentru riduri fine și
                    hidratare
                  </li>
                  <li>
                    <strong>Densitate medie:</strong> Pentru umplerea ridurilor
                    moderate
                  </li>
                  <li>
                    <strong>Densitate mare:</strong> Pentru restaurarea
                    volumului facial
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Procesul de Tratament
                </h2>
                <p>
                  Procedura durează 30-60 de minute și poate fi realizată cu
                  anestezie locală. Medicul va injecta acidul hialuronic în
                  zonele țintă folosind tehnici precise pentru a obține
                  rezultate naturale.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Rezultate și Durată
                </h2>
                <p>
                  Rezultatele sunt vizibile imediat după tratament, cu
                  îmbunătățiri continue în primele săptămâni. Durata efectului
                  variază între 6-18 luni, în funcție de tipul de acid
                  hialuronic folosit și de metabolismul individual.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Îngrijirea Post-Tratament
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Evită expunerea la soare timp de 48 de ore</li>
                  <li>Nu aplica machiaj timp de 24 de ore</li>
                  <li>Evită activitățile intense timp de 24-48 de ore</li>
                  <li>Nu masaj zona tratată timp de 2 săptămâni</li>
                </ul>

                <div className="bg-purple-600/20 border border-purple-400/30 rounded-xl p-6 mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">
                    💡 Avantajele Acidului Hialuronic
                  </h3>
                  <ul className="list-disc pl-4 space-y-2 text-purple-100">
                    <li>Substanță naturală, biocompatibilă</li>
                    <li>Rezultate imediate și naturale</li>
                    <li>Procedură sigură, cu risc minim</li>
                    <li>Reversibil în caz de necesitate</li>
                    <li>Nu necesită timp de recuperare</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-8 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-slate-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Înapoi la Blog
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export const Head = () => (
  <SEO
    title="Acid Hialuronic: Soluția pentru Riduri și Volum Facial"
    description="Află cum acidul hialuronic poate restaura volumul facial și reduce ridurile pentru un aspect mai tânăr și natural. Ghid complet cu indicații, tehnici și sfaturi de specialiști."
    keywords="acid hialuronic, volum facial, riduri, umplere riduri, buze volum, pomeți, tratament estetic, proceduri minim invazive"
  />
);

export default AcidHialuronicBlog;
