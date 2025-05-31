import {Router} from "express";
import { methodHTTP as permisosController } from "../controllers/permisos.controller.js";

/* creamos el enrutador */
const router = Router();

/* configuramos respuesta desde server metodo http get */
router.get("/", permisosController.getMaterias )
router.post("/", permisosController.postMaterias )
router.get("/:id", permisosController.getMateria )
router.put("/:id", permisosController.updateMateria )
router.delete("/:id", permisosController.deleteMateria )

/* hacemos disponible al router en toda la app */
export default router;