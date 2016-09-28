const http = require('http')
const bl = require('bl')
var resultados = []
var contador = 0;


function httpGeteador(indice){
 http.get(process.argv[2 + indice], function(resp){
 resp.pipe(bl(function(err, data){
  if (err) throw err;
  resultados = data.toString()
  contador++
  if (contador == 3)
    imprimeResultado() 
  }))
 })
}

function imprimeResultado(){
 for (var i = 0; i < 3; i++)
  console.log(resultados[i])
}

for (var i = 0; i < 3; i++)
 httpGeteador(i)


