// npm i lodash
// npm  i lodash --save

const _ = require('lodash')

const alunos = [{
    nome: "Eduardo",
    nota: 9.8
}, {
    nome: "Maria",
    nota: 10
}, {
    nome: "Roberto",
    nota: 9.9
}]

const media = _.sumBy(alunos, 'nota') / alunos.length

console.log(media)
