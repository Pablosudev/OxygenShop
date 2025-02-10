const popUp = document.getElementById("popUp");
const buttonClose = document.getElementById("buttonClose");
const buttonEmail = document.getElementById("buttonEmail");
const input = document.getElementById("inputPopUp");
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const openPopUp = setTimeout(() => {
  popUp.showModal();
}, 5000);


buttonClose.addEventListener("click", () => {
  popUp.close();
});

buttonEmail.addEventListener("click", () => {
  event.preventDefault();

  if (!regex.test(input)) {
    alert("Introduce un correo valido");
    return;
  }

  popUp.close();

  fetch("https://jsonnplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: input.value }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error: " + response.status);
      }
      return response.json();
    })
    .then((responseData) => {
      console.log("Datos recibidos:", responseData);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

window.addEventListener("click", (event) => {
  if (
    popUp.open &&
    !popUp.contains(event.target) &&
    event.target !== buttonClose
  ) {
    popUp.close(); // Cerramos el pop-up
  }
});
