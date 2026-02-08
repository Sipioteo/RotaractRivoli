import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Handshake, Trophy, Newspaper } from 'lucide-react';
import { getEvents, getProjects, getArticles } from '../lib/api';
import './Attivita.css';

const Attivita = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [events, setEvents] = useState([]);
    const [projects, setProjects] = useState([]);
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const [eventsData, projectsData, newsData] = await Promise.all([
                    getEvents(),
                    getProjects(),
                    getArticles()
                ]);
                setEvents(eventsData);
                setProjects(projectsData);
                setNews(newsData);
            } catch (error) {
                console.error("Failed to load activities data", error);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    if (loading) return <div className="text-center section">Caricamento...</div>;

    return (
        <div className="page-attivita">
            {/* Header */}
            <section className="page-header section bg-primary text-white">
                <div className="container">
                    <h1>Le Nostre Attività</h1>
                    <p>Eventi, service e notizie dal club.</p>
                </div>
            </section>

            {/* Navigation Tabs (Optional simple filter concept) */}
            <section className="section pb-0">
                <div className="container">
                    <div className="tabs">
                        <button className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>Tutto</button>
                        <button className={`tab-btn ${activeTab === 'eventi' ? 'active' : ''}`} onClick={() => setActiveTab('eventi')}>Eventi</button>
                        <button className={`tab-btn ${activeTab === 'progetti' ? 'active' : ''}`} onClick={() => setActiveTab('progetti')}>Progetti</button>
                        <button className={`tab-btn ${activeTab === 'news' ? 'active' : ''}`} onClick={() => setActiveTab('news')}>News</button>
                    </div>
                </div>
            </section>

            {/* Events Section */}
            {(activeTab === 'all' || activeTab === 'eventi') && (
                <section id="eventi" className="section">
                    <div className="container">
                        <h2 className="mb-md"><Calendar size={24} className="section-icon" /> Prossimi Appuntamenti</h2>
                        <div className="grid grid-2">
                            {events.map(event => (
                                <div key={event.id || event.documentId} className="event-card">
                                    <div className="event-date-badge">
                                        <span className="day">{new Date(event.date).getDate()}</span>
                                        <span className="month">{new Date(event.date).toLocaleDateString('it-IT', { month: 'short' })}</span>
                                    </div>
                                    <div className="event-details">
                                        <h3>{event.title}</h3>
                                        <p className="event-meta"><MapPin size={14} /> {event.location}</p>
                                        <p>{event.description}</p>
                                        <a href={event.link} className="btn btn-sm btn-primary mt-sm">{event.cta}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Projects Section */}
            {(activeTab === 'all' || activeTab === 'progetti') && (
                <section id="progetti" className="section bg-surface">
                    <div className="container">
                        <h2 className="mb-md"><Handshake size={24} className="section-icon" /> I Nostri Service</h2>
                        <div className="grid grid-3">
                            {projects.map((project) => (
                                <div key={project.id || project.documentId} className="project-card">
                                    <div className="card-image-placeholder"></div>
                                    <div className="card-body">
                                        <div className="card-category">{project.category}</div>
                                        <h4>{project.title}</h4>
                                        <p>{project.description}</p>
                                        <p className="card-result"><Trophy size={16} /> {project.result}</p>
                                        <Link to={`/progetti/${project.documentId}`} className="btn btn-sm btn-primary mt-sm">Scopri di più</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* News Section */}
            {(activeTab === 'all' || activeTab === 'news') && (
                <section id="news" className="section">
                    <div className="container">
                        <h2 className="mb-md"><Newspaper size={24} className="section-icon" /> Ultime News</h2>
                        <div className="news-list">
                            {news.map(item => (
                                <div key={item.id || item.documentId} className="news-item">
                                    <div className="news-meta">
                                        <span className="news-date">{new Date(item.date).toLocaleDateString('it-IT')}</span>
                                        <div className="news-tags">
                                            {item.tags?.split(',').map(tag => tag.trim()).filter(Boolean).map(tag => <span key={tag} className="tag">{tag}</span>)}
                                        </div>
                                    </div>
                                    <h3 className="news-title">{item.title}</h3>
                                    <p className="news-excerpt">{item.excerpt}</p>
                                    <Link to={`/news/${item.documentId}`} className="read-more">Leggi tutto &rarr;</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default Attivita;
