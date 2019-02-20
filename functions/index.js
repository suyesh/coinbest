"use strict";

const glob = require("glob");
const camelCase = require("camelcase");
const files = glob.sync("./**/*.f.js", {
  cwd: __dirname,
  ignore: "./node_modules/**"
});
for (let f = 0, fl = files.length; f < fl; f++) {
  const file = files[f];
  const functionName = camelCase(
    file
      .slice(0, -5)
      .split("/")
      .join("_")
  );
  if (
    !process.env.FUNCTION_NAME ||
    process.env.FUNCTION_NAME === functionName
  ) {
    exports[functionName] = require(file);
  }
}
