/*
    Campos:
        trackingNumber:
        weight:
        dimensions:
        description:
        senderId:
        receiverId:
        status:
*/

import mongoose, { Schema, model } from "mongoose"

const packageSchema = new Schema({
    trackingNumber: {
        type: String
    },
    weight: {
        type: Number
    },
    dimensions: {
        type: String
    },
    description: {
        type: String
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Clients"
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Clients"
    },
    status: {
        type: String
    }
}, {
    // timestamps: true, agrega automáticamente campos de fecha de creación y actualización a los documentos de la colección, lo que facilita el seguimiento de cuándo se crearon o modificaron los registros.
    timestamps: true,
    // strict: false, permite agregar campos adicionales a los documentos de la colección, lo que facilita la flexibilidad en la estructura de los datos.
    strict: false
})

export default model("Packages", packageSchema)