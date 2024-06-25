console.log('---- ---- Aula 37 ---- ----')

const texto = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO'
const texto2 = 'There is a big fog in NYC'

const re_fogo_interrogacao = /fogo?/gi

console.log(texto.match(re_fogo_interrogacao))
console.log(texto2.match(re_fogo_interrogacao))

console.log('---- ---- ---- ---- ----')

console.log('---- ---- Aula 38 ---- ----')

const re_fogo_mais = /fogo+/gi

console.log(texto.match(re_fogo_mais))
console.log(texto2.match(re_fogo_mais))

const texto3 = 'Os números: 0123456789.'

console.log(texto3.match(/[0-9]/g))
console.log(texto3.match(/[0-9]+/g))

console.log('---- ---- ---- ---- ----')

console.log('---- ---- Aula 39 ---- ----')

const re_fogo_asterisco = /fogo*/gi

console.log(texto.match(re_fogo_asterisco))
console.log(texto2.match(re_fogo_asterisco))

console.log('---- ---- ---- ---- ----')

console.log('---- ---- Aula 40 ---- ----')

const texto4 = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.'

console.log(texto4.match(/\d{1,2}/g))
console.log(texto4.match(/\b\d{1,2}\b/g))
console.log(texto4.match(/\d{2}/g))
console.log(texto4.match(/\d{1,}/g))

console.log(texto4.match(/\w{7}/g))
console.log(texto4.match(/[A-ü]{7}/g))

console.log('---- ---- ---- ---- ----')

console.log('---- ---- Aula 41 ---- ----')

const texto5 = '<div>Conteudo 01</div><div>Conteudo 02</div>'

// Quantificadores são gulosos (greedy)...
console.log(texto5.match(/<div>.+<\/div>/g))
console.log(texto5.match(/<div>.*<\/div>/g))
console.log(texto5.match(/<div>.{0,100}<\/div>/g))

// Quantificados não gulosos (lazy)...
console.log(texto5.match(/<div>.+?<\/div>/g))
console.log(texto5.match(/<div>.*?<\/div>/g))
console.log(texto5.match(/<div>.{0,100}?<\/div>/g))

console.log('---- ---- ---- ---- ----')