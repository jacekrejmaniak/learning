const markdown = require('markdown').markdown
const fs = require('fs')
const path = require('path')

const file = path.join(__dirname, 'praca.md')
const content = fs.readFileSync(file, 'utf8')
const result = markdown.toHTML(content)

const output = path.join(__dirname, '../build/praca.html')

fs.writeFileSync(output, result)
