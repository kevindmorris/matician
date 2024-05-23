import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  target: "es2016",
  format: ["cjs", "esm"],
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
  tsconfig: "tsconfig.json"
});
