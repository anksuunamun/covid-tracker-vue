module.exports = {
    purge: {content: ['./public/**/*.html', './src/**/*.vue']},
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        container: {
            center: true,
            padding: '2rem'
        },
        textColor: {
            'yellow': '#fae760',
            'bright-blue': '#60c4fa',
            'dirty-blue': '#4389af',
            'bright-pink': '#fa60ad',
            'dirty-pink': '#af4379',
            'white': '#fff'
        },
        backgroundColor: {
            'yellow': '#fae760',
            'bright-blue': '#60c4fa',
            'dirty-blue': '#4389af',
            'bright-pink': '#fa60ad',
            'dirty-pink': '#af4379',
            'white': '#fff'
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
