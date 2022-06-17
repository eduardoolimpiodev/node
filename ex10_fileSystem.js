const fs = require('fs')

const files = fs.readdirSync(__dirname)

files.forEach( f => console.log(f))

// usar o comando no cmd node ex10_fileSystem.js