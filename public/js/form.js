document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Obtén los valores de los campos del formulario
    const edad = document.querySelector("#edad").value;
    const genero = document.querySelector("#genero").value;
    const localidades = document.querySelector("#localidades").value;
    const estudios = document.querySelector("#estudios").value;
    const artista = document.querySelector("#artista").value;
    const generoMusical = document.querySelector("#generoMusical").value;
    const mejoras = document.querySelector("#mejoras").value;
    const horarios = document.querySelector("#horarios").value;
    const frecuencia = document.querySelector("#frecuencia").value;
    const sugerencias = document.querySelector("#sugerencias").value;
    const preferencia = document.querySelector("#preferencia").value;

    // Construye un objeto con los datos del formulario
    const formData = {
      edad,
      genero,
      localidades,
      estudios,
      artista,
      generoMusical,
      mejoras,
      preferencia,
      horarios,
      frecuencia,
      sugerencias,
    };

    // Realiza una solicitud POST al servidor para almacenar los datos
    fetch("http://localhost:5000/encuestas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: 'success',  // Puedes cambiar 'success' por 'error', 'warning', 'info', etc. para diferentes estilos de notificación
          title: 'Datos enviados con éxito',
          text: '¡Tus datos han sido enviados correctamente!',
        }).then(() => {
          form.reset(); // Limpia el formulario
        })
      .catch((error) => {
        console.error("Error al enviar datos:", error);
        alert("Error al enviar datos. Por favor, inténtalo de nuevo.");
      });
  });
})});
