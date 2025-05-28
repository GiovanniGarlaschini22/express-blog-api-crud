// IMPORT //
import express from "express";
import architecturesRouter from "./routers/architectures.js";
import routeNotFound from "./middlewares/routeNotFound.js";
import errorHandler from "./middlewares/errorHandler.js";

// invoco funzione express //
const app = express();

// accesso cartella asset statici //
app.use(express.static("public"));
// registro il bodyparser //
app.use(express.json());

// creo la porta di accesso //
const port = 3000;

// rotte //
app.get("/", (req, res) => {
    res.json({
        data: "ecco la mia api di architettura",
    });
});

app.use("/architectures", architecturesRouter);
app.use(routeNotFound);
app.use(errorHandler);

// server in ascolto //
app.listen(port, () => {
    console.log(`"server in ascolto" ${port}`); 
});