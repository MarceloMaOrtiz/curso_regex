const aplicarCor = (txt, reg, cor) => 
    txt.replace(
        reg, 
        `<span style="color: #${cor}"><b>$1</b></span>`
    )

const files = require('./files')
const texto = files.read('codigo_fonte.html')

const re_code = /<code>[\s\S]*<\/code>/gi
let codigo = texto.match(re_code)[0]

// String...
codigo = aplicarCor(codigo, /(\".*\")/g, 'ce9178')

// Palavras reservadas...
codigo = aplicarCor(codigo, /\b(package|public|class|static|if|else)\b/g, 'd857cf')

// Tipos...
codigo = aplicarCor(codigo, /\b(void|int)\b/g, '1385e2')

// Comentários de multiplas linhas...
codigo = aplicarCor(codigo, /(\/\*[\s\S]*\*\/)/g, '267703')

// Comentários de uma linha...
codigo = aplicarCor(codigo, /(\/\/.*?\n)/g, '267703')

const conteudo_final = texto.replace(re_code, codigo)

files.write('codigo_fonte.html', conteudo_final)