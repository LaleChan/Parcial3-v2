import {Router} from "express";
import { methodHTTP as materiasController } from "../controllers/materias.controller.js";

/* creamos el enrutador */
const router = Router();

/* configuramos respuesta desde server metodo http get */
router.get("/", materiasController.getMaterias )
router.post("/", materiasController.postMaterias )
router.get("/:id", materiasController.getMateria )
router.put("/:id", materiasController.updateMateria )
router.delete("/:id", materiasController.deleteMateria )

/* hacemos disponible al router en toda la app */
export default router;