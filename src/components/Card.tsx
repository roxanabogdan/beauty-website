import React from "react";
import botox from '../images/botox.jpg';
import mamar from '../images/mamar.jpg';
import lifting from '../images/lifting.webp';
import silueta from '../images/silueta.jpg';

const data = [
    {
        title: 'Proceduri estetice minim invazive',
        route: 'proceduri-estetice',
        image: botox,
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
            'Excizie formatiuni tumorale',
            'Excizie formatiuni tumorale+biopsie',
            'Blefaroplastie superioara',
            'Blefaroplastie inferioara',
            'Mini facelift',
            'Revizie cicatrici',
            'Lifting buze',
            'Lifting sprancene',
            'Corectie lob auricular (bilateral)',
            'Excizie lipom',
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
                        <ul className="mb-3 font-normal text-white  list-disc pl-5 flex-grow">
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
