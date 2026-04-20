//Creo un array de funciones
const driverController = {};

//Importo el model que voy a utilizar
import driverModel from "../models/driversModel.js";

//SELECT
driverController.getDrivers = async (req , res) =>{
    const drivers = await driverModel.find()
    res.json(drivers)
};

//INSERT 
driverController.insertDriver = async (req, res) =>{
    //#1- Solicitar los datos
    const {name, lastName, licenseNumber, phone, email, password, isActive, isVerified, loginAttemps, timeOut} = req.body
    //#2- Lleno mi modelo con esos datos que acabo de pedir
    const newDriver = new driverModel({name, lastName, licenseNumber, phone, email, password, isActive, isVerified, loginAttemps, timeOut})
    //#3- Guardo todo en la base de datos
    await newDriver.save()

    res.json({message: "Driver saved"})
};

//ACTUALIZAR 
driverController.updateDriver = async (req, res) => {
    const {name, lastName, licenseNumber, phone, email, password, isActive, isVerified, loginAttemps, timeOut} = req.body

    //actualizo
    await driverModel.findByIdAndUpdate(
        req.params.id,{
            name, lastName, licenseNumber, phone, email, password, isActive, isVerified, loginAttemps, timeOut}, {new: true}
    );

    res.json({message: "Driver updated"})
}

//Eliminar
driverController.deleteDriver = async (req, res) =>{
    await driverModel.findByIdAndDelete(req.params.id)
    res.json({message: "Driver deleted"})
}

export default driverController;