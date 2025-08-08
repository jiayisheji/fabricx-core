module.exports = {
  '{packages, apps}/**/*.{js,ts}': files => `nx affected:lint --fix --files=${files.join(',')}`,
  '*.{js,jsx,ts,tsx,json,md,html,css,scss,yml}': files => `nx format:write --files=${files.join(',')}`,
};
