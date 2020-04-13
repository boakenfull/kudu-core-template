module.exports = {
    stories: ['../.themework/**/*.stories.(js|mdx)', '../src/**/*.stories.(js|mdx)'],
    addons: [
      '@storybook/addon-knobs/register',
      '@storybook/addon-viewport/register',
      '@storybook/addon-a11y/register',
      '@storybook/addon-actions/register'
    ]
  };
