const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  webpack: {
    configure: {
      output: {
        publicPath: "auto",
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "host",
          filename: "remoteEntry.js",
          remotes: {
            app1: "app1@http://localhost:3001/remoteEntry.js",
            app2: "app2@http://localhost:3002/remoteEntry.js",
          },
          shared: {
            react: { singleton: true, eager: true, requiredVersion: '^18.3.1' },
            "react-dom": { singleton: true, eager: true, requiredVersion: '^18.3.1' },
          },          
        }),
      ],
    },
  },
};
