// IMPORT //
import express from "express";
import architecturesRouter from "./routers/architectures.js";

// invoco funzione express //
const app = express();

// creo la porta di accesso //
const port = 3000;

// rotte //
app.get("/", (req, res) => {
    res.json({
        data: "ecco la mia api di architettura",
    });
});

app.use("/architectures", architecturesRouter);

// accesso cartella asset statici //
app.use(express.static("public"));

// server in ascolto //
app.listen(port, () => {
    console.log(`"server in ascolto" ${port}`); 
});