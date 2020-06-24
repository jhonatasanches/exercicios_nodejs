// ## Importe a biblioteca ##

var rs = require('readline-sync')

// ## Faça o código ##

var diaNascimento = rs.question('Qual o dia do seu nascimento? [responder em numeros] ')
var mesNascimento = rs.question('Qual o mes do seu nascimento? [responder em numeros] ')

if((diaNascimento>=21 && mesNascimento==1) || (diaNascimento<=18 && mesNascimento==2)){
    console.log('Voce eh de AQUARIO')
}else if((diaNascimento>=19 && mesNascimento==2) || (diaNascimento<=20 && mesNascimento==3)){
    console.log('Voce eh de PEIXES')
}else if((diaNascimento>=21 && mesNascimento==3) || (diaNascimento<=20 && mesNascimento==4)){
    console.log('Voce eh de ARIES')
}else if((diaNascimento>=21 && mesNascimento==4) || (diaNascimento<=20 && mesNascimento==5)){
    console.log('Voce eh de TOURO')
}else if((diaNascimento>=21 && mesNascimento==5) || (diaNascimento<=20 && mesNascimento==6)){
    console.log('Voce eh de GEMEOS')
}else if((diaNascimento>=21 && mesNascimento==6) || (diaNascimento<=22 && mesNascimento==7)){
    console.log('Voce eh de CANCER')
}else if((diaNascimento>=23 && mesNascimento==7) || (diaNascimento<=22 && mesNascimento==8)){
    console.log('Voce eh de LEAO')
}else if((diaNascimento>=23 && mesNascimento==8) || (diaNascimento<=22 && mesNascimento==9)){
    console.log('Voce eh de VIRGEM')
}else if((diaNascimento>=23 && mesNascimento==9) || (diaNascimento<=22 && mesNascimento==10)){
    console.log('Voce eh de LIBRA')
}else if((diaNascimento>=23 && mesNascimento==10) || (diaNascimento<=21 && mesNascimento==11)){
    console.log('Voce eh de ESCORPIAO')
}else if((diaNascimento>=22 && mesNascimento==11) || (diaNascimento<=21 && mesNascimento==12)){
    console.log('Voce eh de SAGITARIO')
}else if((diaNascimento>=22 && mesNascimento==12) || (diaNascimento<=20 && mesNascimento==1)){
    console.log('Voce eh de CAPRICORNIO')
}