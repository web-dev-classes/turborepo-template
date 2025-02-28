/* eslint-disable -- no need - external file */

const fs = require("fs");
const path = require("path");

const featured = require("./src/examples/featured.json");
featured.sort((f1, f2) => f1.title.localeCompare(f2.title));

const readMeLines = ["# Featured packages built with this template.", ""];

featured.forEach(f => {
  readMeLines.push(`- [${f.title}](${f.href}) - ${f.description}`);
});

fs.writeFileSync(path.resolve(__dirname, "..", "..", "FEATURED.md"), readMeLines.join("\n"));
