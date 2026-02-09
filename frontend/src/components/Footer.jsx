'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks, socialLinks as defaultSocialLinks } from '../data/content';
import { getFooterData } from '../lib/api';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [footerData, setFooterData] = useState(null);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await getFooterData();
                setFooterData(data);
            } catch (error) {
                console.error("Failed to load footer data", error);
            }
        }
        loadData();
    }, []);

    // Destructure with fallbacks
    const {
        brandName,
        brandDesc,
        copyrightText,
        socialLinks,
        exploreLinks,
        infoLinks
    } = footerData || {};

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-col">
                        <div className="footer-logo">
                            <span className="logo-rotary-bot">{brandName ? brandName.split(' ')[0] : 'Rotaract'}</span>
                            <span className="logo-club-bot">{brandName ? brandName.split(' ').slice(1).join(' ') : 'Rivoli'}</span>
                        </div>
                        <p className="footer-desc">
                            {brandDesc || (
                                <>
                                    Club partner del Rotary International.<br />
                                    Giovani in azione per la comunità.
                                </>
                            )}
                        </p>
                        <div className="social-icons">
                            {(socialLinks || defaultSocialLinks).map((social) => (
                                <a
                                    key={social.id || social.platform}
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
                            {(exploreLinks || navLinks).map((link) => (
                                <li key={link.id || link.path || link.url}>
                                    <Link href={link.path || link.url || link.link}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal/Contact Column */}
                    <div className="footer-col">
                        <h4>Info</h4>
                        <ul className="footer-links">
                            {infoLinks?.map((link) => (
                                <li key={link.id}>
                                    <Link href={link.url}>{link.label}</Link>
                                </li>
                            )) || (
                                    <>
                                        <li><Link href="/chi-siamo#contatti">Contatti</Link></li>
                                        <li><Link href="/privacy">Privacy Policy</Link></li>
                                        <li><Link href="/sostienici">Dona Ora</Link></li>
                                    </>
                                )}
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} {copyrightText || "Rotaract Club Rivoli. All rights reserved."}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
