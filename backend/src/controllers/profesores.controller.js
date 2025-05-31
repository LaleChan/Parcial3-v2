import getConnection from "./../db/database.js"

const getMaterias = async (req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT profesor_id, dni, nombre, telefono, correo, codigo_qr, materia, fecha_registro, activo, materia_id FROM profesores")
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
        const result = await connection.query("SELECT profesor_id, dni, nombre, telefono, correo, codigo_qr, materia, fecha_registro, activo, materia_id FROM profesores WHERE profesor_id = ?", id)
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}

const postMaterias = async (req, res) => {
    try {
        const {dni, nombre, telefono, correo, codigo_qr, materia, fecha_registro, activo, materia_id} = req.body;

        const materi = {dni, nombre, telefono, correo, codigo_qr, materia, fecha_registro, activo, materia_id}
        
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO profesores SET ?",materi )

        res.json(result)
    } catch (error) {
        console.error("ERROR 500");
    }
}

const updateMateria = async (req, res) => {
    try {
        const {id} = req.params
        const {dni, nombre, telefono, correo, codigo_qr, materia, fecha_registro, activo, materia_id} = req.body;

        const materi = {dni, nombre, telefono, correo, codigo_qr, materia, fecha_registro, activo, materia_id}
        
        const connection = await getConnection();

        const result = await connection.query("UPDATE profesores SET ? WHERE profesor_id = ?",[materi, id])

        res.json(result)
    } catch (error) {
        console.error("ERROR 500");
    }
}

const deleteMateria = async (req, res)=>{
    try {
        console.log("id de profesor", req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM profesores WHERE profesor_id = ?", id)
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