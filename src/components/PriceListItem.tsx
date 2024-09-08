import React from 'react';

export const PriceListItem = ({ title, price }) => {
    return (
        <div className="flex flex-wrap bg justify-between p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold pt-2 xs:text-sm md:text-2lg">{title}</h2>
            <span className="bg-gradient-to-tr from-gray-600 to-fuchsia-950 border-gray-200 text-white px-4 py-2 rounded-full text-lg font-semibold xs:text-sm md:text-lg">
                {price}
            </span>
    </div>
    );
};
