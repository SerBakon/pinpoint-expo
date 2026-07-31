const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName.startsWith("@pinpoint-expo/")) {
    const rest = moduleName.slice("@pinpoint-expo/".length);
    return {
      type: "sourceFile",
      filePath: path.resolve(__dirname, rest),
    };
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
