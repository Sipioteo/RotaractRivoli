import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks, socialLinks } from '../data/content';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-col">
                        <div className="footer-logo">
                            <span className="logo-rotary-bot">Rotaract</span>
                            <span className="logo-club-bot">Rivoli</span>
                        </div>
                        <p className="footer-desc">
                            Club partner del Rotary International.<br />
                            Giovani in azione per la comunità.
                        </p>
                        <div className="social-icons">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.platform}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                >
                                    {social.platform}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Column */}
                    <div className="footer-col">
                        <h4>Esplora</h4>
                        <ul className="footer-links">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal/Contact Column */}
                    <div className="footer-col">
                        <h4>Info</h4>
                        <ul className="footer-links">
                            <li><Link to="/chi-siamo#contatti">Contatti</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/sostienici">Dona Ora</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Rotaract Club Rivoli. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
