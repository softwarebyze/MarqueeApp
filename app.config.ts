import { ExpoConfig, ConfigContext } from "@expo/config"

/**
 * Use ts-node here so we can use TypeScript for our Config Plugins
 * and not have to compile them to JavaScript
 */
require("ts-node/register")

/**
 * @param config ExpoConfig coming from the static config app.json if it exists
 *
 * You can read more about Expo's Configuration Resolution Rules here:
 * https://docs.expo.dev/workflow/configuration/#configuration-resolution-rules
 */
module.exports = ({ config }: ConfigContext): Partial<ExpoConfig> => {
  const existingPlugins = config.plugins ?? []

  return {
    ...config,
    updates: {
      url: "https://u.expo.dev/a95f3991-16ef-4f1c-88ab-82319447ad3e",
    },
    runtimeVersion: {
      policy: "appVersion",
    },
    plugins: [...existingPlugins, require("./plugins/withSplashScreen").withSplashScreen],
  }
}
