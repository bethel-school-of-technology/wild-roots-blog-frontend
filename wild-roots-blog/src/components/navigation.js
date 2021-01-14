import React from 'react';
import '../assets/Navigation.css';
import { Link } from 'react-router-dom';

const navLinks = [
    {
        title: <Link to="/">Home</Link>,
        path: '/'
    },
    {
        title: <Link to="/gardening">Gardening</Link>,
        path: '/gardening'
    },
    {
        title: <Link to="/cooking">Cooking</Link>,
        path: '/cooking'
    },
    {
        title: <Link to="/local-business">Local Business</Link>,
        path: '/local-business'
    },
    {
        title: <Link to="/scripture">Scripture</Link>,
        path: '/scripture'
    },
    {
        title: <Link to="/contact">Contact Us</Link>,
        path: '/contact'
    },
    {
        title: <Link to="/login">Login</Link>,
        path: '/login'
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
