import getConnection from "./../db/database.js"

const getMaterias = async (req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT permiso_id, usuario_id, salon_id, fecha_inicio, fecha_fin, motivo, creado_por FROM permisos_especiales")
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}

const getMateria = async (req, res)=>{
    try {
        console.log(req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query("SELECT permiso_id, usuario_id, salon_id, fecha_inicio, fecha_fin, motivo, creado_por FROM permisos_especiales WHERE permiso_id = ?", id)
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}

const postMaterias = async (req, res) => {
    try {
        const {usuario_id, salon_id, fecha_inicio, fecha_fin, motivo, creado_por} = req.body;

        const materia = {usuario_id, salon_id, fecha_inicio, fecha_fin, motivo, creado_por}
        
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO permisos_especiales SET ?",materia )

        res.json(result)
    } catch (error) {
        console.error("ERROR 500");
    }
}

const updateMateria = async (req, res) => {
    try {
        const {id} = req.params
        const {usuario_id, salon_id, fecha_inicio, fecha_fin, motivo, creado_por} = req.body;

        const materia = {usuario_id, salon_id, fecha_inicio, fecha_fin, motivo, creado_por}
        
        const connection = await getConnection();

        const result = await connection.query("UPDATE permisos_especiales SET ? WHERE permiso_id = ?",[materia, id])

        res.json(result)
    } catch (error) {
        console.error("ERROR 500");
    }
}

const deleteMateria = async (req, res)=>{
    try {
        console.log("id de permisos", req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM permisos_especiales WHERE permiso_id = ?", id)
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}

export const methodHTTP = {
    getMaterias,
    getMateria,
    postMaterias,
    updateMateria,
    deleteMateria
}