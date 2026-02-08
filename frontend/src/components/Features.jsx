import React from 'react';
import './Features.css';

const featuresData = [
    {
        title: 'Fast Performance',
        description: 'Built with Vite for lightning-fast HMR and optimized builds.',
        icon: '⚡',
    },
    {
        title: 'Responsive Design',
        description: 'Looks great on all devices, from mobile to desktop.',
        icon: '📱',
    },
    {
        title: 'Modern Stack',
        description: 'Utilizing React 18 features and modern CSS practices.',
        icon: '🛠️',
    },
];

const Features = () => {
    return (
        <section id="features" className="features section">
            <div className="container">
                <h2 className="section-title">Why Choose Us?</h2>
                <div className="features-grid">
                    {featuresData.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
