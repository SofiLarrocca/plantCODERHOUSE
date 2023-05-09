Plant es un ecommerce dedicado a la venta de plantas y accesorios de jardinería. 

Su página es responsive, pudiendose visualizar en diferentes pantallas. 

Su página cuenta con una página inicial "Home". De ella podrás navegar hacia la lista completa de productos disponibles o visualizar los productos filtrados por la categoría seleccionada: Exterior, Interior y Accesorios. 

La lista de productos muestra Nombre, imagen del producto, su categoría y su precio, además un boton "Ver más" que permite navegar hacia el detalle del producto. 

En la card del detalle mostrará además del detalle de la card, el stock disponible del producto seleccionado, un boton para seleccionar la cantidad y un boton para agregar al carrito. El botón "+" dejará de funcionar si se selecciona el total del stock, así mismo si queres agregar más cantidad del stock disponible se mostrará un cartel "No hay stock suficiente".

Al hacer click en el boton "Agregar el carrito", la página mostrará una notificación "Se agregó producto al carrito". 

Los productos agregados sumarán en el widget "Carrito", pudiendo acceder al detelle de la compra haciendo click en el icono. 

El detalle del carrito se mostrará en el componente "CartView", visualizando imagen, cantidad, precio unitario y total. Además encontrarás un icono para poder borarr el producto del carrito. 

En el componente CartView podrás vaciar el carrito desde el botón "Vaciar carrito" o finalizar la compra desde el boton "Finalizar Compra".

Una vez cliqueado el boton "Finalizar Compra" la página te llevará a completar forumario con datos del comprador. El formulario cuenta con la validación de que todos los campos sean completados y además comprobando que los emails agregados sean coincidentes. En caso de existir error en la validación, mostrará el mensaje: "Todos los campos son obligatarios" o "Los correos no coinciden". 

Pasada la validación del formulario, se generará una orden nueva, mostrando en pantalla notificación "Gracias por su compra" y mostrará el N° de Orden. (este es un número aleatorio); agregando la orden con sus datos a la base de datos "Ordenes" de Firebase. 




