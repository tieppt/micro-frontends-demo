const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    publicPath: "http://localhost:5300/",
    uniqueName: "mailbox"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mailbox",
      library: { type: "var", name: "mailbox" },
      filename: "remoteEntry.js",
      exposes: {
        './MailboxModule': './projects/mailbox/src/app/mailbox.module.ts',
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"]
    })
  ],
};
