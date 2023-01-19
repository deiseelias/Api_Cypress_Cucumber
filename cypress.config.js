const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://reqres.in/",
    video: false,
    watchForFileChanges: false,
    specPattern:
    ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    excludeSpecPattern: '**/*.cy.js',
  },
});
