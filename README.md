# End-to-end testing mobile apps with Ionic and Cypress

This contains a fork of the [Ionic Angular Conference Application](https://github.com/ionic-team/ionic-conference-app).

The following spec files are included.

- `iphone-5-critical-path.spec.js`
- `viewport.spec.js`
- `storage.spec.js`
- `swipe.spec.js`

## Running the App

* [Download the installer](https://nodejs.org/ "Download Node") for Node LTS.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/MuckT/ionic-cypress.git`.
* Run `npm install` from the project root.
* Run `ng serve` in a terminal from the project root.

_Note: See [How to Prevent Permissions Errors](https://docs.npmjs.com/getting-started/fixing-npm-permissions) if you are running into issues when trying to install packages globally._

## Running the Tests

The default port is set to localhost:4200 You'll need to update the baseUrl in the [cypress.json](cypress.json "Cypress Settings") if yours differs.

### Cypress Open Mode

With the app running, in a new terminal run `npx cypress open --browser chrome` to open the Test Runner.

### Cypress Run Mode

If you'd like to run your tests headless, in CI, or record the results to the Cypress Dashboard, you can bypass the Test Runner using `npx cypress run --browser chrome --headless` instead.

[Options for headless mode](https://docs.cypress.io/guides/guides/command-line.html#cypress-run)

#### Notes

* The Lighthouse & Pa11y tests will only work correctly in Chrome, otherwise they will pass incorrectly.

### Learn More

- [Cypress Documentation](https://docs.cypress.io)
- [Ionic Documentation](https://ionicframework.com/docs)

[Create an issue here](https://github.com/muckt/ionic-cypress/issues/new).
