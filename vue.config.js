const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		},
    pwa: {
      name: 'PWA Vue tutor',
      themeColor: '#fff',
      msTileColor: '#000',
      workboxPluginMode: 'GenerateSW',
      workboxOptions: {
        skipWaiting: true,
      },
    }
  }
})
