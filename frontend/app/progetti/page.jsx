import { getProjects } from '../../src/lib/api';
import { projects as defaultProjects } from '../../src/data/content';

export const metadata = {
    title: 'Progetti | Rotaract Club Rivoli',
    description: 'Scopri i progetti del Rotaract Club Rivoli.',
};

export default async function ProgettiPage() {
    const projects = await getProjects();
    const displayProjects = projects?.length > 0 ? projects : defaultProjects;

    return (
        <div className="page-progetti">
            {/* Hero */}
            <section className="section bg-primary text-white text-center">
                <div className="container">
                    <h1 className="mb-md">I Nostri Progetti</h1>
                    <p className="lead">Service, inclusione e solidarietà sul territorio.</p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="section">
                <div className="container">
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
        </div>
    );
}
