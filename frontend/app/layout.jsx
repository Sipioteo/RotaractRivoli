// Global styles
import './globals.css';

// Component styles
import '../src/components/Header.css';
import '../src/components/Footer.css';
import '../src/components/Hero.css';
import '../src/components/Features.css';

// Components
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

export const metadata = {
    title: 'Rotaract Club Rivoli',
    description: 'Volontariato giovane, impatto concreto sul territorio. Eventi solidali, progetti culturali e collaborazioni locali per inclusione e comunità.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="it">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
            </head>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
