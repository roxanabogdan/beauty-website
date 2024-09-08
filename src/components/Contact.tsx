import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { Link } from "gatsby";
import { Icon } from "./Icon";


export const ContactCard = () => {
  return (
    <div className="flex flex-wrap justify-center w-full p-4">
        <div className="bg-fuchsia-950 text-white p-4 shadow-lg rounded-lg">
        <div className='flex flex-col'>
            <div className='flex flex-wrap justify-between'>
                <h2 className="text-xl font-semibold pb-2">Contacteaza-ne!</h2>
                <div className="flex gap-4 pt-2]] pb-2">
                <Link to="https://www.facebook.com/profile.php?id=100090671270044">
                    <Icon icon="facebook" />
                </Link>
                <Link to="https://instagram.com/pure.aesthetic.ro?igshid=MzRlODBiNWFlZA==">
                    <Icon icon="instagram"/>
                </Link>
                </div>
            </div>
            <p className="mb-1">
            <strong>Addresa:</strong> Aleea Cristalului 2A, Timișoara
            </p>
            <p className="mb-1">
            <strong>Programul:</strong> Luni - Vineri, 13 - 20
            </p>
            <p className="mb-1">
            <strong>Telefon:</strong> 0727 784 478
            </p>
            <p>
            <strong>Email:</strong> info@example.com
            </p>
           
        </div>

      <div className='flex flex-col mt-4'>
        <ContactForm/>
      </div>
    </div>
    </div>
  );
};