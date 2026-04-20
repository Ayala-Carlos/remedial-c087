/*
    Campos:
        packageId:
        routeId:
        driverId:
        vehicleId:
        departureDate:
        deliveryDate:
        status:
*/

import mongoose, { Schema, model } from "mongoose"

const shipmentSchema = new Schema({
    packageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Packages"
    },
    routeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Routes"
    },
    driverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Drivers"
    },
    vehicleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicles"
    },
    departureDate: {
        type: Date
    },
    deliveryDate: {
        type: Date
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

export default model("Shipments", shipmentSchema)