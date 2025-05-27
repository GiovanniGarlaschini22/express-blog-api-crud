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
    res.json({
        data: "Aggiungi una nuova opera",
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