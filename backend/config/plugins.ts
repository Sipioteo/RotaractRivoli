export default ({ env }) => ({
    'strapi5-plugin-for-stripe': {
        enabled: true,
        config: {
            stripeSecretKey: env('STRIPE_SK'),
            stripePublicKey: env('STRIPE_PK'),
        },
    },
});
