import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Gallery } from "../../components/Gallery";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";
import bgimage from "../../images/minimal-bg.jpg";
import logo1 from "../../images/logo1.png";
import logo2 from "../../images/logo2.png";
import logo3 from "../../images/logo3.png";
import logo4 from "../../images/logo4.png";

const Results = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [queryParams, setQueryParams] = useState({});
  const [galeryTitle, setGaleryTitle] = useState(null);

  const textChirgia = (
    <div className="flex flex-wrap text-center">
      Alegerea protezelor de cea mai bună calitate este un lucru indispensabil
      pentru o intervenție reușită de augmentare mamară. Brandul Mentor oferă o
      gamă largă și diversificată de proteze mamare, fiind cel mai longeviv
      brand de pe piață cu un profil de siguranță ridicat și cea mai mică rată
      de complicații de peste 30 de ani.
      <br></br>
      ⭐️ Intervențiile chirurgicale se realizează la clinica Brol - Medlife
      Timișoara, clinică care se ridică la cel mai înalt standard ca dotări și
      îngrijiri postoperatorii.
      <br></br>
      ⭐️ Oferim consultanță și îndrumare în cazul pacientelor cu cancer mamar,
      având o experiență vastă în chirurgia Onco-plastică și reconstructivă cu
      țesut autolog.
    </div>
  );

  const textProceduri = (
    <div className="flex flex-wrap text-center justify-center">
      Procedurile estetice minim invazive sunt intervenții care vizează
      îmbunătățirea aspectului fizic cu un timp de recuperare redus și cicatrici
      minime. Aceste proceduri includ injectarea de botox, acid hialuronic și
      tratamente cu laser, oferind rezultate rapide și naturale. Ideal pentru
      cei care doresc să-și revitalizeze aspectul fără o recuperare prelungită,
      aceste tehnici sunt tot mai populare datorită eficienței și confortului
      oferit.
      <div className="flex flex-wrap justify-center items-center py-5">
        <img src={logo1} className="h-20 w-[300px]" />
        <img src={logo2} className="h-20 w-[300px]" />
        <img src={logo3} className="h-20 w-[300px]" />
        <img src={logo4} className="h-20 w-[300px]" />
      </div>
    </div>
  );

  const textChirurgiaFetei = (
    <div>
      În cadrul consultului inițial se urmărește conceperea planului de
      tratament personalizat și armonizarea trăsăturilor într-o manieră în care
      să se obțină rezultate naturale și stabile în timp.
      <br></br>
      Absolvenți atât ai specializării de Chirurgie plastică, estetică și
      microchirurgie reconstructivă, cât și ai Plastic Surgery Academy by
      Michelle Pascali, și cu o experiență vastă în chirurgia oculoplastică,
      efectuăm o gamă variată de proceduri chirurgicale: facelift dee plane,
      facelift clasic, minifacelift, liplift, lipofilling (injectare cu grăsime
      proprie), lifting de sprâncene, lifting cervico-facial, otoplastie adulți
      și copii, lipoaspirație gușă. Intervențiile sunt efectuate în cadrul
      clinicii Brol - MedLife, dotată cu aparatură modernă, bloc operator la
      cele mai înalte standarde și saloane în care îngrijirea postoperatorie
      este asigurată de o linie de gardă 24/24, formată din medici specialiști
      de chirurgie plastică și medic anestezist. Lipoaspirația laser este făcută
      cu ajutorul echipamentelor de ultimă generație.
    </div>
  );

  const description = {
    blefaroplastie:
      "Blefaroplastia poate fi schimbarea estetică și funcțională de care ai nevoie. Absolvenți ai Plastic Surgery Academy by Michelle Pascali și cu o experiență vastă în chirurgia oculoplastică, efectuăm o gamă variată de proceduri chirurgicale: blefaroplastie superioară, blefaroplastie inferioară, blefaroplastie transconjunctivală (fără cicatrici), cantopexie (fox eyes), corecția ptozei palpebrale, rezecția carcinoamelor și reconstrucția pleoapelor după rezecții, tratamentul entropionului, tratamentul ectropionului.",
    "chirurgia-sanului": textChirgia,
    "chirurgia-siluetei":
      "Chirurgia siluetei se referă la o gamă de intervenții menite să contureze și să redefinească formele corpului, inclusiv liposucția, abdominoplastia și liftingul corporal. Aceste proceduri ajută la eliminarea grăsimii în exces și la tonifierea zonelor dorite, oferind pacienților o siluetă mai armonioasă. Ideală pentru cei care au dificultăți în a obține rezultate prin dietă și exerciții fizice, chirurgia siluetei poate transforma radical aspectul fizic și poate îmbunătăți calitatea vieții.",
    "proceduri-estetice": textProceduri,
    "chirurgia-pielii":
      "Dr. Bloancă-Prodan Mihaela - Chirurg plastician cu studii clinice în domeniul cancerului de piele și multiple publicații în reviste internaționale cu factor de impact în tratamentul melanomului malign. Oferim soluții integrate în diagnosticarea precoce cât și în tratamentul multidisciplinar al cancerului de piele.",
    "chirurgia-fetei": textChirurgiaFetei,
    "chirurgia-mainii":
      "Experiență vastă în chirurgia mâinii și stagii de pregătire la centre specializate de chirurgie a mâinii din Europa. Experiență în tratamentul cazurilor de sindrom de tunel carpian, efectuate minim invaziv cu un timp de recuperare mult mai scurt, cât și alte afecțiuni ale mâinii precum maladia Dupuytren, deget în resort (trigger finger) și cazuri complexe de reconstrucție, cu competențe în microchirurgie reparatorie.",
  };

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          dir: { regex: "/images/" }
        }
      ) {
        edges {
          node {
            id
            name
            dir
            childImageSharp {
              fluid(maxWidth: 600, maxHeight: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const queryObject = {};

    for (let param of params.entries()) {
      queryObject[param[0]] = param[1];
    }

    setQueryParams(queryObject);
  }, []);

  useEffect(() => {
    if (queryParams?.galerie) {
      const galeryTitle = queryParams.galerie;
      console.log("galeryTitle", galeryTitle);

      // Filter images based on the gallery title
      const galleryImages = data.allFile.edges.filter((edge) => {
        console.log(
          edge.node.dir.toString().includes(`${galeryTitle}`),
          edge.node.dir,
          galeryTitle
        );
        return edge.node.dir.toString().includes(`${galeryTitle}`);
      });

      console.log(galleryImages);
      setGaleryTitle(galeryTitle);
      setImages(galleryImages);
      setLoading(false);
    }
  }, [queryParams, data]);

  return (
    <div
      className="min-h-screen font-merriweather bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <Header wLogo={true} />
      <h3 className="flex justify-center text-xl font-bold mb-4 xs:text-lg md:text-xl text-gray-600 animate-slideinleft">
        Rezultate pre/post operator
      </h3>
      <p className="text-merriweather font-bold flex justify-center text-xs text-center p-5 animate-slideinright">
        {description[galeryTitle]}
      </p>
      <Gallery images={images} loading={loading} />
      <Footer />
    </div>
  );
};

export const Head = () => (
  <SEO
    title="Rezultate Pre/Post Operator"
    description="Vezi rezultatele impresionante ale procedurilor de chirurgie plastică și estetică. Galerie cu imagini pre și post operator cu pacienții noștri mulțumiți."
    keywords="rezultate chirurgie plastică, before after, galerie rezultate, proceduri estetice, rezultate lifting, rezultate botox, Timișoara"
  />
);

export default Results;