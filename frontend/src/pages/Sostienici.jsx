import React, { useState } from 'react';
import { Info, PieChart, FileText, Handshake } from 'lucide-react';
import { donationMethods } from '../data/content';
import './Sostienici.css';

const Sostienici = () => {
    const [showBankDetails, setShowBankDetails] = useState(false);

    return (
        <div className="page-sostienici">
            {/* Hero */}
            <section className="section bg-primary text-white text-center">
                <div className="container">
                    <h1 className="mb-md">Sostienici</h1>
                    <p className="lead">
                        Il tuo contributo ci permette di realizzare progetti concreti per il territorio.
                        Ogni donazione è un passo verso un futuro più inclusivo.
                    </p>
                </div>
            </section>

            {/* Donation Methods */}
            <section id="metodi" className="section">
                <div className="container">
                    <h2 className="text-center mb-lg">Come Donare</h2>
                    <div className="donation-container">


                        <div className="donation-content">
                            <div className="online-payment text-center">
                                <h3>Dona con Carta o PayPal via Stripe</h3>
                                <p className="mb-md">Metodo sicuro e veloce per sostenere i nostri progetti immediatamente.</p>
                                <button className="btn btn-primary btn-lg">Dona con Carta / PayPal</button>
                                <div className="mt-md">
                                    <button
                                        className="btn btn-text"
                                        onClick={() => setShowBankDetails(!showBankDetails)}
                                        style={{ marginTop: '1rem', textDecoration: 'underline' }}
                                    >
                                        {showBankDetails ? "Nascondi dati bonifico" : "Preferisci fare un bonifico?"}
                                    </button>
                                </div>
                            </div>

                            {showBankDetails && (
                                <div className="bank-details mt-lg" style={{ marginTop: '2rem', borderTop: '1px solid #eee', paddingTop: '2rem' }}>
                                    <h3>Dati per il Bonifico</h3>
                                    <ul className="detail-list">
                                        {donationMethods[0].details.map((detail, idx) => (
                                            <li key={idx}>
                                                <span className="label">{detail.label}</span>
                                                <span className="value">{detail.value}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="note-box">
                                        <p><Info size={16} /> Ricorda di inviarci copia del bonifico per ricevere i ringraziamenti ed eventuali ricevute.</p>
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
                    <h2 className="text-center mb-lg">Trasparenza</h2>
                    <div className="grid grid-3 text-center">
                        <div className="transparency-card">
                            <div className="icon-lg"><PieChart size={32} /></div>
                            <h3>100% Progetti</h3>
                            <p>Tutti i fondi raccolti vengono destinati interamente ai progetti di service e ai beneficiari.</p>
                        </div>
                        <div className="transparency-card">
                            <div className="icon-lg"><FileText size={32} /></div>
                            <h3>Rendicontazione</h3>
                            <p>Ogni anno pubblichiamo un report delle attività e dei fondi gestiti per massima chiarezza.</p>
                        </div>
                        <div className="transparency-card">
                            <div className="icon-lg"><Handshake size={32} /></div>
                            <h3>Volontariato</h3>
                            <p>Nessun socio riceve compensi. Il nostro impegno è totalmente gratuito e volontario.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partnership */}
            <section id="partnership" className="section text-center">
                <div className="container">
                    <h2 className="mb-md">Diventa Partner</h2>
                    <p className="lead mb-lg text-secondary">
                        Aziende e professionisti possono sostenere i nostri eventi o progetti specifici.
                        Costruiamo insieme un percorso di responsabilità sociale.
                    </p>
                    <a href="mailto:partnership@rotaractrivoli.org" className="btn btn-outline btn-lg">Proponi una Partnership</a>
                </div>
            </section>
        </div>
    );
};

export default Sostienici;
