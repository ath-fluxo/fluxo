
/// <reference types="vite-plugin-string/client" />
/// <reference types="vite-plugin-md/client" />
/// <reference types="vite-plugin-html/client" />
/// <reference types="vite-plugin-sass/client" />
/// <reference types="vite-plugin-svg/client" />
/// <reference types="vite-plugin-png/client" />
/// <reference types="vite-plugin-css/client" />
/// <reference types="vite-plugin-scss/client" />

declare module '*.md' {
    const content: string;
    export default content;
}

declare module '*.html' {
    const content: string;
    export default content;
}
declare module '*.css' {
    const content: string;
    export default content;
}
declare module '*.scss' {
    const content: string;
    export default content;
}

declare module "*.svg" {
    const content: string;
    export default content;
}
declare module "*.png" {
    const content: string;
    export default content;
}