//sincrona
function leerDatos() {
    const bytes = FileSystem.read("datos.txt"); // esta llamada es conocido como sincronico
    // porque se detiene a leer dotos los bytes 
    //si tarda mucho tiempo de cpu entonces  convertimos el codigo a asincronica
    return bytes
}
console.log(leerDatos())
console.log("-----------")


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

