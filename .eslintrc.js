module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    jest: true,
  },
  globals: {},
  rules: {
    'react/jsx-filename-extension': 0,
    'object-curly-newline': 0,
    'no-plusplus': 0,
    'react/forbin-prop-types': [2, { forbid: ['any'] }],
    'react/no-danger': 0,
    'arrow-body-style': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label', 'label'],
        required: { some: ['nesting', 'id'] },
        allowChildren: false,
      },
    ],
    'jsx-a11y/no-static-element-interactions': 0,
  },
};
