import { inListaArticulos,precioArticulo } from "../interfaces/in-lista-articulos";
import { enDisponibilidad } from "../enums/disponibilidad";

export class ListaArticulos{

    
    listaArticulos: inListaArticulos[]

    constructor(){

       this.listaArticulos = []

    }

    getArticulo(): object {
        return {}
    }

    insertArticulo(idArticulo: number,nombreArticulo:string,infoPrecio: precioArticulo[]): string {
   
        this.listaArticulos.push({
            idArticulo: idArticulo,
            nombreArticulo: nombreArticulo,
            infoPrecio: infoPrecio


        })
        console.log(this.listaArticulos)
        
        return `El articulo ${nombreArticulo} se agregó correctamente`
    }

}