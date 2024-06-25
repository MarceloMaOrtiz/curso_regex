const texto = `Os e-mails dos convidados são:
    - fulano23@cod3r.com.br
    - xico@gmail.com 
    - joao@empresa.info.br
    - maria_silva@registro.br
    - rafa.sampaio@yahoo.com
    ...
`

const re_email = /[\.\w]+@\w+\.\w+\.?\w+/g

console.log(texto.match(re_email))