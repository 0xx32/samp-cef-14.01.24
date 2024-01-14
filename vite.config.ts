import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react() ],
    
    // base: "https://projecta.myarena.site/",
    base: "/",
    css: {
        modules: {
            generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
    },
    resolve: {
        alias: {
            components: "/src/components",
            services: "/src/services",
            hooks: "/src/hooks",
            store: "/src/store",
            assets: "/src/assets",
            utils: "/src/utils",
            sreens: "/src/components/sreens",
            types: "/src/types",
            shared: "/src/shared",
            constants: "/src/constants",
        },
      
    },
});
