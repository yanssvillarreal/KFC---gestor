const PUBLICAR$$ = document.querySelector('button')

const menuForm$$ = document.querySelector('.menu-form')
const form$$ = document.querySelector('form')

const PRODUCTOS = JSON.parse(localStorage.getItem('products')) || []

let formVisible = false

const crearProducto = () => {
 const nombre$$ = document.querySelector('#nombre')
 const imagen$$ = document.querySelector('#imagen')
 const precio$$ = document.querySelector('#precio')
 const tipo$$ = document.querySelector('#tipo')

 const newProducto = {
  nombre: nombre$$.value,
  imagen: imagen$$.value,
  precio: precio$$.value,
  tipo: tipo$$.value
 }

 PRODUCTOS.push(newProducto)
 localStorage.setItem('products', JSON.stringify(PRODUCTOS))
 pintarProductos(PRODUCTOS)
}

const pintarProductos = (listadoProductos) => {
 const hamburguesas$$ = document.querySelector('.hamburguesas')
 const wraps$$ = document.querySelector('.wraps')
 const acompañantes$$ = document.querySelector('.acompañantes')
 const bebidas$$ = document.querySelector('.bebidas')

 hamburguesas$$.innerHTML = '<h2>Hamburguesas</h2>'
 wraps$$.innerHTML = '<h2>Wraps</h2>'
 acompañantes$$.innerHTML = '<h2>Acompañantes</h2>'
 bebidas$$.innerHTML = '<h2>Bebidas</h2>'

 for (const producto of listadoProductos) {
  let productoHTML = `
         <div class="producto">
             <h3>${producto.nombre}</h3>
     <div>
              <img src="${producto.imagen}"/>
     </div>
             <p>${producto.precio}</p>
         </div>
     `

  if (producto.tipo === 'hamburguesa') {
   hamburguesas$$.innerHTML += productoHTML
  } else if (producto.tipo === 'wrap') {
   wraps$$.innerHTML += productoHTML
  } else if (producto.tipo === 'acompañante') {
   acompañantes$$.innerHTML += productoHTML
  } else {
   bebidas$$.innerHTML += productoHTML
  }
 }
}

const toggleForm = () => {
 if (formVisible) {
  form$$.classList.add('no-visible')
  formVisible = false
 } else {
  form$$.classList.remove('no-visible')
  formVisible = true
 }
}

PUBLICAR$$.addEventListener('click', crearProducto)
menuForm$$.addEventListener('click', toggleForm)
