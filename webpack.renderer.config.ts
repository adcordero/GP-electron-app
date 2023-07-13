import type { Configuration } from "webpack";

import { rules } from "./webpack.rules";
import { plugins } from "./webpack.plugins";
import path from "path";

rules.push(
  {
    test: /\.css$/,
    use: ["style-loader", "css-loader", "postcss-loader"],
  },
  {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  }
);

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
};
