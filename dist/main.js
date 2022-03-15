"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import exphbs from 'express-handlebars'
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
//initialitations
const app = (0, express_1.default)();
//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('views', './views');
//Middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
//Routes
app.get('/get-sucursales', getSucursales());
//static files
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port: ${app.get('port')}`);
});
// const sucursales = new Sucursales()
// const articulos = new ListaArticulos()
// console.log(sucursales.insertSucursal(1,'smart','Avenida lopez mateos'))
// console.log(sucursales.insertSucursal(2,'soriana','Avenida Gomez morin, plaza sendero'))
// console.log(sucursales.insertSucursal(3,'wallmart','Ejercito nacional'))
// // console.log(sucursales.getSucursal(3))
// // console.log(sucursales.getSucursal(1)) 
// console.log(sucursales.getSucursal())
// console.log(articulos.insertArticulo(1,'papas sabritas',[{ idSucursal: 1, precio: 20,oferta: 0,disponibilidad:enDisponibilidad.si }]))
