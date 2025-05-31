import getConnection from "./../db/database.js"

const getUsuarios = async (req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT usuario_id, dni, nombre, direccion, telefono, correo, codigo_qr, fecha_registro, activo FROM usuarios")
        res.json(result[0]);
    } catch (error) {
        console.error("ERROR 500");
    }
}

const getUsuario = async (req, res)=>{
    try {
        console.log(req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query("SELECT usuario_id, dni, nombre, direccion, telefono, correo, codigo_qr, fecha_registro, activo FROM usuarios WHERE usuario_id = ?", id)
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}

const postUsuarios = async (req, res) => {
    try {
        const {dni, nombre, direccion, telefono, correo, codigo_qr, fecha_registro, activo} = req.body;

        const usuario = {dni, nombre, direccion, telefono, correo, codigo_qr, fecha_registro, activo}
        
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO usuarios SET ?",usuario )

        res.json(result)
    } catch (error) {
        console.error("ERROR 500");
    }
}

const updateUsuario = async (req, res) => {
    try {
        const {id} = req.params
        const {dni, nombre, direccion, telefono, correo, codigo_qr, fecha_registro, activo} = req.body;

        const usuario = {dni, nombre, direccion, telefono, correo, codigo_qr, fecha_registro, activon}
        
        const connection = await getConnection();

        const result = await connection.query("UPDATE usuarios SET ? WHERE usuario_id = ?",[usuario, id])

        res.json(result)
    } catch (error) {
        console.error("ERROR 500");
    }
}

const deleteUsuario = async (req, res)=>{
    try {
        console.log("id de Usuario", req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM usuarios WHERE usuario_id = ?", id)
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}

export const methodHTTP = {
    getUsuarios,
    getUsuario,
    postUsuarios,
    updateUsuario,
    deleteUsuario
}