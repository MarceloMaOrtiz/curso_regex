console.log('---- ---- Aula 29 ---- ----')

// [] -> Para definir uma classe (ou conjunto) de caracteres

let texto = '1,2,3,4,5,6,a.b c!d?e[f'
const re_pares = /[02468]/g
console.log(texto.match(re_pares))

let texto2 = 'João não vai passear na moto.'
const re_com_sem_acento = /n[aã]/g
console.log(texto2.match(re_com_sem_acento))

console.log('---- ---- ---- ---- ----')

console.log('---- ---- Aula 30 ---- ----')

console.log(texto.match(/[a-z]/g))
console.log(texto.match(/[b-d]/g))
console.log(texto.match(/[2-4]/g))
console.log(texto.match(/[a-z1-3]/gi))

console.log('---- ---- ---- ---- ----')

console.log('---- ---- Aula 31 ---- ----')

texto = '.$+*?-'

// Não precisa de escape ('\') dentro do conjunto
console.log(texto.match(/[+.?*$]/g))
// O '-' é utilizado como um metadado dos conjuntos (range)
console.log(texto.match(/[$-?]/g)) 
// Utilizando o escape ('\') o '-' não é considerado um metadado
console.log(texto.match(/[$\-?]/g))
// É possível utilizar '-' como literal sem um escape, colocando em 
// alguma extremidade da Regex
console.log(texto.match(/[-?]/g))

console.log('---- ---- ---- ---- ----')

console.log('---- ---- Aula 32 ---- ----')

texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g))

// Considera o intervalo da tabela ASC
console.log(texto.match(/[A-z]/g))

console.log('---- ---- ---- ---- ----')

console.log('---- ---- Aula 33 ---- ----')

texto = `1,2,3,4,5,6a.b\r c!d?e	-
f_g\f`

console.log(texto.match(/\d/g))
console.log(texto.match(/\D/g))
console.log(texto.match(/\w/g))
console.log(texto.match(/\W/g))
console.log(texto.match(/\s/g))
console.log(texto.match(/\S/g))

console.log('---- ---- ---- ---- ----')

console.log('---- ---- Aula 34 ---- ----')

texto = '1,2,3,a.b c!d?e[f'

console.log(texto.match(/\D/g))
console.log(texto.match(/[^0-9]/g))

console.log(texto.match(/[^\d!\?\[\s,\.]/g))

texto2 = '1: !"#$%&\'()*+,-./ 2: :/<=>?@'

console.log(texto2.match(/[^!-/:-@\s]/g))

console.log('---- ---- ---- ---- ----')

console.log('---- ---- Aula 35 ---- ----')

texto = 'áéíóú àèìòù âêîôû ç ãõ ü'

console.log(texto.match(/[Á-ü]/g))

console.log('---- ---- ---- ---- ----')
