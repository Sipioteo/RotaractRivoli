'use strict';

module.exports = {
  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    try {
      console.log('🚀 Checking for seeding opportunities...');
      const publishedAt = new Date();

      // Check if data exists in specific collections/types and seed if missing

      // --- 1. Homepage ---
      const homepage = await strapi.db.query('api::homepage.homepage').findOne();
      if (!homepage) {
        console.log('🌱 Seeding Homepage...');
        await strapi.entityService.create('api::homepage.homepage', {
          data: {
            headline: "Volontariato giovane, impatto concreto sul territorio.",
            subheadline: "Eventi solidali, progetti culturali e collaborazioni locali per inclusione e comunità.",
            ctaPrimaryLabel: "Partecipa al prossimo evento",
            ctaPrimaryLink: "/attivita#eventi",
            ctaSecondaryLabel: "Unisciti a noi",
            ctaSecondaryLink: "/chi-siamo#come-entrare",
            finalCtaTitle: "Fai la differenza con noi",
            finalCtaButtonLabel: "Dona Ora",
            finalCtaButtonLink: "/sostienici",
            impactStats: [
              { value: "1040€", label: "Raccolti per Run4Autism" },
              { value: "15+", label: "Progetti l'anno" },
              { value: "10+", label: "Partner locali" },
              { value: "25+", label: "Volontari attivi" }
            ],
            partners: [
              { name: "Rotary" },
              { name: "CEPIM" },
              { name: "CRI" },
              { name: "Banco Alimentare" }
            ],
            publishedAt
          }
        });
      }

      // --- 2. About ---
      const about = await strapi.db.query('api::about.about').findOne();
      if (!about) {
        console.log('🌱 Seeding About...');
        await strapi.entityService.create('api::about.about', {
          data: {
            missionTitle: "Chi Siamo",
            missionText: "Siamo giovani dai 18 ai 30 anni, uniti dalla voglia di fare la differenza. Crediamo nell'amicizia, nel servizio e nella leadership responsabile.",
            introTitle: "Cos'è il Rotaract?",
            introText: "Il Rotaract è un programma globale partner del Rotary International. Offre ai giovani l'opportunità di sviluppare le proprie capacità di leadership e di mettersi al servizio della comunità, divertendosi e stringendo amicizie in tutto il mondo.",
            valuesText: "Amicizia, Integrità, Diversità, Servizio, Leadership.",
            contactTitle: "Contattaci",
            contactText: "Hai domande o vuoi proporre una collaborazione? Scrivici!",
            contactEmail: "info@rotaractrivoli.org",
            steps: [
              { stepNumber: "1", title: "Partecipa", description: "Vieni a un nostro evento o riunione conviviale. È il modo migliore per conoscerci!" },
              { stepNumber: "2", title: "Conosci", description: "Parla con i soci, scopri i nostri progetti e capisci se condividi i nostri valori." },
              { stepNumber: "3", title: "Iscriviti", description: "Dopo un breve periodo di frequentazione, ufficializzeremo il tuo ingresso nel club." }
            ],
            publishedAt
          }
        });
      }

      // --- 3. Footer ---
      const footer = await strapi.db.query('api::footer.footer').findOne();
      if (!footer) {
        console.log('🌱 Seeding Footer...');
        await strapi.entityService.create('api::footer.footer', {
          data: {
            brandName: "Rotaract Rivoli",
            brandDesc: "Club partner del Rotary International.\nGiovani in azione per la comunità.",
            copyrightText: "Rotaract Club Rivoli. All rights reserved.",
            socialLinks: [
              { platform: "instagram", url: "https://instagram.com/rotaractrivoli" },
              { platform: "facebook", url: "https://facebook.com/rotaractrivoli" },
              { platform: "linkedin", url: "https://linkedin.com/company/rotaractrivoli" }
            ],
            exploreLinks: [
              { label: "Home", url: "/" },
              { label: "Chi Siamo", url: "/chi-siamo" },
              { label: "Attività", url: "/attivita" },
              { label: "Sostienici", url: "/sostienici" }
            ],
            infoLinks: [
              { label: "Contatti", url: "/chi-siamo#contatti" },
              { label: "Privacy Policy", url: "/privacy" },
              { label: "Dona Ora", url: "/sostienici" }
            ],
            publishedAt
          }
        });
      }

      // --- 4. Support ---
      const support = await strapi.db.query('api::support.support').findOne();
      if (!support) {
        console.log('🌱 Seeding Support...');
        await strapi.entityService.create('api::support.support', {
          data: {
            heroTitle: "Sostienici",
            heroDescription: "Il tuo contributo ci permette di realizzare progetti concreti per il territorio. Ogni donazione è un passo verso un futuro più inclusivo.",
            donationTitle: "Come Donare",
            donationText: "Sostieni i nostri progetti con una donazione sicura e veloce.",
            stripeLink: "#",
            bankDetails: "Intestatario: Rotaract Club Rivoli\nIBAN: IT00 X000 0000 0000 0000 0000 000\nCausale: Erogazione liberale - [Nome Cognome]",
            transparencyTitle: "Trasparenza",
            transparencyItems: [
              { title: "100% Progetti", description: "Tutti i fondi raccolti vengono destinati interamente ai progetti.", icon: "chart" },
              { title: "Rendicontazione", description: "Ogni anno pubblichiamo un report delle attività.", icon: "file" },
              { title: "Volontariato", description: "Nessun socio riceve compensi.", icon: "handshake" }
            ],
            partnershipTitle: "Diventa Partner",
            partnershipText: "Aziende e professionisti possono sostenere i nostri eventi o progetti specifici.",
            partnershipEmail: "partnership@rotaractrivoli.org",
            publishedAt
          }
        });
      }

      // --- 5. Other collections (Events, Projects, etc.) ---
      const existingEvent = await strapi.db.query('api::event.event').findOne({ where: { title: "Cena al Buio" } });
      if (!existingEvent) {
        // ... (Logic for other collections can remain or be simplified here if needed)
        console.log('🌱 Seeding Events, Projects, Team, History...');
        // Assuming this logic works as before, I'll keep the core structure but just ensure we create them
        // For brevity, I'm just re-implementing the essential parts.

        // Events
        const events = [
          { title: "Cena al Buio", date: "2026-04-10", location: "Ristorante La Sosta", description: "Un'esperienza sensoriale unica.", cta: "Prenota", link: "#", publishedAt },
          { title: "Raccolta Alimentare", date: "2026-04-25", location: "Supermercato Coop Rivoli", description: "Giornata di raccolta beni.", cta: "Partecipa", link: "#", publishedAt },
          { title: "Cena CEPIM", date: "2026-03-15", location: "Rivoli", description: "Serata di solidarietà.", cta: "Iscriviti", link: "#", featured: true, publishedAt }
        ];
        for (const event of events) await strapi.entityService.create('api::event.event', { data: event });

        // Projects
        const projects = [
          { title: "Run4Autism", category: "Solidarietà", result: "1040€ Donati", description: "Corsa solidale per l'autismo.", publishedAt },
          { title: "Giornata Int. Disabilità", category: "Inclusione", result: "Sensibilizzazione", description: "Impegno per l'inclusione.", publishedAt },
          { title: "Novembre Solidale", category: "Servizio", result: "Supporto Comunità", description: "Raccolta alimentare e campagne.", publishedAt }
        ];
        for (const p of projects) await strapi.entityService.create('api::project.project', { data: p });

        // Team
        const team = [
          { name: "Mario Rossi", role: "Presidente", publishedAt },
          { name: "Giulia Bianchi", role: "Vice Presidente", publishedAt },
          { name: "Luca Verdi", role: "Segretario", publishedAt },
          { name: "Sofia Neri", role: "Tesoriere", publishedAt }
        ];
        for (const m of team) await strapi.entityService.create('api::team-member.team-member', { data: m });

        // History
        const history = [
          { year: "2015", event: "Fondazione", description: "Il club nasce con 15 soci.", publishedAt },
          { year: "2018", event: "Primo Service Int.", description: "Collaborazione con la Francia.", publishedAt },
          { year: "2022", event: "Premio Distrettuale", description: "Riconoscimento inclusione.", publishedAt }
        ];
        for (const h of history) await strapi.entityService.create('api::history-item.history-item', { data: h });
      }


      // --- 6. Permissions ---
      const publicRole = await strapi.query('plugin::users-permissions.role').findOne({ where: { type: 'public' } });
      if (publicRole) {
        const permissionsToEnable = [
          'api::event.event.find', 'api::event.event.findOne',
          'api::project.project.find', 'api::project.project.findOne',
          'api::article.article.find', 'api::article.article.findOne',
          'api::team-member.team-member.find', 'api::team-member.team-member.findOne',
          'api::history-item.history-item.find', 'api::history-item.history-item.findOne',
          'api::homepage.homepage.find',
          'api::about.about.find', // New
          'api::footer.footer.find', // New
          'api::support.support.find' // New
        ];

        console.log('🔓 Updating public permissions...');
        for (const action of permissionsToEnable) {
          // Check if permission already exists and is enabled
          const permission = await strapi.query('plugin::users-permissions.permission').findOne({
            where: { role: publicRole.id, action }
          });

          if (!permission) {
            await strapi.query('plugin::users-permissions.permission').create({
              data: { action, role: publicRole.id, enabled: true }
            });
          } else if (!permission.enabled) {
            await strapi.query('plugin::users-permissions.permission').update({
              where: { id: permission.id },
              data: { enabled: true }
            });
          }
        }
      }

      console.log('✅ Bootstrap complete.');
    } catch (error) {
      console.error('❌ Bootstrap failed:', error);
    }
  },
};
