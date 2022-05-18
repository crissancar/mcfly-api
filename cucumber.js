const common = [
  '--require-module ts-node/register', // Load TypeScript module
];

const mcfly_backend = [
  ...common,
  'test/**/features/**/*.feature',
  '--require test/**/features/step_definitions/*.steps.ts',
  '--publish-quiet',
].join(' ');

module.exports = {
  mcfly_backend,
};
