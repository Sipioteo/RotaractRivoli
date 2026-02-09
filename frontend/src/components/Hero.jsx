import Link from 'next/link';
import './Hero.css';

const Hero = ({ headline, subheadline, ctaPrimary, ctaSecondary, image }) => {
    // Default values to prevent crashes if data hasn't loaded yet
    if (!headline) return null;

    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-headline">{headline}</h1>
                    <p className="hero-subheadline">{subheadline}</p>
                    <div className="hero-ctas">
                        {ctaPrimary && (
                            <Link href={ctaPrimary.link} className="btn btn-primary btn-lg">
                                {ctaPrimary.label}
                            </Link>
                        )}
                        {ctaSecondary && (
                            <Link href={ctaSecondary.link} className="btn btn-outline btn-lg">
                                {ctaSecondary.label}
                            </Link>
                        )}
                    </div>
                </div>
                <div className="hero-visual">
                    {image ? (
                        <img src={image} alt={headline} className="hero-image" />
                    ) : (
                        <div className="hero-image-placeholder"></div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
