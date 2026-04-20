/*
    Campos:
        origin:
        destination:
        distance:
        estimatedTime:
*/

import mongoose, { Schema, model } from "mongoose"

const routeSchema = new Schema({
    origin: {
        type: String
    },
    destination: {
        type: String
    },
    distance: {
        type: Number
    },
    estimatedTime: {
        type: String
    }
}, {
    // timestamps: true, agrega automáticamente campos de fecha de creación y actualización a los documentos de la colección, lo que facilita el seguimiento de cuándo se crearon o modificaron los registros.
    timestamps: true,
    // strict: false, permite agregar campos adicionales a los documentos de la colección, lo que facilita la flexibilidad en la estructura de los datos.
    strict: false
})

export default model("Routes", routeSchema)