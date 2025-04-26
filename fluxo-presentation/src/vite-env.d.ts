declare module "*.md";
declare module "*.svg" {
    const content: string;
    export default content;
}
declare module "*.png" {
    const content: string;
    export default content;
}
/// <reference types="vite/client" />

/// <reference types="vite-plugin-string/client" />
/// <reference types="vite-plugin-md/client" />



