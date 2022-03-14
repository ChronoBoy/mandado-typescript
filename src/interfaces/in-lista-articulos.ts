import { enDisponibilidad } from "../enums/disponibilidad"

export interface precioArticulo {
    idSucursal: number
    precio:number
    oferta: number
    disponibilidad: enDisponibilidad
}


export interface inListaArticulos{

    idArticulo: number
    nombreArticulo: string
    infoPrecio: precioArticulo[]

}