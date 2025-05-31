import { obtainUsuarios } from "./../apiConnection/usuarios.api.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const mensaje = document.getElementById("mensaje");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const dniIngresado = document.getElementById("dni").value.trim();
    const usuarios = await obtainUsuarios();

    console.log("Usuarios cargados:", usuarios);
    console.log("DNI ingresado:", dniIngresado);

    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.dni === dniIngresado
    );

    console.log("Resultado:", usuarioEncontrado);

    if (!usuarioEncontrado) {
      mensaje.textContent = "DNI no registrado";
    } else if (!usuarioEncontrado.activo) {
      mensaje.textContent = "Usuario inactivo";
    } else {
      console.log("Redireccionando al index...");
      window.location.href = "panel.html";
    }
  });
});
