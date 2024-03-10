// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@vueuse/nuxt",
        "nuxt-icon",
        "@nuxt/ui",
        [
            "nuxt-graphql-client",
            {
                watch: true,
            },
        ],
        [
            "@nuxtjs/eslint-module", 
            {
                lintOnStart: true,
            },
        ],
        ["nuxt-meilisearch", {
            hostUrl: process.env.MEILI_HOST,
            serverSideUsage: true,
            adminApiKey: process.env.MEILI_API_KEY,
            searchApiKey: process.env.MEILI_API_KEY,
            cache: true,
        }],
    ],
    runtimeConfig: {
        "graphql-client": {
            clients: {
                default: {
                    schema: "graphql/schema.graphql",
                },
            },
        },
        public: {
            apiUrl: "",
        },
    },
    "graphql-client": {
    },
});
