const teste = require('../dist/index')


let returnCSV = new teste.csvForJson().openFileCSV('../dist/teste.csv', true, true)

console.log(returnCSV.map(t => t.value['Código']))