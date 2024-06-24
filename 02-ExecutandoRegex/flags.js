// g - global
// i - ignore case

const texto = 'Carlos assinou o abaixo-assinado.'

// Encontra a primeira ocorrência de C ou ab
console.log(texto.match(/C|ab/))
console.log(' --- --- --- --- --- ')
// Diferencia c e C, encontrando ab
console.log(texto.match(/c|ab/))
console.log(' --- --- --- --- --- ')
// Com i ele não diferencia c e C
console.log(texto.match(/c|ab/i))
console.log(' --- --- --- --- --- ')
// Com g será procurado em toda a frase
console.log(texto.match(/c|ab/gi))
texto.match(/c|ab/gi).forEach(i => console.log(i))
console.log(' --- --- --- --- --- ')