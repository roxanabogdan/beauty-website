import React from "react";
import { Header } from "../../components/Header";
import { PriceListItem } from "../../components/PriceListItem";
import bgimage from "../../images/minimal-bg.jpg";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";

const priceList = {
  "1. Consultații": [
    { title: "Consultație Conferențiar universitar Dr. Bloanca Vlad-Adam", price: "400 lei" },
    { title: "Consultație Asistent universitar Dr. Bloanca-Prodan Mihaela", price: "350 lei" },
    { title: "Consultație video", price: "350 lei" },
  ],
  "2. Blefaroplastie și oculoplastică": [
    { title: "Blefaroplastie superioară", price: "1.300 €" },
    { title: "Blefaroplastie inferioară — cantopexie inclusă", price: "1.700 €" },
    { title: "Cantopexie simplă", price: "800 €" },
    { title: "Browlift direct", price: "1.200–1.400 €" },
  ],
  "3. Chirurgia sânului": [
    { title: "Mărire sâni cu implant mamar", price: "4.800–5.300 €" },
    { title: "Mastopexie cu implant mamar", price: "5.500–6.000 €" },
    { title: "Mastopexie — ridicare sâni", price: "3.800–4.500 €" },
    { title: "Gigantomastie", price: "4.500–5.000 €" },
  ],
  "4. Chirurgia feței și a gâtului": [
    { title: "Facelift cu anestezie generală", price: "6.000 €" },
    { title: "Mini facelift în anestezie locală", price: "3.800–4.300 €" },
    { title: "Lip lift", price: "1.200–1.400 €" },
    { title: "Lipofilling — anestezie locală", price: "1.500 €" },
    { title: "Lipofilling — anestezie generală", price: "2.000 €" },
    { title: "Lipoaspirație gușă — anestezie locală", price: "1.300 €" },
    { title: "Lipoaspirație gușă — anestezie generală", price: "1.800 €" },
  ],
  "5. Tratamente minim invazive": [
    { title: "Toxină botulinică — 1 zonă", price: "150 €" },
    { title: "Toxină botulinică — 3 zone", price: "350 €" },
    { title: "Toxină botulinică — 4 zone", price: "450 €" },
    { title: "Toxină botulinică — maseter", price: "300 €" },
    { title: "Toxină botulinică — menton", price: "150 €" },
    { title: "Toxină botulinică — trapez", price: "400 €" },
    { title: "Nefertiti Botox — zona gâtului", price: "250 €" },
    { title: "Tratamentul hiperhidrozei axilare", price: "500 €" },
    { title: "Tratamentul hiperhidrozei palmare", price: "500 €" },
    { title: "Acid hialuronic și hialuronidază", price: "" },
    { title: "Acid hialuronic pentru riduri fine — 1 ml", price: "300 €" },
    { title: "Injectare șanțuri nazogeniene", price: "350 €" },
    { title: "Injectare buze — fără retuș", price: "300 €" },
    { title: "Injectare buze — cu retuș inclus", price: "350 €" },
    { title: "Injectare buze — tehnica Russian Lips", price: "350 €" },
    { title: "Injectare pomeți", price: "400 €" },
    { title: "Contur mandibular cu acid hialuronic — 2 ml", price: "600 €" },
    { title: "Acid hialuronic — 0,5 ml", price: "250 €" },
    { title: "Hialuronidază — neutralizare acid hialuronic", price: "200 €" },
    { title: "Biostimulare și tratamente pentru calitatea pielii", price: "" },
    { title: "Injectare Sculptra", price: "500 €/ședință" },
    { title: "Injectare Rejuran Face", price: "550 €" },
    { title: "Injectare Rejuran Eyes", price: "250 €" },
    { title: "Injectare HArmonyCa", price: "400 €" },
    { title: "Injectare Radiesse", price: "500 €" },
    { title: "Injectare PolyPhil Eyes", price: "250 €" },
    { title: "Injectare Profhilo", price: "500 €" },
    { title: "Skinbooster full face", price: "200 €" },
    { title: "Tratamente pentru scalp", price: "" },
    { title: "Scalpbooster", price: "200 €" },
    { title: "PRP scalp", price: "250 €" },
    { title: "Lifting cu fire", price: "" },
    { title: "Fire PDO Anchor", price: "120 €/fir" },
    { title: "Pachet lifting cu fire PDO — 6 fire", price: "600 €" },
    { title: "Lipoliză injectabilă", price: "" },
    { title: "Lipoliză injectabilă — 1 zonă", price: "200 €/ședință" },
    { title: "Lipoliză injectabilă — 2 zone", price: "300 €/ședință" },
  ],
  "6. Chirurgie intimă și tratamente de volumizare": [
    { title: "Labioplastie", price: "1.200–1.600 €" },
    { title: "Lipofilling labii", price: "1.000 €" },
    { title: "Injectare labii cu acid hialuronic", price: "600 €" },
  ],
  "7. Proceduri dedicate bărbaților": [
    { title: "Ginecomastie — include lipoaspirația zonei", price: "3.000–5.000 €" },
    { title: "Toxină botulinică — 3 zone", price: "400 €" },
    { title: "Toxină botulinică — maseter", price: "300 €" },
    { title: "Skinbooster full face", price: "200 €" },
    { title: "Contur mandibular — jawline cu acid hialuronic", price: "800 €" },
    { title: "Tratamentul hiperhidrozei axilare", price: "500 €" },
    { title: "Tratamentul hiperhidrozei palmare", price: "500 €" },
  ],
  "8. Chirurgia urechilor": [
    { title: "Otoplastie unilaterală — anestezie locală", price: "1.000 €" },
    { title: "Otoplastie bilaterală — anestezie locală", price: "1.500 €" },
    { title: "Otoplastie bilaterală — anestezie generală", price: "2.200 €" },
    { title: "Corecție lob auricular — lob despicat", price: "250 €" },
  ],
  "9. Chirurgia conturului corporal și chirurgie postbariatrică": [
    { title: "Abdominoplastie — include lipoaspirația zonei", price: "4.500–6.000 €" },
    { title: "Mini-abdominoplastie — include lipoaspirația zonei", price: "3.000–3.500 €" },
    { title: "Lifting de brațe — include lipoaspirația zonei", price: "2.500–3.500 €" },
  ],
  "10. Tratamentul cicatricilor": [
    { title: "Volon — tratament injectabil pentru cicatrici cheloide", price: "150 €/ședință" },
    { title: "Injectare Rejuran pentru cicatrici", price: "250 €" },
    { title: "Dermapen pentru cicatrici", price: "150 €" },
  ],
  "11. Tratamentul formațiunilor tumorale": [
    { title: "Excizie formațiune tumorală", price: "250 €" },
    { title: "Excizie formațiune tumorală + biopsie", price: "300 €" },
    { title: "Excizie formațiune tumorală cu lambou local", price: "700 €" },
    { title: "Excizie lipom", price: "150–250 €" },
    { title: "Excizie xantelasmă", price: "300 €" },
  ],
  "12. Chirurgia mâinii": [
    { title: "Tratament chirurgical al sindromului de tunel carpian", price: "1.000 €" },
    { title: "Tratament chirurgical al degetului în resort — trigger finger", price: "400 €" },
    { title: "Tratament chirurgical al sindromului de canal cubital", price: "1.200 €" },
    { title: "Tratament chirurgical al maladiei Dupuytren", price: "700–1.700 €" },
  ],
  "13. Îngrijiri postoperatorii": [
    { title: "Suprimare fire de sutură — pentru pacienți operați la alt medic", price: "200 lei" },
    { title: "Pansament — pentru pacienți operați la alt medic", price: "250–350 lei" },
  ],
};

const Prices = () => {
  return (
    <div
      className="min-h-screen font-merriweather bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <Header wLogo={true} />
      <div className="mb-5">
        <h2 className="text-2xl font-extrabold tracking-tight text-center p-4 pt-10 xs:text-xl md:text-2xl">
          Lista de prețuri aferente serviciilor noastre
        </h2>
        <p className="flex justify-center p-4 text-center">
          *Prețurile au rol orientativ. Prețul aferent intervențiilor și procedurilor se stabilește în urma consultației.
        </p>
        <p className="flex justify-center px-4 pb-2 text-center text-sm">
          Pentru aceeași procedură și cantitate, prețul este identic indiferent de produsul ales. Sunt disponibile gamele Chroma, Juvéderm și Restylane.
        </p>
        <div className="space-y-8 p-4 md:space-y-8 xs:space-y-4 xs:p-2">
          {Object.entries(priceList).map(([category, items], index) => (
            <div key={index} className="p-4">
              <h3 className="text-2xl font-bold mb-4 xs:text-lg md:text-2xl">
                {category}
              </h3>
              <div className="grid grid-row-1 gap-6">
                {items.map((item, idx) =>
                  item.price ? (
                    <PriceListItem key={idx} title={item.title} price={item.price} />
                  ) : (
                    <h4 key={idx} className="text-lg font-bold pt-3 border-b border-purple-300/40 pb-2">
                      {item.title}
                    </h4>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const Head = () => (
  <SEO
    title="Prețuri"
    description="Lista completă de prețuri pentru consultații, chirurgie plastică, estetică și tratamente minim invazive. Prețurile serviciilor clinicii din Timișoara."
    keywords="prețuri chirurgie plastică, consultații, blefaroplastie, botox, acid hialuronic, lifting, liposucție, Timișoara"
  />
);

export default Prices;
