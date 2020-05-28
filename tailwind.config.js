const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  purge: {
    content: [
      './src/assets/**/*.css',
      './src/**/*.vue',
      './src/**/*.js'
    ],
    options: {
      defaultExtractor: content => content.match(/[\w-/:%]+(?<!:)/g) || [],
      whitelistPatterns: [/shiki/],
    },
  },
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
          codeblock: '#2d3748',
        },
        green: {
          100: '#f0fff4',
          200: '#c6f6d5',
          300: '#9ae6b4',
          400: '#68d391',
          500: '#0dbc5c',
          600: '#38a169',
          700: '#2f855a',
          800: '#276749',
          900: '#22543d',
        },
      },
      fontFamily: {
        sans: [
          'Montserrat', ...defaultTheme.fontFamily.sans
        ],
        serif: ['Georgia', ...defaultTheme.fontFamily.serif],
        mono: [
          'Monaco', ...defaultTheme.fontFamily.mono
        ],
      },
      lineHeight: {
        code: '1.75',
      },
      divideColor: theme => theme('borderColor'),
      divideWidth: theme => theme('borderWidth'),
    }
  },
  corePlugins: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
