import React from "react";
import { Link } from "gatsby";
import { Icon } from './Icon';

export const Header = () => {
    return (
       <div>
            <div className="container mx-auto flex justify-end">
                <div className="flex flex-row gap-3 items-end pt-3 text-gray-700"> 
                    <div className="flex font-semibold  gap-3 pb-3 pr-1">
                        <Link to='/rezultate'>
                           <span className="hover:text-fuchsia-950"> GALERIE FOTO </span> 
                        </Link>
                        <Link to='/rezultate'>
                        <span className="hover:text-fuchsia-950"> PRETURI </span> 
                        </Link>
                    </div>
                   
                </div>
            </div>
             <header className="bg-[url('../images/botox.jpg')] bg-cover bg-center h-[500px] text-gray-400">
                <div className="bg-[url('../images/purelogo.png')] bg-cover h-24 w-40  bg-center"></div>
            </header>
        </div>
    );
};
