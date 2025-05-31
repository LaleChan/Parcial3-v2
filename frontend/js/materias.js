import { obtainCategorias } from "./../apiConnection/materias.api.js";

document.addEventListener("DOMContentLoaded", () => {
  getCategorias();
});

async function getCategorias() {
  const categoriasObtained = await obtainCategorias();
  const container = document.querySelector("tbody");
  container.innerHTML = ""; // Limpiar tabla antes de pintar

  categoriasObtained.forEach((categoria) => {
    const { materia_id, nombre, descripcion } = categoria;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${materia_id}</td>
      <td>${nombre}</td>
      <td>${descripcion}</td>
      <td>
        <button class="btn color2 btn-edit" 
          data-id="${materia_id}" 
          data-nombre="${nombre}" 
          data-descripcion="${descripcion}">
          Edit
        </button>
      </td>
      <td><button class="btn color5 btn-delete" data-id="${materia_id}">Delete</button></td>
    `;
    container.appendChild(row);
  });

  agregarEventosEdicion();
  agregarEventosBorrado();
}

function agregarEventosBorrado() {
  document.querySelectorAll(".btn-delete").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.getAttribute("data-id");

      const confirmar = confirm("¿Estás seguro de que deseas eliminar esta materia?");
      if (!confirmar) return;

      await fetch(`http://localhost:5000/api/materias/${id}`, {
        method: "DELETE",
      });

      getCategorias(); // recargar tabla
    });
  });
}

function agregarEventosEdicion() {
  document.querySelectorAll(".btn-edit").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const nombre = btn.getAttribute("data-nombre");
      const descripcion = btn.getAttribute("data-descripcion");

      // Llenamos el formulario con los datos
      document.getElementById("nombre").value = nombre;
      document.getElementById("descripcion").value = descripcion;

      // Guardamos el ID como atributo del formulario
      document.getElementById("formulario").setAttribute("data-edit-id", id);

      // Mostramos el modal con el id correcto
      const modal = new bootstrap.Modal(document.getElementById("modalMateria"));
      modal.show();
    });
  });
}

// Escuchar envío del formulario
document.getElementById("formulario").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();
  const id = e.target.getAttribute("data-edit-id");

  if (!nombre || !descripcion) {
    alert("Por favor completa todos los campos.");
    return;
  }

  const materia = { nombre, descripcion };

  if (id) {
    // EDITAR
    await fetch(`http://localhost:5000/api/materias/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(materia),
    });

    e.target.removeAttribute("data-edit-id");
  } else {
    // CREAR
    await fetch(`http://localhost:5000/api/materias`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(materia),
    });
  }

  // Refrescar tabla
  await getCategorias();

  // Cerrar modal correctamente
  const modalEl = document.getElementById("modalMateria");
  const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
  modal.hide();

  // Limpiar formulario
  e.target.reset();
});
