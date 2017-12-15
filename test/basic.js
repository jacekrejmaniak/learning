const markdown = require('markdown').markdown
const assert = require('assert')
const fs = require('fs')
const path = require('path')
const output = path.join(__dirname, '../build/praca.html')

assert.deepEqual( markdown.toHTML( 'Hello *World*!' ), '<p>Hello <em>World</em>!</p>' )

const result = fs.readFileSync(output, 'utf8')
assert( result )
// assert( result.includes('<meta charset="utf8">') )
