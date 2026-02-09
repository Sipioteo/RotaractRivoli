import { getEvents, getProjects, getArticles } from '../../src/lib/api';
import { events as defaultEvents, projects as defaultProjects } from '../../src/data/content';
import Link from 'next/link';

export const metadata = {
    title: 'Attività | Rotaract Club Rivoli',
    description: 'Scopri i nostri eventi, progetti e ultime notizie.',
};

export default async function AttivitaPage() {
    const events = await getEvents();
    const projects = await getProjects();
    const articles = await getArticles();

    const displayEvents = events?.length > 0 ? events : defaultEvents;
    const displayProjects = projects?.length > 0 ? projects : defaultProjects;

    return (
        <div className="page-attivita">
            {/* Hero */}
            <section className="section bg-primary text-white text-center">
                <div className="container">
                    <h1 className="mb-md">Le Nostre Attività</h1>
                    <p className="lead">Eventi, progetti e iniziative per la comunità.</p>
                </div>
            </section>

            {/* Events Section */}
            <section id="eventi" className="section">
                <div className="container">
                    <h2 className="text-center mb-lg">Prossimi Eventi</h2>
                    <div className="grid grid-3">
                        {displayEvents.map((event, idx) => (
                            <div key={event.id || idx} className="event-card">
                                <div className="event-date">{new Date(event.date).toLocaleDateString('it-IT', { day: '2-digit', month: 'short' })}</div>
                                <h3>{event.title}</h3>
                                <p className="event-location">{event.location}</p>
                                <p>{event.description}</p>
                                <a href={event.link || '#'} className="btn btn-primary btn-sm">{event.cta || 'Scopri'}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="progetti" className="section bg-surface">
                <div className="container">
                    <h2 className="text-center mb-lg">I Nostri Progetti</h2>
                    <div className="grid grid-3">
                        {displayProjects.map((project, idx) => (
                            <div key={project.id || idx} className="project-card">
                                <span className="project-category">{project.category}</span>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-result">{project.result}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* News Section */}
            {articles?.length > 0 && (
                <section id="news" className="section">
                    <div className="container">
                        <h2 className="text-center mb-lg">Ultime Notizie</h2>
                        <div className="grid grid-2">
                            {articles.slice(0, 4).map((article, idx) => (
                                <div key={article.id || idx} className="news-card">
                                    <h3>{article.title}</h3>
                                    <p className="text-secondary">{article.excerpt || article.description?.slice(0, 120)}...</p>
                                    <Link href={`/news/${article.documentId || article.id}`} className="btn btn-outline btn-sm">
                                        Leggi
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
