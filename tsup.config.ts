import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/lorem.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  format: ['esm'],
  dts: true,
  outExtension() {
    return {
      js: '.mjs',
    };
  },
});
