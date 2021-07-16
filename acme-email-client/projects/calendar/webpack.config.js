const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    publicPath: "http://localhost:5400/",
    uniqueName: "calendar"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "calendar",
      library: { type: "var", name: "calendar" },
      filename: "remoteEntry.js",
      exposes: {
        './CalendarModule': './projects/calendar/src/app/calendar/calendar.module.ts',
      },

      shared: ["@angular/core", "@angular/common", "@angular/router"]
    })
  ],
};
