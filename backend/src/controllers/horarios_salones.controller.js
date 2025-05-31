import getConnection from "./../db/database.js"

const getMaterias = async (req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT horario_id, salon_id, dia_semana, hora_inicio, hora_fin, profesor_responsable, requiere_profesor FROM horarios_salones")
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
        const result = await connection.query("SELECT horario_id, salon_id, dia_semana, hora_inicio, hora_fin, profesor_responsable, requiere_profesor FROM horarios_salones WHERE horario_id = ?", id)
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}

const postMaterias = async (req, res) => {
    try {
        const {salon_id, dia_semana, hora_inicio, hora_fin, profesor_responsable, requiere_profesor} = req.body;

        const materia = {salon_id, dia_semana, hora_inicio, hora_fin, profesor_responsable, requiere_profesor}
        
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO horarios_salones SET ?",materia )

        res.json(result)
    } catch (error) {
        console.error("ERROR 500");
    }
}

const updateMateria = async (req, res) => {
    try {
        const {id} = req.params
        const {salon_id, dia_semana, hora_inicio, hora_fin, profesor_responsable, requiere_profesor} = req.body;

        const materia = {salon_id, dia_semana, hora_inicio, hora_fin, profesor_responsable, requiere_profesor}
        
        const connection = await getConnection();

        const result = await connection.query("UPDATE horarios_salones SET ? WHERE horario_id = ?",[materia, id])

        res.json(result)
    } catch (error) {
        console.error("ERROR 500");
    }
}

const deleteMateria = async (req, res)=>{
    try {
        console.log("id de horario", req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM horarios_salones WHERE horario_id = ?", id)
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