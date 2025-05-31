import {Router} from "express";
import { methodHTTP as profesoresController } from "../controllers/profesores.controller.js";

/* creamos el enrutador */
const router = Router();

/* configuramos respuesta desde server metodo http get */
router.get("/", profesoresController.getMaterias )
router.post("/", profesoresController.postMaterias )
router.get("/:id", profesoresController.getMateria )
router.put("/:id", profesoresController.updateMateria )
router.delete("/:id", profesoresController.deleteMateria )

/* hacemos disponible al router en toda la app */
export default router;