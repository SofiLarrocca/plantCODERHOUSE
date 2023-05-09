// styles
import './checkOut.css'

// react
import React, { useState, useContext } from 'react'
import { CartContext } from "../Context/CartContext"

// firebase
import firebase from 'firebase'
import 'firebase/firestore'
import {getFirestore} from '../../firebase/config'


// sweetAlert
import Swal from 'sweetalert2'


const Checkout = () => {

  // sweetAlert
  const Swal = require('sweetalert2')

  const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)
  
  const [mensaje, setMensaje] = useState (null)

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [email, setEmail] = useState('')
  const [emailRepeat, setEmailRepeat] = useState('')
  const [telefono, setTelefono] = useState('')

  
  const handleSubmit = (e) => { 
    e.preventDefault()

    if ([nombre, apellido, email, telefono].includes('')){
      setMensaje('Todos los campos son obligatorios')

      setTimeout(() => {
          setMensaje('')
      }, 3000);
  } else if (email !== emailRepeat) { 
    setMensaje('Los correos no coinciden')

      setTimeout(() => {
          setMensaje('')
      }, 3000);
  } 
  else {
    const nuevaOrden = {
      buyer: { 
        nombre,
        apellido,
        email,
        telefono,
        nro_orden: Math.floor((Math.random()*1000)+100),
      },
      item: carrito,
      precioTotal: precioTotal(),
      fecha: new Date().toLocaleDateString('es-ES', {year:'numeric', month:'long', day:'numeric'})
    }

    
     
    // enviar datos a firebase
    const db = getFirestore()
    const ordenes = db.collection("ordenes")
    ordenes.add(nuevaOrden)
    
    // actualizar cantidad en la base de datos
    carrito.forEach((item => { 
    const docRef = db.collection('productos').doc(item.id)
        
    docRef.get()
      .then((doc)=> { 
        docRef.update({
          stock: doc.data().stock -item.counter
          })
          
    // Libreria sweetAlert
    Swal.fire({
      title: `Gracias por tu compra
      Orden N°: ${nuevaOrden.buyer.nro_orden}`,
      icon: 'success',})
    })
  }))
}
}


  return (
    <div className='checkout_container'>   
        <p>Completá el siguiente formulario para finalizar la compra</p>
        <form
          onSubmit={handleSubmit}>
            <h4 className='mensaje'>{mensaje}</h4>
            <label>
               <p>Nombre</p>
            </label>
            <input 
              type='text'
              value={nombre}
              onChange={ e => setNombre(e.target.value)}/>

            <label>
               <p>Apellido</p>
            </label>
            <input 
              type='text'
              value={apellido}
              onChange={(e)=>setApellido(e.target.value)}/>

            <label>
              <p>Email</p>
            </label>
            <input
              type='email' 
              value={emailRepeat}
              onChange={(e)=>setEmailRepeat(e.target.value)}/>

            <label>
              <p>Repetí tu email</p>
            </label>
            <input
              type='email' 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}/>
              {email !== emailRepeat && <p className='mensaje_email'>*Los correos no coinciden</p>}

            <label>
              <p>Telefono</p>
            </label>
            <input 
              type='number'
              value={telefono}
              onChange={(e)=>setTelefono(e.target.value)}/>

            <p>Tu compra:</p>
           {carrito.map((item )=> (
                <tr className="detalleCompra">
                <td><img src={item.img} alt={item.nombre} width='80px'/></td>
                <td>{item.counter}</td>
                <td>{item.nombre}</td>
                <td>$ {item.precio}</td>
                <td>$ {item.counter * item.precio}</td>
            </tr>
 
           ))}

          <button
            className='btn_formulario'
            type='submit'> Enviar formulario
          </button>

    </form>
    </div>
  )
}

export default Checkout