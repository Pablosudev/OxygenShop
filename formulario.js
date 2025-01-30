const inputName = document.getElementById("name")
const inputEmail = document.getElementById("email")
const button = document.getElementById("buttonSend")



button.addEventListener('click', (event) => {
    
    if (!inputName || !inputEmail){
        alert('Por favor, complete todos los campos.')
        return
    }

    const formulary = {
        inputName: name,
        inputEmail: email
    };
    checkInputEmail(email)
    if(checkInputEmail(email) === false){
        alert ("Rellenar email")
        inputEmail.style.border ="2px solide red"
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formulary)
    })
    .then(respose => {
        if (!Response.ok){
            throw new Error('Error en la red');
        }
        return Response.json();
    })
    .then (data => {
        console.log('ÉXITO:', data);
        alert('Datos enviados correctamente');
    })
    .catch((error) => {
        console.error('Error:',error);
        alert('Hubo un problema al enviar los datos');
    });

});

function checkInputEmail(correo) {
    const validacion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validacion.test(correo);
    
}
checkInputEmail(email)