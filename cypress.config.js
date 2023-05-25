const { defineConfig } = require('cypress')

module.exports = defineConfig({
    chromeWebSecurity: false,
    "env": {
        "baseUrl": "https://www.telegraph.co.uk/",
    },
    e2e: {
        setupNodeEvents(on, config) {
            return require('./cypress/plugins/index.js')(on, config)
        },
        specPattern: 'cypress/integration/**/*.{feature,features,js}',
    },
})