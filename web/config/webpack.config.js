const { getConfig } = require('@redwoodjs/internal')
const webpack = require('webpack')
const redwoodConfig = getConfig()

const redwoodEnvPrefix = 'REDWOOD_ENV_'
const includeEnvKeys = redwoodConfig.web.includeEnvironmentVariables
const redwoodEnvKeys = Object.keys(process.env).reduce((prev, next) => {
  if (
    next.startsWith(redwoodEnvPrefix) ||
    (includeEnvKeys && includeEnvKeys.includes(next))
  ) {
    prev[`process.env.${next}`] = JSON.stringify(process.env[next])
  }
  return prev
}, {})

console.info('Ouside of module.exports')
module.exports = (config, { env }) => {
  console.info('inside of module exports')
  console.info(`Redwood env keys: ${JSON.stringify(redwoodEnvKeys)}`)
  config.plugins[3] = new webpack.DefinePlugin({
    __REDWOOD__API_PROXY_PATH: JSON.stringify(redwoodConfig.web.apiProxyPath),
    __filename: webpack.DefinePlugin.runtimeValue((runtimeValue) => {
      // absolute path of imported file
      return JSON.stringify(runtimeValue.module.resource)
    }),
    ...redwoodEnvKeys,
  })
  console.info(config.plugins[3])
  return config
}
