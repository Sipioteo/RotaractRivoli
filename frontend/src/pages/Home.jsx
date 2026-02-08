import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Trophy } from 'lucide-react';
import Hero from '../components/Hero';
import { getHomepageData, getEvents, getProjects, STRAPI_URL } from '../lib/api';
import './Home.css';

// Placeholder image URL
const PLACEHOLDER_IMAGE = 'https://placehold.co/600x400/e2e8f0/4a5568?text=Immagine';

// Helper to get image URL from Strapi media object
const getImageUrl = (imageData, placeholder = PLACEHOLDER_IMAGE) => {
    if (!imageData) return placeholder;
    const url = imageData.url;
    // Strapi returns relative URLs, prepend base URL
    return url?.startsWith('http') ? url : `${STRAPI_URL}${url}`;
};

const Home = () => {
    const [homeData, setHomeData] = useState(null);
    const [featuredEvent, setFeaturedEvent] = useState(null);
    const [projectsData, setProjectsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const [home, events, projects] = await Promise.all([
                    getHomepageData(),
                    getEvents(),
                    getProjects()
                ]);

                setHomeData(home);

                // Find featured event or use first one
                const featured = events.find(e => e.featured) || events[0];
                setFeaturedEvent(featured);

                setProjectsData(projects.slice(0, 3)); // Limit to 3
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    if (loading) return <div className="text-center section">Caricamento...</div>;

    // Fallback if API fails
    if (!homeData) return null;

    const { headline, subheadline, ctaPrimaryLabel, ctaPrimaryLink, ctaSecondaryLabel, ctaSecondaryLink, impactStats } = homeData;

    return (
        <div className="page-home">
            <Hero
                headline={headline}
                subheadline={subheadline}
                ctaPrimary={{ label: ctaPrimaryLabel, link: ctaPrimaryLink }}
                ctaSecondary={{ label: ctaSecondaryLabel, link: ctaSecondaryLink }}
            />

            {/* Impact Stats */}
            <section className="section bg-primary text-white">
                <div className="container">
                    <div className="impact-grid">
                        {impactStats?.map((stat, index) => (
                            <div key={index} className="impact-item">
                                <div className="impact-value">{stat.value}</div>
                                <div className="impact-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Event */}
            {featuredEvent && (
                <section className="section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Prossimo Evento</h2>
                            <Link to="/attivita#eventi" className="btn-link">Vedi tutti gli eventi &rarr;</Link>
                        </div>
                        <div className="featured-event-card">
                            <div className="event-content">
                                <span className="event-tag">In Evidenza</span>
                                <h3>{featuredEvent.title}</h3>
                                <div className="event-meta">
                                    <span><Calendar size={16} /> {new Date(featuredEvent.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long' })}</span>
                                    <span><MapPin size={16} /> {featuredEvent.location}</span>
                                </div>
                                <p>{featuredEvent.description}</p>
                                <a href={featuredEvent.link} className="btn btn-primary">Partecipa</a>
                            </div>
                            <div className="event-visual">
                                <img src={getImageUrl(featuredEvent.image)} alt={featuredEvent.title} className="event-image" />
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Key Projects */}
            <section className="section bg-surface">
                <div className="container">
                    <div className="section-header">
                        <h2>I Nostri Progetti</h2>
                        <Link to="/attivita#progetti" className="btn-link">Scopri di più &rarr;</Link>
                    </div>
                    <div className="grid grid-3">
                        {projectsData.map((project) => (
                            <div key={project.id || project.documentId} className="project-card">
                                <div className="card-image">
                                    <img src={getImageUrl(project.image)} alt={project.title} />
                                </div>
                                <div className="card-body">
                                    <div className="card-category">{project.category}</div>
                                    <h4>{project.title}</h4>
                                    <p className="card-result"><Trophy size={16} /> {project.result}</p>
                                    <Link to={`/attivita`} className="btn-text">Leggi tutto</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Strip */}
            <section className="section text-center">
                <div className="container">
                    <h3 className="mb-md">In collaborazione con</h3>
                    <div className="partners-strip">
                        <div className="partner-logo">Rotary</div>
                        <div className="partner-logo">CEPIM</div>
                        <div className="partner-logo">CRI</div>
                        <div className="partner-logo">Banco Alimentare</div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section bg-secondary text-center final-cta-section">
                <div className="container">
                    <h2 className="mb-md">Fai la differenza con noi</h2>
                    <div className="cta-group">
                        <Link to="/sostienici" className="btn btn-primary btn-lg">Dona Ora</Link>
                        <Link to="/chi-siamo#contatti" className="btn btn-outline btn-lg">Contattaci</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
