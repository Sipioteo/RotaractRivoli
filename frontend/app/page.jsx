import { getHomepageData, getEvents, getProjects } from '../src/lib/api';
import { heroContent as defaultHeroContent, impactStats, projects as defaultProjects } from '../src/data/content';
import Hero from '../src/components/Hero';
import '../src/components/Hero.css';

export const metadata = {
    title: 'Home | Rotaract Club Rivoli',
    description: 'Volontariato giovane, impatto concreto sul territorio.',
};

export default async function HomePage() {
    // Fetch data server-side
    const homepageData = await getHomepageData();
    const events = await getEvents();
    const projects = await getProjects();

    // Use Strapi data or fallback to defaults
    const heroData = {
        headline: homepageData?.heroHeadline || defaultHeroContent.headline,
        subheadline: homepageData?.heroSubheadline || defaultHeroContent.subheadline,
        ctaPrimary: homepageData?.ctaPrimary || defaultHeroContent.ctaPrimary,
        ctaSecondary: homepageData?.ctaSecondary || defaultHeroContent.ctaSecondary,
        image: homepageData?.heroImage?.url || null,
    };

    const displayProjects = projects?.length > 0 ? projects : defaultProjects;
    const stats = impactStats;

    return (
        <div className="page-home">
            <Hero {...heroData} />

            {/* Stats Section */}
            <section className="section bg-surface">
                <div className="container">
                    <div className="grid grid-4 text-center">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="stat-card">
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Event */}
            {events?.[0] && (
                <section className="section">
                    <div className="container text-center">
                        <h2 className="mb-md">Prossimo Evento</h2>
                        <div className="event-card featured">
                            <h3>{events[0].title}</h3>
                            <p>{events[0].description}</p>
                            <a href={events[0].link || '#'} className="btn btn-primary">
                                {events[0].cta || 'Scopri di più'}
                            </a>
                        </div>
                    </div>
                </section>
            )}

            {/* Projects Section */}
            <section className="section bg-surface">
                <div className="container">
                    <h2 className="text-center mb-lg">I Nostri Progetti</h2>
                    <div className="grid grid-3">
                        {displayProjects.slice(0, 3).map((project, idx) => (
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
        </div>
    );
}
