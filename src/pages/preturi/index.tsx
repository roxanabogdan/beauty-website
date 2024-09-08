import React from "react";
import { Header } from "../../components/Header";
import { PriceListItem } from '../../components/PriceListItem';
import bgimage from '../../images/minimal-bg.jpg';

const priceList = {
    '💉 Proceduri chirurgicale cu anestezie locala': [
        { title: 'Excizie formatiuni tumorale', price: '600RON' },
        { title: 'Mini facelift', price: '1200RON' },
        { title: 'Mini facelift', price: '800RON' },
    ],
    '💉 Proceduri estetice': [
        { title: 'Mini facelift', price: '12000RON' },
        { title: 'Mini facelift', price: '12000RON' },
    ],
    '💉 Chirurgia sanului': [
        { title: 'Mini facelift', price: '1000RON' },
        { title: 'Mini facelift', price: '12000RON' },
    ],
    '💉 Proceduri chirurgicale cu anestezie generala': [
        { title: 'Mini facelift', price: '1700RON' },
        { title: 'Mini facelift', price: '12000RON' },
    ]
};

const Prices = () => {
    return (
        <div
            className="min-h-screen font-merriweather bg-cover bg-center"
            style={{ backgroundImage: `url(${bgimage})` }}
        >
            <Header wLogo={true}/>
            <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-center p-4 pt-10 xs:text-xl md:text-2xl">
                    Lista de preturi aferente serviciilor noastre:
                </h2>
                <div className="space-y-8 p-4 md:space-y-8 xs:space-y-4 xs:p-2 ">
                    {Object.entries(priceList).map(([category, items], index) => (
                        <div key={index} className="p-4">
                            <h3 className="text-2xl font-bold mb-4 xs:text-lg md:text-2xl">{category}</h3>
                            <div className="grid grid-row-1 gap-6">
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
        </div>
    );
};

export default Prices;
