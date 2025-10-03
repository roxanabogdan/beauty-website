import React from "react";
import { Link } from "gatsby";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";
import bgimage from "../../images/minimal-bg.jpg";
import chirurgia from "../../images/chirurgia-fetei.jpg";

const LiftingFacialBlog = () => {
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
            <div className="flex items-center space-x-2 text-purple-200">
              <Link to="/" className="hover:text-white transition-colors">
                Acasă
              </Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-white">Lifting Facial</span>
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
                  Chirurgie Plastică
                </span>
                <div className="text-purple-200 text-sm">
                  <span>16 Decembrie 2024</span>
                  <span className="mx-2">•</span>
                  <span>8 min citire</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Lifting Facial: Reversarea Procesului de Îmbătrânire
              </h1>

              <div className="h-64 bg-gradient-to-r from-purple-600/20 to-slate-600/20 rounded-xl mb-8 flex items-center justify-center">
                <img
                  src={chirurgia}
                  alt="Lifting Facial - Chirurgie Plastică"
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
                  Liftingul facial este una dintre cele mai eficiente proceduri
                  de chirurgie plastică pentru reversarea semnelor îmbătrânirii.
                  Descoperă cum această intervenție poate restaura tinerețea și
                  contururile faciale.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Ce este Liftingul Facial?
                </h2>
                <p>
                  Liftingul facial (facelift) este o procedură chirurgicală
                  complexă care îmbunătățește aspectul feței prin eliminarea
                  pielii excesive, ridicarea țesuturilor căzute și restaurarea
                  contururilor tinere. Procedura poate fi adaptată la nevoile
                  individuale ale fiecărui pacient.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Tipuri de Lifting Facial
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-purple-600/20 border border-purple-400/30 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-3">
                      Mini Facelift
                    </h3>
                    <ul className="list-disc pl-4 space-y-1 text-sm text-purple-100">
                      <li>Procedură mai puțin invazivă</li>
                      <li>Recuperare mai rapidă</li>
                      <li>Ideal pentru îmbătrânirea ușoară</li>
                      <li>Rezultate subtile și naturale</li>
                    </ul>
                  </div>

                  <div className="bg-purple-600/20 border border-purple-400/30 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-3">
                      Facelift Clasic
                    </h3>
                    <ul className="list-disc pl-4 space-y-1 text-sm text-purple-100">
                      <li>Procedură completă</li>
                      <li>Rezultate dramatice</li>
                      <li>Pentru îmbătrânirea avansată</li>
                      <li>Efecte pe termen lung</li>
                    </ul>
                  </div>

                  <div className="bg-purple-600/20 border border-purple-400/30 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-3">
                      Deep Plane Facelift
                    </h3>
                    <ul className="list-disc pl-4 space-y-1 text-sm text-purple-100">
                      <li>Tehnică avansată</li>
                      <li>Rezultate mai naturale</li>
                      <li>Durată mai lungă</li>
                      <li>Pentru cazuri complexe</li>
                    </ul>
                  </div>

                  <div className="bg-purple-600/20 border border-purple-400/30 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-3">
                      Lifting Cervico-Facial
                    </h3>
                    <ul className="list-disc pl-4 space-y-1 text-sm text-purple-100">
                      <li>Include și zona gâtului</li>
                      <li>Rezultate complete</li>
                      <li>Pentru îmbătrânirea generală</li>
                      <li>Contururi armonioase</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Indicații pentru Lifting Facial
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Piele excesivă pe față și gât</li>
                  <li>Pierderea definiției contururilor faciale</li>
                  <li>Riduri profunde și pliuri</li>
                  <li>Pierderea tonusului muscular</li>
                  <li>Îmbătrânirea precoce sau avansată</li>
                  <li>Asimetrii faciale</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Procesul Chirurgical
                </h2>
                <p>
                  Procedura se realizează sub anestezie generală și durează 3-6
                  ore, în funcție de complexitate. Chirurgul face incizii
                  discrete în zonele naturale ale feței, ridică și
                  repoziționează țesuturile, elimină excesul de piele și închide
                  inciziile cu suturi fine.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Recuperarea Post-Operatorie
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-slate-600/20 border border-slate-400/30 rounded-lg p-4">
                    <h4 className="font-bold text-white mb-2">Săptămâna 1</h4>
                    <ul className="text-sm text-purple-100 space-y-1">
                      <li>• Umflături și vânătăi</li>
                      <li>• Disconfort moderat</li>
                      <li>• Repaus complet</li>
                    </ul>
                  </div>

                  <div className="bg-slate-600/20 border border-slate-400/30 rounded-lg p-4">
                    <h4 className="font-bold text-white mb-2">Săptămâna 2-3</h4>
                    <ul className="text-sm text-purple-100 space-y-1">
                      <li>• Reducerea umflăturilor</li>
                      <li>• Îndepărtarea suturilor</li>
                      <li>• Activitate ușoară</li>
                    </ul>
                  </div>

                  <div className="bg-slate-600/20 border border-slate-400/30 rounded-lg p-4">
                    <h4 className="font-bold text-white mb-2">Luna 1-3</h4>
                    <ul className="text-sm text-purple-100 space-y-1">
                      <li>• Îmbunătățirea aspectului</li>
                      <li>• Revenirea la activități</li>
                      <li>• Cicatrici în vindecare</li>
                    </ul>
                  </div>

                  <div className="bg-slate-600/20 border border-slate-400/30 rounded-lg p-4">
                    <h4 className="font-bold text-white mb-2">După 6 luni</h4>
                    <ul className="text-sm text-purple-100 space-y-1">
                      <li>• Rezultate finale</li>
                      <li>• Aspect natural</li>
                      <li>• Încredere maximă</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Rezultate și Beneficii
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contururi faciale restaurate și definite</li>
                  <li>Eliminarea ridurilor și pliurilor</li>
                  <li>Privire mai deschisă și mai tânără</li>
                  <li>Creșterea semnificativă a încrederii în sine</li>
                  <li>Rezultate durabile (10-15 ani)</li>
                  <li>Aspect natural și armonios</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Cine este Candidat Ideal?
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pacienți sănătoși, non-fumători</li>
                  <li>Persoane cu îmbătrânire moderată sau avansată</li>
                  <li>Pacienți cu așteptări realiste</li>
                  <li>Persoane care doresc îmbunătățiri dramatice</li>
                  <li>
                    Pacienți care pot respecta instrucțiunile post-operatorii
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Riscuri și Complicații
                </h2>
                <p>
                  Liftingul facial este o procedură sigură când este realizată
                  de un chirurg plastician experimentat. Riscurile pot include:
                  umflături temporare, vânătăi, disconfort, cicatrici (care
                  devin discrete în timp) și, foarte rar, complicații mai
                  serioase.
                </p>

                <div className="bg-purple-600/20 border border-purple-400/30 rounded-xl p-6 mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">
                    💡 Sfat de la Specialiști
                  </h3>
                  <p className="text-purple-100">
                    Alegerea chirurghului plastician este crucială pentru
                    succesul procedurii. În clinica noastră din Timișoara,
                    oferim consultații gratuite pentru a evalua nevoile tale și
                    a planifica liftingul facial cel mai potrivit pentru a
                    obține rezultatele dorite.
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
    title="Lifting Facial: Reversarea Procesului de Îmbătrânire"
    description="Descoperă cum liftingul facial poate restaura contururile și elimina semnele îmbătrânirii pentru un aspect mai tânăr. Ghid complet despre procedurile de lifting facial în Timișoara."
    keywords="lifting facial, facelift, chirurgie plastică, îmbătrânire, contururi faciale, Timișoara, proceduri estetice, chirurgie feței"
  />
);

export default LiftingFacialBlog;
