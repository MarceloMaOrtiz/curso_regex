const texto = `
Lista telefônica:
    - (21) 12345-6789
    - (11) 62300-2234
    - 5678-7771
    - (85) 3333-7890
    - (1) 4321-1234 
`

const re_telefone = /(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g

console.log(texto.match(re_telefone))