'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '../data/content';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    // Pages with dark hero backgrounds need light header text
    const darkHeroPages = ['/chi-siamo', '/attivita', '/sostienici', '/news', '/progetti'];
    const hasDarkHero = darkHeroPages.includes(pathname);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerClass = `header ${isScrolled ? 'scrolled' : ''} ${!isScrolled && hasDarkHero ? 'on-dark' : ''}`;

    return (
        <header className={headerClass}>
            <div className="container header-container">
                <Link href="/" className="logo">
                    <span className="logo-rotary">Rotaract</span>
                    <span className="logo-club">Rivoli</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    href={link.path}
                                    className={`nav-link ${pathname === link.path ? 'active' : ''}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link href="/attivita#eventi" className="btn btn-primary btn-sm">
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
                                    href={link.path}
                                    className="mobile-nav-link"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href="/attivita#eventi"
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
