const socket = io()

let user = ""

let messageInput = document.getElementById("message-input")
// let submitMsgBtn = document.getElementById("submit-message-btn")
let chatForm = document.getElementById("chat-form")
let chat = document.getElementById("chat")

// Identificacion de usuario

Swal.fire({
  title: "Escribe tu nombre o apodo",
  input: "text",
  inputValidator: (value) => {
    if (!value) {
      return "Necesitas escribir un nombre para identificarte" // Devuelvo el mensaje de error
    }
    return false // Se identifico con exito
  },
  allowOutsideClick: false,
  confirmButtonText: 'Continuar',
  confirmButtonColor: '#47a5e7'
}).then((result) => {
  user = result.value;
});

// Socket.on

// Event listeners

chatForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let chatMsg = document.createElement("p")
    console.log(user)
    chatMsg.innerText = `${user}: ${messageInput.value}`

    chat.appendChild(chatMsg)

    messageInput.value = ""
})

