const fs = require('fs')

const profileDataArgs = process.argv.slice(2, process.argv.length)

console.log(profileDataArgs)
fs.appendFile('README.md','https://madstoddard.github.io/ease-your-stress/\n![Ease Your Stress 1](https://user-images.githubusercontent.com/98136587/162640699-193e3325-34fb-42a6-8b67-5b3b51008d27.png)',error =>console.error(error))