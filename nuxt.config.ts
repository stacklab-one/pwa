// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@vueuse/nuxt",
        "nuxt-icon",
        "@nuxt/ui",
        "nuxt-graphql-client",
        [
            "@nuxtjs/eslint-module", 
            {
                lintOnStart: true,
            },
        ],
    ],
    runtimeConfig: {
        "graphql-client": {
            clients: {
                default: {
                    schema: "graphql/schema.graphql",
                },
            },
        },
    },
    "graphql-client": {
    },
});
