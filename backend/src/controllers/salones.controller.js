import getConnection from "./../db/database.js"

const getMaterias = async (req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT salon_id, codigo_identificacion, nombre, capacidad, descripcion, activo FROM salones")
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
        const result = await connection.query("SELECT salon_id, codigo_identificacion, nombre, capacidad, descripcion, activo FROM salones WHERE salon_id = ?", id)
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}

const postMaterias = async (req, res) => {
    try {
        const {codigo_identificacion, nombre, capacidad, descripcion, activo} = req.body;

        const materia = {codigo_identificacion, nombre, capacidad, descripcion, activo}
        
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO salones SET ?",materia )

        res.json(result)
    } catch (error) {
        console.error("ERROR 500");
    }
}

const updateMateria = async (req, res) => {
    try {
        const {id} = req.params
        const {codigo_identificacion, nombre, capacidad, descripcion, activo} = req.body;

        const materia = {codigo_identificacion, nombre, capacidad, descripcion, activo}
        
        const connection = await getConnection();

        const result = await connection.query("UPDATE salones SET ? WHERE salon_id = ?",[materia, id])

        res.json(result)
    } catch (error) {
        console.error("ERROR 500");
    }
}

const deleteMateria = async (req, res)=>{
    try {
        console.log("id de Salones", req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM salones WHERE salon_id = ?", id)
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