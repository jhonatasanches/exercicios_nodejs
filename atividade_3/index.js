// ## Importe a biblioteca ##

var rs = require('readline-sync')

// ## Faça o código ##

var tamanhoLados = rs.question('Qual o tamanho dos lados do quadrado? ')

var areaQuadrado = tamanhoLados*tamanhoLados

console.log(`A area desse quadrado eh ${areaQuadrado}`)