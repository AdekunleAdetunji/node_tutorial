const {readFile, writeFile} = require("fs")

readFile("./6-alternative_flavor.js", "utf-8", (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
})