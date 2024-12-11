const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'mfPayment',

  exposes: {
    './PaymentComponent': './projects/mf-payment/src/app/components/payment/payment.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
  sharedMappings: ['@commons-lib'],
});
