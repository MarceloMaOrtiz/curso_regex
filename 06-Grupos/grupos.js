console.log('---- ---- Aula 46 ---- ----')

const texto1 = 'O josé Simão é muito engraçado... hehehehehe'

console.log(texto1.match(/(he)/g))
console.log(texto1.match(/(he)+/g))

const texto2 = 'https://www.site.info www.escola.ninja.br google.com.ag'

console.log(texto2.match(/(https:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g))

console.log('---- ---- ---- ---- ----')

console.log('---- ---- Aula 47 ---- ----')

const texto3 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'

console.log(texto3.match(/<(\w+)>.*<\/\1>/g))

const texto4 = 'Lentamente é mente muito lenta.'

console.log(texto4.match(/(lenta)(mente).*\2.*\1\./gi))
console.log(texto4.match(/(?:lenta)(mente).*\1/gi))

console.log(texto4.match(/(lenta)(mente)/gi))
console.log(texto4.match(/(lenta)(mente)?/gi))
console.log(texto4.replace(/(lenta)(mente)/gi, '$2'))

console.log('---- ---- ---- ---- ----')

console.log('---- ---- Aula 49 ---- ----')

const texto5 = 'supermercado hipermercado minimercado mercado'

console.log(texto5.match(/(super|hiper|mini)?mercado/g))
console.log(texto5.match(/((hi|su)per|mini)?mercado/g))

console.log('---- ---- ---- ---- ----')

console.log('---- ---- Aula 50 ---- ----')

const texto6 = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!'

console.log(texto6.match(/[(abc)]/gi))
console.log(texto6.match(/([abc])/gi))
console.log(texto6.match(/(abc)/gi))

console.log('---- ---- ---- ---- ----')

console.log('---- ---- Aula 51 e 52 ---- ----')

const texto7 = 'João é calmo, mas no transito fica nervoso.'

console.log(texto7.match(/[\wÀ-ú]+/gi))

// Positive lookahead
console.log(texto7.match(/[\wÀ-ú]+(?=,)/gi))
console.log(texto7.match(/[\wÀ-ú]+(?=\.)/gi))
console.log(texto7.match(/[\wÀ-ú]+(?=, mas)/gi))

// Negative lookahead
console.log(texto7.match(/[\wÀ-ú]+\b(?!,)/gi))
console.log(texto7.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))

console.log('---- ---- ---- ---- ----')