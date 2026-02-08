import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleById, STRAPI_URL } from '../lib/api';
import './ArticleDetail.css';

const PLACEHOLDER_IMAGE = 'https://placehold.co/1200x600/e2e8f0/4a5568?text=Articolo';

const getImageUrl = (imageData, placeholder = PLACEHOLDER_IMAGE) => {
    if (!imageData) return placeholder;
    const url = imageData.url;
    return url?.startsWith('http') ? url : `${STRAPI_URL}${url}`;
};

const ArticleDetail = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadArticle() {
            try {
                const data = await getArticleById(id);
                setArticle(data);
            } catch (error) {
                console.error("Failed to load article", error);
            } finally {
                setLoading(false);
            }
        }
        loadArticle();
    }, [id]);

    if (loading) return <div className="text-center section">Caricamento...</div>;
    if (!article) return <div className="text-center section">Articolo non trovato</div>;

    const tags = article.tags?.split(',').map(tag => tag.trim()).filter(Boolean) || [];

    return (
        <div className="page-article-detail">
            <article className="article-content">
                <header className="article-header">
                    <div className="container">
                        <Link to="/attivita#news" className="back-link">&larr; Torna alle News</Link>
                        <div className="article-meta">
                            <span className="article-date">
                                {new Date(article.date).toLocaleDateString('it-IT', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                })}
                            </span>
                            {tags.length > 0 && (
                                <div className="article-tags">
                                    {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                                </div>
                            )}
                        </div>
                        <h1>{article.title}</h1>
                        {article.excerpt && <p className="article-excerpt">{article.excerpt}</p>}
                    </div>
                </header>

                <div className="article-image">
                    <img src={getImageUrl(article.image)} alt={article.title} />
                </div>

                <div className="container">
                    <div className="article-body" dangerouslySetInnerHTML={{ __html: article.content || '<p>Contenuto non disponibile.</p>' }} />
                </div>
            </article>
        </div>
    );
};

export default ArticleDetail;
