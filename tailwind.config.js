const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [],
    theme: {
        extend: {
            // When customizing the font family, if the font name has a space or invalid characters, add an extra set of quotation marks to escape it.
            fontFamily: {
                serif: ['Georgia', ...defaultTheme.fontFamily.serif],
                sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
                mono: ['Monaco', ...defaultTheme.fontFamily.mono]
            },
            colors: {
                'black': '#22292f',
                primary: {
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
                },

                inset: {
                    '1/2': '50%',
                },
            }
        },
    },
    variants: {},
    plugins: [

    ],
};