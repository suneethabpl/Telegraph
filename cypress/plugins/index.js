/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
const {lighthouse, prepareAudit} =require('@cypress-audit/lighthouse')

module.exports = (on,config)=>{
  on('before:browser:launch', (browser={}, launchOptions) =>{
    prepareAudit(launchOptions)
  })

  on('task', {
    lighthouse:lighthouse()
  })
}

/**
 * @type {Cypress.PluginConfig}
 */
/** 
module.exports = (on, config) => {
 on('task', {
        },
      })
    }
*/