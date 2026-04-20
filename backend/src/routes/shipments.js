import express from "express";
import shipmentController from "../controllers/shipmentsController.js"

const router = express.Router();

router.route("/")
    .get(shipmentController.getShipments)
    .post(shipmentController.insertShipment);

router.route("/:id")
    .put(shipmentController.updateShipment)
    .delete(shipmentController.deleteShipment)

export default router;