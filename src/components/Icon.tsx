import React, { MouseEvent, RefObject } from 'react';

export interface IconProps {
    icon: string;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    customRef?: RefObject<HTMLDivElement>;
}

interface Icons {
    [key: string]: string;
}

export const iconClass: Icons = {
    facebook: 'bg-[url(../images/facebook.svg)] w-5 h-5 rounded-md',
    instagram: 'bg-[url(../images/instagram.svg)] w-5 h-5',
    location: 'bg-[url(../images/location.svg)] w-5 h-5',
    phone: 'bg-[url(../images/phone.svg)] w-5 h-5',

};

export const iconList = Object.keys(iconClass);

export const Icon = ({ icon, onClick, customRef }: IconProps) => {
    const extraProps = {
        ...(onClick && { onClick }),
        ...(customRef && { ref: customRef }),
    };

    return (
        <div
            data-testid={icon}
            className={`icon ${iconClass[icon]} bg-center bg-cover ${onClick ? 'cursor-pointer' : ''}`}
            {...extraProps}
        />
    );
};
