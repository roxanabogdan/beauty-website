import React from "react";
import { Link } from "gatsby";
import { Icon } from './Icon';

export const Header = ({wHomepage = true}) => {
    return (
       <div>
            <div className="flex flex-wrap justify-between bg-gradient-to-tr from-gray-600 to-fuchsia-950 border-gray-200 text-gray-200">
                <div className="flex gap-4 pb-4 pt-4 pl-4 whitespace-nowrap md:text-sm xs:text-xs">
                {wHomepage &&  
                    <Link to="/">
                      <span className="hover:text-gray-300">PURE AESTHETIC</span> 
                    </Link>
                    }
                </div>
                <div className="flex gap-4 pb-4 pt-4 pr-4 whitespace-nowrap md:text-sm xs:text-xs">
                    <Link to='/rezultate'>
                        <span className="hover:text-gray-300">GALERIE FOTO</span> 
                    </Link>
                    <Link to='/rezultate'>
                    <span className="hover:text-gray-300">PRETURI</span> 
                    </Link>
                    <Link to="0727 784 478">
                    <strong>0727 784 478</strong>
                    </Link>
                    <Link to="https://www.facebook.com/profile.php?id=100090671270044">
                        <Icon icon="facebook" />
                    </Link>
                    <Link to="https://instagram.com/pure.aesthetic.ro?igshid=MzRlODBiNWFlZA==">
                        <Icon icon="instagram"/>
                    </Link>
                  
                </div>
            </div>
            <div className="flex flex-wrap justify-center pb-5 pt-5"> 
                <div className="bg-[url('../images/purelogo.png')] bg-cover h-24 w-40 bg-center"></div>
            </div>
             {/* <header className="bg-[url('../images/botox.jpg')] bg-cover bg-center h-[500px] text-gray-400">
               
            </header> */}
        </div>
    );
};