'use client';

import { useState, useEffect } from 'react';
import { Info, PieChart, FileText, Handshake } from 'lucide-react';
import { getSupportData } from '../../src/lib/api';

export default function SostieniPage() {
    const [showBankDetails, setShowBankDetails] = useState(false);
    const [supportData, setSupportData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await getSupportData();
                setSupportData(data);
            } catch (error) {
                console.error("Failed to load Support data", error);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    if (loading) return <div className="text-center section">Caricamento...</div>;

    const {
        heroTitle, heroDescription,
        donationTitle, donationText, stripeLink, bankDetails,
        transparencyTitle, transparencyItems,
        partnershipTitle, partnershipText, partnershipEmail
    } = supportData || {};

    const renderBankDetails = (details) => {
        if (!details) return null;
        return details.split('\n').map((line, i) => <li key={i}>{line}</li>);
    };

    return (
        <div className="page-sostienici">
            {/* Hero */}
            <section className="section bg-primary text-white text-center">
                <div className="container">
                    <h1 className="mb-md">{heroTitle || "Sostienici"}</h1>
                    <p className="lead">
                        {heroDescription || "Il tuo contributo ci permette di realizzare progetti concreti per il territorio."}
                    </p>
                </div>
            </section>

            {/* Donation Methods */}
            <section id="metodi" className="section">
                <div className="container">
                    <h2 className="text-center mb-lg">{donationTitle || "Come Donare"}</h2>
                    <div className="donation-container">
                        <div className="donation-content text-center">
                            <h3>Dona con Carta o PayPal via Stripe</h3>
                            <p className="mb-md">{donationText || "Metodo sicuro e veloce."}</p>
                            <a href={stripeLink || "#"} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
                                Dona con Carta / PayPal
                            </a>
                            <div className="mt-md">
                                <button
                                    className="btn btn-text"
                                    onClick={() => setShowBankDetails(!showBankDetails)}
                                    style={{ marginTop: '1rem', textDecoration: 'underline' }}
                                >
                                    {showBankDetails ? "Nascondi dati bonifico" : "Preferisci fare un bonifico?"}
                                </button>
                            </div>

                            {showBankDetails && (
                                <div className="bank-details mt-lg" style={{ marginTop: '2rem', borderTop: '1px solid #eee', paddingTop: '2rem' }}>
                                    <h3>Dati per il Bonifico</h3>
                                    <ul className="detail-list">
                                        {renderBankDetails(bankDetails || "IBAN: Richiedilo in segreteria")}
                                    </ul>
                                    <div className="note-box">
                                        <p><Info size={16} /> Ricorda di inviarci copia del bonifico.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Transparency */}
            <section id="trasparenza" className="section bg-surface">
                <div className="container">
                    <h2 className="text-center mb-lg">{transparencyTitle || "Trasparenza"}</h2>
                    <div className="grid grid-3 text-center">
                        {transparencyItems?.map((item, index) => {
                            const Icon = item.icon === 'chart' ? PieChart : item.icon === 'file' ? FileText : Handshake;
                            return (
                                <div key={item.id || index} className="transparency-card">
                                    <div className="icon-lg"><Icon size={32} /></div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            );
                        }) || (
                                <>
                                    <div className="transparency-card">
                                        <div className="icon-lg"><PieChart size={32} /></div>
                                        <h3>100% Progetti</h3>
                                        <p>Tutti i fondi raccolti vengono destinati ai progetti.</p>
                                    </div>
                                    <div className="transparency-card">
                                        <div className="icon-lg"><FileText size={32} /></div>
                                        <h3>Rendicontazione</h3>
                                        <p>Report annuale delle attività.</p>
                                    </div>
                                    <div className="transparency-card">
                                        <div className="icon-lg"><Handshake size={32} /></div>
                                        <h3>Volontariato</h3>
                                        <p>Nessun socio riceve compensi.</p>
                                    </div>
                                </>
                            )}
                    </div>
                </div>
            </section>

            {/* Partnership */}
            <section id="partnership" className="section text-center">
                <div className="container">
                    <h2 className="mb-md">{partnershipTitle || "Diventa Partner"}</h2>
                    <p className="lead mb-lg text-secondary">
                        {partnershipText || "Aziende e professionisti possono sostenere i nostri eventi."}
                    </p>
                    <a href={`mailto:${partnershipEmail || "partnership@rotaractrivoli.org"}`} className="btn btn-outline btn-lg">
                        Proponi una Partnership
                    </a>
                </div>
            </section>
        </div>
    );
}
