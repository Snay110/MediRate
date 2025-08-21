import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import boundaries from "eslint-plugin-boundaries";
import { globalIgnores } from "eslint/config";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default tseslint.config([
  globalIgnores(["dist"]),

  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      boundaries,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: {
      "import/resolver": {
        typescript: {},
      },
      "boundaries/elements": [
        { type: "shared", pattern: "src/shared/*" },
        { type: "features", pattern: "src/features/*" },
        { type: "entities", pattern: "src/entities/*" },
      ],
    },
    rules: {
      "boundaries/element-types": [
        "error",
        {
          default: "disallow",
          rules: [
            { from: "features", allow: ["shared"] },
            { from: "entities", allow: ["shared"] },
          ],
        },
      ],
      "boundaries/entry-point": [
        "error",
        {
          default: "allow",
          rules: [
            {
              target: ["shared", "app"],
              allow: ["**/index.{ts,tsx}"],
            },
            {
              target: ["features"],
              allow: ["/index.{ts,tsx}", "/page.tsx"],
            },
          ],
        },
      ],
    },

    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
  },
]);
