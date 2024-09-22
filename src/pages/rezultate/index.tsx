import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Gallery } from "../../components/Gallery";
import { Header } from "../../components/Header";
import { Footer } from '../../components/Footer';
import { title } from "process";

const description = {
  'blefaroplastie': 'Blefaroplastia, cunoscută și sub denumirea de chirurgia pleoapelor, este o procedură estetică care vizează îmbunătățirea aspectului pleoapelor superioare și inferioare. Aceasta poate corecta excesul de piele, ridurile și pungile de sub ochi, oferind un aspect mai tânăr și odihnit. Intervenția este realizată prin îndepărtarea pielii și a grăsimii în exces, rezultând o conturare mai armonioasă a feței. Blefaroplastia nu doar că îmbunătățește estetica, ci poate și să contribuie la funcționalitatea pleoapelor, ajutând la îmbunătățirea câmpului vizual atunci când pielea lăsată interferează cu vederea. Recuperarea este relativ rapidă, iar rezultatele pot dura mulți ani, oferind pacienților un aspect revitalizat și o încredere sporită.',
  'chirurgia-sanului': 'Chirurgia sanului include proceduri precum augmentarea, reducerea și liftingul sânilor, având scopul de a îmbunătăți forma și dimensiunea acestora. Fie că este vorba despre corectarea asimetriilor sau despre restabilirea volumului pierdut după sarcină sau pierdere în greutate, aceste intervenții sunt personalizate pentru a se potrivi nevoilor fiecărui pacient. Rezultatele pot oferi nu doar un aspect estetic mai plăcut, ci și o încredere sporită în sine.' ,
  'chirurgia-siluetei': 'Chirurgia siluetei se referă la o gamă de intervenții menite să contureze și să redefinească formele corpului, inclusiv liposucția, abdominoplastia și liftingul corporal. Aceste proceduri ajută la eliminarea grăsimii în exces și la tonifierea zonelor dorite, oferind pacienților o siluetă mai armonioasă. Ideală pentru cei care au dificultăți în a obține rezultate prin dietă și exerciții fizice, chirurgia siluetei poate transforma radical aspectul fizic și poate îmbunătăți calitatea vieții.',
  'proceduri-estetice': 'Procedurile estetice minim invazive sunt intervenții care vizează îmbunătățirea aspectului fizic cu un timp de recuperare redus și cicatrici minime. Aceste proceduri includ injectarea de botox, acid hialuronic și tratamente cu laser, oferind rezultate rapide și naturale. Ideal pentru cei care doresc să-și revitalizeze aspectul fără o recuperare prelungită, aceste tehnici sunt tot mai populare datorită eficienței și confortului oferit.'
}


const Results = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [queryParams, setQueryParams] = useState({});
  const [galeryTitle, setGaleryTitle] = useState(null)
  
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" }, dir: { regex: "/images/" } }) {
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
      console.log('galeryTitle', galeryTitle)
      // Filter images based on the gallery title
      const galleryImages = data.allFile.edges.filter(edge => 
       { console.log(edge.node.dir.toString().includes(`${galeryTitle}`), edge.node.dir, galeryTitle) 
        return edge.node.dir.toString().includes(`${galeryTitle}`)
      }
      );

      console.log(galleryImages)
      setGaleryTitle(galeryTitle)
      setImages(galleryImages);
      setLoading(false); // Stop loading
    }
  }, [queryParams, data]);

  return (
    <div>
      <Header wLogo={true} />
      <h3 className="flex justify-center text-xl font-bold mb-4 xs:text-lg md:text-xl text-gray-600 animate-slideinleft">Rezultate pre/post operator</h3>
      <p className="flex justify-center text-xs text-center p-5 animate-slideinright">{description[galeryTitle]}</p>
      <Gallery images={images} loading={loading}/>
      <Footer />
    </div>
  );
};

export default Results;
