const texto = '0 1 9 95 10 192 199 201 249 255 256 312 1010 1510'

// Números entre 0-255
// const re_intervalo = /\b(\d{1,2})\b|\b(1\d{2})\b|\b(2(([0-4]?\d?)|(5?[0-5]?)))\b/g
const re_intervalo = /\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g

console.log(texto.match(re_intervalo))