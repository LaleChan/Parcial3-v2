/* Importamos a framework express */
import express from "express";
import cors from "cors"

import materiaRoutes from "./routes/materias.route.js"
import usuarioRoutes from "./routes/usuarios.route.js"
import salonRoutes from "./routes/salones.route.js"
import profesorRoutes from "./routes/profesores.route.js"
import horarioRoutes from "./routes/horarios_salones.route.js"
import registroRoutes from "./routes/registros.route.js"
import permisoRoutes from "./routes/permisos.route.js"

/* Asignamos a app toda funcionalidad para mi server web */
const app = express();

/* Setear un puerto a mi web server */
app.set("port",5000)

app.use(cors());

/* Middleware */
app.use(express.json());

/* routes */
app.use("/api/materias", materiaRoutes)
app.use("/api/usuarios", usuarioRoutes)
app.use("/api/salones", salonRoutes)
app.use("/api/profesores", profesorRoutes)
app.use("/api/horarios", horarioRoutes)
app.use("/api/registros", registroRoutes)
app.use("/api/permisos", permisoRoutes)

/* Hacemos disponible a mi server app para toda la aplicacion */
export default app;