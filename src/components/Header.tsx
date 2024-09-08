import React from "react";
import { Link } from "gatsby";
import { Icon } from './Icon';

export const Header = ({wHomepage = true, wLogo = false}) => {
    return (
       <div>
            <div className="flex flex-wrap justify-between bg-gradient-to-tr from-gray-600 to-fuchsia-950 border-gray-200 text-gray-200 mb-10">
                <div className="flex gap-4 p-4 whitespace-nowrap md:text-sm xs:text-xs">
                {wHomepage &&  
                    <Link to="/">
                      <span className="hover:text-gray-400">PURE AESTHETIC</span> 
                    </Link>
                    }
                </div>
                <div className="flex flex-wrap gap-4 items-end p-4 whitespace-nowrap md:text-sm xs:text-xs">
                    <Link to='/rezultate'>
                        <span className="hover:text-gray-400">GALERIE FOTO</span> 
                    </Link>
                    <Link to='/preturi'>
                    <span className="hover:text-gray-400">PRETURI</span> 
                    </Link>
                    <Link to="tel:+40727 784 478">
                    <strong> <span className="text-white">📞</span> 0727 784 478</strong> 
                    </Link>
                    <Link to="https://www.facebook.com/profile.php?id=100090671270044">
                        <Icon icon="facebook" />
                    </Link>
                    <Link to="https://instagram.com/pure.aesthetic.ro?igshid=MzRlODBiNWFlZA==">
                        <Icon icon="instagram"/>
                    </Link>
                  
                </div>
            </div>
            {wLogo && <div className="flex flex-wrap justify-center pb-10"> 
                <div className="bg-[url('../images/purelogo.png')] bg-cover h-24 w-40 bg-center"></div>
            </div>}
        </div>
    );
};
