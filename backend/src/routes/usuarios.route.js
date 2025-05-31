import {Router} from "express";
import { methodHTTP as usuariosController } from "../controllers/usuarios.controller.js";

/* creamos el enrutador */
const router = Router();

/* configuramos respuesta desde server metodo http get */
router.get("/", usuariosController.getUsuarios )
router.post("/", usuariosController.postUsuarios )
router.get("/:id", usuariosController.getUsuario )
router.put("/:id", usuariosController.updateUsuario )
router.delete("/:id", usuariosController.deleteUsuario )

/* hacemos disponible al router en toda la app */
export default router;