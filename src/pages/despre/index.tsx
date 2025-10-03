import React from "react";
import { FAQ } from "../../components/FAQ";
import bgimage from "../../images/minimal-bg.jpg";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { InfoCards } from "../../components/InfoCards";
import { SEO } from "../../components/SEO";

const About = () => {
  return (
    <div
      className="min-h-screen font-merriweather  bg-cover bg-center "
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <Header wLogo={true} />
      <InfoCards />
      <div className="px-5">
        <FAQ />
      </div>

      <Footer />
    </div>
  );
};

export const Head = () => (
  <SEO
    title="Despre Noi"
    description="Aflați mai multe despre echipa noastră de medici specialiști în chirurgie plastică, oculoplastică și estetică. Peste 15 ani de experiență în domeniu."
    keywords="despre noi, echipa medicală, chirurgie plastică, medici specialiști, experiență, Timișoara"
  />
);

export default About;