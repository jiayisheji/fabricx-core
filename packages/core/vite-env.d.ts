/// <reference types="vite/client" />

/**
 * A global constant injected by the build process.
 * It is `true` in development mode and `false` in production.
 * This is used for dead-code elimination of development-only logic.
 *
 * @see https://vitejs.dev/config/shared-options.html#define
 */
declare const __DEV__: boolean;
