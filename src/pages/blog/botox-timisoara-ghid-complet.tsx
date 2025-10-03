import React from "react";
import { Link } from "gatsby";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";
import bgimage from "../../images/minimal-bg.jpg";
import chirurgia from "../../images/chirurgia-fetei.jpg";

const BotoxBlog = () => {
  return (
    <div
      className="min-h-screen font-merriweather bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <Header wLogo={true} />

      {/* Article Content */}
      <div className="relative z-10 pt-4 pb-8 sm:pt-8 sm:pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="mb-4 sm:mb-8">
            <div className="flex items-center space-x-1 sm:space-x-2 text-purple-900 text-sm sm:text-base">
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
              <span className="text-purple-900 truncate">Botox în Timișoara</span>
            </div>
          </nav>

          {/* Article Header */}
          <article className="bg-gradient-to-br from-purple-800/80 via-purple-700/70 to-slate-900/90 backdrop-blur-md border border-purple-500/20 rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-gradient-to-tl from-purple-600/10 to-slate-800/15 rounded-2xl"></div>
            <div
              className="absolute inset-0 opacity-20 blur-sm"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
                <span className="bg-purple-600/90 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm w-fit">
                  Proceduri Estetice
                </span>
                <div className="text-purple-200 text-xs sm:text-sm">
                  <span>19 Decembrie 2024</span>
                  <span className="mx-1 sm:mx-2">•</span>
                  <span>5 min citire</span>
                </div>
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Botox în Timișoara: Ghid Complet pentru Rezultate Naturale
              </h1>

              <div className="h-48 sm:h-56 lg:h-64 bg-gradient-to-r from-purple-600/20 to-slate-600/20 rounded-xl mb-6 sm:mb-8 flex items-center justify-center">
                <img
                  src={chirurgia}
                  alt="Tratament Botox"
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
            </div>
          </article>

          {/* Article Content */}
          <div className="bg-gradient-to-br from-purple-800/80 via-purple-700/70 to-slate-900/90 backdrop-blur-md border border-purple-500/20 rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tl from-purple-600/10 to-slate-800/15 rounded-2xl"></div>

            <div className="relative z-10 prose prose-sm sm:prose-base lg:prose-lg max-w-none">
              <div className="text-purple-100/90 leading-relaxed space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg lg:text-xl font-medium text-purple-200">
                  Tratamentul cu toxina botulinică (Botox) este una dintre cele
                  mai populare proceduri estetice minim invazive din Timișoara.
                  În acest ghid complet, vei descoperi totul despre această
                  procedură sigură și eficientă.
                </p>

                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mt-6 sm:mt-8 mb-3 sm:mb-4">
                  Ce este Botox-ul?
                </h2>
                <p>
                  Botox-ul este o toxina botulinică de tip A, care funcționează
                  prin relaxarea temporară a mușchilor faciali. Când este
                  injectat în zonele țintă, acesta blochează semnalele nervoase
                  către mușchi, reducând astfel apariția ridurilor dinamice.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Indicații pentru Tratament
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Riduri de expresie pe frunte</li>
                  <li>Liniile de încruntare între sprâncene</li>
                  <li>Ridurile din jurul ochilor (laba gâștii)</li>
                  <li>Liniile de expresie pe nas</li>
                  <li>Ridurile de la colțurile gurii</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Procesul de Tratament
                </h2>
                <p>
                  Procedura durează aproximativ 15-30 de minute și nu necesită
                  anestezie. Medicul va identifica zonele țintă și va injecta
                  cantități precise de toxina botulinică. Disconfortul este
                  minimal, similar cu o înțepătură de ac.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Îngrijirea Post-Tratament
                </h2>
                <p>
                  După tratament, este important să eviți activitățile intense
                  timp de 24 de ore și să nu te întinzi cu fața în jos.
                  Rezultatele vor începe să fie vizibile după 3-7 zile, cu
                  efectul complet după 2 săptămâni.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Durata Rezultatelor
                </h2>
                <p>
                  Efectele Botox-ului durează în medie 3-6 luni. Pentru a
                  menține rezultatele, este necesar să repeti tratamentul
                  periodic. Cu timpul, mușchii se pot adapta și durata efectului
                  poate crește.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                  Siguranța Procedurii
                </h2>
                <p>
                  Botox-ul este aprobat de FDA și este utilizat în estetică de
                  peste 20 de ani. Când este administrat de un medic
                  specializat, riscul de complicații este foarte scăzut.
                  Efectele secundare pot include umflături minore sau roșeață
                  temporară.
                </p>

                <div className="bg-purple-600/20 border border-purple-400/30 rounded-xl p-6 mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">
                    💡 Sfat de la Specialiști
                  </h3>
                  <p className="text-purple-100">
                    Pentru rezultate optime, este esențial să alegi un medic cu
                    experiență în proceduri estetice. În clinica noastră din
                    Timișoara, oferim consultații gratuite pentru a evalua
                    nevoile tale și a planifica tratamentul cel mai potrivit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-6 sm:mt-8 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-slate-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:from-purple-700 hover:to-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 mr-2"
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
    title="Botox în Timișoara: Ghid Complet pentru Rezultate Naturale"
    description="Descoperă totul despre tratamentul cu toxina botulinică în Timișoara. De la indicații și contraindicatii la îngrijirea post-tratament. Ghid complet cu sfaturi de specialiști."
    keywords="botox Timișoara, toxina botulinică, riduri expresie, tratament estetic, proceduri minim invazive, clinica estetica Timișoara"
  />
);

export default BotoxBlog;
