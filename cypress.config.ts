// // import { defineConfig } from "cypress";

// // export default defineConfig({
// //   e2e: {
// //     setupNodeEvents(on, config) {
// //       // implement node event listeners here
// //     },

// //   },
// // });


// import { defineConfig } from 'cypress';
// import viteConfig from './vite.config';

// export default defineConfig({
//   component: {
//     port: 5173,
//     devServer: {
//       framework: 'react',
//       bundler: 'vite',
//       viteConfig,
//     },
//     supportFile: false, 
//   },

 
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//     baseUrl: "http://localhost:3001"
    
//   },
// });

import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: "cypress/component/**/*.cy.{js,ts,jsx,tsx}",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
  },
});
