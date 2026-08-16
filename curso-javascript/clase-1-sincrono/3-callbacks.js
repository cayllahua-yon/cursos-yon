function procesar() {// esto es sincronico
    const datos = API.leerDatos();
    const tasasInteres = BaseDatos.leerDatos();
    const deudores = Deudores.calcularDeuda(datos, tasasInteres);
    return PDF.generar(deudores);
}

// AHora con Callback

function procesar(callback) {// esto es sincronico
    API.leerDatos(datos =>{
        BaseDatos.leerDatos(tasasInteres => {
            Deudores.calcularDeuda(datos, tasasInteres, pdf => {
                callback(pdf);
            });
    
        });
    
    });
    
}