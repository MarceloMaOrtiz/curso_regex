// Requisitos para a senha: Maíuscula, minuscula, número
// e simbolo, mínimo 6 caracteres, máximo 20

const texto = `
123456
cod3r
QUASE123!
#OpA1
#essaSenhaEGrande12345

#Opa1?
Foi123!
`

// const re_senha = /^.{6,20}$/gm
// const re_senha = /^(?=.*[A-Z]).{6,20}$/gm // Positive Lookahead
const re_senha = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^&*]).{6,20}$/gm

console.log(texto.match(re_senha))