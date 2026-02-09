import { getAboutData, getTeam, getHistory } from '../../src/lib/api';

export const metadata = {
    title: 'Chi Siamo | Rotaract Club Rivoli',
    description: 'Scopri chi siamo, la nostra missione e come entrare a far parte del Rotaract Club Rivoli.',
};

export default async function ChiSiamoPage() {
    const aboutData = await getAboutData();
    const team = await getTeam();
    const history = await getHistory();

    const {
        missionTitle, missionText,
        introTitle, introText, introImage,
        valuesText, steps,
        contactTitle, contactText, contactEmail
    } = aboutData || {};

    return (
        <div className="page-chi-siamo">
            {/* Mission Section */}
            <section className="section bg-primary text-white text-center">
                <div className="container">
                    <h1 className="mb-md">{missionTitle || "Chi Siamo"}</h1>
                    <p className="lead">
                        {missionText || "Il Rotaract Club Rivoli è un'associazione di giovani volontari impegnati nel servizio alla comunità."}
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="col-text">
                            <h2>{introTitle || "La Nostra Storia"}</h2>
                            {typeof introText === 'string' ? (
                                <p>{introText}</p>
                            ) : Array.isArray(introText) ? (
                                introText.map((block, i) => <p key={i}>{block.children?.[0]?.text}</p>)
                            ) : (
                                <p>Fondato nel 2015, il Rotaract Club Rivoli è parte della grande famiglia Rotary International.</p>
                            )}
                        </div>
                        <div className="col-image">
                            {introImage?.url ? (
                                <img src={introImage.url} alt="Chi Siamo" className="img-fluid rounded shadow" />
                            ) : (
                                <div style={{ background: 'var(--surface-color)', padding: '4rem', borderRadius: '12px', textAlign: 'center' }}>
                                    Rotaract Logo/Image
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            {team?.length > 0 && (
                <section className="section bg-surface">
                    <div className="container">
                        <h2 className="text-center mb-lg">Il Direttivo</h2>
                        <div className="grid grid-4 text-center">
                            {team.map((member, idx) => (
                                <div key={member.id || idx} className="team-card">
                                    <div className="team-avatar">{member.name?.charAt(0)}</div>
                                    <h4>{member.name}</h4>
                                    <p className="text-secondary">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* History Timeline */}
            {history?.length > 0 && (
                <section className="section">
                    <div className="container">
                        <h2 className="text-center mb-lg">La Nostra Storia</h2>
                        <div className="timeline">
                            {history.map((item, idx) => (
                                <div key={item.id || idx} className="timeline-item">
                                    <div className="timeline-year">{item.year}</div>
                                    <div className="timeline-content">
                                        <h4>{item.event}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Join Section */}
            <section id="come-entrare" className="section bg-primary text-white text-center">
                <div className="container">
                    <h2>{contactTitle || "Unisciti a Noi"}</h2>
                    <p className="lead mb-md">
                        {contactText || "Hai tra i 18 e i 30 anni e vuoi fare la differenza? Contattaci!"}
                    </p>
                    <a href={`mailto:${contactEmail || 'info@rotaractrivoli.org'}`} className="btn btn-secondary">
                        Contattaci
                    </a>
                </div>
            </section>
        </div>
    );
}
