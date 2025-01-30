const popUp = document.getElementById("popUp")
const buttonClose = document.getElementById("buttonClose")
const buttonEmail = document.getElementById("buttonEmail")
const input = document.getElementById("inputPopUp")
//Preparamos la función que nos abrirá el popUp a los 5s.
setTimeout(() => {
    popUp.showModal();
},300);
//Damos funcionalidad a nuestro botón.
buttonClose.addEventListener("click", () => {
    popUp.close();
})
//Guardamos los datos del email en nuestra API al hacer click en el botón de enviar.
buttonEmail.addEventListener("click", () => {
  popUp.close();
    function checkInputEmail(event) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        return regex.test(input);
    }

    if(!regex.test(input)){
        event.preventDefault();
        alert("Introduce un correo valido")
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
    })
    .then(response => {
        if (!response.ok) {
          throw new Error('Error: ' + response.status);
        }
        return response.json(); // Parseamos la respuesta como JSON
      })
      .then(responseData => {
        console.log('Datos recibidos:', responseData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    
      

    
})
   