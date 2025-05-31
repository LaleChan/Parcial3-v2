import {Router} from "express";
import { methodHTTP as horariosController } from "../controllers/horarios_salones.controller.js";

/* creamos el enrutador */
const router = Router();

/* configuramos respuesta desde server metodo http get */
router.get("/", horariosController.getMaterias )
router.post("/", horariosController.postMaterias )
router.get("/:id", horariosController.getMateria )
router.put("/:id", horariosController.updateMateria )
router.delete("/:id", horariosController.deleteMateria )

/* hacemos disponible al router en toda la app */
export default router;