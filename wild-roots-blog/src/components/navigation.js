import React from 'react';
import '../assets/Navigation.css';
import { Link } from 'react-router-dom';

const navLinks = [
    {
        title: <Link to='/'>Home</Link>,
        path: '/'
    },
    {
        title: <Link to='/blog'>Blog</Link>,
        path: '/blog'
    },
    {
        title: <Link to='/contact-us'>Contact</Link>,
        path: '/contact-us'
    },
    {
        title: <Link to='/login'>Login</Link>,
        path: '/login'
    },
    {
        title: <Link to='/scripture'>Scripture</Link>,
        path: '/scripture'
    }
];


export default function Navigation () {
    return(
    <nav className="site-navigation">
        <span>Wild Roots Blog</span>
        <ul id='dots'>
            { navLinks.map((link, index) => (
                <li key={index}>
                    {link.title}

                </li>
            ))}
        </ul>

    </nav>)
};