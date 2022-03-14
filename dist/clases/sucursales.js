"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sucursales = void 0;
class Sucursales {
    constructor() {
        this._listaSucursales = [];
    }
    insertSucursal(idSucursal, nombreSucursal, dirSucursal) {
        this._listaSucursales.push({
            idSucursal: idSucursal,
            nombreSucursal: nombreSucursal,
            dirSucursal: dirSucursal,
        });
        const nombreSucur = this._listaSucursales[this._listaSucursales.length - 1];
        return `La sucursal ${nombreSucur.nombreSucursal} se ha insertado con exito`;
    }
    getSucursal(idSucursal = 0) {
        let filtro;
        idSucursal === 0 ? filtro = this._listaSucursales : filtro = this._listaSucursales.find(s => s.idSucursal === idSucursal);
        return filtro;
    }
}
exports.Sucursales = Sucursales;
