module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    use: [require.resolve('style-loader'), require.resolve('css-loader'), require.resolve('sass-loader')]
  })

  return defaultConfig
}
