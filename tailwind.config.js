/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "#1B1C1E",
                bermuda: {
                    DEFAULT: "#65DAC4",
                    "50": "#f1fcf9",
                    "100": "#d1f6ed",
                    "200": "#a2eddc",
                    "300": "#65dac4",
                    "400": "#3ec3ae",
                    "500": "#25a795",
                    "600": "#1b867a",
                    "700": "#196c62",
                    "800": "#195650",
                    "900": "#194844",
                    "950": "#082b29",
                },
                "mineshaft": {
                    DEFAULT: "#333439",
                    "50": "#f7f8f8",
                    "100": "#eeeef0",
                    "200": "#d9dade",
                    "300": "#b8bac1",
                    "400": "#91949f",
                    "500": "#747783",
                    "600": "#5e616b",
                    "700": "#4d4f57",
                    "800": "#42434a",
                    "900": "#333439",
                    "950": "#26272b",
                },
            },
            spacing: {
                appHeight: "calc(100vh - 5rem)",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

