//Creo un array de funciones
const routeController = {};

//Importo el model que voy a utilizar
import routeModel from "../models/routesModel.js";

//SELECT
routeController.getRoutes = async (req , res) =>{
    const routes = await routeModel.find()
    res.json(routes)
};

//INSERT 
routeController.insertRoute = async (req, res) =>{
    //#1- Solicitar los datos
    const {origin, destination, distance, estimatedTime} = req.body
    //#2- Lleno mi modelo con esos datos que acabo de pedir
    const newRoute = new routeModel({origin, destination, distance, estimatedTime})
    //#3- Guardo todo en la base de datos
    await newRoute.save()

    res.json({message: "Route saved"})
};

//ACTUALIZAR 
routeController.updateRoute = async (req, res) => {
    const {origin, destination, distance, estimatedTime} = req.body

    //actualizo
    await routeModel.findByIdAndUpdate(
        req.params.id,{
            origin, destination, distance, estimatedTime}, {new: true}
    );

    res.json({message: "Route updated"})
}

//Eliminar
routeController.deleteRoute = async (req, res) =>{
    await routeModel.findByIdAndDelete(req.params.id)
    res.json({message: "Route deleted"})
}

export default routeController;