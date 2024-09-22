import React from "react";
import { Header } from "../../components/Header";
import { PriceListItem } from '../../components/PriceListItem';
import bgimage from '../../images/minimal-bg.jpg';
import { Footer } from '../../components/Footer';


const priceList = {
    "💉 Chirurgia Corporala": [
      { title: "Marire sani cu Implant mamar", price: "4500-5500 EURO" },
      { title: "Ridicare sani (Mastopexie) fara proteze", price: "4500-5500 EURO" },
      { title: "Ridicare sani (Mastopexie) cu proteze", price: "5500-7000 EURO" },
      { title: "Abdominoplastie", price: "4500-5500 EURO" },
      { title: "Mini-abdominoplastie", price: "2800-3500 EURO" },
      { title: "Lipoaspiratie", price: "1500-4000 EURO (3 ZONE)" },
      { title: "Labioplastie", price: "1500 EURO" },
      { title: "Ginecomastie", price: "2800-3500 EURO" },
      { title: "Lifting de brate", price: "2500-3500 EURO" },
      { title: "Lifting de coapse", price: "3000-4500 EURO" }
    ],
    "💉 Chirurgia Fetei": [
      { title: "Blefaroplastie superioara", price: "1200 EURO" },
      { title: "Blefaroplastie inferioara", price: "1300 EURO" },
      { title: "Blefaroplastie inferioara + cantopexie (cat eyes)", price: "1500 EURO" },
      { title: "Facelift deep plane", price: "6000 EURO" },
      { title: "Mini facelift", price: "2000 EURO" },
      { title: "Lifting buze", price: "1400 EURO" },
      { title: "Lifting sprancene", price: "1000 EURO" },
      { title: "Corectie lob auricular (bilateral)", price: "300 EURO" },
      { title: "Lipofilling full face cu grasime proprie cu anestezie locala", price: "1000 EURO" },
      { title: "Lipofilling full face cu grasime proprie cu anestezie totala", price: "1500 EURO" },
      { title: "Rinoplastie", price: "3800 EURO" },
      { title: "Otoplastie cu anestezie totala", price: "1800 EURO" },
      { title: "Otoplastie cu anestezie locala", price: "1300 EURO" },
      { title: "Lipoaspiratie gusa cu anestezie locala", price: "800 EURO" },
      { title: "Lipoaspiratie gusa cu anestezie totala", price: "1300 EURO" },
      { title: "Lifting gat", price: "2000 EURO" }
    ],
    "💉 Chirurgia Pielii si al Cancerului de Piele": [
      { title: "Excizie formatiune tumorala", price: "600 RON" },
      { title: "Excizie formatiune tumorala + biopsie", price: "800 RON" },
      { title: "Revizie cicatrici", price: "1000 RON" },
      { title: "Excizie lipom", price: "600-1500 RON" },
      { title: "Excizie formatiune tumorala cu lambou local", price: "1500-2000 RON" },
      { title: "Excizie xantelasme", price: "1000 RON" },
      { title: "Suprimare fire de sutura", price: "80 RON" },
      { title: "Pansament", price: "100 RON" }
    ],
    "💉 Injectari Botox": [
      { title: "Injectare Toxina Botulinica 1 zona", price: "150 EURO" },
      { title: "Injectare Toxina Botulinica (3 zone)", price: "250-300 EURO" },
      { title: "Injectare Toxina Botulinica barbati (3 zone)", price: "300-350 EURO" },
      { title: "Injectare Toxina Botulinica maseter (mandibula)", price: "300 EURO" },
      { title: "Injectare Toxina Botulinica anti terticolis", price: "300 EURO" },
      { title: "Injectare Toxina Botulinica axila", price: "400 EURO" },
      { title: "Injectare Toxina Botulinica palme-hiperhidroza", price: "400 EURO" },
      { title: "Injectare Toxina Botulinica Menton", price: "100 EURO" }
    ],
    "💉 Injectari Acid Hialuronic": [
      { title: "Injectare Acid Hialuronic 1 ml Riduri fine", price: "250-300 EURO" },
      { title: "Injectare santuri nazo-geniene", price: "300 EURO" },
      { title: "Injectare buze volum / natural volume", price: "250 EURO" },
      { title: "Injectare Buze tehnica Russian Lips", price: "300 EURO" },
      { title: "Injectare cearcane cu Acid Hialuronic", price: "350 EURO" },
      { title: "Injectare pometi cu Acid Hialuronic", price: "300 EURO" },
      { title: "Injectare mandibula (jaw line) cu AH 2 ml", price: "400 EURO" },
      { title: "Hialuronidaza - neutralizare AH", price: "150 EURO" }
    ],
    "💉 Lifting Nechirurgical": [
      { title: "Fire PDO Anchor", price: "100 EURO/FIR" },
      { title: "Pachet lifting fire PDO 6 buc", price: "550 EURO" }
    ],
    "💉 Tratamentul Cicatricilor": [
      { title: "Volon - tratament injectabil pentru cicatrici Cheloide", price: "100 EURO/sedinta" }
    ],
    "💉 Biostimulatoare de Colagen": [
      { title: "Tratament SCULPTRA", price: "500 EURO" },
      { title: "Tratament HarmoniCA", price: "350 EURO" },
      { title: "Tratament Prophilo", price: "400 EURO" },
      { title: "Lipoliza injectabila", price: "100 EURO/Sedinta" }
    ],
    "💉 Skinbooster": [
      { title: "Injectare pleoape cu Phillart", price: "200 EURO" },
      { title: "Skinbooster full face", price: "80 EURO" },
      { title: "Pachet 3 sedinte skinbooster", price: "200 EURO" }
    ]
  };
  

const Prices = () => {
    return (
        <div
            className="min-h-screen font-merriweather bg-cover bg-center"
            style={{ backgroundImage: `url(${bgimage})` }}
        >
            <Header wLogo={true}/>
            <div className="mb-5">
                <h2 className="text-2xl font-extrabold tracking-tight text-center p-4 pt-10 xs:text-xl md:text-2xl">
                    Lista de preturi aferente serviciilor noastre:
                </h2>
                <div className="space-y-8 p-4 md:space-y-8 xs:space-y-4 xs:p-2 ">
                    {Object.entries(priceList).map(([category, items], index) => (
                        <div key={index} className="p-4">
                            <h3 className="text-2xl font-bold mb-4 xs:text-lg md:text-2xl ">{category}</h3>
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
            <Footer/>
        </div>
    );
};

export default Prices;
