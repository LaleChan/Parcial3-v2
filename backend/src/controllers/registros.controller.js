import getConnection from "./../db/database.js"

const getMaterias = async (req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT registro_id, usuario_id, salon_id, profesor_id, fecha_hora_entrada, fecha_hora_salida, acceso_permitido, motivo_rechazo FROM registros_acceso")
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
        const result = await connection.query("SELECT salon_id, profesor_id, fecha_hora_entrada, fecha_hora_salida, acceso_permitido, motivo_rechazo FROM registros_acceso WHERE registro_id = ?", id)
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}

const postMaterias = async (req, res) => {
    try {
        const {salon_id, profesor_id, fecha_hora_entrada, fecha_hora_salida, acceso_permitido, motivo_rechazo} = req.body;

        const materia = {salon_id, profesor_id, fecha_hora_entrada, fecha_hora_salida, acceso_permitido, motivo_rechazo}
        
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO registros_acceso SET ?",materia )

        res.json(result)
    } catch (error) {
        console.error("ERROR 500");
    }
}

const updateMateria = async (req, res) => {
    try {
        const {id} = req.params
        const {salon_id, profesor_id, fecha_hora_entrada, fecha_hora_salida, acceso_permitido, motivo_rechazo} = req.body;

        const materia = {salon_id, profesor_id, fecha_hora_entrada, fecha_hora_salida, acceso_permitido, motivo_rechazo}
        
        const connection = await getConnection();

        const result = await connection.query("UPDATE registros_acceso SET ? WHERE registro_id = ?",[materia, id])

        res.json(result)
    } catch (error) {
        console.error("ERROR 500");
    }
}

const deleteMateria = async (req, res)=>{
    try {
        console.log("id de registro", req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM registros_acceso WHERE registro_id = ?", id)
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