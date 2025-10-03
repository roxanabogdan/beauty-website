import React from "react";
import { Link } from "gatsby";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";
import bgimage from "../../images/minimal-bg.jpg";
import lifting from "../../images/lifting.webp";

const BlefaroplastieBlog = () => {
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
              <span className="text-purple-900">Blefaroplastie</span>
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
                  Chirurgie Oculoplastică
                </span>
                <div className="text-purple-200 text-sm">
                  <span>17 Decembrie 2024</span>
                  <span className="mx-2">•</span>
                  <span>7 min citire</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Blefaroplastie: Transformarea Privirii prin Chirurgie
                Oculoplastică
              </h1>

              <div className="h-64 bg-gradient-to-r from-purple-600/20 to-slate-600/20 rounded-xl mb-8 flex items-center justify-center">
                <img
                  src={lifting}
                  alt="Blefaroplastie - Chirurgie Oculoplastică"
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
                  Blefaroplastia este o procedură chirurgicală specializată care
                  poate transforma radical aspectul privirii. Descoperă totul
                  despre această intervenție de chirurgie oculoplastică și cum
                  poate restaura tinerețea ochilor.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Ce este Blefaroplastia?
                </h2>
                <p>
                  Blefaroplastia este o procedură chirurgicală care
                  îmbunătățește aspectul pleoapelor prin eliminarea excesului de
                  piele și grăsime. Poate fi realizată pe pleoapa superioară,
                  inferioară sau pe ambele, în funcție de nevoile individuale.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Tipuri de Blefaroplastie
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-purple-600/20 border border-purple-400/30 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-3">
                      Blefaroplastie Superioară
                    </h3>
                    <ul className="list-disc pl-4 space-y-1 text-sm text-purple-100">
                      <li>Elimină pielea excesivă de pe pleoapa superioară</li>
                      <li>Îmbunătățește câmpul vizual</li>
                      <li>Ridică pleoapa căzută</li>
                      <li>Rezultate naturale și durabile</li>
                    </ul>
                  </div>

                  <div className="bg-purple-600/20 border border-purple-400/30 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-3">
                      Blefaroplastie Inferioară
                    </h3>
                    <ul className="list-disc pl-4 space-y-1 text-sm text-purple-100">
                      <li>Elimină pungile de sub ochi</li>
                      <li>Îmbunătățește conturul ochilor</li>
                      <li>Reduce cearcănele</li>
                      <li>Restaurare aspect tânăr</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Indicații pentru Blefaroplastie
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Piele excesivă pe pleoapa superioară care afectează vederea
                  </li>
                  <li>Pungile de sub ochi care dau un aspect obosit</li>
                  <li>Pleoape căzute care îmbătrânesc aspectul</li>
                  <li>Asimetrii ale pleoapelor</li>
                  <li>Îmbătrânirea precoce a zonei oculare</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Procesul Chirurgical
                </h2>
                <p>
                  Procedura se realizează sub anestezie locală sau generală, în
                  funcție de complexitate. Chirurgul face incizii precise în
                  pliul natural al pleoapelor, elimină excesul de piele și
                  grăsime, apoi închide inciziile cu suturi fine.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Recuperarea Post-Operatorie
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-600/20 border border-slate-400/30 rounded-lg p-4">
                    <h4 className="font-bold text-white mb-2">
                      Prima săptămână
                    </h4>
                    <ul className="text-sm text-purple-100 space-y-1">
                      <li>• Umflături și vânătăi</li>
                      <li>• Disconfort moderat</li>
                      <li>• Îngrijire zilnică</li>
                    </ul>
                  </div>

                  <div className="bg-slate-600/20 border border-slate-400/30 rounded-lg p-4">
                    <h4 className="font-bold text-white mb-2">Săptămâna 2-4</h4>
                    <ul className="text-sm text-purple-100 space-y-1">
                      <li>• Reducerea umflăturilor</li>
                      <li>• Îndepărtarea suturilor</li>
                      <li>• Revenirea la activități</li>
                    </ul>
                  </div>

                  <div className="bg-slate-600/20 border border-slate-400/30 rounded-lg p-4">
                    <h4 className="font-bold text-white mb-2">După 1-3 luni</h4>
                    <ul className="text-sm text-purple-100 space-y-1">
                      <li>• Rezultate finale</li>
                      <li>• Cicatrici discrete</li>
                      <li>• Aspect natural</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Rezultate și Beneficii
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Privire mai deschisă și mai tânără</li>
                  <li>Îmbunătățirea câmpului vizual</li>
                  <li>Eliminarea aspectului obosit</li>
                  <li>Creșterea încrederii în sine</li>
                  <li>Rezultate durabile (10-15 ani)</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Riscuri și Complicații
                </h2>
                <p>
                  Blefaroplastia este o procedură sigură când este realizată de
                  un chirurg plastician specializat. Riscurile pot include:
                  umflături temporare, vânătăi, disconfort ușor și, foarte rar,
                  complicații mai serioase.
                </p>

                <div className="bg-purple-600/20 border border-purple-400/30 rounded-xl p-6 mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">
                    💡 Sfat de la Specialiști
                  </h3>
                  <p className="text-purple-100">
                    Pentru rezultate optime, este crucial să alegi un chirurg
                    plastician cu experiență în chirurgia oculoplastică. În
                    clinica noastră din Timișoara, oferim consultații gratuite
                    pentru a evalua nevoile tale și a planifica procedura cea
                    mai potrivită pentru aspectul dorit.
                  </p>
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
    title="Blefaroplastie: Transformarea Privirii prin Chirurgie Oculoplastică"
    description="Totul despre blefaroplastie - de la indicații și tehnici la recuperare și rezultate. Ghid complet pentru pacienți despre chirurgia oculoplastică în Timișoara."
    keywords="blefaroplastie, chirurgie oculoplastică, pleoape, chirurgie ochi, Timișoara, chirurgie plastică, proceduri estetice, lifting pleoape"
  />
);

export default BlefaroplastieBlog;
