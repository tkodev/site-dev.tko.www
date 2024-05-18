/** @type {import("eslint").Linter.Config} */
const config = {
  $schema: 'https://json.schemastore.org/eslintrc.json',
  extends: ['@vercel/style-guide/eslint/next', './modules/common.js', './modules/prettier.js'].map(
    require.resolve
  )
}

module.exports = config
