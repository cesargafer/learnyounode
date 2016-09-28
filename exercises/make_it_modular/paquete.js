
//module.exports = function (args) { /* ... */ }
var functionFiltro = require('./paquete.js')
const directorio = process.argv[2]
const filterExt = process.argv[3]

// built a function with these 3 parameters
//directorio, filterExt, cb

functionFiltro(directorio, filterExt, function(err, lista){
 if (err) throw err
 
 lista.forEach(function(archivo)
   console.log(archivo)
})





