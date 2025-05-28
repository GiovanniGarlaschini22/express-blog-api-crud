// IMPORT //
import { json } from "express";
import architectures from "../data.js";

// FUNZIONI //
// funzione index //
const index = (req, res) => {
    
    res.json({
        data: architectures,
        count: architectures.length,
    });
};

// funzione show //
const show = (req, res) => {
    const architecturesId = req.params.id;
    const arch = architectures.find((curArch) => curArch.id === architecturesId);
    
    // status 404 //
    if (arch === undefined) {
        res.status(404);
        return res.json({
            error: "Opera non trovata!"
        });
    }

    res.json({
        data: arch,
    });
};

// funzione store //
const store = (req, res) => {

    const newArch = req.body;

    console.log(req);
        
    // aggiungo parseint //
    const lastId = parseInt(architectures[architectures.length - 1].id);
    console.log(lastId);
    
    
    let appendArch = {
        id: (lastId + 1).toString(),
        ...newArch
    }

    // eseguo il push per aggiungere la nuova opera //
    architectures.push(appendArch);

    // imposto status 201 //
    //res.status(201);
    res.json({
        data: appendArch,
    });
};

// funzione update //
const update = (req, res) => {
    const architecturesId = req.params.id;
    res.json({
        data: `Modifico un'opera con id ${architecturesId}`,
    });
};

// funzione destroy //
const destroy =(req, res) => {
    const architecturesId = req.params.id;
    const Index = architectures.findIndex((curArch) => curArch.id === architecturesId);

    architectures.splice(index, 1);
    
    res.sendStatus(204);
};

const architectureController = {
    index,
    show,
    store,
    update,
    destroy
};

export default architectureController;