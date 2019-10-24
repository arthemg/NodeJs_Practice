const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()
const data = JSON.parse(dataJson)
// console.log(data.title)
data.name = 'Artsem'
console.log(data.name)
data.age = 32

const dataStringify = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataStringify)

