const { dependencies } = require("../package.json");

module.exports = {
  name: "checkout",
  filename: "remoteEntry.js",
  remotes: {
    cart: "cart@http://localhost:3002/remoteEntry.js",
  },
  exposes: {
    "./App": "./src/App",
    "./CheckoutWidget": "./src/components/CheckoutWidget",
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: dependencies.react,
      eager: true,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
      eager: true,
    },
    "react-router-dom": {
      singleton: true,
      requiredVersion: dependencies["react-router-dom"],
      eager: true,
    },
    "mfe-common-components": {
      singleton: true,
      requiredVersion: dependencies["mfe-common-components"],
      eager: true,
    },
  },
};
