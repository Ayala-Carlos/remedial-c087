import express from "express";
import routeController from "../controllers/routesController.js"

const router = express.Router();

router.route("/")
    .get(routeController.getRoutes)
    .post(routeController.insertRoute);

router.route("/:id")
    .put(routeController.updateRoute)
    .delete(routeController.deleteRoute)

export default router;