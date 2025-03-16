import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      exports: "auto",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
  ],
  plugins: [
    resolve(),
    babel({
      presets: ["@babel/preset-react"],
      babelHelpers: "bundled",
    }),
    postcss({ extract: "styles.css" })
  ],
  external: ["react", "prop-types"],
};
