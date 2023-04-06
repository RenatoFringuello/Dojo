const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // transpileDependencies: true
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/style/general.scss";
          @import "@/style/partials/_variables.scss";
          @import "@/style/partials/_mixins.scss";
        `
      }
    }
  }
})
