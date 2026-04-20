//Creo un array de funciones
const packageController = {};

//Importo el model que voy a utilizar
import packageModel from "../models/packagesModel.js";

//SELECT
packageController.getPackages = async (req , res) =>{
    const packages = await packageModel.find()
    res.json(packages)
};

//INSERT 
packageController.insertPackage = async (req, res) =>{
    //#1- Solicitar los datos
    const {trackingNumber, weight, dimensions, description, senderId, receiverId, status} = req.body
    //#2- Lleno mi modelo con esos datos que acabo de pedir
    const newPackage = new packageModel({trackingNumber, weight, dimensions, description, senderId, receiverId, status})
    //#3- Guardo todo en la base de datos
    await newPackage.save()

    res.json({message: "Package saved"})
};

//ACTUALIZAR 
packageController.updatePackage = async (req, res) => {
    const {trackingNumber, weight, dimensions, description, senderId, receiverId, status} = req.body

    //actualizo
    await packageModel.findByIdAndUpdate(
        req.params.id,{
            trackingNumber, weight, dimensions, description, senderId, receiverId, status}, {new: true}
    );

    res.json({message: "Package updated"})
}

//Eliminar
packageController.deletePackage = async (req, res) =>{
    await packageModel.findByIdAndDelete(req.params.id)
    res.json({message: "Package deleted"})
}

export default packageController;