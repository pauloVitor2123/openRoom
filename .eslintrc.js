module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "plugin:react-hooks/recommended",
    "@react-native",
  ],
  plugins: ["react", "react-native", "jsx-a11y", "import"],
  rules: {
    "react/jsx-filename-extension": [
      "error",
      {extensions: [".js", ".jsx", ".tsx", ".ts"]},
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {devDependencies: ["**/*.test.js", "**/*.spec.js", "storybook/**/*"]},
    ],
    quotes: ["error", "double"], // Definindo aspas duplas para strings
    semi: ["error", "always"], // Garantindo ponto e vírgula no final
    "prettier/prettier": [
      "error",
      {
        tabWidth: 2,
        useTabs: false,
        singleQuote: false,
        semi: true,
        endOfLine: "auto",
      },
    ],
  },
};
