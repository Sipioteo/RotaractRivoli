import { Core } from '@strapi/strapi';
import { seedData } from './bootstrap/data-seeder';
import { setPermissions } from './bootstrap/permissions';

export default {
  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    try {
      console.log('🚀 Checking for seeding opportunities...');

      await seedData(strapi);
      await setPermissions(strapi);

      console.log('✅ Bootstrap complete.');
    } catch (error) {
      console.error('❌ Bootstrap failed:', error);
    }
  },
};
