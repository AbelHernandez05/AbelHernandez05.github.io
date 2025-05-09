document.getElementById('formulario').addEventListener('submit', function(event) {   //Script del formulario donde almaceno la informacion del usuario, su nombre y su edad y al darle a enviar sale su nombr epor pantalla y si es mayor de edad le dice un mensaje distinto al de si es menor
    event.preventDefault();
  
    const nombre = document.getElementById('nombre').value.trim();
    const edad = parseInt(document.getElementById('edad').value);
    const mensajeDiv = document.getElementById('mensaje');
  
    if (nombre && !isNaN(edad)) {
      let mensaje = `Bienvenido a El Barraco, <strong>${nombre}</strong>.`;
  
      if (edad => 18) {
        mensaje += `<br>Tienes un <strong>descuento del 20%</strong> en el restaurante El Segoviano.`;
      } else{
        mensaje += `<br>Al ser menor de edad, te regalamos 3 días de piscina en la Piscina municipal.`;

      }
  
      mensajeDiv.innerHTML = mensaje;
      mensajeDiv.classList.remove('d-none');
    } else {
      mensajeDiv.innerHTML = "Por favor, completa ambos campos correctamente.";
      mensajeDiv.classList.remove('d-none');
    }
  });
  