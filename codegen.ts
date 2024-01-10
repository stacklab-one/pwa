
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    overwrite: true,
    schema: "http://localhost:8080/v1/graphql",
    documents: "./graphql/**/*.graphql",
    generates: {
        "./graphql/schema.ts": {
            plugins: [
                "typescript",
                "typescript-operations",
            ],
        },
        "./graphql/introspection.json": {
            plugins: ["introspection"],
        },
    },
};

export default config;
