export default {
  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    try {
      // 1. Check if data exists to avoid re-seeding
      const existingEvent = await strapi.db.query('api::event.event').findOne({
        where: { title: "Cena al Buio" }
      });

      if (!existingEvent) {
        console.log('🚀 Seeding Request Data...');

        const publishedAt = new Date();

        // Events
        const events = [
          {
            title: "Cena al Buio",
            date: "2026-04-10",
            location: "Ristorante La Sosta",
            description: "Un'esperienza sensoriale unica per sensibilizzare sulla disabilità visiva.",
            cta: "Prenota",
            link: "#",
            publishedAt
          },
          {
            title: "Raccolta Alimentare",
            date: "2026-04-25",
            location: "Supermercato Coop Rivoli",
            description: "Giornata di raccolta beni di prima necessità per le famiglie in difficoltà.",
            cta: "Partecipa come volontario",
            link: "#",
            publishedAt
          },
          {
            title: "Cena in collaborazione con CEPIM",
            date: "2026-03-15",
            location: "Rivoli",
            description: "Una serata di convivialità e solidarietà. Parte del ricavato sarà devoluto a sostegno delle attività inclusive.",
            cta: "Iscriviti Ora",
            link: "#",
            featured: true,
            publishedAt
          }
        ];

        for (const event of events) {
          await strapi.entityService.create('api::event.event', { data: event });
        }

        // Projects
        const projects = [
          {
            title: "Run4Autism",
            category: "Solidarietà",
            description: "Grande partecipazione alla corsa solidale, raccogliendo fondi significativi per il supporto all'autismo.",
            result: "1040€ Donati",
            image_placeholder: "run4autism.jpg",
            publishedAt
          },
          {
            title: "Giornata Int. Persone con Disabilità",
            category: "Inclusione",
            description: "Impegno attivo per l'inclusione, CPD e adesione all'Agenda della Disabilità.",
            result: "Sensibilizzazione",
            image_placeholder: "disability_day.jpg",
            publishedAt
          },
          {
            title: "Novembre Solidale",
            category: "Servizio",
            description: "Dalla raccolta alimentare con CRI alla campagna 'Be Her Voice' contro la violenza sulle donne.",
            result: "Supporto Comunità",
            image_placeholder: "colletta.jpg",
            publishedAt
          }
        ];

        for (const project of projects) {
          await strapi.entityService.create('api::project.project', { data: project });
        }

        // Articles
        const articles = [
          {
            title: "Passaggio di Consegne 2025/2026",
            date: "2025-07-01",
            excerpt: "Celebrato il nuovo direttivo e i progetti per l'anno a venire.",
            tags: ["Distretto", "Club"],
            publishedAt
          },
          {
            title: "Adesione all’Agenda della Disabilità",
            date: "2025-12-03",
            excerpt: "Il club si impegna formalmente sui temi dell'inclusione e accessibilità.",
            tags: ["Inclusione", "Partner"],
            publishedAt
          }
        ];

        for (const article of articles) {
          await strapi.entityService.create('api::article.article', { data: article });
        }

        // Team
        const team = [
          { name: "Mario Rossi", role: "Presidente", publishedAt },
          { name: "Giulia Bianchi", role: "Vice Presidente", publishedAt },
          { name: "Luca Verdi", role: "Segretario", publishedAt },
          { name: "Sofia Neri", role: "Tesoriere", publishedAt }
        ];

        for (const member of team) {
          await strapi.entityService.create('api::team-member.team-member', { data: member });
        }

        // History
        const history = [
          { year: "2015", event: "Fondazione del Club", description: "Il Rotaract Club Rivoli nasce con 15 soci fondatori.", publishedAt },
          { year: "2018", event: "Primo Service Internazionale", description: "Collaborazione con un club gemello in Francia.", publishedAt },
          { year: "2022", event: "Premio Distrettuale", description: "Riconoscimento per il miglior progetto d'inclusione.", publishedAt }
        ];

        for (const item of history) {
          await strapi.entityService.create('api::history-item.history-item', { data: item });
        }

        // Homepage
        await strapi.entityService.create('api::homepage.homepage', {
          data: {
            headline: "Volontariato giovane, impatto concreto sul territorio.",
            subheadline: "Eventi solidali, progetti culturali e collaborazioni locali per inclusione e comunità.",
            ctaPrimaryLabel: "Partecipa al prossimo evento",
            ctaPrimaryLink: "/attivita#eventi",
            ctaSecondaryLabel: "Unisciti a noi",
            ctaSecondaryLink: "/chi-siamo#come-entrare",
            impactStats: [
              { value: "1040€", label: "Raccolti per Run4Autism" },
              { value: "15+", label: "Progetti l'anno" },
              { value: "10+", label: "Partner locali" },
              { value: "25+", label: "Volontari attivi" }
            ],
            publishedAt
          }
        });

        console.log('✅ Seeding complete.');
      }

      // 2. Set Public Permissions
      const publicRole = await strapi
        .query('plugin::users-permissions.role')
        .findOne({ where: { type: 'public' } });

      if (publicRole) {
        const permissionsToEnable = [
          'api::event.event.find', 'api::event.event.findOne',
          'api::project.project.find', 'api::project.project.findOne',
          'api::article.article.find', 'api::article.article.findOne',
          'api::team-member.team-member.find', 'api::team-member.team-member.findOne',
          'api::history-item.history-item.find', 'api::history-item.history-item.findOne',
          'api::homepage.homepage.find'
        ];

        for (const action of permissionsToEnable) {
          const permission = await strapi
            .query('plugin::users-permissions.permission')
            .findOne({ where: { role: publicRole.id, action } });

          if (!permission) {
            await strapi.query('plugin::users-permissions.permission').create({
              data: {
                action,
                role: publicRole.id,
                enabled: true
              }
            });
          }
        }
        console.log('✅ Public permissions updated.');
      }

    } catch (error) {
      console.error('❌ Seeding failed:', error);
    }
  },
};
