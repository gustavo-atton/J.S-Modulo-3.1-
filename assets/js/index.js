let preciobase = 400000;
let cantidad = 0 ;

let precioSpan = document.querySelector('.precio-inicial');
precioSpan.innerHTML = preciobase;

const btnmas = document.querySelector('.btnmas');
const btnmenos = document.querySelector('.btnmenos');

let cantidadSpan = document.querySelector('.cantidad');
let total = document.querySelector('.valor-total');



function restar() {
  if (cantidad > 0) {
    cantidad--;
    cantidadSpan.innerHTML = cantidad;
    total.innerHTML = cantidad * preciobase;
  }
}

function sumar() {
  cantidad++;
  cantidadSpan.innerHTML = cantidad;
  total.innerHTML = cantidad * preciobase;
} 