"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaArticulos = void 0;
class ListaArticulos {
    constructor() {
        this.listaArticulos = [];
    }
    getArticulo() {
        return {};
    }
    insertArticulo(idArticulo, nombreArticulo, infoPrecio) {
        this.listaArticulos.push({
            idArticulo: idArticulo,
            nombreArticulo: nombreArticulo,
            infoPrecio: infoPrecio
        });
        console.log(this.listaArticulos);
        return `El articulo ${nombreArticulo} se agregó correctamente`;
    }
}
exports.ListaArticulos = ListaArticulos;
