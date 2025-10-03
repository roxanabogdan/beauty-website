import React from "react";
import { Link } from "gatsby";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";
import bgimage from "../../images/minimal-bg.jpg";
import mamar from "../../images/mamar.jpg";
import lifting from "../../images/lifting.webp";
import silueta from "../../images/silueta.jpg";
import hand from "../../images/hand.jpeg";
import face from "../../images/face.jpeg";
import excizie from "../../images/excizie.webp";
import chirurgia from "../../images/chirurgia-fetei.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Botox în Timișoara: Ghid Complet pentru Rezultate Naturale",
    excerpt:
      "Descoperă totul despre tratamentul cu toxina botulinică în Timișoara. De la indicații și contraindicatii la îngrijirea post-tratament.",
    date: "2024-12-19",
    readTime: "5 min",
    category: "Proceduri Estetice",
    slug: "botox-timisoara-ghid-complet",
    image: face,
  },
  {
    id: 2,
    title: "Acid Hialuronic: Soluția pentru Riduri și Volum Facial",
    excerpt:
      "Află cum acidul hialuronic poate restaura volumul facial și reduce ridurile pentru un aspect mai tânăr și natural.",
    date: "2024-12-18",
    readTime: "6 min",
    category: "Proceduri Estetice",
    slug: "acid-hialuronic-solutie-riduri-volum",
    image: chirurgia,
  },
  {
    id: 3,
    title:
      "Blefaroplastie: Transformarea Privirii prin Chirurgie Oculoplastică",
    excerpt:
      "Totul despre blefaroplastie - de la indicații și tehnici la recuperare și rezultate. Ghid complet pentru pacienți.",
    date: "2024-12-17",
    readTime: "7 min",
    category: "Chirurgie Oculoplastică",
    slug: "blefaroplastie-transformare-privire",
    image: lifting,
  },
  {
    id: 4,
    title: "Lifting Facial: Reversarea Procesului de Îmbătrânire",
    excerpt:
      "Descoperă cum liftingul facial poate restaura contururile și elimina semnele îmbătrânirii pentru un aspect mai tânăr.",
    date: "2024-12-16",
    readTime: "8 min",
    category: "Chirurgie Plastică",
    slug: "lifting-facial-reversare-imbatranire",
    image: chirurgia,
  },
  //   {
  //     id: 5,
  //     title: "Liposucție în Timișoara: Tehnici Moderne și Rezultate",
  //     excerpt:
  //       "Află despre cele mai noi tehnici de liposucție și cum poți obține silueta dorită prin proceduri minim invazive.",
  //     date: "2024-12-15",
  //     readTime: "6 min",
  //     category: "Chirurgie Siluetei",
  //     slug: "liposuctie-timisoara-tehnici-moderne",
  //     image: silueta,
  //   },
  //   {
  //     id: 6,
  //     title: "Chirurgia Sânului: Ghid pentru Alegerea Procedurii Potrivite",
  //     excerpt:
  //       "De la mărire la ridicare - totul despre procedurile de chirurgie mamară și cum să alegi cea mai bună opțiune.",
  //     date: "2024-12-14",
  //     readTime: "9 min",
  //     category: "Chirurgie Mamară",
  //     slug: "chirurgia-sanului-ghid-alegere-procedura",
  //     image: mamar,
  //   },
];

const BlogCard = ({ post }: { post: (typeof blogPosts)[0] }) => (
  <article className="bg-gradient-to-br from-purple-800/80 via-purple-700/70 to-slate-900/90 backdrop-blur-md border border-purple-500/20 rounded-2xl shadow-2xl overflow-hidden group hover:scale-105 transition-all duration-500 relative">
    {/* Subtle background pattern */}
    <div className="absolute inset-0 bg-gradient-to-tl from-purple-600/10 to-slate-800/15 rounded-2xl"></div>

    <div
      className="absolute inset-0 opacity-20 blur-sm"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    ></div>
    <Link to={`/blog/${post.slug}`} className="inline-flex items-center">
      <div className="relative z-10">
        {/* Image */}
        <div className="relative h-40 sm:h-48 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
            <span className="bg-purple-600/90 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between text-xs sm:text-sm text-purple-200 mb-2 sm:mb-3">
            <span>{post.date}</span>
            <span>{post.readTime} citire</span>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-200 transition-colors duration-300 line-clamp-2">
            {post.title}
          </h2>

          <p className="text-purple-100/90 mb-3 sm:mb-4 line-clamp-3 leading-relaxed text-sm sm:text-base">
            {post.excerpt}
          </p>

          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center text-purple-200 hover:text-white font-medium transition-colors duration-300 group/link text-sm sm:text-base"
          >
            Citește mai mult
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </Link>
  </article>
);

const Blog = () => {
  return (
    <div
      className="min-h-screen font-merriweather bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <Header wLogo={true} />

      {/* Hero Section */}
      <div className="relative z-10 pt-4 pb-8 sm:pt-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700 mb-3 sm:mb-4 drop-shadow-sm">
              Blog Medical
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-purple-900 max-w-3xl mx-auto leading-relaxed px-4">
              Descoperă cele mai noi informații despre procedurile estetice și
              chirurgicale. Ghiduri complete, sfaturi de specialiști și tot ce
              trebuie să știi pentru a lua decizia potrivită.
            </p>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-slate-400 mx-auto rounded-full shadow-lg mt-4 sm:mt-6"></div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export const Head = () => (
  <SEO
    title="Blog Medical - Ghiduri și Informații despre Proceduri Estetice"
    description="Descoperă cele mai noi informații despre procedurile estetice și chirurgicale în Timișoara. Ghiduri complete, sfaturi de specialiști și tot ce trebuie să știi."
    keywords="blog medical, proceduri estetice, botox Timișoara, acid hialuronic, blefaroplastie, lifting facial, liposucție, chirurgie plastică, ghiduri medicale"
  />
);

export default Blog;
