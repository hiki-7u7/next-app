import React from 'react'
import { ActiveLinks } from './ActiveLinks';
import style from './NavBar.module.css';


const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const NavBar = () => {
    return (
        <nav className={ style['container-links'] }>

            {
                menuItems.map( ({href, text}) => (
                    <ActiveLinks key={text} href={href} text={text} />       
                ))
            }
            
        </nav>
    )
}
