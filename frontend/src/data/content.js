export const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/attivita', label: 'Attività' },
    { path: '/chi-siamo', label: 'Chi Siamo' },
    { path: '/sostienici', label: 'Sostienici' },
];

export const heroContent = {
    headline: "Volontariato giovane, impatto concreto sul territorio.",
    subheadline: "Eventi solidali, progetti culturali e collaborazioni locali per inclusione e comunità.",
    ctaPrimary: { label: "Partecipa al prossimo evento", link: "/attivita#eventi" },
    ctaSecondary: { label: "Unisciti a noi", link: "/chi-siamo#come-entrare" }
};

export const impactStats = [
    { value: "1040€", label: "Raccolti per Run4Autism" },
    { value: "15+", label: "Progetti l'anno" },
    { value: "10+", label: "Partner locali" },
    { value: "25+", label: "Volontari attivi" }
];

export const featuredEvent = {
    id: "event_cena_cepim",
    title: "Cena in collaborazione con CEPIM",
    date: "2026-03-15",
    location: "Rivoli",
    description: "Una serata di convivialità e solidarietà. Parte del ricavato sarà devoluto a sostegno delle attività inclusive.",
    cta: "Iscriviti Ora",
    link: "#" // Features external Google Form
};

export const projects = [
    {
        id: "post_run4autism",
        title: "Run4Autism",
        category: "Solidarietà",
        image: "run4autism.jpg", // placeholder
        description: "Grande partecipazione alla corsa solidale, raccogliendo fondi significativi per il supporto all'autismo.",
        result: "1040€ Donati"
    },
    {
        id: "post_disability_day",
        title: "Giornata Int. Persone con Disabilità",
        category: "Inclusione",
        image: "disability_day.jpg",
        description: "Impegno attivo per l'inclusione, CPD e adesione all'Agenda della Disabilità.",
        result: "Sensibilizzazione"
    },
    {
        id: "post_november_solidarity",
        title: "Novembre Solidale",
        category: "Servizio",
        image: "colletta.jpg",
        description: "Dalla raccolta alimentare con CRI alla campagna 'Be Her Voice' contro la violenza sulle donne.",
        result: "Supporto Comunità"
    }
];

export const socialLinks = [
    { platform: "Instagram", url: "#", icon: "instagram" },
    { platform: "Facebook", url: "#", icon: "facebook" },
    { platform: "Email", url: "mailto:info@rotaractrivoli.org", icon: "envelope" }
];

export const donationMethods = [
    {
        type: "Bonifico",
        details: [
            { label: "Intestatario", value: "Rotaract Club Rivoli" },
            { label: "IBAN", value: "IT00 X000 0000 0000 0000 0000 000" },
            { label: "Causale", value: "Erogazione liberale - [Nome Cognome]" }
        ]
    }
];

export const events = [
    {
        id: "evt_001",
        title: "Cena al Buio",
        date: "2026-04-10",
        location: "Ristorante La Sosta",
        description: "Un'esperienza sensoriale unica per sensibilizzare sulla disabilità visiva.",
        cta: "Prenota",
        link: "#"
    },
    {
        id: "evt_002",
        title: "Raccolta Alimentare",
        date: "2026-04-25",
        location: "Supermercato Coop Rivoli",
        description: "Giornata di raccolta beni di prima necessità per le famiglie in difficoltà.",
        cta: "Partecipa come volontario",
        link: "#"
    },
    { ...featuredEvent }
];

export const news = [
    {
        id: "news_001",
        title: "Passaggio di Consegne 2025/2026",
        date: "2025-07-01",
        excerpt: "Celebrato il nuovo direttivo e i progetti per l'anno a venire.",
        tags: ["Distretto", "Club"]
    },
    {
        id: "news_002",
        title: "Adesione all’Agenda della Disabilità",
        date: "2025-12-03",
        excerpt: "Il club si impegna formalmente sui temi dell'inclusione e accessibilità.",
        tags: ["Inclusione", "Partner"]
    }
];

export const team = [
    { name: "Mario Rossi", role: "Presidente", image: "" },
    { name: "Giulia Bianchi", role: "Vice Presidente", image: "" },
    { name: "Luca Verdi", role: "Segretario", image: "" },
    { name: "Sofia Neri", role: "Tesoriere", image: "" }
];

export const history = [
    { year: "2015", event: "Fondazione del Club", description: "Il Rotaract Club Rivoli nasce con 15 soci fondatori." },
    { year: "2018", event: "Primo Service Internazionale", description: "Collaborazione con un club gemello in Francia." },
    { year: "2022", event: "Premio Distrettuale", description: "Riconoscimento per il miglior progetto d'inclusione." }
];
