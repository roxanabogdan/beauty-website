import React from "react";
import mamar from '../images/mamar.jpg';
import lifting from '../images/lifting.webp';
import silueta from '../images/silueta.jpg';
import hand from '../images/hand.jpeg';
import face from '../images/face.jpeg';
import excizie from '../images/excizie.webp';
import chirurgia from '../images/chirurgia-fetei.jpg';

const data = [
    {
        title: 'Proceduri estetice minim invazive',
        route: 'proceduri-estetice',
        image: face,
        list: [
            'Injectare Toxina Botulinica full',
            'Injectare Acid Hialuronic',
            'Fire PDO Anchor',
            'Fire PDO Screw',
            'Hialuronidaza-neutralizare AH',
            'Lipoliza injectabila',
            'Tratament pentru cicatrici cheloide',
            'Injectare cearcane cu Acid Hialuronic',
            'Injectare pometi cu Acid Hialuronic',
            'Injectare mandibula (jaw line)',
            'Sculptra'
        ]
    },
    {
        title: 'Chirurgia sânului',
        route:'chirurgia-sanului',
        image: mamar,
        list: [
            'Mamopexie (ridicare/lifting sâni)',
            'Mamoreducție (ridicare/lifting sâni cu micșorare)',
            'Gigantomastie',
            'Marire de sâni cu proteze',
            'Marire de sâni cu ridicare cu proteze'
        ]
    },
    {
        title: 'Blefaroplastie',
        route: 'blefaroplastie',
        image: lifting,
        list: [
            'Blefaroplastie superioara',
            'Blefaroplastie inferioara',
            'Cantopexie (fox eyes)',
            'Ptoza palpebrala',
            'Excizie formatiune tumorala cu lambou local',
        ]
    },
    {
        title: 'Chirurgia siluetei',
        route: 'chirurgia-siluetei',
        image: silueta,
        list: [
            'Abdominoplastie',
            'Mini-abdominoplastie',
            'Lipoaspirație',
            'Labioplastie',
            'Ginecomastie',
            'Lifting de brate',
            'Lifting de coapse ',
        ]
    },
    {
        title: 'Chirurgia fetei',
        route: 'chirurgia-fetei',
        image: chirurgia,
        list: [
            "Facelift deep plane",
            "Mini facelift",
            "Lifting buze",
            "Lifting sprancene",
            "Corectie lob auricular (bilateral)",
            "Lipofilling full face cu grasime proprie cu anestezie locala",
            "Lipofilling full face cu grasime proprie cu anestezie totala",
            "Rinoplastie",
            "Otoplastie cu anestezie totala",
            "Otoplastie cu anestezie locala",
            "Lipoaspiratie gusa cu anestezie locala",
            "Lipoaspiratie gusa cu anestezie totala",
            "Lifting gat"
        ]
    },
    {
        title: 'Chirurgia pielii si al Cancerului de piele',
        route: 'chirurgia-pielii',
        image: excizie,
        list: [
            "Excizie formatiune tumorala",
            "Excizie formatiune tumorala + biopsie",
            "Revizie cicatrici",
            "Excizie lipom",
            "Excizie formatiune tumorala cu lambou local",
            "Excizie xantelasme",
            "Suprimare fire de sutura",
            "Pansament"
        ]
    },
    {
        title: 'Chirurgia mainii',
        route: 'chirurgia-mainii',
        image: hand,
        list: [
            'Sindrom de tunel carpian',
            'Trigger finger / deget in resort',
            '⁠Malett finger / deget in ciocan',
            'Maladia Dupuytren',
            'Sindrom de tunel cubital',
            '⁠Chiste sinoviale',
        ]
    }
];

export const Card = () => {
    return (
      <div className="flex flex-wrap justify-center gap-8 p-8 cursor-pointer">
        {data.map((item, index) => (
          <a
            key={index}
            href={`/rezultate?galerie=${item.route}`}
            className="max-w-sm w-full flex flex-col bg-gradient-to-br from-purple-800/80 via-purple-700/70 to-slate-900/90 backdrop-blur-md border border-purple-500/20 rounded-2xl shadow-2xl min-h-[450px] transition-all duration-500 hover:scale-105 hover:-translate-y-2 group relative overflow-hidden"
          >
            {/* Subtle background pattern with reduced intensity */}
            <div className="absolute inset-0 bg-gradient-to-tl from-purple-600/10 to-slate-800/15 rounded-2xl"></div>
            <div
              className="absolute inset-0 opacity-20 blur-sm"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>

            <div className="relative z-10 p-6">
              <div className="relative overflow-hidden rounded-xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-500">
                <div
                  style={{ backgroundImage: `url(${item.image})` }}
                  className="bg-cover bg-center h-56 w-full transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  title={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <p className="text-sm text-slate-700 font-medium">
                      Vezi rezultate →
                    </p>
                  </div>
                </div>
              </div>

              <h5 className="mb-4 text-2xl font-bold tracking-tight text-white group-hover:text-purple-200 transition-colors duration-300 drop-shadow-sm">
                {item.title}
              </h5>

              <ul className="mb-6 font-normal text-base text-purple-100/90 list-disc pl-5 flex-grow space-y-1">
                {item.list.map((listItem, listIndex) => (
                  <li
                    key={listIndex}
                    className="hover:text-white transition-colors duration-200 leading-relaxed"
                  >
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 mt-auto flex justify-end p-6">
              <div className="bg-gradient-to-r from-white/95 to-slate-200/95 text-slate-800 px-4 py-2 rounded-full font-bold hover:from-slate-100 hover:to-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm flex items-center gap-2 backdrop-blur-sm">
                Vezi rezultate pre/post-operator
                <svg
                  className="rtl:rotate-180 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    );
};
