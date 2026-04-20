/*
    Campos:
        plate:
        model:
        capacity:
        status:
        driverId:
*/

import mongoose, { Schema, model } from "mongoose"

const vehicleSchema = new Schema({
    plate: {
        type: String
    },
    model: {
        type: String
    },
    capacity: {
        type: Number
    },
    status: {
        type: String
    },
    driverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Drivers"
    }
}, {
    // timestamps: true, agrega automáticamente campos de fecha de creación y actualización a los documentos de la colección, lo que facilita el seguimiento de cuándo se crearon o modificaron los registros.
    timestamps: true,
    // strict: false, permite agregar campos adicionales a los documentos de la colección, lo que facilita la flexibilidad en la estructura de los datos.
    strict: false
})

export default model("Vehicles", vehicleSchema)