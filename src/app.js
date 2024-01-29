import express from "express"
import { engine } from "express-handlebars";
import { Server } from "socket.io";

import __dirname from "./utils.js";

import routerViews from "./routes/views.router.js";

// initial configuration

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static

app.use(express.static(__dirname + "/public"));

// handlebars configuration

app.engine('handlebars', engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

// server start

const server = app.listen(8080, () => {
    console.log("Server is running")
})

// socket io

const socketServer = new Server(server)

// socketServer.on("connection", (socket) => {
    
//     // Cuando se recibe un mensaje, todos lo renderizan
//     socket.on("new-message", (newMessage) => {
//         socketServer.emit("update-messages", newMessage)
//     })

// })

// routers

app.get('/', routerViews)