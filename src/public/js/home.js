const socket = io()

let userName = ""

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
  userName = result.value;
});

// Socket.on

socket.on("update-messages", (newMessage) => {
  let msgContainer = document.createElement("div")
  msgContainer.classList.add("border", "border-2", "rounded-3", "p-2", "m-2")

  msgContainer.innerHTML = `<p class="m-0"><b>${newMessage.userName}</b>: ${newMessage.value}</p>`

  chat.appendChild(msgContainer)
})

// Event listeners

chatForm.addEventListener("submit", (e) => {
  e.preventDefault()

  socket.emit("new-message", {userName: userName, value: messageInput.value})
  messageInput.value = ""
})

