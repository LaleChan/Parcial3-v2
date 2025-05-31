import {Router} from "express";
import { methodHTTP as registrosController } from "../controllers/registros.controller.js";

/* creamos el enrutador */
const router = Router();

/* configuramos respuesta desde server metodo http get */
router.get("/",  registrosController.getMaterias)
router.post("/", registrosController.postMaterias )
router.get("/:id", registrosController.getMateria )
router.put("/:id", registrosController.updateMateria )
router.delete("/:id", registrosController.deleteMateria )

/* hacemos disponible al router en toda la app */
export default router;