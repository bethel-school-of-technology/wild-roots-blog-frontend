import React from 'react';
import '../assets/Navigation.css';
import { Link } from 'react-router-dom';

const navLinks = [
    {
        title: <Link to="/" className="words">Home</Link>,
        path: '/'
    },
    {
        title: <Link to="/gardening" className="words">Gardening</Link>,
        path: '/gardening'
    },
    {
        title: <Link to="/cooking" className="words">Cooking</Link>,
        path: '/cooking'
    },
    {
        title: <Link to="/local-business" className="words">Local Business</Link>,
        path: '/local-business'
    },
    {
        title: <Link to="/scripture" className="words">Scripture</Link>,
        path: '/scripture'
    },
    {
        title: <Link to="/contact" className="words">Contact Us</Link>,
        path: '/contact'
    },
];

export default function Navigation () {
    return(
        <div className="navigation">
            <nav className="navigation__list">
                <ul id='dots'>
                { navLinks.map((link, index) => (
                    <li key={index}>
                        {link.title}
                    </li>
                ))}
                </ul>
            </nav>
        </div>
    )
}
