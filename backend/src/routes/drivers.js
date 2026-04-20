import express from "express";
import driverController from "../controllers/driversController.js"

const router = express.Router();

router.route("/")
    .get(driverController.getDrivers)
    .post(driverController.insertDriver);

router.route("/:id")
    .put(driverController.updateDriver)
    .delete(driverController.deleteDriver)

export default router;