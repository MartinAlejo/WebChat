import express from "express"
import { engine } from "express-handlebars";

import __dirname from "./utils.js";

import routerViews from "./routes/views.router.js";

// initial configuration

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handlebars configuration

app.engine('handlebars', engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

// server start

app.listen(8080, () => {
    console.log("Server is running")
})

// routers

app.get('/', routerViews)