import type { Configuration } from "webpack";

import { rules } from "./webpack.rules";
import path from "path";

export const mainConfig: Configuration = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: "./src/index.ts",
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
    alias: {
      "@components": path.resolve(__dirname, "./src/client/components"),
      "@images": path.resolve(__dirname, "./src/client/images"),
      "@backend": path.resolve(__dirname, "./src/backend"),
    },
  },
};
