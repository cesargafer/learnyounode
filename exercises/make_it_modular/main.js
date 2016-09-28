const fs = require('fs')
const path = require('path')


module.exports = function (directorio, filterExt, cb){
 fs.readdir(directorio, function(err, listaArchivos){ 
 if (err) throw err

 listaArchivos = listaArchivos.filter(function(file) { 
  return path.extname(file) === '.' +  filterExt
  })
 
 cb(null, listaArchivos)
 })
}



