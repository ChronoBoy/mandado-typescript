import {Sucursales} from './clases/sucursales'
import {ListaArticulos} from './clases/lista-articulos'
import { enDisponibilidad } from './enums/disponibilidad'


const sucursales = new Sucursales()
const articulos = new ListaArticulos()
console.log(sucursales.insertSucursal(1,'smart','Avenida lopez mateos'))
console.log(sucursales.insertSucursal(2,'soriana','Avenida Gomez morin, plaza sendero'))
console.log(sucursales.insertSucursal(3,'wallmart','Ejercito nacional'))
// console.log(sucursales.getSucursal(3))
// console.log(sucursales.getSucursal(1)) 
console.log(sucursales.getSucursal())
console.log(articulos.insertArticulo(1,'papas sabritas',[{ idSucursal: 1, precio: 20,oferta: 0,disponibilidad:enDisponibilidad.si }]))







