const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "17g3vg",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/"
  },
});
