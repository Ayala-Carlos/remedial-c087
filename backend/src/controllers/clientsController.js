//Creo un array de funciones
const clientController = {};

//Importo el model que voy a utilizar
import clientModel from "../models/clientsModel.js";

//SELECT
clientController.getClients = async (req , res) =>{
    const clients = await clientModel.find()
    res.json(clients)
};

//INSERT 
clientController.insertClient = async (req, res) =>{
    //#1- Solicitar los datos
    const {name, lastName, email, password, phone, address, isVerified, loginAttemps, timeOut} = req.body
    //#2- Lleno mi modelo con esos datos que acabo de pedir
    const newClient = new clientModel({name, lastName, email, password, phone, address, isVerified, loginAttemps, timeOut})
    //#3- Guardo todo en la base de datos
    await newClient.save()

    res.json({message: "Client saved"})
};

//ACTUALIZAR 
clientController.updateClient = async (req, res) => {
    const {name, lastName, email, password, phone, address, isVerified, loginAttemps, timeOut} = req.body

    //actualizo
    await clientModel.findByIdAndUpdate(
        req.params.id,{
            name, lastName, email, password, phone, address, isVerified, loginAttemps, timeOut}, {new: true}
    );

    res.json({message: "Client updated"})
}

//Eliminar
clientController.deleteClient = async (req, res) =>{
    await clientModel.findByIdAndDelete(req.params.id)
    res.json({message: "Client deleted"})
}

export default clientController;