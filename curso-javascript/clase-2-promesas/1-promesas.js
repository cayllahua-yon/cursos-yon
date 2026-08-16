// Ahora que entendemos la analogía entre promesas y McDonald’s, 
// veamos cómo podemos convertir nuestra función en una promesa real en JavaScript.

// En lugar de devolver directamente la hamburguesa y el café,
//  la función pedir ahora devuelve una promesa, que representa 
// el ticket que nos garantiza que recibiremos el pedido más adelante.

function pedir(pedido) {
    //... resto del codigo
    return [
        new Hamburgesa(),
        new Cafe()
    ]    
}

// Pero ahora vamos a comvertirlo a una promesa
function pedir(pedido) {
    // ... resto del código
    return new Promise();
  }

  // Ahora que sabemos que una promesa puede estar en estado pendiente, necesitamos una manera de
  //  resolverla o rechazarla. 
  //  Podemos hacer que una promesa se resuelva con un valor usando 
 // Promise.resolve(valor), o que se rechace con un error usando Promise.reject(error).

 // ¡Correcto! Una promesa comienza en estado `pending` y luego se resuelve (`fulfilled`) o se rechaza (`rejected`).
 