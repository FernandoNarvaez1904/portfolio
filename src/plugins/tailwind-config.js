module.exports = function tailwindPlugin(context, options) {
  return {
    name: "tailwind-plugin",
    configurePostCss(postcssOptions) {
      // Insert Tailwind at the beginning to ensure proper processing
      postcssOptions.plugins.unshift(require("@tailwindcss/postcss"));
      return postcssOptions;
    },
  };
};
