import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"], // main entry file
  outDir: "dist", // output directory
  format: ["esm", "cjs"], // output both ESM and CommonJS
  dts: true, // generate .d.ts declaration files
  clean: true, // clean dist folder before build
  minify: false, // set to true if you want to minify
  sourcemap: true, // include source maps
  target: "es2019", // reasonable baseline for compatibility
  splitting: false, // no code splitting (you can enable if needed)
  treeshake: true // remove unused code
});
