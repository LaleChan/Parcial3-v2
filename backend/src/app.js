import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Importar rutas
import materiaRoutes from "./routes/materias.route.js";
import usuarioRoutes from "./routes/usuarios.route.js";
import salonRoutes from "./routes/salones.route.js";
import profesorRoutes from "./routes/profesores.route.js";
import horarioRoutes from "./routes/horarios_salones.route.js";
import registroRoutes from "./routes/registros.route.js";
import permisoRoutes from "./routes/permisos.route.js";

// Inicializar app
const app = express();

// Para usar __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Puerto
app.set("port", process.env.PORT || 5000);

// Middleware
app.use(cors());
app.use(express.json());

// Rutas API
app.use("/api/materias", materiaRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/salones", salonRoutes);
app.use("/api/profesores", profesorRoutes);
app.use("/api/horarios", horarioRoutes);
app.use("/api/registros", registroRoutes);
app.use("/api/permisos", permisoRoutes);

// Servir frontend desde React build
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Para cualquier ruta no manejada, enviar index.html del frontend
app.use((req, res, next) => {
    if (req.method === "GET" && !req.path.startsWith("/api")) {
        res.sendFile(path.join(__dirname, "../frontend/frontend/build/index.html"));
    } else {
      next();
    }
  });
export default app;
