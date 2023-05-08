// productos json
import json from '../productos.json'

export const mostrarProductos = () => { 
    return new Promise ((resolve, reject)=> { 
      setTimeout(() => {
        resolve(json)
        reject('Rechazado')
      }, 0);
    })
  }