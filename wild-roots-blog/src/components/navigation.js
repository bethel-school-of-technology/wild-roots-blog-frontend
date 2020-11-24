import React from 'react';
import '../assets/Navigation.css';

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact Us',
        path: '/contact-us'
    },
    {
        title: 'Login',
        path: '/login'
    }
];


export default function Navigation () {
    return(<nav className="site-navigation">
        <span>Wild Roots Blog</span>
        <ul id='dots'>
            { navLinks.map((link, index) => (
                <li key={index}>
                    {link.title}

                </li>
            ))}
        </ul>

    </nav>)
}