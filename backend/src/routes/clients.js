import express from "express";
import clientController from "../controllers/clientsController.js"

const router = express.Router();

router.route("/")
    .get(clientController.getClients)
    .post(clientController.insertClient);

router.route("/:id")
    .put(clientController.updateClient)
    .delete(clientController.deleteClient)

export default router;