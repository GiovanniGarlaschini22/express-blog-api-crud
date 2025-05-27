// IMPORT //
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
    res.json({
        data: arch,
    });
};

// funzione store //
const store = (req, res) => {
    const newArch = req.body;
    // aggiungo parseint //
    const lastId = parseInt(architectures[architectures.length - 1].id);
    newArch.id = (lastId + 1).toString();

    // eseguo il push per aggiungere la nuova opera //
    architectures.push(newArch);

    // imposto status 201 //
    res.status(201);
    res.json({
        data: newArch,
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