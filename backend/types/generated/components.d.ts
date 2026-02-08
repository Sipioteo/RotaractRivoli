import type { Schema, Struct } from '@strapi/strapi';

export interface PageImpactStat extends Struct.ComponentSchema {
  collectionName: 'components_page_impact_stats';
  info: {
    displayName: 'Impact Stat';
    icon: 'chart-pie';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'page.impact-stat': PageImpactStat;
    }
  }
}
