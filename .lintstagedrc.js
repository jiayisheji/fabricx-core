const path = require('path');

module.exports = {
  '{packages, apps}/**/*.{js,ts}': files =>
    `nx affected:lint --fix --files=${files.map(file => path.relative(process.cwd(), file)).join(',')}`,
  '*.{js,jsx,ts,tsx,json,md,html,css,scss,yml}': files =>
    `nx format:write --files=${files.map(file => path.relative(process.cwd(), file)).join(',')}`,
};
