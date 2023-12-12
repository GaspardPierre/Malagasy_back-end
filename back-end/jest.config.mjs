// jest.config.mjs
export default {
  verbose: true,
  testEnvironment: "node",
  moduleFileExtensions: ["js", "ts"],
  transform: {
    "^.+\\.(js|ts)$": "babel-jest"
  },

  collectCoverage: true, // Remplace "coverage"
  // Retirez l'option "snapshots" si elle n'est pas nécessaire
  watchAll: true,
  transformIgnorePatterns: ["node_modules/"]
};
