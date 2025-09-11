/**
 * Mocks the Canvas API for the Node.js test environment.
 *
 * The browser-specific Canvas API (e.g., `getContext`, `toDataURL`) is not available
 * in the Node.js environment where Vitest runs its tests by default.
 *
 * This import registers a global mock implementation of the Canvas API, allowing
 * libraries that depend on it (like Fabric.js) to run without crashing.
 * This setup applies to all test files.
 *
 * @see https://github.com/vitest-dev/vitest/tree/main/packages/canvas-mock
 */
import 'vitest-canvas-mock';
// This file is executed once before all tests.
// It's the perfect place to set up global variables or mocks for the test environment.

// Imperatively define the __DEV__ global constant for all test files.
globalThis.__DEV__ = true;
