// Aula 17

console.log('---- ---- Aula 17 ---- ----')

let texto = 'Casa bonita é casa amarela da esquina com a Rua ACASALAR.'
const re_casa = /casa/gi

console.log(texto.match(re_casa))
console.log(texto.match(/a b/))

console.log('---- ---- ---- ---- ----')

// Aula 18 e 19

console.log('---- ---- Aula 18-19 ---- ----')

const textoUmaLinha = '...' // aspas simples ou duplas
const textoMultiLinha = `
    linha 1
    linha 2
`

// cuidado com o tab. Pois nele é gerado uma qtd x de espaços
console.log('	'.match(/\s/g))

console.log('---- ---- ---- ---- ----')

// Aula 20

console.log('---- ---- Aula 20 ---- ----')

texto = '1,2,3,4,5,6,a.b c!d?e'
const re_virgula = /,/

console.log(texto.split(re_virgula))
console.log(texto.match(re_virgula))
console.log(texto.match(/,/g))
console.log(texto.match(/A/))
console.log(texto.match(/A/i))
console.log(texto.match(/2/g))
console.log(texto.match(/b c!d/))

console.log('---- ---- ---- ---- ----')

// Aula 21

// . ? * + - ^ $ | [] {} () \ :
console.log('---- ---- Aula 21 ---- ----')

const re_ponto = /\./g

console.log(texto.split(re_ponto))

const re_simbolos = /,|\.|\?|!| /g

console.log(texto.split(re_simbolos))

console.log('---- ---- ---- ---- ----')

// Aula 22

// . é um coringa, válido para uma posição
console.log('---- ---- Aula 22 ---- ----')

texto = '1,2,3,4,5,6,7,8,9,0'

console.log(texto.match(/1.2/g))
console.log(texto.match(/1..2/))
console.log(texto.match(/1..,/g))

const notas = '8.3,7.1,8.8,10.0'

console.log(notas.match(/8../g))
console.log(notas.match(/.\../g))