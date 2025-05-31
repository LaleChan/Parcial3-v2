const url = "http://localhost:5000/api/materias"

export const obtainCategorias = async ()=>{
    try {
        const resultado = await fetch(url)
        const categorias = await resultado.json();
        return categorias
    } catch (error) {
        console.log("ERROR");
    }
}