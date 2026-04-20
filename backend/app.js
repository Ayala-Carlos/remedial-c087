import express from "express";
import cookieParser from "cookie-parser";

// Importar las rutas de los módulos que creamos
import clientsRoutes from "./src/routes/clients.js";
import driversRoutes from "./src/routes/drivers.js";
import packagesRoutes from "./src/routes/packages.js";
import vehiclesRoutes from "./src/routes/vehicles.js";
import routesRoutes from "./src/routes/routes.js"; 
import shipmentsRoutes from "./src/routes/shipments.js";

// Ejecutar express
const app = express();

// Middlewares
app.use(cookieParser());
app.use(express.json());

// Creamos los endpoints principales
app.use("/api/clients", clientsRoutes);
app.use("/api/drivers", driversRoutes);
app.use("/api/packages", packagesRoutes);
app.use("/api/vehicles", vehiclesRoutes);
app.use("/api/routes", routesRoutes);
app.use("/api/shipments", shipmentsRoutes);

export default app;