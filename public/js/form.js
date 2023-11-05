document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('form');
  
    formulario.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Obtén los datos del formulario
      const formData = new FormData(formulario);
  
      // Realiza una solicitud POST al servidor
      fetch('/encuestas', {
        method: 'POST',
        body: formData,
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Error al enviar el formulario');
          }
        })
        .then(data => {
          // Maneja la respuesta del servidor
          console.log('Formulario enviado exitosamente', data);
        })
        .catch(error => {
          console.error('Error al enviar el formulario', error);
        });
    });
  });
  