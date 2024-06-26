const texto = `
Inválidos:
192.268.0.1
1.333.1.1
192.168.0.256
156.156.156.256

Válidos:
192.168.0.1
127.0.0.1
10.0.0.255
10.11.12.0
255.255.255.255
0.0.0.0
`

// Como é uma string, é necessário utilizar o \ duas vezes
const intervalo = '(\\d{1,2}|1\\d{2}|2[0-4]\\d|25[0-5])'

const re_ipv4 = RegExp(`\\b${intervalo}\\.${intervalo}\\.${intervalo}\\.${intervalo}\\b`, 'g')

console.log(texto.match(re_ipv4))