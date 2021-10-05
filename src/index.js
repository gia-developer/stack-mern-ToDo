const express = require("express");
const morgan = require("morgan");
const path = require("path");

const { mongoose } = require("./database");

const app = express( );

//Configuración
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Router
app.use("/api/todo", require("./routes/todo.routes"));

//Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

//Empieza el servidor
app.listen(app.get("port"), ( ) => {
    console.log(`Server on port ${ app.get("port") }`);
} );