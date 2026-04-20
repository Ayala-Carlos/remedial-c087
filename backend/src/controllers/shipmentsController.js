//Creo un array de funciones
const shipmentController = {};

//Importo el model que voy a utilizar
import shipmentModel from "../models/shipmentsModel.js";

//SELECT
shipmentController.getShipments = async (req , res) =>{
    const shipments = await shipmentModel.find()
    res.json(shipments)
};

//INSERT 
shipmentController.insertShipment = async (req, res) =>{
    //#1- Solicitar los datos
    const {packageId, routeId, driverId, vehicleId, departureDate, deliveryDate, status} = req.body
    //#2- Lleno mi modelo con esos datos que acabo de pedir
    const newShipment = new shipmentModel({packageId, routeId, driverId, vehicleId, departureDate, deliveryDate, status})
    //#3- Guardo todo en la base de datos
    await newShipment.save()

    res.json({message: "Shipment saved"})
};

//ACTUALIZAR 
shipmentController.updateShipment = async (req, res) => {
    const {packageId, routeId, driverId, vehicleId, departureDate, deliveryDate, status} = req.body

    //actualizo
    await shipmentModel.findByIdAndUpdate(
        req.params.id,{
            packageId, routeId, driverId, vehicleId, departureDate, deliveryDate, status}, {new: true}
    );

    res.json({message: "Shipment updated"})
}

//Eliminar
shipmentController.deleteShipment = async (req, res) =>{
    await shipmentModel.findByIdAndDelete(req.params.id)
    res.json({message: "Shipment deleted"})
}

export default shipmentController;