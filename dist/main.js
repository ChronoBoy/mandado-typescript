"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sucursales_1 = require("./clases/sucursales");
const lista_articulos_1 = require("./clases/lista-articulos");
const disponibilidad_1 = require("./enums/disponibilidad");
const sucursales = new sucursales_1.Sucursales();
const articulos = new lista_articulos_1.ListaArticulos();
console.log(sucursales.insertSucursal(1, 'smart', 'Avenida lopez mateos'));
console.log(sucursales.insertSucursal(2, 'soriana', 'Avenida Gomez morin, plaza sendero'));
console.log(sucursales.insertSucursal(3, 'wallmart', 'Ejercito nacional'));
// console.log(sucursales.getSucursal(3))
// console.log(sucursales.getSucursal(1))
console.log(sucursales.getSucursal());
console.log(articulos.insertArticulo(1, 'papas sabritas', [{ idSucursal: 1, precio: 20, oferta: 0, disponibilidad: disponibilidad_1.enDisponibilidad.si }]));
