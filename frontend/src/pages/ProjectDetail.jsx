import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Trophy } from 'lucide-react';
import { getProjectById, STRAPI_URL } from '../lib/api';
import './ProjectDetail.css';

const PLACEHOLDER_IMAGE = 'https://placehold.co/1200x600/e2e8f0/4a5568?text=Progetto';

const getImageUrl = (imageData, placeholder = PLACEHOLDER_IMAGE) => {
    if (!imageData) return placeholder;
    const url = imageData.url;
    return url?.startsWith('http') ? url : `${STRAPI_URL}${url}`;
};

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProject() {
            try {
                const data = await getProjectById(id);
                setProject(data);
            } catch (error) {
                console.error("Failed to load project", error);
            } finally {
                setLoading(false);
            }
        }
        loadProject();
    }, [id]);

    if (loading) return <div className="text-center section">Caricamento...</div>;
    if (!project) return <div className="text-center section">Progetto non trovato</div>;

    return (
        <div className="page-project-detail">
            <article className="project-content">
                <header className="project-header">
                    <div className="container">
                        <Link to="/attivita#progetti" className="back-link">&larr; Torna ai Progetti</Link>
                        <div className="project-category">{project.category}</div>
                        <h1>{project.title}</h1>
                        {project.result && (
                            <p className="project-result"><Trophy size={20} /> {project.result}</p>
                        )}
                    </div>
                </header>

                <div className="project-image">
                    <img src={getImageUrl(project.image)} alt={project.title} />
                </div>

                <div className="container">
                    <div className="project-description">
                        <h2>Descrizione</h2>
                        <p>{project.description}</p>
                    </div>

                    {project.content && (
                        <div className="project-body" dangerouslySetInnerHTML={{ __html: project.content }} />
                    )}
                </div>
            </article>
        </div>
    );
};

export default ProjectDetail;
