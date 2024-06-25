const texto = `CPF dos aprovados:
    - 600.567.890-12
    - 765.998.345-23 ...
`

const re_cpf = /\d{3}\.\d{3}\.\d{3}-\d{2}/g

console.log(texto.match(re_cpf))