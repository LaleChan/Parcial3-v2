import getConnection from "./../db/database.js"

const getMaterias = async (req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT materia_id, nombre, descripcion FROM materias")
        res.json(result[0]);
    } catch (error) {
        console.error("ERROR 500");
    }
}

const getMateria = async (req, res)=>{
    try {
        console.log(req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query("SELECT materia_id, nombre, descripcion FROM materias WHERE materia_id = ?", id)
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}

const postMaterias = async (req, res) => {
    try {
        const {nombre, descripcion} = req.body;

        const materia = {nombre, descripcion}
        
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO materias SET ?",materia )

        res.json(result)
    } catch (error) {
        console.error("ERROR 500");
    }
}

const updateMateria = async (req, res) => {
    try {
        const {id} = req.params
        const {nombre, descripcion} = req.body;

        const materia = {nombre, descripcion}
        
        const connection = await getConnection();

        const result = await connection.query("UPDATE materias SET ? WHERE materia_id = ?",[materia, id])

        res.json(result)
    } catch (error) {
        console.error("ERROR 500");
    }
}

const deleteMateria = async (req, res)=>{
    try {
        console.log("id de Materias", req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM materias WHERE materia_id = ?", id)
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