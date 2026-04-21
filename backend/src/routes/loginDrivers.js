import express from "express";
import loginDriverController from "../controllers/loginDriverController.js";

const router = express.Router();

router.route("/").post(loginDriverController.login);

export default router;