# threatblockr_wnba
ThreatBlockr assessment

## Requirements

This module requires the following page to exist:
(https://www.wnba.com/standings)

## Installation

You would need the following for Cypress to work:

● Node js: https://nodejs.org/en/download
● NPM: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
● Cypress: https://docs.cypress.io/guides/getting-started/installing-cypress

Installing cypress:

cd /your/project/path
npm install cypress --save-dev
npm init

## Configuration

● Open the App: https://docs.cypress.io/guides/getting-started/opening-the-app
● On the LaunchPad, set the Testing Type to E2E
● Cypress will scaffold and auto-configure config and e2e.js files
● Add the following code to cypress.config.js

"""
const { defineConfig } = require("cypress");
module.exports = defineConfig({
e2e: {
viewportHeight:1080,
viewportWidth:1920
},
});
"""

## Troubleshooting

Tip: If the application under test throws an uncaught exception, add the following snippet
to ~/cypress/support/e2e.js

"""
Cypress.on('uncaught:exception', (err, runnable) => {
// returning false here prevents Cypress from
// failing the test
return false
})
"""

## Running

To run the test module, open the Cypress console and run assessment.cy.js

## Notes

The current WNBA website does not correspond with the WNBA website in the assessment. In the assessment, the TEAM table has a 'League Standings' header, and below the header, there are columns labeled 'Bank' and 'Team'. However, in the current TEAM table, there is no 'Bank' column. Instead, the 'Team' column contains a combination of numbers, logos, and team abbreviations. Therefore, it is not possible to iterate through the second column and print team names because it is the first column in the table. Also, the output will be contain number and team name.
