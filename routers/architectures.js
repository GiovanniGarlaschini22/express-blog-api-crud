import express from "express";
import architectureController from "../controller/architectureController.js";

const router = express.Router();

// rotta index //
router.get("/", architectureController.index);

// rotta show //
router.get("/:id", architectureController.show);

// rotta store //
router.post("/", architectureController.store);

// rotta update //
router.put("/:id", architectureController.update);

// destroy //
router.delete("/:id", architectureController.destroy);

export default router;