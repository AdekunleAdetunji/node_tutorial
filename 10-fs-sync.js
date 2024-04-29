const {readFileSync, writeFileSync} = require("fs")

writeFileSync(
    "./6-alternative_flavor.js", "This is the sixth module\n",
    {flag: "a"}
)