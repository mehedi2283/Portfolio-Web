/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#be123c",

                    secondary: "#7dd3fc",

                    accent: "#374151",

                    neutral: "#211A29",

                    "base-100": "#000000",

                    info: "#509EE7",

                    success: "#0C6949",

                    warning: "#AA6F09",

                    error: "#DF263E",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
    tailwindConfig: './styles/tailwind.config.js',
};
