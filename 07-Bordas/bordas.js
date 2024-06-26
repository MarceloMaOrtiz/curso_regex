console.log('---- ---- Aula 53 ---- ----')

const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/r/gi))
console.log(texto.match(/^r/gi))
console.log(texto.match(/r$/gi))
console.log(texto.match(/^r.*r$/gi))

console.log('---- ---- ---- ---- ----')

console.log('---- ---- Aula 54 ---- ----')

console.log(texto.match(/^r.*r$/gi))
console.log(texto.match(/^r[\s\S]*r$/gi))

console.log('---- ---- ---- ---- ----')

console.log('---- ---- Aula 55 ---- ----')

const texto2 = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`

console.log(texto2.match(/\n/g))

// Dessa forma funciona, pois é guloso, porém não está usando o
// '^' e o '$'
console.log(texto2.match(/(.).*\1/gi))

// Dessa forma temos o retorno null por conta do problema dotall
console.log(texto2.match(/^(\w).*\1$/gi))

// Com a utilização do 'm', multiline, ele considera cada linha
// de forma independente, resolvendo o problema do \n para esse caso
console.log(texto2.match(/^(\w).*\1$/gim))

console.log('---- ---- ---- ---- ----')

console.log('---- ---- Aula 56 ---- ----')

const texto3 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

console.log(texto3.match(/\bdia\w+/gi))
console.log(texto3.match(/\bdia\w*/gi))

console.log(texto3.match(/\w+dia\b/gi))
console.log(texto3.match(/\w*dia\b/gi))

console.log(texto3.match(/\bdia\b/gi))

const texto4 = 'dia diatônico diafragma, dia média wikipédia bom-dia melodia radial'

console.log(texto4.match(/\bdia\b/gi))
// Dessa forma até a ',' está sendo considerada
console.log(texto4.match(/(\S*)dia(\S*)/gi))
console.log(texto4.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi))
// Tentativa de só pegar o 'dia' que está isolado
console.log(texto4.match(/[^\-\WÀ-ú\S]?dia\b/gi))
console.log(texto4.match(/(\sdia\b)|(^dia\b)/gi))

console.log('---- ---- ---- ---- ----')