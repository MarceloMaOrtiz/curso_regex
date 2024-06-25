const texto = `Lista telefônica:
    - (11) 98756-1212
    -98765-4321 ...
`

const re_telefone = /\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g
// const re_telefone = /(\(\d{2}\))?\s?\d{4,5}-\d{4}/g

console.log(texto.match(re_telefone))