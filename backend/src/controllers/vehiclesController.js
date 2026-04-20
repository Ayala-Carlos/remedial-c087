//Creo un array de funciones
const vehicleController = {};

//Importo el model que voy a utilizar
import vehicleModel from "../models/vehiclesModel.js";

//SELECT
vehicleController.getVehicles = async (req , res) =>{
    const vehicles = await vehicleModel.find()
    res.json(vehicles)
};

//INSERT 
vehicleController.insertVehicle = async (req, res) =>{
    //#1- Solicitar los datos
    const {plate, model, capacity, status, driverId} = req.body
    //#2- Lleno mi modelo con esos datos que acabo de pedir
    const newVehicle = new vehicleModel({plate, model, capacity, status, driverId})
    //#3- Guardo todo en la base de datos
    await newVehicle.save()

    res.json({message: "Vehicle saved"})
};

//ACTUALIZAR 
vehicleController.updateVehicle = async (req, res) => {
    const {plate, model, capacity, status, driverId} = req.body

    //actualizo
    await vehicleModel.findByIdAndUpdate(
        req.params.id,{
            plate, model, capacity, status, driverId}, {new: true}
    );

    res.json({message: "Vehicle updated"})
}

//Eliminar
vehicleController.deleteVehicle = async (req, res) =>{
    await vehicleModel.findByIdAndDelete(req.params.id)
    res.json({message: "Vehicle deleted"})
}

export default vehicleController;