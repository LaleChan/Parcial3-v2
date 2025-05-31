const url = "http://localhost:5000/api/usuarios";

export const obtainUsuarios = async () => {
  try {
    const resultado = await fetch(url);
    const usuarios = await resultado.json();
    return usuarios;
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return [];
  }
};
