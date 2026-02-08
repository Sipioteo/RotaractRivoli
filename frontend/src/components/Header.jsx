import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../data/content';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <Link to="/" className="logo">
                    <span className="logo-rotary">Rotaract</span>
                    <span className="logo-club">Rivoli</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link to="/attivita#eventi" className="btn btn-primary btn-sm">
                        Partecipa
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
                </button>

                {/* Mobile Nav */}
                <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="mobile-nav-list">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className="mobile-nav-link"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                to="/attivita#eventi"
                                className="btn btn-primary mobile-cta"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Partecipa
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
