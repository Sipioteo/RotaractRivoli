import { Strapi } from '@strapi/strapi';

export async function setPermissions(strapi: Strapi) {
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
}
