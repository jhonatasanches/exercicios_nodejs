// ## Importe a biblioteca ##

var rs = require('readline-sync')

// ## Faça o código ##

var usaMascara = rs.question('Voce esta usando mascara? [sim/nao] ')
var lavarMaos = rs.question('Voce esta lavando as maos? [sim/nao] ')

if (usaMascara == "sim" && lavarMaos == "sim"){
    console.log('Parabens pela higiene')
}else{
    console.log('Vai se cuidar!')
}