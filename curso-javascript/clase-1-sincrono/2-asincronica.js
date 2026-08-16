
//asincrona
function leerDatos( callback) {
    FileSystem.readAsync("datos.txt", function(bytes){ // no se queda esperando los bytes
        callback(bytes)
    }); 
}
    // leer dato es asincronico y no sincronico 
leerDatos(function(datos){
    console.log(datos)
})
console.log("--------")

