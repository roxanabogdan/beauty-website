import React from "react";
import { Header } from "../../components/Header";
import { PriceListItem } from "../../components/PriceListItem";
import bgimage from "../../images/minimal-bg.jpg";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO";

const priceList = {
  "": [{ title: "🩺 Consultație", price: "250 RON" }],

  "💉 Chirurgia Corporală": [
    { title: "Mărire sâni cu implant mamar", price: "4500-5500 EURO" },
    { title: "Ridicare sâni (Mastopexie) cu proteze", price: "5500-7000 EURO" },
    { title: "Mamopexie (ridicare sâni)", price: "5000-6000 EURO" },
    {
      title: "Mamoreducție (ridicare + micșorare sâni)",
      price: "5000-6000 EURO",
    },
    { title: "Gigantomastie", price: "5000-6000 EURO" },
    { title: "Mărire sâni cu proteze", price: "6000-6500 EURO" },
    {
      title: "Mărire sâni cu ridicare + proteze",
      price: "6500-7500 EURO",
    },
    { title: "Abdominoplastie", price: "5000-7000 EURO" }, // UPDATED
    { title: "Mini-abdominoplastie", price: "3000 EURO" }, // UPDATED
    { title: "Lipoaspirație", price: "2000-4000 EURO" }, // UPDATED
    { title: "Labioplastie", price: "1200 EURO" }, // UPDATED
    { title: "Ginecomastie", price: "3000-5000 EURO" }, // UPDATED
    { title: "Lifting de brațe", price: "2500-3000 EURO" }, // UPDATED
    { title: "Lifting de coapse", price: "3000-5000 EURO" }, // UPDATED
  ],

  "💉 Chirurgia Feței": [
    { title: "Blefaroplastie superioară", price: "6500 RON" }, // UPDATED
    { title: "Blefaroplastie inferioară", price: "7500 RON" }, // UPDATED
    {
      title: "Blefaroplastie inferioară + cantopexie (cat eyes)",
      price: "1500 EURO",
    },
    { title: "Facelift deep plane", price: "6000 EURO" },
    { title: "Mini facelift", price: "15000 RON" }, // UPDATED
    { title: "Lifting buze", price: "5500 RON" }, // UPDATED
    { title: "Lifting sprâncene", price: "6000 RON" }, // UPDATED
    { title: "Corecție lob auricular (bilateral)", price: "1500 RON" }, // UPDATED
    {
      title: "Lipofilling full face cu grăsime proprie cu anestezie locală",
      price: "1000 EURO",
    },
    {
      title: "Lipofilling full face cu grăsime proprie cu anestezie totală",
      price: "1500 EURO",
    },
    { title: "Rinoplastie", price: "3800 EURO" },
    { title: "Otoplastie cu anestezie totală", price: "1800 EURO" },
    { title: "Otoplastie cu anestezie locală", price: "1300 EURO" },
    { title: "Lipoaspirație gușă cu anestezie locală", price: "800 EURO" },
    { title: "Lipoaspirație gușă cu anestezie totală", price: "1300 EURO" },
    { title: "Lifting gât", price: "2000 EURO" },
  ],

  "💉 Chirurgia Pielii și a Cancerului de Piele": [
    { title: "Excizie formațiune tumorală", price: "1000 RON" },
    { title: "Excizie formațiune tumorală + biopsie", price: "1300 RON" }, // UPDATED
    { title: "Revizie cicatrici", price: "1600 RON" }, // UPDATED
    { title: "Excizie lipom", price: "800-1000 RON" }, // UPDATED
    {
      title: "Excizie formațiune tumorală cu lambou local",
      price: "2500 RON", // UPDATED
    },
    { title: "Excizie xantelasmă", price: "1000 RON" },
    { title: "Suprimare fire de sutură", price: "80 RON" },
    { title: "Pansament", price: "100 RON" },
  ],

  "💉 Injectări Botox": [
    { title: "Injectare Toxină Botulinică 1 zonă", price: "150 EURO" },
    { title: "Injectare Toxină Botulinică (3 zone)", price: "300 EURO" },
    {
      title: "Injectare Toxină Botulinică bărbați (3 zone)",
      price: "300-350 EURO",
    },
    {
      title: "Injectare Toxină Botulinică maseter (mandibulă)",
      price: "300 EURO",
    },
    { title: "Injectare Toxină Botulinică anti torticolis", price: "300 EURO" },
    { title: "Injectare Toxină Botulinică axilă", price: "400 EURO" },
    {
      title: "Injectare Toxină Botulinică palme-hiperhidroză",
      price: "400 EURO",
    },
    { title: "Injectare Toxină Botulinică menton", price: "100 EURO" },
  ],

  "💉 Injectări Acid Hialuronic": [
    { title: "Injectare Acid Hialuronic 1 ml riduri fine", price: "300 EURO" },
    { title: "Injectare șanțuri nazo-geniene", price: "300 EURO" },
    { title: "Injectare buze volum / volum natural", price: "300 EURO" },
    { title: "Injectare Buze tehnica Russian Lips", price: "300 EURO" },
    { title: "Injectare cearcăne cu Acid Hialuronic", price: "350 EURO" },
    { title: "Injectare pomeți cu Acid Hialuronic", price: "350 EURO" },
    { title: "Injectare mandibulă (jaw line) cu AH 2 ml", price: "500 EURO" }, // UPDATED
    { title: "Hialuronidază - neutralizare AH", price: "200 EURO" }, // UPDATED
    { title: "Injectare Acid Hialuronic Juvederm 0.5 ml", price: "200 EURO" }, // NEW
  ],

  "💉 Lifting Nechirurgical": [
    { title: "Fire PDO Anchor", price: "100 EURO/FIR" },
    { title: "Pachet lifting fire PDO 6 buc", price: "550 EURO" },
  ],

  "💉 Tratamentul Cicatricilor": [
    {
      title: "Volon - tratament injectabil pentru cicatrici Cheloide",
      price: "150 EURO/ședință", // UPDATED
    },
  ],

  "💉 Biostimulatoare de Colagen": [
    { title: "Tratament SCULPTRA", price: "500 EURO" },
    { title: "Tratament HarmoniCA", price: "350 EURO" },
    { title: "Tratament Prophilo", price: "400 EURO" },
    { title: "Lipoliză injectabilă", price: "100 EURO/zonă" }, // UPDATED
  ],

  "💉 Skinbooster": [
    { title: "Injectare pleoape cu Phillart", price: "200 EURO" },
    { title: "Skinbooster full face", price: "80 EURO" },
    { title: "Pachet 3 ședințe skinbooster", price: "200 EURO" },
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
          Lista de preturi aferente serviciilor noastre:
        </h2>
        <p className="flex justify-center p-4">
          *Preturile au rol orientativ, pretul aferent interventiilor si
          procedurilor se stabileste in urma consultului
        </p>
        <div className="space-y-8 p-4 md:space-y-8 xs:space-y-4 xs:p-2 ">
          {Object.entries(priceList).map(([category, items], index) => (
            <div key={index} className="p-4">
              <h3 className="text-2xl font-bold mb-4 xs:text-lg md:text-2xl ">
                {category}
              </h3>
              <div className="grid grid-row-1 gap-6 ">
                {items.map((item, idx) => (
                  <PriceListItem
                    key={idx}
                    title={item.title}
                    price={item.price}
                  />
                ))}
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
    description="Lista completă de prețuri pentru procedurile de chirurgie plastică, estetică și tratamente medicale. Prețuri transparente și competitive în Timișoara."
    keywords="prețuri chirurgie plastică, cost proceduri estetice, preț botox, preț acid hialuronic, preț lifting, preț liposucție, Timișoara"
  />
);

export default Prices;
