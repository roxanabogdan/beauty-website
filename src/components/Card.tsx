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
        route: 'default',
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
        <div className="flex flex-wrap justify-center gap-6 p-5 cursor-pointer">
            {data.map((item, index) => (
                <a key={index}  href={`/rezultate?galerie=${item.route}`}
                    className="max-w-sm w-full flex flex-col border bg-gradient-to-t from-gray-600 to-fuchsia-950 border-gray-200 rounded-lg shadow min-h-[400px] transition-transform duration-300 hover:scale-105">
                    <div className="p-3">
                        <div
                            style={{ backgroundImage: `url(${item.image})` }}
                            className="bg-cover bg-center h-48 w-full rounded-md mb-3"
                            alt={item.title} // Use title for alt text
                        />                        
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-200 dark:text-white">
                            {item.title}
                        </h5>
                        <ul className="mb-3 font-normal md:text-lg xs:text-sm text-white list-disc pl-5 flex-grow">
                            {item.list.map((listItem, listIndex) => (
                                <li key={listIndex}>{listItem}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-auto flex justify-end p-3">
                        <div className="inline-flex items-center font-medium text-white border border-white text-sm py-2 px-4 rounded-3xl hover:bg-white hover:text-gray-700 focus:ring-4 focus:outline-none">
                            Vezi rezultate pre/post-operator
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
};
