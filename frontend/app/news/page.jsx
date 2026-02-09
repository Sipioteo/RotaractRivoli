import { getArticles } from '../../src/lib/api';
import { news as defaultNews } from '../../src/data/content';
import Link from 'next/link';

export const metadata = {
    title: 'News | Rotaract Club Rivoli',
    description: 'Le ultime notizie dal Rotaract Club Rivoli.',
};

export default async function NewsPage() {
    const articles = await getArticles();
    const displayNews = articles?.length > 0 ? articles : defaultNews;

    return (
        <div className="page-news">
            {/* Hero */}
            <section className="section bg-primary text-white text-center">
                <div className="container">
                    <h1 className="mb-md">News</h1>
                    <p className="lead">Le ultime notizie e aggiornamenti dal club.</p>
                </div>
            </section>

            {/* News List */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-2">
                        {displayNews.map((article, idx) => (
                            <div key={article.id || idx} className="news-card">
                                <div className="news-date">
                                    {new Date(article.date || article.createdAt).toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' })}
                                </div>
                                <h3>{article.title}</h3>
                                <p className="text-secondary">{article.excerpt || article.description?.slice(0, 150)}...</p>
                                {article.tags && (
                                    <div className="news-tags">
                                        {(Array.isArray(article.tags) ? article.tags : []).map((tag, tidx) => (
                                            <span key={tidx} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
