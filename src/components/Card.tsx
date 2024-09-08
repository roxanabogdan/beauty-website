import React from "react";

const data = [
    {
        title: 'Proceduri estetice minim invazive',
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
        <a href='/rezultate' className="flex flex-wrap justify-center gap-6 p-5 cursor-pointer">
            {data.map((item, index) => (
                <div key={index} 
                    className="max-w-sm w-full flex flex-col border bg-gradient-to-t from-gray-600 to-fuchsia-950 border-gray-200 rounded-lg shadow min-h-[400px] transition-transform duration-300 hover:scale-105">
                    <div className="p-3">
                        <div className="bg-[url('../images/botox.jpg')] bg-cover bg-center h-48 w-full rounded-md mb-3" alt="" />
                        
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
                        <a href="/rezultate" className="inline-flex items-center font-medium text-white border border-white text-sm py-2 px-4 rounded-3xl hover:bg-white hover:text-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            Vezi rezultate pre/post-operator
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            ))}
        </a>
    );
};
