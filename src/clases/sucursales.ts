import { inSucursales } from "../interfaces/in-sucursales"

export class Sucursales {

 
    _listaSucursales: inSucursales[]
    constructor(){
    this._listaSucursales = []
    }

    insertSucursal(idSucursal:number,nombreSucursal: string,dirSucursal: string): string {
        this._listaSucursales.push({
            idSucursal: idSucursal,
            nombreSucursal: nombreSucursal,
            dirSucursal: dirSucursal,

        })

        const nombreSucur = this._listaSucursales[this._listaSucursales.length -1]
        return `La sucursal ${nombreSucur.nombreSucursal} se ha insertado con exito`
    }

    getSucursal(idSucursal:number = 0): object[] {
        let filtro
        idSucursal === 0 ? filtro = this._listaSucursales: filtro = this._listaSucursales.find(s => s.idSucursal === idSucursal)
        return filtro
    }

   



}