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

export interface PageLink extends Struct.ComponentSchema {
  collectionName: 'components_page_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface PagePartner extends Struct.ComponentSchema {
  collectionName: 'components_page_partners';
  info: {
    displayName: 'Partner';
    icon: 'handshake';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface PageSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_page_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'share-alt';
  };
  attributes: {
    platform: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface PageStep extends Struct.ComponentSchema {
  collectionName: 'components_page_steps';
  info: {
    displayName: 'Step';
    icon: 'list-ol';
  };
  attributes: {
    description: Schema.Attribute.Text;
    stepNumber: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PageTransparencyItem extends Struct.ComponentSchema {
  collectionName: 'components_page_transparency_items';
  info: {
    displayName: 'Transparency Item';
    icon: 'eye';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String & Schema.Attribute.DefaultTo<'chart'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'page.impact-stat': PageImpactStat;
      'page.link': PageLink;
      'page.partner': PagePartner;
      'page.social-link': PageSocialLink;
      'page.step': PageStep;
      'page.transparency-item': PageTransparencyItem;
    }
  }
}
