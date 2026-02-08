import React, { useState, useEffect } from 'react';
import { getHistory, getTeam, STRAPI_URL } from '../lib/api';
import './ChiSiamo.css';

// Placeholder avatar URL
const PLACEHOLDER_AVATAR = 'https://placehold.co/120x120/e2e8f0/4a5568?text=👤';

// Helper to get image URL from Strapi media object
const getImageUrl = (imageData, placeholder = PLACEHOLDER_AVATAR) => {
    if (!imageData) return placeholder;
    const url = imageData.url;
    return url?.startsWith('http') ? url : `${STRAPI_URL}${url}`;
};

const ChiSiamo = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [history, setHistory] = useState([]);
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const [historyData, teamData] = await Promise.all([
                    getHistory(),
                    getTeam()
                ]);
                setHistory(historyData);
                setTeam(teamData);
            } catch (error) {
                console.error("Failed to load Chi Siamo data", error);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    if (loading) return <div className="text-center section">Caricamento...</div>;

    return (
        <div className="page-chi-siamo">
            {/* Mission Section */}
            <section className="section bg-primary text-white text-center">
                <div className="container">
                    <h1 className="mb-md">Chi Siamo</h1>
                    <p className="lead">
                        Siamo giovani dai 18 ai 30 anni, uniti dalla voglia di fare la differenza.
                        Crediamo nell'amicizia, nel servizio e nella leadership responsabile.
                    </p>
                </div>
            </section>

            {/* What is Rotaract */}
            <section id="cos-e-rotaract" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-text">
                            <h2 className="mb-md">Cos'è il Rotaract?</h2>
                            <p>
                                Il Rotaract è un programma globale partner del Rotary International.
                                Offre ai giovani l'opportunità di sviluppare le proprie capacità di leadership
                                e di mettersi al servizio della comunità, divertendosi e stringendo amicizie in tutto il mondo.
                            </p>
                            <br />
                            <p>
                                <strong>I nostri valori:</strong> Amicizia, Integrità, Diversità, Servizio, Leadership.
                            </p>
                        </div>
                        <div className="col-image">
                            <div className="img-placeholder-lg">Rotaract Logo/Image</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* History (Accordion) */}
            <section id="storia" className="section bg-surface">
                <div className="container">
                    <h2 className="mb-lg text-center">La Nostra Storia</h2>
                    <div className="history-accordion">
                        {history.map((item, index) => (
                            <div key={item.id || item.documentId} className="accordion-item">
                                <button
                                    className={`accordion-header ${activeAccordion === index ? 'active' : ''}`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span className="year">{item.year}</span>
                                    <span className="event-title">{item.event}</span>
                                    <span className="icon">{activeAccordion === index ? '−' : '+'}</span>
                                </button>
                                <div className={`accordion-content ${activeAccordion === index ? 'open' : ''}`}>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section id="direttivo" className="section">
                <div className="container">
                    <h2 className="mb-lg text-center">Il Direttivo 2025/2026</h2>
                    <div className="grid grid-4 team-grid">
                        {team.map((member, index) => (
                            <div key={member.id || member.documentId} className="team-card text-center">
                                <img src={getImageUrl(member.avatar)} alt={member.name} className="avatar" />
                                <h3>{member.name}</h3>
                                <p className="role">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Us Steps */}
            <section id="come-entrare" className="section bg-secondary">
                <div className="container text-center">
                    <h2 className="mb-lg">Come entrare nel Club</h2>
                    <div className="steps-grid">
                        <div className="step-card">
                            <div className="step-number">1</div>
                            <h3>Partecipa</h3>
                            <p>Vieni a un nostro evento o riunione conviviale. È il modo migliore per conoscerci!</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">2</div>
                            <h3>Conosci</h3>
                            <p>Parla con i soci, scopri i nostri progetti e capisci se condividi i nostri valori.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">3</div>
                            <h3>Iscriviti</h3>
                            <p>Dopo un breve periodo di frequentazione, ufficializzeremo il tuo ingresso nel club.</p>
                        </div>
                    </div>
                    <a href="#contatti" className="btn btn-primary btn-lg mt-lg">Scrivici per iniziare</a>
                </div>
            </section>

            {/* Contact Section Anchor */}
            <section id="contatti" className="section">
                <div className="container text-center">
                    <h2 className="mb-md">Contattaci</h2>
                    <p className="mb-md">Hai domande o vuoi proporre una collaborazione? Scrivici!</p>
                    <a href="mailto:info@rotaractrivoli.org" className="btn btn-outline">info@rotaractrivoli.org</a>
                </div>
            </section>
        </div>
    );
};

export default ChiSiamo;
