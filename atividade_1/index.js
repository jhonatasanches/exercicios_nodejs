// ## Importe a biblioteca ##

var rs = require ('readline-sync')

// ## Faça o código ##

var numeroVoo = rs.question ('Perguntar qual o seu numero do voo? ')
var fileiraVoo = rs.question ('qual fileira o voce deseja sentar?  (A, B, C, D ou F)   ')

console.log(`Seu numero de voo eh ${numeroVoo} e voce ira sentar na fileira ${fileiraVoo}`)