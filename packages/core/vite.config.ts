/// <reference types='vitest' />
import { join } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/core',
  plugins: [dts({ entryRoot: 'src', tsconfigPath: join(__dirname, 'tsconfig.lib.json') })],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: () => [ nxViteTsPaths() ],
  // },
  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      name: '@fabricx-core/editor',
      fileName: 'index',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es' as const],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: [],
    },
  },
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    setupFiles: ['vitest.setup.ts'],
    include: ['test/**/*.test.ts'],
    reporters: ['default'],
    threads: false,
    coverage: {
      reportsDirectory: '../../coverage/packages/core',
      provider: 'v8' as const,
      // The format of the generated report
      reporter: ['text', 'html', 'clover', 'json'],
      // The coverage threshold (percentage) that must be reached
      thresholdAutoUpdate: true,
      lines: 90,
      functions: 90,
      branches: 90,
      statements: 90,
      // Exclude files or directories that do not require statistics
      exclude: ['node_modules', 'dist', 'test', '**/*.d.ts', 'src/lib/application/main.ts'],
      // Only count the files in the specified directory
      include: ['src/lib/**'],
      // Check the untested files
      checkConsistency: true,
    },
  },
}));
