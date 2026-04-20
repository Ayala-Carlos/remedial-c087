import express from "express";
import packageController from "../controllers/packagesController.js"

const router = express.Router();

router.route("/")
    .get(packageController.getPackages)
    .post(packageController.insertPackage);

router.route("/:id")
    .put(packageController.updatePackage)
    .delete(packageController.deletePackage)

export default router;