import React from 'react';

export const PriceListItem = ({ title, price }) => {
    return (
      <div className="flex flex-row bg justify-between p-4 rounded-lg shadow-lg gap-2">
        <h2 className="text-lg font-bold pt-2 sm:text-lg xs:text-sm">
          {title}
        </h2>
        <span className="flex whitespace-nowrap bg-gradient-to-r from-purple-800 via-purple-700 to-slate-900 shadow-lg border-b border-purple-500/30 text-white px-4 py-2 rounded-full text-lg font-semibold sm:text-md xs:text-xs ml-auto text-center">
          {price}
        </span>
      </div>
    );
};
