const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const button = document.getElementById("buttonSend");

button.addEventListener("click", (event) => {
  event.preventDefault();

  const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const nameValidation = /^[a-zA-Z\s]+$/;
  

  inputName.style.borderBottom = "1px solid #95989A"; // Color gris neutro
  inputEmail.style.borderBottom = "1px solid #95989A"; // Color gris neutro

  if (!nameValidation.test(inputName.value)) {
    inputName.style.borderBottom = "2px solid red";
    alert("Formato de nombre incorrecto");
    return false;
  }

  if (!emailValidation.test(inputEmail.value)) {
    inputEmail.style.borderBottom = "2px solid red";
    alert("Datos del Email incorrectos");
    return false;
  }

  if (nameValidation.test(inputName.value)) {
    inputName.style.borderBottom = "1px solid #95989A"; // Borde inferior gris si es válido
  }

  // Si el correo electrónico es válido, restablecer el borde inferior a su color original
  if (emailValidation.test(inputEmail.value)) {
    inputEmail.style.borderBottom = "1px solid #95989A"; // Borde inferior gris si es válido
  }
  
  const formulary = {
    name: inputName.value,
    email: inputEmail.value,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formulary),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la red");
      }
      return response.json();
    })
    .then((data) => {
      console.log("ÉXITO:", data);
      alert("Datos enviados correctamente");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Hubo un problema al enviar los datos");
    });
});
